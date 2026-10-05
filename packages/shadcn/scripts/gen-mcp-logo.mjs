import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const root = path.dirname(fileURLToPath(import.meta.url))
const pngPath = path.join(root, "../src/mcp/assets/logo.png")
const outPath = path.join(root, "../src/mcp/logo.ts")
const src = `data:image/png;base64,${fs.readFileSync(pngPath).toString("base64")}`

fs.writeFileSync(
  outPath,
  [
    "/** FarsiUI MCP server icon (favicon). */",
    "export const FARSIUI_MCP_ICON = {",
    `  src: ${JSON.stringify(src)},`,
    '  mimeType: "image/png" as const,',
    '  sizes: ["48x48"] as string[],',
    "}",
    "",
  ].join("\n")
)

console.log(`wrote ${outPath}`)
