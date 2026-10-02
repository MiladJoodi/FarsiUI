import Link from "next/link"

import { type Skill } from "@/lib/skills"
import { SkillCopyCommand } from "@/components/skill-copy"
import { Badge } from "@/registry/new-york-v4/ui/badge"

export function SkillsList({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill) => (
        <SkillListItem key={skill.slug} skill={skill} />
      ))}
    </div>
  )
}

function SkillListItem({ skill }: { skill: Skill }) {
  return (
    <article
      dir="rtl"
      lang="fa"
      className="rounded-2xl border border-border/80 bg-background/70 p-5 shadow-sm transition-colors hover:border-foreground/20 md:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              <Link
                href={`/skills/${skill.slug}`}
                className="hover:underline underline-offset-4"
              >
                {skill.title}
              </Link>
            </h2>
            <Badge variant="secondary">{skill.kindLabel}</Badge>
          </div>
          <p className="font-mono text-xs text-muted-foreground" dir="ltr">
            {skill.slug}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[0.95rem]">
        {skill.summary}
      </p>

      <div className="mt-5 space-y-2">
        <h3 className="text-sm font-medium text-foreground">کی به کار می‌آد</h3>
        <ul className="list-disc space-y-1.5 pe-5 text-sm leading-6 text-muted-foreground">
          {skill.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-5">
        <SkillCopyCommand command={skill.installCommand} />
      </div>
    </article>
  )
}
