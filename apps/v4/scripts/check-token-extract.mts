import { readFileSync } from "fs"
import path from "path"
import { extractStyleInstallTokensFromCss } from "../registry/extract-style-install-tokens"

const style = process.argv[2] ?? "khesht"
const css = readFileSync(
  path.join(process.cwd(), `registry/styles/${style}-tokens.css`),
  "utf8"
)
const tokens = extractStyleInstallTokensFromCss(css, style)
console.log(
  JSON.stringify(
    {
      style,
      lightPrimary: tokens.light.primary,
      lightSurface: tokens.light.surface,
      lightShadowControl: tokens.light["shadow-control"],
      lightLine: tokens.light.line,
      darkPrimary: tokens.dark.primary,
      darkSurface: tokens.dark.surface,
      lightKeys: Object.keys(tokens.light).length,
      darkKeys: Object.keys(tokens.dark).length,
    },
    null,
    2
  )
)
