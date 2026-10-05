/**
 * Rebake button (and verify press/hover variants) for all token-sidecar
 * Design Systems across base/radix/aria registries + public/r JSON.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"

import {
  createStyleMap,
  mergeStyleMaps,
} from "../../../packages/shadcn/src/styles/create-style-map"
import { transformStyle } from "../../../packages/shadcn/src/styles/transform"

const v4 = path.resolve(import.meta.dirname, "..")
const STYLES = ["glass", "rose", "nili", "khesht"] as const
const BASES = ["base", "radix", "aria"] as const

type Report = {
  style: string
  ok: boolean
  hasActiveTransform: boolean
  hasActiveShadowPress: boolean
  badRestingTransform: boolean
  hasHoverGhost: boolean
}

function loadStyleMap(style: string) {
  const styleCss = readFileSync(
    path.join(v4, `registry/styles/style-${style}.css`),
    "utf8"
  )
  const tokensCss = readFileSync(
    path.join(v4, `registry/styles/${style}-tokens.css`),
    "utf8"
  )
  return mergeStyleMaps(createStyleMap(styleCss), createStyleMap(tokensCss))
}

function verifyMap(style: string, styleMap: Record<string, string>): Report {
  const def = styleMap["cn-button-variant-default"] ?? ""
  const ghost = styleMap["cn-button-variant-ghost"] ?? ""
  const hasActiveTransform = def.includes("active:[transform:")
  const hasActiveShadowPress =
    def.includes("active:!shadow-[var(--shadow-press)]") ||
    def.includes("active:shadow-[var(--shadow-press)]")
  // Resting must not carry press/scale transform from :active rules.
  const badRestingTransform = /(?<!active:)\[transform:/.test(def)
  const hasHoverGhost = ghost.includes("hover:")
  const ok =
    hasActiveShadowPress && hasActiveTransform && !badRestingTransform

  return {
    style,
    ok,
    hasActiveTransform,
    hasActiveShadowPress,
    badRestingTransform,
    hasHoverGhost,
  }
}

async function rebakeButton(
  base: string,
  style: string,
  styleMap: Record<string, string>
) {
  const styleName = `${base}-${style}`
  const sourcePath = path.join(v4, `registry/bases/${base}/ui/button.tsx`)
  if (!existsSync(sourcePath)) {
    console.log(`skip missing source ${sourcePath}`)
    return
  }

  const source = readFileSync(sourcePath, "utf8")
  let out = await transformStyle(source, { styleMap })
  out = out.replaceAll(
    `@/registry/bases/${base}/`,
    `@/registry/${styleName}/`
  )

  const stylesUi = path.join(v4, `styles/${styleName}/ui`)
  mkdirSync(stylesUi, { recursive: true })
  writeFileSync(path.join(stylesUi, "button.tsx"), out)

  const registryUi = path.join(v4, `registry/${styleName}/ui`)
  if (existsSync(registryUi) || existsSync(path.join(v4, `registry/${styleName}`))) {
    mkdirSync(registryUi, { recursive: true })
    writeFileSync(path.join(registryUi, "button.tsx"), out)
  }

  const publicDir = path.join(v4, `public/r/styles/${styleName}`)
  mkdirSync(publicDir, { recursive: true })
  const jsonPath = path.join(publicDir, "button.json")
  if (existsSync(jsonPath)) {
    const item = JSON.parse(readFileSync(jsonPath, "utf8"))
    if (item.files?.[0]) {
      item.files[0].content = out
      writeFileSync(jsonPath, JSON.stringify(item, null, 2) + "\n")
    }
  } else {
    const novaPath = path.join(v4, "public/r/styles/base-nova/button.json")
    if (existsSync(novaPath)) {
      const nova = JSON.parse(readFileSync(novaPath, "utf8"))
      writeFileSync(
        jsonPath,
        JSON.stringify(
          {
            ...nova,
            files: [
              {
                path: `registry/${styleName}/ui/button.tsx`,
                content: out,
                type: nova.files?.[0]?.type ?? "registry:ui",
              },
            ],
          },
          null,
          2
        ) + "\n"
      )
    }
  }

  const ok =
    out.includes("active:[transform:") &&
    out.includes("active:") &&
    !/(?<!active:)\[transform:/.test(
      // Only flag resting transform on the default variant line if present
      out.match(/default:\s*"([^"]+)"/)?.[1] ??
        out.match(/default:\s*\n\s*"([^"]+)"/)?.[1] ??
        ""
    )
  console.log(`  ${styleName}: ${ok ? "ok" : "FAIL"}`)
}

const reports: Report[] = []

for (const style of STYLES) {
  console.log(`\n== ${style} ==`)
  const styleMap = loadStyleMap(style)
  const report = verifyMap(style, styleMap)
  reports.push(report)
  console.log(report)

  for (const base of BASES) {
    await rebakeButton(base, style, styleMap)
  }
}

const failed = reports.filter((r) => !r.ok)
console.log("\n=== SUMMARY ===")
console.log(
  `styles: ${reports.length - failed.length}/${reports.length} map checks passed`
)
if (failed.length) {
  console.error("FAILED", failed.map((f) => f.style).join(", "))
  process.exit(1)
}
console.log("All token-sidecar Design Systems button bake OK.")
