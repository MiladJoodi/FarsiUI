"use client"

import * as React from "react"
import { cn } from "cn"

export type DocsPreviewSwitcherOption = {
  id: string
  label: string
}

/** Simple inline sample picker for docs preview players. */
export function DocsPreviewSwitcher({
  options,
  value,
  onValueChange,
  "aria-label": ariaLabel = "نمونه‌ها",
  className,
}: {
  options: DocsPreviewSwitcherOption[]
  value: string
  onValueChange: (id: string) => void
  "aria-label"?: string
  className?: string
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      data-slot="docs-preview-switcher"
      data-not-typeset
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className
      )}
    >
      {options.map((option) => {
        const isActive = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onValueChange(option.id)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export function DocsPreviewSwitcherStage({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="docs-preview-stage"
      data-not-typeset
      className={cn(
        "flex min-h-48 w-full flex-col items-center justify-center py-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
