import type { MetadataRoute } from "next"

import { getBlocksCategorySlugs } from "@/lib/blocks-nav"
import { siteConfig } from "@/lib/config"
import { getSkillSlugs } from "@/lib/skills-data"
import { showcaseCategories } from "@/lib/showcase"

const chartTypes = ["area", "bar", "line", "pie", "radar", "radial", "tooltip"]

const staticRoutes = [
  "/",
  "/blocks",
  "/colors",
  "/charts/area",
  "/skills",
  "/skills/install",
  "/demos",
  "/examples",
  "/docs",
  "/docs/installation",
  "/docs/components",
  "/docs/mcp",
  "/docs/changelog",
]

function isIndexableDocsUrl(url: string) {
  if (url.startsWith("/docs/components/radix/")) return false
  if (url.startsWith("/docs/components/aria/")) return false
  return url.startsWith("/docs")
}

function toSitemapEntries(paths: string[]): MetadataRoute.Sitemap {
  const unique = [...new Set(paths.filter(Boolean))]
  return unique.map((path) => ({
    url: new URL(path, `${siteConfig.url}/`).toString(),
  }))
}

export default async function sitemap(): MetadataRoute.Sitemap {
  const urls = [...staticRoutes]

  try {
    const { source } = await import("@/lib/source")
    for (const page of source.getPages()) {
      if (isIndexableDocsUrl(page.url)) {
        urls.push(page.url)
      }
    }
  } catch {
    // Keep static/docs seed routes if the docs source fails at runtime.
  }

  try {
    for (const slug of getBlocksCategorySlugs()) {
      urls.push(`/blocks/${slug}`)
    }
  } catch {
    // ignore
  }

  for (const type of chartTypes) {
    urls.push(`/charts/${type}`)
  }

  try {
    for (const slug of getSkillSlugs()) {
      urls.push(`/skills/${slug}`)
    }
  } catch {
    // ignore
  }

  for (const category of showcaseCategories) {
    urls.push(category.href ?? `/demos/${category.slug}`)
  }

  return toSitemapEntries(urls)
}
