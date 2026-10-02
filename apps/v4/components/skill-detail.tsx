"use client"

import Link from "next/link"

import { type Skill } from "@/lib/skills"
import {
  SkillCopyCommand,
  SkillCopyIconButton,
  SkillDownloadButton,
  SkillToolIcon,
} from "@/components/skill-copy"
import { Badge } from "@/registry/new-york-v4/ui/badge"
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
  const primaryPath =
    skill.installTargets.find((target) => target.id === "cursor")?.paths[0] ??
    skill.installTargets[0]?.paths[0]

  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-0 lg:py-8">
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">
              {skill.title}
            </h1>
            <Badge
              variant="secondary"
              dir="ltr"
              lang="en"
              className="translate-y-px font-mono text-[0.7rem] font-medium tracking-wide text-muted-foreground"
            >
              {skill.slug}
            </Badge>
          </div>
          <p className="text-pretty text-[1.05rem] text-muted-foreground sm:text-base">
            {skill.summary}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            کی به کار می‌آید
          </h2>
          <ul className="list-disc space-y-1.5 pe-5 text-muted-foreground marker:text-foreground/40">
            {skill.useCases.map((item) => (
              <li key={item} className="leading-7">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            فایل مهارت
          </h2>

          <Tabs
            defaultValue="preview"
            className="gap-0 overflow-hidden rounded-xl border"
          >
            <div className="flex items-center justify-between gap-2 border-b bg-muted/30 px-2 py-1.5">
              <TabsList className="h-8 bg-transparent p-0">
                <TabsTrigger
                  value="preview"
                  className="h-7 rounded-md px-2.5 text-xs data-[state=active]:shadow-none"
                >
                  مشاهده
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="h-7 rounded-md px-2.5 text-xs data-[state=active]:shadow-none"
                >
                  کد
                </TabsTrigger>
              </TabsList>
              <SkillDownloadButton content={markdown} />
            </div>

            <TabsContent value="preview" className="m-0 p-4 md:p-5">
              <SkillSamplePreview skill={skill} />
            </TabsContent>

            <TabsContent value="code" className="m-0">
              <pre
                dir="ltr"
                lang="en"
                className="max-h-72 overflow-auto whitespace-pre bg-code p-3 text-start font-mono text-[12px] leading-5 text-foreground"
              >
                {markdown}
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            شرط فعال شدن
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            {skill.activationNote}
          </p>
          <div className="relative overflow-hidden rounded-xl border">
            <div className="flex items-center justify-between border-b bg-muted/30 px-3 py-1.5">
              <span
                dir="ltr"
                lang="en"
                className="font-mono text-[11px] text-muted-foreground"
              >
                description
              </span>
              <SkillCopyIconButton
                value={skill.activationDescription}
                label="کپی description"
              />
            </div>
            <pre
              dir="ltr"
              lang="en"
              className="max-h-36 overflow-auto whitespace-pre-wrap bg-code p-3 text-start font-mono text-[12px] leading-5 text-foreground"
            >
              {skill.activationDescription}
            </pre>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="font-heading text-lg font-medium tracking-tight">
              نصب
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              راهنمای کامل در{" "}
              <Link
                href="/skills/install"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                نحوه نصب
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">نصب سریع با CLI</h3>
            <SkillCopyCommand command={skill.installCommand} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">داخل پروژه</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              فایل را زیر پوشهٔ Agent خود بگذارید؛ مثلاً برای Cursor:
            </p>
            {primaryPath ? (
              <div className="flex items-center gap-2 rounded-lg border bg-code px-3 py-2">
                <code
                  dir="ltr"
                  lang="en"
                  className="min-w-0 flex-1 truncate font-mono text-[12px]"
                >
                  {primaryPath}
                </code>
                <SkillCopyIconButton value={primaryPath} label="کپی مسیر" />
              </div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">نصب دستی</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              با آیکون دانلود،{" "}
              <bdi dir="ltr" className="font-mono text-foreground">
                SKILL.md
              </bdi>{" "}
              را بگیرید و در مسیر Agent بگذارید:
            </p>
            <div className="space-y-2">
              {skill.installTargets
                .filter((target) => target.id !== "other")
                .map((target) => (
                  <div
                    key={target.id}
                    className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
                  >
                    <SkillToolIcon id={target.id} name={target.name} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium" dir="ltr" lang="en">
                        {target.name}
                      </p>
                      <p
                        dir="ltr"
                        lang="en"
                        className="truncate font-mono text-[12px] text-muted-foreground"
                      >
                        {target.paths[0]}
                      </p>
                    </div>
                    <SkillCopyIconButton
                      value={target.paths[0]!}
                      label="کپی مسیر"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SkillSamplePreview({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-4" dir="rtl" lang="fa">
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground">ورودی:</span> {skill.sample.prompt}
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <figure className="space-y-2">
          <figcaption className="text-xs font-medium text-muted-foreground">
            خروجی قبل از مهارت
          </figcaption>
          <blockquote className="rounded-lg border bg-muted/25 px-3 py-3 text-sm leading-7 text-muted-foreground">
            {skill.sample.without}
          </blockquote>
        </figure>
        <figure className="space-y-2">
          <figcaption className="text-xs font-medium">
            خروجی با مهارت
          </figcaption>
          <blockquote className="rounded-lg border border-foreground/12 bg-background px-3 py-3 text-sm leading-7">
            {skill.sample.with}
          </blockquote>
        </figure>
      </div>
    </div>
  )
}
