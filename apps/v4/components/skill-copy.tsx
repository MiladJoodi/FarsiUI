"use client"

import * as React from "react"
import { IconCheck, IconCopy, IconDownload } from "@tabler/icons-react"
import { cn } from "cn"

import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"

const TOOL_LOGOS: Record<string, string> = {
  "claude-code": "/farsiui/ai/claude.png",
  cursor: "/farsiui/ai/cursor.png",
  codex: "/farsiui/ai/codex.png",
}

export function SkillCopyCommand({
  command,
  className,
}: {
  command: string
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
      className={cn(
        "relative flex items-center gap-2 overflow-x-auto rounded-lg border bg-code pe-10 ps-3 py-2 font-mono text-[12.5px] text-foreground",
        className
      )}
    >
      <span className="select-none text-muted-foreground">$</span>
      <code className="min-w-0 flex-1 whitespace-pre">{command}</code>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        data-slot="copy-button"
        className="absolute top-1.5 end-1.5 size-7 cursor-pointer bg-code"
        aria-label="کپی دستور"
        onClick={async () => {
          const ok = await copyToClipboardWithMeta(command)
          if (ok) setCopied(true)
        }}
      >
        {copied ? (
          <IconCheck className="size-3.5" />
        ) : (
          <IconCopy className="size-3.5" />
        )}
      </Button>
    </div>
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
      <IconDownload className="size-3.5" />
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
        <IconCheck className="size-3.5" />
      ) : (
        <IconCopy className="size-3.5" />
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
          <IconCheck className="size-3.5" />
        ) : (
          <IconCopy className="size-3.5" />
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
          <IconCheck className="size-3.5" />
        ) : (
          <IconCopy className="size-3.5" />
        )}
      </Button>
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      title={name}
      data-tool={id}
      className="size-6 shrink-0 object-contain"
    />
  )
}
