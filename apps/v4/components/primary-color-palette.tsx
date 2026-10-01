"use client"

import { CheckIcon } from "lucide-react"
import { cn } from "cn"

import { THEMES } from "@/lib/themes"
import { useThemeConfig } from "@/components/active-theme"
import { Button } from "@/styles/radix-luma/ui/button"

const THEME_LABELS: Record<string, string> = {
  neutral: "خنثی",
  blue: "آبی",
  green: "سبز",
  orange: "نارنجی",
  red: "قرمز",
  rose: "رز",
  violet: "بنفش",
  yellow: "زرد",
}

export function PrimaryColorPalette({
  className,
  compact = false,
}: React.ComponentProps<"div"> & { compact?: boolean }) {
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const current = activeTheme === "default" ? "neutral" : activeTheme

  return (
    <div
      dir="rtl"
      role="radiogroup"
      aria-label="رنگ اصلی"
      className={cn(
        "flex flex-wrap items-center gap-1.5",
        compact ? "justify-end" : "justify-center gap-2",
        className
      )}
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
              "rounded-full border-2 p-0 shadow-none",
              compact ? "size-6" : "size-8",
              isActive
                ? "border-foreground"
                : "border-transparent hover:border-foreground/30"
            )}
            onClick={() => setActiveTheme(theme.name)}
          >
            <span
              className={cn(
                "flex items-center justify-center rounded-full",
                compact ? "size-3.5" : "size-5"
              )}
              style={
                {
                  backgroundColor: `hsl(${theme.activeColor.light})`,
                } as React.CSSProperties
              }
            >
              {isActive ? (
                <CheckIcon
                  className={cn(
                    compact ? "size-2.5" : "size-3.5",
                    theme.name === "neutral" || theme.name === "yellow"
                      ? "text-black"
                      : "text-white"
                  )}
                />
              ) : null}
            </span>
          </Button>
        )
      })}
    </div>
  )
}
