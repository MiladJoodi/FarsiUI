import Link from "next/link"

import {
  getSkillCategory,
  getSkillTitleEn,
  getSkillsGroupedByCategory,
} from "@/lib/skills-data"

export function SkillsList() {
  const groups = getSkillsGroupedByCategory()

  if (!groups.length) {
    return null
  }

  return (
    <div data-not-typeset dir="rtl" lang="fa" className="w-full space-y-8">
      {groups.map(({ category, skills }) => (
        <section key={category.id} className="space-y-3">
          <div className="flex min-w-0 items-baseline gap-2">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              {category.title}
            </h2>
            <span
              aria-hidden
              className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
            />
            <span
              dir="ltr"
              lang="en"
              className="shrink-0 font-sans text-xs tracking-wide text-muted-foreground"
            >
              {category.titleEn}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{category.description}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {skills.map((skill) => {
              const skillCategory = getSkillCategory(skill.category)
              return (
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
                      title={skill.slug}
                      className="shrink-0 font-sans text-xs tracking-wide text-muted-foreground"
                    >
                      {getSkillTitleEn(skill)}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {skill.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {skillCategory ? (
                      <span className="rounded-md bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                        {skillCategory.title}
                      </span>
                    ) : null}
                    {skill.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        dir="ltr"
                        lang="en"
                        className="rounded-md bg-muted/60 px-1.5 py-0.5 font-sans text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
