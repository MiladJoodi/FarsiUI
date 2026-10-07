import fs from "node:fs"

const p = new URL("../lib/skills-data.ts", import.meta.url)
let s = fs.readFileSync(p, "utf8")

const map = {
  "persian-conversational": "writing",
  "persian-formal": "writing",
  "persian-ui-copy": "writing",
  "persian-seo": "web",
  "open-graph-social-preview": "web",
  "persian-rtl-ui": "persian-product",
  "jalali-calendar": "persian-product",
  "iran-validation": "persian-product",
  "persian-typography": "persian-product",
  "agents-md-persian": "ai",
  "ui-craft-rules": "ai",
  "frontend-design": "ai",
  "mcp-builder": "ai",
  "find-skills": "ai",
  "vercel-react-best-practices": "ai",
  "improve-codebase-architecture": "ai",
  "grill-me": "ai",
  "parspack-s3-upload": "integrations",
  "zarinpal-payment": "integrations",
  "nextjs-multi-design-system": "web",
  "rtl-data-visualization": "web",
  "component-registry-cli": "ui-library",
  "ui-library-mcp": "ai",
}

s = s.replace(/\n\s*category:\s*"[a-z-]+",/g, "")

for (const [slug, cat] of Object.entries(map)) {
  const re = new RegExp(`(slug:\\s*"${slug}",)`)
  if (!re.test(s)) {
    console.log("MISSING", slug)
    continue
  }
  s = s.replace(re, `$1\n    category: "${cat}",`)
  console.log("ok", slug, cat)
}

fs.writeFileSync(p, s)
