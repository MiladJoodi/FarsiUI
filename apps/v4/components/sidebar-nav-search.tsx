"use client"

import * as React from "react"
import { SearchIcon, XIcon } from "lucide-react"
import { cn } from "cn"

export function normalizeNavSearch(value: string) {
  return value
    .toLowerCase()
    .replace(/\u200c/g, "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .trim()
}

export function matchesNavQuery(haystack: string, query: string) {
  if (!query) return true
  return normalizeNavSearch(haystack).includes(query)
}

export function SidebarNavSearch({
  value,
  onValueChange,
  onClear,
  inputClassName,
}: {
  value: string
  onValueChange: (value: string) => void
  onClear: () => void
  inputClassName?: string
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="group/sidebar-search relative w-full">
      <SearchIcon
        aria-hidden
        className="pointer-events-none absolute start-3 top-1/2 z-10 size-3.5 -translate-y-1/2 text-muted-foreground/70"
      />
      <input
        ref={inputRef}
        data-sidebar-nav-search=""
        data-slot="input-group-control"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault()
            if (value) {
              onClear()
            } else {
              event.currentTarget.blur()
            }
          }
        }}
        placeholder="جستجو..."
        aria-label="جستجو در آیتم‌های سایدبار"
        className={cn(
          "h-8 w-full min-w-0 rounded-md border border-border/70 bg-background/80 py-0 pe-9 ps-9 text-[0.8rem] leading-none text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground",
          "focus-visible:border-foreground/35 focus-visible:ring-0",
          "dark:border-border/60 dark:bg-input/20 dark:focus-visible:border-foreground/45",
          inputClassName
        )}
      />
      {value ? (
        <button
          type="button"
          aria-label="پاک کردن جستجو"
          className="absolute end-1.5 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => {
            onClear()
            inputRef.current?.focus()
          }}
        >
          <XIcon className="size-3.5" />
        </button>
      ) : null}
    </div>
  )
}
