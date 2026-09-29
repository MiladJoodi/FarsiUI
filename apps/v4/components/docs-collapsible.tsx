"use client"

import * as React from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "cn"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FFa-z0-9-]/gi, "")
}

export function DocsCollapsible({
  title,
  id,
  defaultOpen = false,
  children,
  className,
}: {
  title: string
  id?: string
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}) {
  const headingId = id ?? slugify(title)

  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className={cn("group/docs-collapsible not-typeset my-6", className)}
    >
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center gap-2 rounded-lg py-1 text-start outline-none",
          "hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <h2
          id={headingId}
          className="font-heading scroll-m-24 text-xl font-medium tracking-tight"
        >
          {title}
        </h2>
        <IconChevronDown
          className={cn(
            "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            "group-data-[state=open]/docs-collapsible:rotate-180"
          )}
          aria-hidden
        />
        <span className="sr-only">باز و بسته کردن بخش</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-out data-[state=open]:animate-in">
        <div className="typeset pt-2 pb-1">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
