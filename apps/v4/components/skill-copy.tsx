"use client"

import * as React from "react"
import { IconCheck, IconCopy } from "@tabler/icons-react"

import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"
import { cn } from "cn"

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
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div
      dir="ltr"
      lang="en"
      className={cn(
        "relative flex items-center gap-2 overflow-x-auto rounded-xl border bg-muted/40 px-3 py-2.5 font-mono text-[13px] text-foreground",
        className
      )}
    >
      <span className="select-none text-muted-foreground">$</span>
      <code className="min-w-0 flex-1 whitespace-pre">{command}</code>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="size-7 shrink-0"
        aria-label="کپی دستور"
        onClick={async () => {
          const ok = await copyToClipboardWithMeta(command)
          if (ok) setCopied(true)
        }}
      >
        {copied ? <IconCheck className="size-3.5" /> : <IconCopy className="size-3.5" />}
      </Button>
    </div>
  )
}

export function SkillCopyTextButton({
  value,
  label = "کپی",
}: {
  value: string
  label?: string
}) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      className="gap-1.5"
      onClick={async () => {
        const ok = await copyToClipboardWithMeta(value)
        if (ok) setCopied(true)
      }}
    >
      {copied ? <IconCheck className="size-3.5" /> : <IconCopy className="size-3.5" />}
      {copied ? "کپی شد" : label}
    </Button>
  )
}
