"use client"

import * as React from "react"
import { IconCheck, IconCopy, IconDownload } from "@tabler/icons-react"
import { cn } from "cn"

import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"

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
        "relative flex items-center gap-2 overflow-x-auto rounded-lg border bg-code px-3 py-2 font-mono text-[12.5px] text-foreground",
        className
      )}
    >
      <span className="select-none text-muted-foreground">$</span>
      <code className="min-w-0 flex-1 whitespace-pre">{command}</code>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="size-6 shrink-0"
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
      className={cn("size-7 shrink-0", className)}
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

export function SkillToolIcon({
  id,
  name,
}: {
  id: string
  name: string
}) {
  return (
    <div
      data-tool={id}
      aria-hidden
      className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-[10px] font-semibold tracking-wide text-muted-foreground"
      title={name}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  )
}
