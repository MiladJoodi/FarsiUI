import { loadStyleInstallTokensFromFile } from "../registry/extract-style-install-tokens.node"

const t = loadStyleInstallTokensFromFile("khesht")
const light = t?.light ?? {}
const keys = Object.keys(light).filter(
  (k) => k.includes("shadow") || k.includes("press")
)
console.log(keys.join(","))
console.log("press=", light["press"] ?? light["--press"])
console.log("shadow-press=", light["shadow-press"] ?? light["--shadow-press"])
console.log("shadow-control=", light["shadow-control"] ?? light["--shadow-control"])
