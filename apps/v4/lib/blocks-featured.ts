import blocksMeta from "@/registry/__blocks__.json"
import {
  getVisibleBlocksNav,
  type BlocksNavItem,
} from "@/lib/blocks-nav"
import { type Style } from "@/registry/_legacy-styles"

export type FeaturedBlockSample = {
  /** Top-level category title (FA). */
  categoryTitle: string
  /** Top-level category title (EN). */
  categoryEn: string
  categorySlug: string
  /** First subcategory — used for the category link. */
  item: BlocksNavItem
  /** First simple block id (e.g. login-01). */
  blockName: string
  /** Total blocks across all subcategories in this group. */
  blockCount: number
}

type BlockMeta = {
  name: string
  categories?: string[]
}

function sortBlockNames(names: string[]) {
  const unique = [...new Set(names)]
  const isPrimary = (name: string) => /(?:^|-)0?1$/.test(name)
  return [
    ...unique.filter(isPrimary).sort((a, b) => a.localeCompare(b)),
    ...unique
      .filter((name) => !isPrimary(name))
      .sort((a, b) => a.localeCompare(b)),
  ]
}

/**
 * One sample per top-level nav category: the first simple block (*-01)
 * of the first subcategory that has registry blocks (e.g. auth → login-01).
 */
export async function getFeaturedBlockSamples(
  _styleName: Style["name"]
): Promise<FeaturedBlockSample[]> {
  const nav = getVisibleBlocksNav()
  const blocks = blocksMeta as BlockMeta[]

  const byCategory = new Map<string, string[]>()
  for (const block of blocks) {
    for (const category of block.categories ?? []) {
      const list = byCategory.get(category) ?? []
      list.push(block.name)
      byCategory.set(category, list)
    }
  }

  const samples: FeaturedBlockSample[] = []

  for (const category of nav) {
    let firstItem: BlocksNavItem | null = null
    let blockName: string | null = null
    let blockCount = 0

    for (const item of category.items) {
      const names = byCategory.get(item.slug)
      if (!names?.length) continue

      blockCount += names.length

      if (!firstItem) {
        const available = sortBlockNames(names)
        const primary = available[0]
        if (primary) {
          firstItem = item
          blockName = primary
        }
      }
    }

    if (!firstItem || !blockName || blockCount === 0) continue

    samples.push({
      categoryTitle: category.title,
      categoryEn: category.en,
      categorySlug: category.slug,
      item: firstItem,
      blockName,
      blockCount,
    })
  }

  return samples
}

/** @deprecated Use getFeaturedBlockSamples — kept for gradual call-site updates. */
export async function getFeaturedBlockGroups(styleName: Style["name"]) {
  const samples = await getFeaturedBlockSamples(styleName)
  return samples.map((sample) => ({
    title: sample.categoryTitle,
    slug: sample.categorySlug,
    samples: [sample],
  }))
}
