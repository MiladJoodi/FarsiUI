import { type Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getShowcaseCategory,
  getShowcaseCategorySlugs,
  getShowcaseProjects,
} from "@/lib/showcase"
import { ShowcaseProjectList } from "@/components/showcase-project-list"

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

  return {
    title: `${category.title} — نمونه‌ها`,
    description: category.description,
    alternates: {
      canonical: `/showcase/${category.slug}`,
    },
  }
}

export default async function ShowcaseCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: slug } = await params
  const category = getShowcaseCategory(slug)

  if (!category || category.href) {
    return notFound()
  }

  const projects = getShowcaseProjects(category.slug)

  return (
    <ShowcaseProjectList
      projects={projects}
      emptyMessage={`هنوز نمونه‌ای در دستهٔ «${category.title}» ثبت نشده است.`}
    />
  )
}
