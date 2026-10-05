import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const root = path.dirname(fileURLToPath(import.meta.url))
const png192 = path.join(root, "../src/mcp/assets/logo-192.png")
const pluginAssets = path.join(root, "../../../.cursor-plugin/assets")

const b64 = fs.readFileSync(png192).toString("base64")
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <image href="data:image/png;base64,${b64}" width="192" height="192"/>
</svg>
`

fs.mkdirSync(pluginAssets, { recursive: true })
fs.writeFileSync(path.join(pluginAssets, "icon.svg"), svg)
fs.copyFileSync(png192, path.join(pluginAssets, "logo.png"))
console.log("wrote plugin icon.svg + logo.png")
