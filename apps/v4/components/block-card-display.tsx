import * as React from "react"
import { type registryItemFileSchema } from "farsiui/schema"
import { type z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry"
import { BlockCard } from "@/components/block-card"
import { type Style } from "@/registry/_legacy-styles"

export async function BlockCardDisplay({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
}) {
  const item = await getCachedRegistryItem(name, styleName)

  if (!item?.files?.length) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <BlockCard
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      styleName={styleName}
    />
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    return await getRegistryItem(name, styleName)
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null
    }

    return await createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    )
  }
)
