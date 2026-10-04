"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "cn"

import { THEMES } from "@/lib/themes"
import { useThemeConfig } from "@/components/active-theme"
import { useDesignSystemPreview } from "@/components/design-system-preview"
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
  const { designSystemId } = useDesignSystemPreview()
  const current = activeTheme === "default" ? "neutral" : activeTheme
  const currentLabel = THEME_LABELS[current] ?? current
  const [open, setOpen] = React.useState(false)

  // Owned-accent design systems; Primary Color must not recolor them.
  if (
    designSystemId === "glass" ||
    designSystemId === "rose" ||
    designSystemId === "nili" ||
    designSystemId === "khesht"
  ) {
    return null
  }

  if (compact) {
    return (
      <div dir="rtl" className={cn("shrink-0", className)}>
        <Popover open={open} onOpenChange={setOpen} modal={false}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label={`رنگ اصلی: ${currentLabel}`}
              title={currentLabel}
              className="h-8 cursor-pointer gap-0.5 rounded-full border-0 px-1 shadow-none hover:bg-transparent"
            >
              <ColorDot themeName={current} size="sm" />
              <ChevronDownIcon
                className={cn(
                  "size-3.5 text-muted-foreground transition-transform duration-150",
                  open && "rotate-180"
                )}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            align="end"
            side="bottom"
            sideOffset={6}
            className="w-44 p-1.5 duration-100 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-100 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-100"
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
                      "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent/70"
                    )}
                    onClick={() => {
                      setActiveTheme(theme.name)
                      setOpen(false)
                    }}
                  >
                    <ColorDot
                      themeName={theme.name}
                      size="sm"
                      checked={isActive}
                    />
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
              "size-8 cursor-pointer rounded-full border-2 p-0 shadow-none",
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
