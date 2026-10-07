import type { MetadataRoute } from "next"

import { getBlocksCategorySlugs } from "@/lib/blocks-nav"
import { getSkillSlugs } from "@/lib/skills-data"

/** Always the public origin — never rely on mis-set env for sitemap locs. */
const SITE_ORIGIN = "https://farsiui.ir"

const chartTypes = ["area", "bar", "line", "pie", "radar", "radial", "tooltip"]

const staticRoutes = [
  "/",
  "/blocks",
  "/colors",
  "/charts",
  "/skills",
  "/skills/install",
  "/demos",
  "/examples",
  "/docs",
  "/docs/installation",
  "/docs/components",
  "/docs/mcp",
  "/docs/changelog",
  "/contact",
]

function isIndexableDocsUrl(url: string) {
  if (!url.startsWith("/docs")) return false
  if (url.startsWith("/docs/components/radix/")) return false
  if (url.startsWith("/docs/components/aria/")) return false
  return true
}

function toAbsolute(path: string): string | null {
  if (!path || path.includes("?") || path.includes("#")) return null
  const normalized = path.startsWith("/") ? path : `/${path}`
  try {
    return new URL(normalized, `${SITE_ORIGIN}/`).toString()
  } catch {
    return null
  }
}

function toSitemapEntries(paths: string[]): MetadataRoute.Sitemap {
  const seen = new Set<string>()
  const entries: MetadataRoute.Sitemap = []
  for (const path of paths) {
    const url = toAbsolute(path)
    if (!url || seen.has(url)) continue
    seen.add(url)
    entries.push({ url })
  }
  return entries
}

function collectPaths(): string[] {
  const urls = [...staticRoutes]

  try {
    for (const slug of getBlocksCategorySlugs()) {
      if (slug) urls.push(`/blocks/${slug}`)
    }
  } catch {
    // ignore
  }

  for (const type of chartTypes) {
    urls.push(`/charts/${type}`)
  }

  try {
    for (const slug of getSkillSlugs()) {
      if (slug) urls.push(`/skills/${slug}`)
    }
  } catch {
    // ignore
  }

  return urls
}

async function collectDocsPaths(): Promise<string[]> {
  try {
    const { source } = await import("@/lib/source")
    const pages = source.getPages()
    const docs: string[] = []
    for (const page of pages) {
      const url = typeof page?.url === "string" ? page.url : ""
      if (isIndexableDocsUrl(url)) docs.push(url)
    }
    return docs
  } catch {
    return []
  }
}

/** Cache at the edge so Google rarely hits a cold/runtime failure. */
export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const [docs] = await Promise.all([collectDocsPaths()])
    const entries = toSitemapEntries([...collectPaths(), ...docs])
    if (entries.length > 0) return entries
  } catch {
    // fall through to static minimum
  }

  return toSitemapEntries(staticRoutes)
}
