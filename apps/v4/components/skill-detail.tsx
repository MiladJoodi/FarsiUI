"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Copy, Download } from "lucide-react"

import { type Skill } from "@/lib/skills"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { getIconForLanguageExtension } from "@/components/icons"
import { SkillAgentPathRow, SkillCopyCommand } from "@/components/skill-copy"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
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
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight">
            {skill.title}
          </h1>
          <p className="docs-page-description text-pretty text-muted-foreground">
            {skill.summary}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
            کاربردها
          </h2>
          <ul className="list-disc space-y-1.5 pe-5 text-muted-foreground marker:text-foreground/40">
            {skill.useCases.map((item) => (
              <li key={item} className="leading-[1.7]">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
            فایل مهارت
          </h2>

          <Tabs defaultValue="preview" className="w-full gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="ms-auto flex h-8 items-center gap-0.5 rounded-lg border bg-muted p-1">
                <TabsList className="grid h-auto! w-fit grid-cols-2 gap-0.5 rounded-none bg-transparent p-0 shadow-none *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2.5 *:data-[slot=tabs-trigger]:text-xs">
                  <TabsTrigger value="preview" className="cursor-pointer">
                    مشاهده
                  </TabsTrigger>
                  <TabsTrigger value="code" className="cursor-pointer">
                    <bdi dir="ltr">SKILL.md</bdi>
                  </TabsTrigger>
                </TabsList>
                <Separator orientation="vertical" className="mx-0.5 h-4!" />
                <SkillFileCopyButton value={markdown} />
                <SkillFileDownloadButton content={markdown} />
              </div>
            </div>

            <TabsContent
              value="preview"
              className="m-0 overflow-hidden rounded-xl border p-4 md:p-5"
            >
              <SkillSamplePreview skill={skill} />
            </TabsContent>

            <TabsContent value="code" className="m-0">
              <figure
                data-rehype-pretty-code-figure=""
                data-not-typeset=""
                dir="ltr"
                lang="en"
                className="m-0! overflow-hidden rounded-xl border bg-code text-code-foreground md:mx-0!"
              >
                <figcaption
                  className="flex h-9 shrink-0 items-center gap-1.5 border-b px-3 text-xs text-code-foreground [&_svg]:size-3.5 [&_svg]:opacity-70"
                  data-language="md"
                >
                  {getIconForLanguageExtension("md")}
                  <span className="truncate font-mono">SKILL.md</span>
                  <SkillFileCopyButton value={markdown} />
                </figcaption>
                <pre className="no-scrollbar max-h-72 overflow-auto whitespace-pre px-4 py-3.5 text-start font-mono text-[length:var(--docs-code)] leading-[1.5] text-code-foreground">
                  {markdown}
                </pre>
              </figure>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
              نصب
            </h2>
            <p className="text-muted-foreground">
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
            <h3 className="text-[length:var(--docs-h3)] font-medium tracking-tight">
              نصب سریع با CLI
            </h3>
            <SkillCopyCommand command={skill.installCommand} />
          </div>

          <div className="space-y-3">
            <h3 className="text-[length:var(--docs-h3)] font-medium tracking-tight">
              نصب دستی
            </h3>
            <p className="text-muted-foreground">
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
                    note={target.note}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SkillFileCopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      data-slot="copy-button"
      className="size-6 cursor-pointer rounded-sm"
      title={copied ? "کپی شد" : "کپی SKILL.md"}
      aria-label={copied ? "کپی شد" : "کپی SKILL.md"}
      onClick={async () => {
        const ok = await copyToClipboardWithMeta(value)
        if (ok) setCopied(true)
      }}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </Button>
  )
}

function SkillFileDownloadButton({ content }: { content: string }) {
  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className="size-6 cursor-pointer rounded-sm"
      title="دانلود SKILL.md"
      aria-label="دانلود SKILL.md"
      onClick={() => {
        const blob = new Blob([content], {
          type: "text/markdown;charset=utf-8",
        })
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement("a")
        anchor.href = url
        anchor.download = "SKILL.md"
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
        URL.revokeObjectURL(url)
      }}
    >
      <Download className="size-3.5" />
    </Button>
  )
}

function SkillSamplePreview({ skill }: { skill: Skill }) {
  const isCodeSample =
    skill.sample.without.includes("className") ||
    skill.sample.with.includes("className") ||
    skill.sample.without.includes("<html") ||
    skill.sample.with.includes("<html") ||
    skill.sample.without.includes("og:locale") ||
    skill.sample.with.includes("og:locale")

  const codeClassName =
    "overflow-x-auto rounded-lg border bg-code px-3 py-3 text-start font-mono text-[length:var(--docs-code)] leading-[1.5] whitespace-pre text-code-foreground"

  return (
    <div className="space-y-4" dir="rtl" lang="fa">
      <p className="text-muted-foreground">
        <span className="text-foreground">ورودی:</span> {skill.sample.prompt}
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <figure className="space-y-2">
          <figcaption className="text-[length:var(--docs-small)] font-medium text-muted-foreground">
            خروجی قبل از مهارت
          </figcaption>
          <blockquote
            dir={isCodeSample ? "ltr" : "rtl"}
            lang={isCodeSample ? "en" : "fa"}
            className={
              isCodeSample
                ? `${codeClassName} opacity-80`
                : "rounded-lg border bg-muted/25 px-3 py-3 leading-[1.7] text-muted-foreground"
            }
          >
            {skill.sample.without}
          </blockquote>
        </figure>
        <figure className="space-y-2">
          <figcaption className="text-[length:var(--docs-small)] font-medium">
            خروجی با مهارت
          </figcaption>
          <blockquote
            dir={isCodeSample ? "ltr" : "rtl"}
            lang={isCodeSample ? "en" : "fa"}
            className={
              isCodeSample
                ? codeClassName
                : "rounded-lg border border-foreground/12 bg-background px-3 py-3 leading-[1.7]"
            }
          >
            {skill.sample.with}
          </blockquote>
        </figure>
      </div>
    </div>
  )
}
