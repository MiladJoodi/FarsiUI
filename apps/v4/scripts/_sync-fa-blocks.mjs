/**
 * Sync Persian/RTL mirrored blocks from base → radix/aria.
 * Strategy: copy base file content, rewrite import paths, keep target-specific
 * files that don't exist in base (search-form etc.) for separate patching.
 */
import fs from "fs"
import path from "path"

const ROOT = "registry/bases"
const MIRROR_RELATIVE = [
  // login
  "login-01/page.tsx",
  "login-01/components/login-form.tsx",
  "login-02/page.tsx",
  "login-02/components/login-form.tsx",
  "login-03/page.tsx",
  "login-03/components/login-form.tsx",
  "login-04/page.tsx",
  "login-04/components/login-form.tsx",
  "login-05/page.tsx",
  "login-05/components/login-form.tsx",
  // signup
  "signup-01/page.tsx",
  "signup-01/components/signup-form.tsx",
  "signup-02/page.tsx",
  "signup-02/components/signup-form.tsx",
  "signup-03/page.tsx",
  "signup-03/components/signup-form.tsx",
  "signup-04/page.tsx",
  "signup-04/components/signup-form.tsx",
  "signup-05/page.tsx",
  "signup-05/components/signup-form.tsx",
  // sidebar pages (app-sidebar handled carefully)
  "sidebar-01/page.tsx",
  "sidebar-02/page.tsx",
  "sidebar-03/page.tsx",
  "sidebar-04/page.tsx",
  "sidebar-05/page.tsx",
  "sidebar-06/page.tsx",
  // dashboard-01 (data-table may need merge — still copy FA content)
  "dashboard-01/page.tsx",
  "dashboard-01/data.json",
  "dashboard-01/components/site-header.tsx",
  "dashboard-01/components/section-cards.tsx",
  "dashboard-01/components/nav-main.tsx",
  "dashboard-01/components/nav-documents.tsx",
  "dashboard-01/components/nav-user.tsx",
  "dashboard-01/components/chart-area-interactive.tsx",
  "dashboard-01/components/app-sidebar.tsx",
  // data-table.tsx: merge separately (checkbox/select API diffs)
]

function rewriteImports(src, target) {
  return src
    .replaceAll("@/registry/bases/base/", `@/registry/bases/${target}/`)
    .replaceAll('"@/registry/bases/base/', `"@/registry/bases/${target}/`)
    .replaceAll("'@/registry/bases/base/", `'@/registry/bases/${target}/`)
}

function syncFile(rel, target) {
  const from = path.join(ROOT, "base", "blocks", rel)
  const to = path.join(ROOT, target, "blocks", rel)
  if (!fs.existsSync(from)) {
    console.log("SKIP missing base", rel)
    return
  }
  if (!fs.existsSync(path.dirname(to))) {
    fs.mkdirSync(path.dirname(to), { recursive: true })
  }
  let content = fs.readFileSync(from, "utf8")
  content = rewriteImports(content, target)
  fs.writeFileSync(to, content)
  console.log("OK", target, rel)
}

function syncSidebarApp(target) {
  // For sidebars where base has monolithic app-sidebar, copy it.
  for (const id of [
    "sidebar-01",
    "sidebar-02",
    "sidebar-03",
    "sidebar-04",
    "sidebar-05",
    "sidebar-06",
  ]) {
    const rel = `${id}/components/app-sidebar.tsx`
    const from = path.join(ROOT, "base", "blocks", rel)
    const to = path.join(ROOT, target, "blocks", rel)
    if (!fs.existsSync(from) || !fs.existsSync(to)) {
      console.log("SKIP sidebar", target, rel)
      continue
    }
    let content = fs.readFileSync(from, "utf8")
    content = rewriteImports(content, target)
    fs.writeFileSync(to, content)
    console.log("OK", target, rel)
  }
}

function syncRegistryDescriptions(target) {
  const from = path.join(ROOT, "base", "blocks", "_registry.ts")
  const to = path.join(ROOT, target, "blocks", "_registry.ts")
  if (!fs.existsSync(from) || !fs.existsSync(to)) return

  const baseSrc = fs.readFileSync(from, "utf8")
  let targetSrc = fs.readFileSync(to, "utf8")

  // Extract description map for names that exist in both
  const descRe =
    /name:\s*"([^"]+)"[\s\S]*?description:\s*"((?:\\.|[^"\\])*)"/g
  const baseDescs = new Map()
  let m
  while ((m = descRe.exec(baseSrc))) {
    baseDescs.set(m[1], m[2])
  }

  // Replace descriptions in target for matching names
  targetSrc = targetSrc.replace(
    /(name:\s*"([^"]+)"[\s\S]*?description:\s*")((?:\\.|[^"\\])*)(")/g,
    (full, pre, name, _old, post) => {
      if (!baseDescs.has(name)) return full
      return pre + baseDescs.get(name) + post
    }
  )
  fs.writeFileSync(to, targetSrc)
  console.log("OK", target, "_registry.ts descriptions")
}

function persianizeExtraHelpers(target) {
  const patches = [
    {
      file: "sidebar-01/components/search-form.tsx",
      reps: [
        [/placeholder="Search"/g, 'placeholder="جستجو"'],
        [/placeholder="Search\.\.\."/g, 'placeholder="جستجو..."'],
        [/className="pl-8"/g, 'className="ps-8"'],
        [/left-2/g, "start-2"],
        [/ml-auto/g, "ms-auto"],
      ],
    },
    {
      file: "sidebar-02/components/search-form.tsx",
      reps: [
        [/placeholder="Search"/g, 'placeholder="جستجو"'],
        [/placeholder="Search\.\.\."/g, 'placeholder="جستجو..."'],
        [/className="pl-8"/g, 'className="ps-8"'],
        [/left-2/g, "start-2"],
        [/ml-auto/g, "ms-auto"],
      ],
    },
    {
      file: "sidebar-05/components/search-form.tsx",
      reps: [
        [/placeholder="Search"/g, 'placeholder="جستجو"'],
        [/placeholder="Search\.\.\."/g, 'placeholder="جستجو..."'],
        [/className="pl-8"/g, 'className="ps-8"'],
        [/left-2/g, "start-2"],
        [/ml-auto/g, "ms-auto"],
      ],
    },
    {
      file: "sidebar-01/components/version-switcher.tsx",
      reps: [
        [/ml-auto/g, "ms-auto"],
        [/Select a version/g, "انتخاب نسخه"],
      ],
    },
    {
      file: "sidebar-02/components/version-switcher.tsx",
      reps: [
        [/ml-auto/g, "ms-auto"],
        [/Select a version/g, "انتخاب نسخه"],
      ],
    },
    {
      file: "sidebar-06/components/nav-main.tsx",
      reps: [[/ml-auto/g, "ms-auto"]],
    },
    {
      file: "sidebar-06/components/sidebar-opt-in-form.tsx",
      reps: [
        [/Subscribe to our newsletter/g, "عضویت در خبرنامه"],
        [/Opt in to receive updates/gi, "برای دریافت به‌روزرسانی‌ها عضو شوید"],
        [/Subscribe/g, "عضویت"],
        [/ml-auto/g, "ms-auto"],
      ],
    },
  ]

  for (const { file, reps } of patches) {
    const p = path.join(ROOT, target, "blocks", file)
    if (!fs.existsSync(p)) continue
    let src = fs.readFileSync(p, "utf8")
    let changed = false
    for (const [re, to] of reps) {
      const next = src.replace(re, to)
      if (next !== src) {
        changed = true
        src = next
      }
    }
    if (changed) {
      fs.writeFileSync(p, src)
      console.log("PATCH", target, file)
    }
  }
}

for (const target of ["radix", "aria"]) {
  console.log("\n===", target, "===")
  for (const rel of MIRROR_RELATIVE) {
    syncFile(rel, target)
  }
  syncSidebarApp(target)
  syncRegistryDescriptions(target)
  persianizeExtraHelpers(target)
}

console.log("\nDone.")
