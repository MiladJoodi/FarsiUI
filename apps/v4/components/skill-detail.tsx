"use client"

import Link from "next/link"

import { type Skill } from "@/lib/skills"
import {
  SkillCopyCommand,
  SkillCopyIconButton,
  SkillDownloadButton,
  SkillAgentPathRow,
} from "@/components/skill-copy"
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
  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-0 lg:py-8">
        <header className="flex flex-col gap-2">
          <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">
            {skill.title}
          </h1>
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

          <Tabs defaultValue="preview" className="gap-3">
            <div className="flex items-center gap-2">
              <TabsList className="grid h-8 grid-cols-2 items-center rounded-lg p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
                <TabsTrigger value="preview" className="cursor-pointer">
                  مشاهده
                </TabsTrigger>
                <TabsTrigger value="code" className="cursor-pointer">
                  <bdi dir="ltr">SKILL.md</bdi>
                </TabsTrigger>
              </TabsList>
              <div className="ms-auto flex items-center">
                <SkillCopyIconButton value={markdown} label="کپی SKILL.md" />
                <SkillDownloadButton content={markdown} />
              </div>
            </div>

            <TabsContent
              value="preview"
              className="m-0 overflow-hidden rounded-xl border p-4 md:p-5"
            >
              <SkillSamplePreview skill={skill} />
            </TabsContent>

            <TabsContent
              value="code"
              className="m-0 overflow-hidden rounded-xl border bg-code"
            >
              <pre
                dir="ltr"
                lang="en"
                className="max-h-72 overflow-auto whitespace-pre p-3 text-start font-mono text-[12px] leading-5 text-foreground"
              >
                {markdown}
              </pre>
            </TabsContent>
          </Tabs>
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

          <div className="space-y-3">
            <h3 className="text-sm font-medium">نصب دستی</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              فایل را دانلود کنید یا خودتان بسازید و در یکی از مسیرهای زیر
              بگذارید:
            </p>
            <div className="space-y-2">
              {skill.installTargets
                .filter((target) => target.id !== "other")
                .map((target) => (
                  <SkillAgentPathRow
                    key={target.id}
                    id={target.id}
                    name={target.name}
                    paths={target.paths}
                  />
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
