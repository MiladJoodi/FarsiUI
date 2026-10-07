import { siteConfig } from "@/lib/config"
import { type Metadata } from "next"
import { redirect } from "next/navigation"

import { getAllBlockIds } from "@/lib/blocks"
import { getBlocksNavItem } from "@/lib/blocks-nav"
import { registryCategories } from "@/lib/categories"
import { getRegistryItem } from "@/lib/registry"
import { BlockCardDisplay } from "@/components/block-card-display"
import { getActiveStyle } from "@/registry/_legacy-styles"

/** Legacy category merged into chat. */
const CATEGORY_REDIRECTS: Record<string, string> = {
  conversation: "chat",
}

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const categoryParams = registryCategories.map((category) => ({
    categories: [category.slug],
  }))
  const redirectParams = Object.keys(CATEGORY_REDIRECTS).map((slug) => ({
    categories: [slug],
  }))
  return [...categoryParams, ...redirectParams]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const { categories = [] } = await params
  const slug = categories[0]
  const match = slug ? getBlocksNavItem(slug) : null
  const title = match
    ? `${match.item.title} · بلوک‌های UI`
    : "بلوک‌ها"
  const description = match
    ? `بلوک‌های آمادهٔ «${match.item.title}» برای پروژه‌های فارسی و راست‌چین در دستهٔ ${match.category.title}.`
    : "بلوک‌های آمادهٔ UI برای کپی در پروژه‌های فارسی و راست‌چین."
  const canonical = `/blocks/${categories.join("/")}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: siteConfig.ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
        },
      ],
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
  const legacy = categories[0] ? CATEGORY_REDIRECTS[categories[0]] : undefined
  if (legacy) {
    redirect(`/blocks/${legacy}`)
  }
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
          بلوکی برای این دسته پیدا نشد
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
