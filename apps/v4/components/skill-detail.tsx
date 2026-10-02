"use client"

import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { type Skill } from "@/lib/skills"
import { SkillCopyCommand, SkillCopyTextButton } from "@/components/skill-copy"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export function SkillDetail({
  skill,
  markdown,
}: {
  skill: Skill
  markdown: string
}) {
  const body = stripFrontmatter(markdown)

  return (
    <article dir="rtl" lang="fa" className="flex flex-col gap-10">
      <div className="space-y-4">
        <Button asChild variant="ghost" size="sm" className="-ms-2 w-fit gap-1.5">
          <Link href="/skills">
            <ArrowRightIcon className="size-3.5" />
            همهٔ مهارت‌ها
          </Link>
        </Button>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {skill.title}
            </h1>
            <Badge variant="secondary">{skill.kindLabel}</Badge>
          </div>
          <p className="font-mono text-sm text-muted-foreground" dir="ltr">
            {skill.slug}
          </p>
        </div>

        <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
          {skill.summary}
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">کی به کار می‌آد</h2>
        <ul className="list-disc space-y-1.5 pe-5 text-sm leading-7 text-muted-foreground">
          {skill.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">
          شرط فعال شدن{" "}
          <span className="font-mono text-sm font-normal text-muted-foreground">
            (description)
          </span>
        </h2>
        <pre
          dir="ltr"
          lang="en"
          className="overflow-x-auto whitespace-pre-wrap rounded-2xl border bg-muted/30 p-4 text-start font-mono text-[13px] leading-6 text-foreground"
        >
          {skill.activationDescription}
        </pre>
        <p className="text-sm leading-7 text-muted-foreground">
          {skill.activationNote}
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight">راهنما</h2>
          <SkillCopyTextButton value={markdown} label="کپی کل فایل" />
        </div>

        <Tabs defaultValue="guide" className="gap-4">
          <TabsList className="w-full justify-start sm:w-auto">
            <TabsTrigger value="guide">راهنما</TabsTrigger>
            <TabsTrigger value="skill-md">
              <bdi dir="ltr">SKILL.md</bdi>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guide">
            <pre
              dir="auto"
              className="max-h-[40rem] overflow-auto whitespace-pre-wrap rounded-2xl border bg-background p-4 text-sm leading-7 text-foreground md:p-5"
            >
              {body}
            </pre>
          </TabsContent>

          <TabsContent value="skill-md">
            <pre
              dir="ltr"
              lang="en"
              className="max-h-[40rem] overflow-auto whitespace-pre rounded-2xl border bg-muted/30 p-4 text-start font-mono text-[12.5px] leading-6 text-foreground md:p-5"
            >
              {markdown}
            </pre>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight">نمونه</h2>
        <p className="text-sm text-muted-foreground">
          پرامپت: «{skill.sample.prompt}»
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 rounded-2xl border border-border/80 p-4">
            <p className="text-xs font-medium text-muted-foreground">بدون مهارت</p>
            <p className="text-sm leading-7">{skill.sample.without}</p>
          </div>
          <div className="space-y-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-4">
            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              با مهارت
            </p>
            <p className="text-sm leading-7">{skill.sample.with}</p>
          </div>
        </div>

        {skill.sample.note ? (
          <p className="text-xs leading-6 text-muted-foreground">
            {skill.sample.note}
          </p>
        ) : null}
      </section>

      <section className="space-y-5">
        <h2 className="text-base font-semibold tracking-tight">نصب</h2>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">با CLI</h3>
          <p className="text-sm leading-7 text-muted-foreground">
            این دستور فایل را در{" "}
            <bdi dir="ltr" className="font-mono text-foreground">
              .claude/skills/{skill.slug}/SKILL.md
            </bdi>{" "}
            می‌نویسه. CLI به init نیاز نداره؛ فقط باید داخل پوشه‌ی پروژه باشید.
          </p>
          <SkillCopyCommand command={skill.installCommand} />
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">دستی</h3>
          <p className="text-sm leading-7 text-muted-foreground">
            محتوای تب{" "}
            <bdi dir="ltr" className="font-medium text-foreground">
              SKILL.md
            </bdi>{" "}
            را کپی کنید و در مسیر ابزار خودتون بگذارید:
          </p>
          <ul className="space-y-3 text-sm leading-7">
            {skill.installPaths.map((item) => (
              <li
                key={item.tool}
                className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3"
              >
                <p className="font-medium text-foreground">
                  {item.tool.startsWith("Claude") ||
                  item.tool === "Cursor" ||
                  item.tool === "Codex" ? (
                    <bdi dir="ltr">{item.tool}</bdi>
                  ) : (
                    item.tool
                  )}
                </p>
                <p className="mt-1 text-muted-foreground" dir="auto">
                  {item.path}
                </p>
              </li>
            ))}
          </ul>
          <pre
            dir="ltr"
            lang="en"
            className="overflow-x-auto whitespace-pre-wrap rounded-xl border bg-muted/30 p-3 text-start font-mono text-[12.5px] leading-6"
          >
            {skill.agentsHint}
          </pre>
        </div>
      </section>

      {skill.related && skill.related.length > 0 ? (
        <section className="rounded-2xl border border-dashed border-border/80 bg-muted/20 p-4 text-sm leading-7 text-muted-foreground md:p-5">
          می‌خواید همه‌ی قوانین را یک‌جا داشته باشید؟{" "}
          {skill.related.map((item, index) => (
            <span key={item.slug}>
              {index > 0 ? (
                index === skill.related!.length - 1 ? (
                  " و "
                ) : (
                  "، "
                )
              ) : null}
              <span className="font-medium text-foreground">{item.title}</span>
            </span>
          ))}{" "}
          خلاصه‌ی مهارت‌ها و سمت طراحی را پوشش می‌دن و با{" "}
          <bdi dir="ltr" className="font-mono text-foreground">
            npx vibefarsi init
          </bdi>{" "}
          داخل پروژه نوشته می‌شن.
        </section>
      ) : null}
    </article>
  )
}

function stripFrontmatter(markdown: string) {
  if (!markdown.startsWith("---")) {
    return markdown.trim()
  }
  const end = markdown.indexOf("\n---", 3)
  if (end === -1) {
    return markdown.trim()
  }
  return markdown.slice(end + 4).trim()
}
