import blocksMeta from "@/registry/__blocks__.json"
import {
  getVisibleBlocksNav,
  type BlocksNavItem,
} from "@/lib/blocks-nav"
import { type Style } from "@/registry/_legacy-styles"

export type FeaturedBlockSample = {
  item: BlocksNavItem
  blockName: string
  blockCount: number
}

export type FeaturedBlockGroup = {
  title: string
  slug: string
  samples: FeaturedBlockSample[]
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
 * One sample block per visible nav subcategory.
 * Uses lightweight __blocks__.json (no heavy registry index import).
 */
export async function getFeaturedBlockGroups(
  _styleName: Style["name"]
): Promise<FeaturedBlockGroup[]> {
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

  const groups: FeaturedBlockGroup[] = []

  for (const category of nav) {
    const samples: FeaturedBlockSample[] = []

    for (const item of category.items) {
      const names = byCategory.get(item.slug)
      if (!names?.length) continue

      const available = sortBlockNames(names)
      const blockName = available[0]
      if (!blockName) continue

      samples.push({
        item,
        blockName,
        blockCount: available.length,
      })
    }

    if (samples.length > 0) {
      groups.push({
        title: category.title,
        slug: category.slug,
        samples,
      })
    }
  }

  return groups
}
