import { type Metadata } from "next"

import { getAllBlockIds } from "@/lib/blocks"
import { registryCategories } from "@/lib/categories"
import { getRegistryItem } from "@/lib/registry"
import { BlockCardDisplay } from "@/components/block-card-display"
import { getActiveStyle } from "@/registry/_legacy-styles"

export const revalidate = false
export const dynamic = "force-dynamic"
export const dynamicParams = true

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const { categories = [] } = await params
  const category = registryCategories.find(({ slug }) => slug === categories[0])

  return {
    title: category ? `${category.name} Blocks` : undefined,
    alternates: {
      canonical: `/blocks/${categories.join("/")}`,
    },
  } satisfies Metadata
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const [{ categories = [] }, activeStyle] = await Promise.all([
    params,
    getActiveStyle(),
  ])
  const candidateNames = await getAllBlockIds(["registry:block"], categories)
  const blocks = (
    await Promise.all(
      candidateNames.map(async (name) => {
        const item = await getRegistryItem(name, activeStyle.name)
        return item?.files?.length ? name : null
      })
    )
  ).filter((name): name is string => Boolean(name))

  if (blocks.length === 0) {
    return (
      <div
        dir="rtl"
        lang="fa"
        className="flex min-h-[40vh] flex-col items-center justify-center gap-2 text-center text-muted-foreground"
      >
        <p className="text-sm font-medium text-foreground">
          بلاکی برای این دسته پیدا نشد
        </p>
        <p className="text-xs">
          استایل فعال: <span dir="ltr">{activeStyle.name}</span>
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 pb-8">
      {blocks.map((name) => (
        <BlockCardDisplay
          name={name}
          key={name}
          styleName={activeStyle.name}
        />
      ))}
    </div>
  )
}
