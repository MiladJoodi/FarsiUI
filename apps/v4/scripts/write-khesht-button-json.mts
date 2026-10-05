import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs"
import path from "path"

const v4 = path.resolve(import.meta.dirname, "..")
const buttonTsx = path.join(v4, "styles/base-khesht/ui/button.tsx")
const content = readFileSync(buttonTsx, "utf8")

if (!content.includes("active:[transform:var(--press)]")) {
  console.error("styles/base-khesht/ui/button.tsx missing active press bake")
  process.exit(1)
}

const outDir = path.join(v4, "public/r/styles/base-khesht")
mkdirSync(outDir, { recursive: true })

const jsonPath = path.join(outDir, "button.json")
let item: {
  $schema?: string
  name: string
  dependencies?: string[]
  files: Array<{ path: string; content: string; type?: string }>
  type?: string
}

if (existsSync(jsonPath)) {
  item = JSON.parse(readFileSync(jsonPath, "utf8"))
  if (item.files?.[0]) {
    item.files[0].content = content
  } else {
    item.files = [
      {
        path: "registry/base-khesht/ui/button.tsx",
        content,
        type: "registry:ui",
      },
    ]
  }
} else {
  // Mirror a nova button.json shell if present.
  const novaPath = path.join(v4, "public/r/styles/base-nova/button.json")
  const nova = JSON.parse(readFileSync(novaPath, "utf8"))
  item = {
    ...nova,
    files: [
      {
        path: "registry/base-khesht/ui/button.tsx",
        content,
        type: nova.files?.[0]?.type ?? "registry:ui",
      },
    ],
  }
}

writeFileSync(jsonPath, JSON.stringify(item, null, 2) + "\n")
console.log("wrote", jsonPath)
console.log(
  "ok",
  content.includes("active:[transform:var(--press)]"),
  content.includes("active:!shadow-[var(--shadow-press)]")
)
