"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Copy, Download } from "lucide-react"

import {
  getSkillTitleEn,
  type Skill,
  type SkillSource,
} from "@/lib/skills-data"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { SkillAgentPathRow, SkillCopyCommand } from "@/components/skill-copy"
import { Button } from "@/registry/new-york-v4/ui/button"

export function SkillDetail({
  skill,
  markdown,
  highlightedMarkdown,
}: {
  skill: Skill
  markdown: string
  highlightedMarkdown: string
}) {
  return (
    <div
      data-slot="docs"
      data-docs-kind="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 flex min-w-0 items-baseline gap-2 font-semibold tracking-tight">
            <span className="shrink-0">{skill.title}</span>
            <span
              aria-hidden
              className="mb-1.5 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
            />
            <span
              dir="ltr"
              lang="en"
              title={skill.slug}
              className="shrink-0 font-sans text-[0.85em] font-normal tracking-normal text-muted-foreground"
            >
              {getSkillTitleEn(skill)}
            </span>
          </h1>
          <p className="docs-page-description text-pretty text-muted-foreground">
            {skill.summary}
          </p>
          <SkillSourceMeta source={skill.source} />
        </header>

        <div className="typeset w-full flex-1">
          <h2>کاربردها</h2>
          <ul>
            {skill.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {skill.example ? (
            <>
              <h2>مثال</h2>
              <p>{skill.example}</p>
            </>
          ) : null}

          <h2>فایل مهارت</h2>
          <div data-not-typeset="" className="my-4 w-full">
            <figure
              data-rehype-pretty-code-figure=""
              data-not-typeset=""
              dir="ltr"
              lang="en"
              className="m-0! overflow-hidden rounded-xl border bg-code text-code-foreground md:mx-0!"
            >
              <figcaption className="flex h-9 shrink-0 items-center gap-2 border-b px-3 text-xs text-code-foreground">
                <span dir="ltr" lang="en" className="truncate font-mono">
                  SKILL.md
                </span>
                <div className="ms-auto flex items-center gap-0.5">
                  <SkillFileCopyButton value={markdown} />
                  <SkillFileDownloadButton content={markdown} />
                </div>
              </figcaption>
              <div
                className="max-h-72 overflow-auto text-start text-[length:var(--docs-code)] leading-[1.5] [&_pre]:max-h-none"
                dangerouslySetInnerHTML={{ __html: highlightedMarkdown }}
              />
            </figure>
          </div>

          <h2>نصب</h2>
          <p>
            راهنمای کامل در <Link href="/skills/install">نحوه نصب</Link>.
          </p>

          <h3>نصب سریع با CLI</h3>
          <SkillCopyCommand command={skill.installCommand} />

          <h3>نصب دستی</h3>
          <p>
            فایل را دانلود کنید یا خودتان بسازید و در یکی از مسیرهای زیر
            بگذارید:
          </p>
          <div data-not-typeset="" className="my-4 space-y-2">
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
      </div>
    </div>
  )
}

function SkillSourceMeta({ source }: { source?: SkillSource }) {
  const resolved: SkillSource = source ?? { name: "FarsiUI" }

  return (
    <p className="text-xs text-muted-foreground/80">
      {resolved.url ? (
        <a
          href={resolved.url}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground hover:underline hover:underline-offset-2"
        >
          منبع
        </a>
      ) : (
        <span>منبع</span>
      )}
    </p>
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
      title={copied ? "کپی شد" : "کپی فایل"}
      aria-label={copied ? "کپی شد" : "کپی فایل"}
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
      title="دانلود فایل"
      aria-label="دانلود فایل"
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
