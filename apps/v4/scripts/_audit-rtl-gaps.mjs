import fs from "fs"
import path from "path"

const root = "registry/bases"
const components = [
  "popover",
  "sheet",
  "tooltip",
  "combobox",
  "alert-dialog",
  "accordion",
  "menubar",
  "navigation-menu",
  "sidebar",
  "context-menu",
  "calendar",
  "pagination",
  "carousel",
  "breadcrumb",
  "spinner",
  "progress",
  "dialog",
  "hover-card",
  "dropdown-menu",
  "drawer",
  "select",
  "command",
  "toast",
  "sonner",
]

const portalLike = [
  "popover",
  "sheet",
  "tooltip",
  "combobox",
  "alert-dialog",
  "accordion",
  "menubar",
  "navigation-menu",
  "context-menu",
  "sidebar",
  "dialog",
  "hover-card",
  "dropdown-menu",
  "drawer",
  "select",
]

for (const base of ["base", "radix", "aria"]) {
  console.log("\n==", base)
  for (const c of components) {
    const f = path.join(root, base, "ui", `${c}.tsx`)
    if (!fs.existsSync(f)) {
      console.log("  MISSING", c)
      continue
    }
    const src = fs.readFileSync(f, "utf8")
    const flags = {
      dirRtl: /dir\s*=\s*"rtl"|dir=\{\s*"rtl"\s*\}|dir = "rtl"/.test(src),
      dirBare: /dir=\{dir\}/.test(src) && !/dir\s*=\s*"rtl"/.test(src) && !/dir = "rtl"/.test(src),
      closeEn: /sr-only">Close</.test(src) || />Close</.test(src),
      closeFa: /بستن/.test(src),
      prevEn: /Previous/.test(src),
      loadingEn: /aria-label="Loading"/.test(src),
      persianCal: /persian|fa-IR|react-day-picker\/persian/.test(src),
    }
    const issues = []
    if (flags.dirBare) issues.push("dir={dir} NO DEFAULT")
    if (portalLike.includes(c) && !flags.dirRtl) issues.push("no dir=rtl")
    if (["sheet", "alert-dialog", "dialog"].includes(c) && flags.closeEn && !flags.closeFa)
      issues.push("Close EN")
    if (c === "pagination" && flags.prevEn) issues.push("Previous/Next EN")
    if (c === "carousel" && /Previous slide|Next slide/.test(src)) issues.push("slide EN")
    if (c === "spinner" && flags.loadingEn) issues.push("Loading EN")
    if (c === "calendar" && !flags.persianCal) issues.push("no persian cal")
    if (c === "breadcrumb" && /More/.test(src) && !/بیشتر/.test(src)) issues.push("More EN")
    if (issues.length) console.log(" ", c, "→", issues.join(", "))
  }
}
