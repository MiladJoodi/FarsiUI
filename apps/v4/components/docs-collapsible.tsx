"use client"

import * as React from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "cn"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

export function DocsCollapsible({
  title,
  defaultOpen = false,
  children,
  className,
}: {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className={cn("group/docs-collapsible not-typeset my-8", className)}
    >
      <CollapsibleTrigger
        aria-label={`${title} — باز و بسته کردن`}
        className={cn(
          "flex w-full items-center gap-2 rounded-md py-1 text-start outline-none",
          "hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <h2 className="font-heading scroll-m-24 text-xl font-medium tracking-tight">
          {title}
        </h2>
        <IconChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
            "group-data-[state=open]/docs-collapsible:rotate-180"
          )}
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "overflow-hidden",
          "data-[state=open]:animate-[docs-collapsible-down_300ms_ease-out]",
          "data-[state=closed]:animate-[docs-collapsible-up_250ms_ease-out]"
        )}
      >
        <div className="typeset pt-3">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
