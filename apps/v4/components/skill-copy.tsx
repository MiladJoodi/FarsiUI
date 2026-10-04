"use client"
import { Check, Copy, Download } from "lucide-react"

import * as React from "react"
import { cn } from "cn"

import { CodeBlockCommand } from "@/components/code-block-command"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"

const TOOL_LOGOS: Record<string, string> = {
  "claude-code": "/farsiui/ai/claude.png",
  cursor: "/farsiui/ai/cursor.png",
  codex: "/farsiui/ai/codex.png",
}

/** Same npm/pnpm/yarn/bun command chrome as docs/installation. */
export function SkillCopyCommand({
  command,
  className,
}: {
  command: string
  className?: string
}) {
  const npm = command
  const yarn = command.startsWith("npx")
    ? command.replace("npx", "yarn dlx")
    : command
  const pnpm = command.startsWith("npx")
    ? command.replace("npx", "pnpm dlx")
    : command
  const bun = command.startsWith("npx")
    ? command.replace("npx", "bunx --bun")
    : command

  return (
    <figure
      data-rehype-pretty-code-figure=""
      data-not-typeset=""
      className={cn("relative m-0! md:mx-0!", className)}
    >
      <CodeBlockCommand
        __npm__={npm}
        __yarn__={yarn}
        __pnpm__={pnpm}
        __bun__={bun}
      />
    </figure>
  )
}

export function SkillIconButton({
  label,
  onClick,
  children,
  className,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className={cn("size-7 shrink-0 cursor-pointer", className)}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function SkillDownloadButton({
  content,
  filename = "SKILL.md",
  className,
}: {
  content: string
  filename?: string
  className?: string
}) {
  return (
    <SkillIconButton
      label="دانلود SKILL.md"
      className={className}
      onClick={() => {
        const blob = new Blob([content], {
          type: "text/markdown;charset=utf-8",
        })
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement("a")
        anchor.href = url
        anchor.download = filename
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
        URL.revokeObjectURL(url)
      }}
    >
      <Download className="size-3.5" />
    </SkillIconButton>
  )
}

export function SkillCopyIconButton({
  value,
  label = "کپی",
  className,
}: {
  value: string
  label?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <SkillIconButton
      label={copied ? "کپی شد" : label}
      className={className}
      onClick={async () => {
        const ok = await copyToClipboardWithMeta(value)
        if (ok) setCopied(true)
      }}
    >
      {copied ? (
        <Check className="size-3.5" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </SkillIconButton>
  )
}

/** Copy control for plain code snippets (CLI / AGENTS hint). */
export function SkillPathCopy({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div
      dir="ltr"
      lang="en"
      className={cn("relative pe-10", className)}
    >
      <code className="block truncate font-mono text-[12px] text-muted-foreground">
        {value}
      </code>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        data-slot="copy-button"
        className="absolute top-0 end-0 size-7 cursor-pointer"
        aria-label="کپی مسیر"
        onClick={async () => {
          const ok = await copyToClipboardWithMeta(value)
          if (ok) setCopied(true)
        }}
      >
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </Button>
    </div>
  )
}

/** One row: logo → name (fixed) → path → copy — paths align across rows */
export function SkillAgentPathRow({
  id,
  name,
  path,
  paths,
  note,
}: {
  id: string
  name: string
  path?: string
  paths?: string[]
  note?: string
}) {
  const value = paths?.[0] ?? path
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(timer)
  }, [copied])

  if (!value) return null

  return (
    <div className="space-y-1">
      <div
        dir="ltr"
        lang="en"
        className="grid grid-cols-[1.5rem_7.5rem_minmax(0,1fr)_1.75rem] items-center gap-x-3"
      >
        <SkillToolIcon id={id} name={name} />
        <span className="truncate text-sm font-medium">{name}</span>
        <code className="min-w-0 truncate font-mono text-[12px] text-muted-foreground">
          {value}
        </code>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          data-slot="copy-button"
          className="size-7 cursor-pointer"
          aria-label="کپی مسیر"
          onClick={async () => {
            const ok = await copyToClipboardWithMeta(value)
            if (ok) setCopied(true)
          }}
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </Button>
      </div>
      {note ? (
        <p
          dir="rtl"
          lang="fa"
          className="ps-[calc(1.5rem+7.5rem+0.75rem)] text-xs leading-6 text-muted-foreground"
        >
          {note}
        </p>
      ) : null}
    </div>
  )
}

export function SkillToolIcon({
  id,
  name,
}: {
  id: string
  name: string
}) {
  const src = TOOL_LOGOS[id]

  if (!src) {
    return (
      <div
        data-tool={id}
        aria-hidden
        className="flex size-6 shrink-0 items-center justify-center text-[10px] font-semibold tracking-wide text-muted-foreground"
        title={name}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
     
    <img
      src={src}
      alt=""
      title={name}
      data-tool={id}
      className="size-6 shrink-0 object-contain"
    />
  )
}
