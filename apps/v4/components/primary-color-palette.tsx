"use client"

import * as React from "react"
import { CheckIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "cn"

import { THEMES } from "@/lib/themes"
import { useThemeConfig } from "@/components/active-theme"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

const THEME_LABELS: Record<string, string> = {
  neutral: "خاکستری",
  blue: "آبی",
  green: "سبز",
  orange: "نارنجی",
  red: "قرمز",
  rose: "رز",
  violet: "بنفش",
  yellow: "زرد",
}

function themeSwatch(themeName: string) {
  const theme = THEMES.find((item) => item.name === themeName) ?? THEMES[0]
  return `hsl(${theme?.activeColor.light})`
}

function checkContrastClass(themeName: string) {
  return themeName === "neutral" || themeName === "yellow"
    ? "text-black"
    : "text-white"
}

function ColorDot({
  themeName,
  size = "md",
  checked = false,
}: {
  themeName: string
  size?: "sm" | "md"
  checked?: boolean
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        size === "sm" ? "size-3.5" : "size-5"
      )}
      style={{ backgroundColor: themeSwatch(themeName) } as React.CSSProperties}
    >
      {checked ? (
        <CheckIcon
          className={cn(
            size === "sm" ? "size-2.5" : "size-3.5",
            checkContrastClass(themeName)
          )}
        />
      ) : null}
    </span>
  )
}

export function PrimaryColorPalette({
  className,
  compact = false,
}: React.ComponentProps<"div"> & { compact?: boolean }) {
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const current = activeTheme === "default" ? "neutral" : activeTheme
  const currentLabel = THEME_LABELS[current] ?? current
  const [open, setOpen] = React.useState(false)

  if (compact) {
    return (
      <div dir="rtl" className={cn("shrink-0", className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="sm"
              aria-label={`رنگ اصلی: ${currentLabel}`}
              title={currentLabel}
              className="h-8 gap-1.5 rounded-full border-border/80 pe-2 ps-1.5 shadow-none"
            >
              <span className="flex size-5 items-center justify-center rounded-full border-2 border-foreground">
                <ColorDot themeName={current} size="sm" />
              </span>
              <ChevronUpIcon
                className={cn(
                  "size-3.5 text-muted-foreground transition-transform",
                  open && "rotate-180"
                )}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            align="end"
            side="top"
            sideOffset={8}
            className="w-44 p-1.5"
          >
            <div
              role="listbox"
              aria-label="انتخاب رنگ اصلی"
              className="flex flex-col gap-0.5"
            >
              {THEMES.map((theme) => {
                const isActive = current === theme.name
                const label = THEME_LABELS[theme.name] ?? theme.label

                return (
                  <button
                    key={theme.name}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent/70"
                    )}
                    onClick={() => {
                      setActiveTheme(theme.name)
                      setOpen(false)
                    }}
                  >
                    <span
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full border-2",
                        isActive ? "border-foreground" : "border-transparent"
                      )}
                    >
                      <ColorDot
                        themeName={theme.name}
                        size="sm"
                        checked={isActive}
                      />
                    </span>
                    <span className="flex-1 text-start">{label}</span>
                  </button>
                )
              })}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }

  return (
    <div
      dir="rtl"
      role="radiogroup"
      aria-label="رنگ اصلی"
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
    >
      {THEMES.map((theme) => {
        const isActive = current === theme.name
        const label = THEME_LABELS[theme.name] ?? theme.label

        return (
          <Button
            key={theme.name}
            type="button"
            variant="outline"
            size="icon"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            data-active={isActive}
            className={cn(
              "size-8 rounded-full border-2 p-0 shadow-none",
              isActive
                ? "border-foreground"
                : "border-transparent hover:border-foreground/30"
            )}
            onClick={() => setActiveTheme(theme.name)}
          >
            <ColorDot themeName={theme.name} checked={isActive} />
          </Button>
        )
      })}
    </div>
  )
}
