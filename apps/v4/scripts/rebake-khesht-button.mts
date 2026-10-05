import { readFileSync, writeFileSync, existsSync } from "fs"
import path from "path"

import {
  createStyleMap,
  mergeStyleMaps,
} from "../../../packages/shadcn/src/styles/create-style-map"
import { transformStyle } from "../../../packages/shadcn/src/styles/transform"

const v4 = path.resolve(import.meta.dirname, "..")

const baseCss = readFileSync(
  path.join(v4, "registry/styles/style-khesht.css"),
  "utf8"
)
const tokensCss = readFileSync(
  path.join(v4, "registry/styles/khesht-tokens.css"),
  "utf8"
)
const styleMap = mergeStyleMaps(
  createStyleMap(baseCss),
  createStyleMap(tokensCss)
)

const source = readFileSync(
  path.join(v4, "registry/bases/base/ui/button.tsx"),
  "utf8"
)
let out = await transformStyle(source, { styleMap })
out = out.replaceAll("@/registry/bases/base/", "@/registry/base-khesht/")

const hasActive = out.includes("active:[transform:var(--press)]")
const hasPressShadow =
  out.includes("active:!shadow-[var(--shadow-press)]") ||
  out.includes("active:shadow-[var(--shadow-press)]")
const badRest = /(?<!active:)\[transform:var\(--press\)\]/.test(out)

console.log({ hasActive, hasPressShadow, badRest })

const targets = [
  path.join(v4, "public/r/styles/base-khesht/button.json"),
  path.join(v4, "registry/base-khesht/ui/button.tsx"),
]

for (const target of targets) {
  if (!existsSync(target)) {
    console.log("skip missing", target)
    continue
  }
  if (target.endsWith(".json")) {
    const item = JSON.parse(readFileSync(target, "utf8"))
    if (item.files?.[0]) {
      item.files[0].content = out
      writeFileSync(target, JSON.stringify(item, null, 2) + "\n")
      console.log("updated json", target)
    }
  } else {
    writeFileSync(target, out)
    console.log("updated tsx", target)
  }
}
