import blocksMeta from "@/registry/__blocks__.json"
import { getVisibleBlocksNav } from "@/lib/blocks-nav"

type BlockMeta = {
  name: string
  categories?: string[]
}

/**
 * Total registry blocks per top-level nav category slug
 * (sum across that group's subcategories).
 */
export function getNavCategoryBlockCounts(): Record<string, number> {
  const blocks = blocksMeta as BlockMeta[]
  const bySubcategory = new Map<string, number>()

  for (const block of blocks) {
    for (const category of block.categories ?? []) {
      bySubcategory.set(category, (bySubcategory.get(category) ?? 0) + 1)
    }
  }

  const counts: Record<string, number> = {}
  for (const category of getVisibleBlocksNav()) {
    let total = 0
    for (const item of category.items) {
      total += bySubcategory.get(item.slug) ?? 0
    }
    counts[category.slug] = total
  }
  return counts
}
