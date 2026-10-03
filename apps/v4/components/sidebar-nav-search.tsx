"use client"

import * as React from "react"
import { SearchIcon, XIcon } from "lucide-react"
import { cn } from "cn"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"

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
    <InputGroup className="group/sidebar-search h-8 border-border/70 bg-background/80 shadow-none transition-colors focus-within:border-foreground/35 has-[[data-slot=input-group-control]:focus-visible]:border-foreground/35 has-[[data-slot=input-group-control]:focus-visible]:ring-0 dark:bg-input/20 dark:focus-within:border-foreground/45 dark:has-[[data-slot=input-group-control]:focus-visible]:border-foreground/45">
      <InputGroupAddon>
        <SearchIcon className="size-3.5 opacity-60" />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        data-sidebar-nav-search=""
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
        className={cn("h-8 text-[0.8rem]", inputClassName)}
        aria-label="جستجو در آیتم‌های سایدبار"
      />
      {value ? (
        <InputGroupAddon align="inline-end" className="gap-1">
          <InputGroupButton
            size="icon-xs"
            aria-label="پاک کردن جستجو"
            onClick={() => {
              onClear()
              inputRef.current?.focus()
            }}
          >
            <XIcon className="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
      ) : null}
    </InputGroup>
  )
}
