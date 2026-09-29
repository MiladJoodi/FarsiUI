export const PAGES_NEW = [
  "/docs/changelog",
  "/docs/changelog/2026-08-questionnaire",
  "/docs/registry/dynamic-search",
  "/docs/components/radix/questionnaire",
  "/docs/components/base/questionnaire",
  "/docs/components/aria/questionnaire",
  "/docs/react/questionnaire",
  "/docs/registry/health",
]

export const PAGES_UPDATED = []

/** Split `"فارسی (English)"` titles into sides for UI. */
export function splitDocTitle(title: string) {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/)
  if (!match) {
    return { fa: title, en: null as string | null }
  }
  return { fa: match[1].trim(), en: match[2].trim() }
}
