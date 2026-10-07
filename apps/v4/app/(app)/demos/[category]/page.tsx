import { siteConfig } from "@/lib/config"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getShowcaseCategory,
  getShowcaseCategorySlugs,
} from "@/lib/showcase"

export const dynamicParams = true

export function generateStaticParams() {
  return getShowcaseCategorySlugs().map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category: slug } = await params
  const category = getShowcaseCategory(slug)

  if (!category || category.href) {
    return {}
  }

  const title = `${category.title} · دموها`
  const description =
    category.description ||
    `نمونه‌پروژه‌های ${category.title} ساخته‌شده با FarsiUI.`

  return {
    title,
    description,
    alternates: {
      canonical: `/demos/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/demos/${category.slug}`,
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
    },
  }
}

/** Shell route for deep links — filtering is client-side in the layout gallery. */
export default async function DemosCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: slug } = await params
  const category = getShowcaseCategory(slug)

  if (!category || category.href) {
    notFound()
  }

  return null
}
