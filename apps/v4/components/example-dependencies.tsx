"use client"
import { ChevronDown } from "lucide-react"

import * as React from "react"
import { cn } from "cn"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

export function ExampleDependencies({
  dependencies,
  className,
}: {
  dependencies?: string[]
  className?: string
}) {
  const items = dependencies?.filter(Boolean) ?? []
  if (items.length === 0) {
    return null
  }

  return (
    <Collapsible
      defaultOpen={false}
      className={cn(
        "group/example-deps not-typeset mt-3 rounded-xl border bg-muted/20",
        className
      )}
    >
      <CollapsibleTrigger
        aria-label="وابستگی‌ها — باز و بسته کردن"
        className={cn(
          "flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-start outline-none",
          "hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        <span className="text-sm font-medium">وابستگی‌ها</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            "group-data-[state=open]/example-deps:rotate-180"
          )}
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-[docs-collapsible-up_200ms_ease-out] data-[state=open]:animate-[docs-collapsible-down_200ms_ease-out]">
        <div className="flex flex-wrap gap-2 border-t px-3.5 py-3">
          {items.map((name) => (
            <code
              key={name}
              className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-foreground"
            >
              {name}
            </code>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
