import postcss from "postcss"
import selectorParser, {
  type ClassName,
  type Selector as SelectorNodeRoot,
} from "postcss-selector-parser"
import { z } from "zod"

const CN_PREFIX = "cn-"

export const styleMapSchema = z.record(
  z.string().startsWith(CN_PREFIX),
  z.string()
)

export type StyleMap = z.infer<typeof styleMapSchema>

/** CSS props we convert to Tailwind arbitrary utilities during bake. */
const DECL_TO_UTILITY: Record<
  string,
  (value: string) => string | null
> = {
  "box-shadow": (value) => `shadow-[${toArbitraryValue(value)}]`,
  "background-color": (value) => `bg-[${toArbitraryValue(value)}]`,
  "border-color": (value) => `border-[${toArbitraryValue(value)}]`,
  "border-radius": (value) => `rounded-[${toArbitraryValue(value)}]`,
  border: (value) => `[border:${toArbitraryValue(value)}]`,
  "border-width": (value) => `border-[length:${toArbitraryValue(value)}]`,
  "border-style": (value) => {
    if (
      value === "solid" ||
      value === "dashed" ||
      value === "dotted" ||
      value === "none"
    ) {
      return `border-${value}`
    }
    return `[border-style:${toArbitraryValue(value)}]`
  },
  color: (value) => `text-[${toArbitraryValue(value)}]`,
  "font-weight": (value) => {
    const map: Record<string, string> = {
      "100": "font-thin",
      "200": "font-extralight",
      "300": "font-light",
      "400": "font-normal",
      "500": "font-medium",
      "600": "font-semibold",
      "700": "font-bold",
      "800": "font-extrabold",
      "900": "font-black",
      bold: "font-bold",
      normal: "font-normal",
    }
    return map[value] ?? `font-[${toArbitraryValue(value)}]`
  },
  "backdrop-filter": (value) =>
    `[backdrop-filter:${toArbitraryValue(value)}]`,
  "background-attachment": (value) => {
    if (value === "fixed") return "bg-fixed"
    if (value === "local") return "bg-local"
    if (value === "scroll") return "bg-scroll"
    return `[background-attachment:${toArbitraryValue(value)}]`
  },
  isolation: (value) => {
    if (value === "isolate") return "isolate"
    if (value === "auto") return "isolation-auto"
    return null
  },
  overflow: (value) => {
    if (
      value === "visible" ||
      value === "hidden" ||
      value === "scroll" ||
      value === "auto" ||
      value === "clip"
    ) {
      return `overflow-${value}`
    }
    return null
  },
  transform: (value) => `[transform:${toArbitraryValue(value)}]`,
  transition: (value) => `transition-[${toArbitraryValue(value)}]`,
  opacity: (value) => {
    if (value === "1") return "opacity-100"
    if (value === "0") return "opacity-0"
    return `opacity-[${toArbitraryValue(value)}]`
  },
  filter: (value) => {
    if (value === "none") return "filter-none"
    return `filter-[${toArbitraryValue(value)}]`
  },
}

export function createStyleMap(input: string) {
  const root = postcss.parse(input)

  const result: Record<string, string> = {}

  root.walkRules((rule) => {
    const selectors = rule.selectors ?? []

    if (selectors.length === 0) {
      return
    }

    const tailwindClasses = extractTailwindClasses(rule)

    if (!tailwindClasses) {
      return
    }

    for (const selector of selectors) {
      const normalizedSelector = normalizeSelector(selector)

      selectorParser((selectorsRoot) => {
        selectorsRoot.each((sel) => {
          const targetClass = findSubjectClass(sel)

          if (!targetClass) {
            return
          }

          const className = targetClass.value

          if (!className.startsWith(CN_PREFIX)) {
            return
          }

          // Later rules in the same file prepend (existing bake contract).
          result[className] = result[className]
            ? `${tailwindClasses} ${result[className]}`
            : tailwindClasses
        })
      }).processSync(normalizedSelector)
    }
  })

  return styleMapSchema.parse(result)
}

/**
 * Overlay token / sidecar recipes onto a base style map.
 * Overlay classes are appended so they win with `cn` / tailwind-merge.
 */
export function mergeStyleMaps(base: StyleMap, overlay: StyleMap): StyleMap {
  const result: Record<string, string> = { ...base }

  for (const [className, classes] of Object.entries(overlay)) {
    result[className] = result[className]
      ? `${result[className]} ${classes}`
      : classes
  }

  return styleMapSchema.parse(result)
}

function normalizeSelector(selector: string) {
  return selector.replace(/\s*&\s*/g, "").trim()
}

function extractTailwindClasses(rule: postcss.Rule) {
  const classes: string[] = []

  for (const node of rule.nodes || []) {
    if (node.type === "atrule" && node.name === "apply") {
      const value = node.params.trim()
      if (value) {
        classes.push(value)
      }
      continue
    }

    if (node.type === "decl") {
      // Skip vendor-prefixed duplicates; standard props cover bake.
      if (node.prop.startsWith("-webkit-") || node.prop.startsWith("-moz-")) {
        continue
      }

      const toUtility = DECL_TO_UTILITY[node.prop]
      if (!toUtility) {
        continue
      }

      const utility = toUtility(node.value.trim())
      if (utility) {
        // Preserve !important from token sidecars (e.g. khesht brick fills).
        classes.push(node.important ? `!${utility}` : utility)
      }
    }
  }

  if (classes.length === 0) {
    return null
  }

  return classes.join(" ")
}

/** Tailwind arbitrary-value escaping: spaces → underscores. */
function toArbitraryValue(value: string) {
  return value.replace(/\s+/g, "_")
}

function findSubjectClass(selector: SelectorNodeRoot) {
  const classNodes: ClassName[] = []

  selector.walkClasses((classNode) => {
    if (classNode.value.startsWith(CN_PREFIX)) {
      classNodes.push(classNode)
    }
  })

  if (classNodes.length === 0) {
    return null
  }

  return classNodes[classNodes.length - 1]
}
