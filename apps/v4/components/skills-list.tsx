import Link from "next/link"

import { getSkills } from "@/lib/skills-data"

export function SkillsList() {
  const list = getSkills()

  if (!list.length) {
    return null
  }

  return (
    <div data-not-typeset dir="rtl" lang="fa" className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {list.map((skill) => (
          <Link
            key={skill.slug}
            href={`/skills/${skill.slug}`}
            className="flex min-w-0 flex-col gap-1.5 rounded-xl border border-border bg-background px-4 py-3 outline-none transition-[border-color,box-shadow] hover:border-border hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex min-w-0 items-baseline gap-2">
              <span className="shrink-0 text-sm font-semibold tracking-tight text-primary">
                {skill.title}
              </span>
              <span
                aria-hidden
                className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
              />
              <span
                dir="ltr"
                lang="en"
                className="shrink-0 font-sans text-xs tracking-wide text-muted-foreground"
              >
                {skill.slug}
              </span>
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {skill.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
