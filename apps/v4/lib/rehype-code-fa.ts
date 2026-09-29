import { visit } from "unist-util-visit"

/** Arabic / Persian script + ZWNJ/ZWJ — wrapped so code can keep mono for Latin. */
export const PERSIAN_RUN =
  /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u200C\u200D]+/g

interface HastNode {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function hasPrettyCodeFigure(node: HastNode) {
  const props = node.properties
  if (!props) return false
  return (
    "data-rehype-pretty-code-figure" in props ||
    props.dataRehypePrettyCodeFigure !== undefined
  )
}

function isCodeFaSpan(node: HastNode) {
  if (node.tagName !== "span") return false
  const props = node.properties ?? {}
  const cn = props.className ?? props.class
  if (Array.isArray(cn)) return cn.includes("code-fa")
  if (typeof cn === "string") return cn.split(/\s+/).includes("code-fa")
  return false
}

function wrapPersianInTextNode(
  node: HastNode,
  index: number,
  parent: HastNode
) {
  const value = node.value
  if (!value) return

  PERSIAN_RUN.lastIndex = 0
  if (!PERSIAN_RUN.test(value)) {
    PERSIAN_RUN.lastIndex = 0
    return
  }
  PERSIAN_RUN.lastIndex = 0

  const next: HastNode[] = []
  let lastIndex = 0

  for (const match of value.matchAll(PERSIAN_RUN)) {
    const start = match.index ?? 0
    if (start > lastIndex) {
      next.push({ type: "text", value: value.slice(lastIndex, start) })
    }
    next.push({
      type: "element",
      tagName: "span",
      properties: { className: ["code-fa"] },
      children: [{ type: "text", value: match[0] }],
    })
    lastIndex = start + match[0].length
  }

  if (lastIndex < value.length) {
    next.push({ type: "text", value: value.slice(lastIndex) })
  }

  if (!parent.children) return
  parent.children.splice(index, 1, ...next)
  return index + next.length
}

/**
 * After rehype-pretty-code, wrap Persian/Arabic runs in `span.code-fa`
 * so monospace code blocks can use the UI sans font for those glyphs.
 */
export function rehypeCodeFa() {
  return (tree: HastNode) => {
    visit(tree, "element", (node: HastNode) => {
      if (!hasPrettyCodeFigure(node)) {
        return
      }

      visit(
        node,
        "text",
        (textNode: HastNode, index: number | undefined, parent: HastNode) => {
          if (index == null || !parent || parent.type !== "element") {
            return
          }
          if (isCodeFaSpan(parent)) {
            return
          }
          return wrapPersianInTextNode(textNode, index, parent)
        }
      )
    })
  }
}
