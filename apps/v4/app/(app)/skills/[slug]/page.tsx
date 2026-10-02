import { type Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getSkill,
  getSkillMarkdown,
  getSkillSlugs,
} from "@/lib/skills"
import { SkillDetail } from "@/components/skill-detail"

export const dynamicParams = true

export function generateStaticParams() {
  return getSkillSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const skill = getSkill(slug)

  if (!skill) {
    return {}
  }

  return {
    title: skill.title,
    description: skill.summary,
    alternates: {
      canonical: `/skills/${skill.slug}`,
    },
  }
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const skill = getSkill(slug)
  const markdown = getSkillMarkdown(slug)

  if (!skill || !markdown) {
    notFound()
  }

  return <SkillDetail skill={skill} markdown={markdown} />
}
