import { isComponentsDocsPath } from "@/lib/docs"
import { showMcpDocs } from "@/lib/flags"
import {
  getCurrentBase,
  getPagesFromFolder,
  type PageTreeFolder,
} from "@/lib/page-tree"
import type { source } from "@/lib/source"

export const DOCS_TOP_LEVEL_SECTIONS = [
  { name: "مقدمه", href: "/docs" },
  { name: "نصب", href: "/docs/installation" },
  { name: "CLI", href: "/docs/cli" },
  { name: "سرور MCP", href: "/docs/mcp" },
] as const

const EXCLUDED_SECTIONS = ["installation", "dark-mode", "changelog", "rtl"]

export type DocsNavItem = {
  url: string
  name: string
}

function isComponentsFolder(item: PageTreeFolder) {
  return item.$id === "components" || String(item.name) === "کامپوننت‌ها"
}

/** Pages that must never appear in main-docs prev/next (or leak from root links). */
export function isExcludedFromMainNav(url: string) {
  if (!url || url === "/llms.txt" || url.startsWith("http")) return true
  if (url === "/docs" || url === "/docs/new") return true
  if (url === "/docs/rtl" || url.startsWith("/docs/rtl/")) return true
  if (url.startsWith("/docs/dark-mode")) return true
  if (url.startsWith("/docs/changelog")) return true
  return false
}

/** Flat page order matching the main docs sidebar (بخش‌ها + groups). */
export function getMainDocsNavSequence(
  tree: typeof source.pageTree
): DocsNavItem[] {
  const seen = new Set<string>()
  const sequence: DocsNavItem[] = []

  for (const section of DOCS_TOP_LEVEL_SECTIONS) {
    if (!showMcpDocs && section.href.includes("/mcp")) continue
    if (seen.has(section.href)) continue
    seen.add(section.href)
    sequence.push({ url: section.href, name: section.name })
  }

  for (const item of tree.children) {
    if (item.type !== "folder") continue
    if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) continue
    if (isComponentsFolder(item)) continue

    const pages = getPagesFromFolder(item, "base")
    for (const page of pages) {
      if (!showMcpDocs && page.url.includes("/mcp")) continue
      if (isExcludedFromMainNav(page.url) || seen.has(page.url)) continue
      // Skip pages already covered by top-level sections (cli, mcp, …).
      if (
        DOCS_TOP_LEVEL_SECTIONS.some(
          (section) =>
            section.href !== "/docs" &&
            (page.url === section.href ||
              page.url.startsWith(`${section.href}/`))
        )
      ) {
        continue
      }
      seen.add(page.url)
      sequence.push({ url: page.url, name: String(page.name) })
    }
  }

  return sequence
}

/** Flat page order matching the components sidebar for the active base. */
export function getComponentsDocsNavSequence(
  tree: typeof source.pageTree,
  pathname: string
): DocsNavItem[] {
  const currentBase = getCurrentBase(pathname)
  const componentsFolder = tree.children.find(
    (item): item is PageTreeFolder =>
      item.type === "folder" && isComponentsFolder(item)
  )

  if (!componentsFolder) return []

  return getPagesFromFolder(componentsFolder, currentBase)
    .filter((page) => !isExcludedFromMainNav(page.url))
    .map((page) => ({ url: page.url, name: String(page.name) }))
}

export function findDocsNeighbour(
  tree: typeof source.pageTree,
  url: string
): {
  previous: DocsNavItem | null
  next: DocsNavItem | null
} {
  const sequence = isComponentsDocsPath(url)
    ? getComponentsDocsNavSequence(tree, url)
    : getMainDocsNavSequence(tree)

  const index = sequence.findIndex((item) => item.url === url)
  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: index > 0 ? sequence[index - 1]! : null,
    next: index < sequence.length - 1 ? sequence[index + 1]! : null,
  }
}
