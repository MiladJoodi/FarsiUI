"use client"

import * as React from "react"
import { SearchIcon, XIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd"

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
}: {
  value: string
  onValueChange: (value: string) => void
  onClear: () => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.key === "k" && (event.metaKey || event.ctrlKey))) {
        return
      }

      const input = inputRef.current
      if (!input || input.offsetParent === null) {
        return
      }

      const target = event.target
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        if (target !== input) {
          return
        }
      }

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()
      input.focus()
      input.select()
    }

    document.addEventListener("keydown", onKeyDown, true)
    return () => document.removeEventListener("keydown", onKeyDown, true)
  }, [])

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
        placeholder="جستجو در ناوبری..."
        className="h-8 text-[0.8rem]"
        aria-label="جستجو در آیتم‌های سایدبار"
      />
      <InputGroupAddon align="inline-end" className="gap-1">
        {value ? (
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
        ) : (
          <KbdGroup
            dir="ltr"
            className="pointer-events-none opacity-0 transition-opacity group-focus-within/sidebar-search:opacity-100 group-hover/sidebar-search:opacity-100"
          >
            <Kbd className="h-5 bg-muted/80 px-1.5 text-[0.65rem]">Ctrl</Kbd>
            <Kbd className="h-5 bg-muted/80 px-1.5 text-[0.65rem]">K</Kbd>
          </KbdGroup>
        )}
      </InputGroupAddon>
    </InputGroup>
  )
}
