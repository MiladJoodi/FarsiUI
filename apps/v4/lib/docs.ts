export const PAGES_NEW = [
  "/docs/changelog",
  "/docs/changelog/2026-09-farsiui-docs",
  "/docs/components/radix/questionnaire",
  "/docs/components/base/questionnaire",
  "/docs/components/aria/questionnaire",
  "/docs/react/questionnaire",
]

export const PAGES_UPDATED = []

/** True only for `/docs/components` and `/docs/components/*` — not `components-json`, etc. */
export function isComponentsDocsPath(pathname: string) {
  return (
    pathname === "/docs/components" || pathname.startsWith("/docs/components/")
  )
}

/** Split `"فارسی (English)"` titles into sides for UI. */
export function splitDocTitle(title: string) {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  if (!match) {
    return { fa: title, en: null as string | null }
  }
  return { fa: match[1].trim(), en: match[2].trim() }
}
