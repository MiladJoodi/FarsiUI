"use client"

import { useState } from "react"
import { CheckIcon, SlidersHorizontalIcon } from "lucide-react"
import { cn } from "cn"

import { useThemeConfig } from "@/components/active-theme"
import {
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { DesignSystemPicker } from "@/components/design-system-picker"
import { FontPicker } from "@/components/font-picker"
import { HeaderPrimaryColors } from "@/components/header-primary-colors"
import { useFontPreview } from "@/components/font-preview"
import { schedulePrefetchDesignSystemStyles } from "@/lib/design-system-style-loader"
import type { UiFontId } from "@/lib/fonts"
import { THEMES } from "@/lib/themes"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const OWNED_ACCENT_SYSTEMS = new Set(["glass", "rose", "nili", "khesht"])

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

function OptionRow({
  selected,
  onSelect,
  children,
  style,
}: {
  selected: boolean
  onSelect: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onSelect}
      style={style}
      className={cn(
        "flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-base transition-colors",
        selected
          ? "border-primary bg-primary/10 text-foreground"
          : "border-border/70 bg-background text-foreground active:bg-muted"
      )}
    >
      <span className="min-w-0 flex-1 text-start">{children}</span>
      {selected ? (
        <CheckIcon className="size-5 shrink-0 text-primary" aria-hidden />
      ) : (
        <span className="size-5 shrink-0" aria-hidden />
      )}
    </button>
  )
}

/** Flat lists — no Select/Popover portals inside the drawer (those fight vaul). */
function MobileDesignPanel() {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()
  const { fontId, setFontId, fonts } = useFontPreview()
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const showPrimaryColor = !OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme

  return (
    <div dir="rtl" lang="fa" className="grid gap-6 px-4 pb-8 pt-1">
      <section className="grid gap-2.5">
        <h3 className="text-sm font-medium text-muted-foreground">
          سیستم طراحی
        </h3>
        <div role="listbox" aria-label="سیستم طراحی" className="grid gap-2">
          {presets.map((preset) => (
            <OptionRow
              key={preset.id}
              selected={designSystemId === preset.id}
              onSelect={() => setDesignSystemId(preset.id as DesignSystemId)}
            >
              {preset.label}
            </OptionRow>
          ))}
        </div>
      </section>

      <section className="grid gap-2.5">
        <h3 className="text-sm font-medium text-muted-foreground">فونت</h3>
        <div role="listbox" aria-label="فونت" className="grid gap-2">
          {fonts.map((font) => (
            <OptionRow
              key={font.id}
              selected={fontId === font.id}
              onSelect={() => setFontId(font.id as UiFontId)}
              style={{ fontFamily: `var(${font.cssVar})` }}
            >
              {font.label}
            </OptionRow>
          ))}
        </div>
      </section>

      {showPrimaryColor ? (
        <section className="grid gap-2.5">
          <h3 className="text-sm font-medium text-muted-foreground">
            رنگ اصلی
          </h3>
          <div
            role="listbox"
            aria-label="رنگ اصلی"
            className="grid grid-cols-4 gap-2"
          >
            {THEMES.map((theme) => {
              const selected = currentTheme === theme.name
              const label = THEME_LABELS[theme.name] ?? theme.label
              return (
                <button
                  key={theme.name}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  aria-label={label}
                  title={label}
                  onClick={() => setActiveTheme(theme.name)}
                  className={cn(
                    "flex min-h-14 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border px-1 py-2 text-xs transition-colors",
                    selected
                      ? "border-primary bg-primary/10"
                      : "border-border/70 active:bg-muted"
                  )}
                >
                  <span
                    className="size-7 rounded-full ring-1 ring-foreground/10"
                    style={{ backgroundColor: themeSwatch(theme.name) }}
                  />
                  <span className="truncate">{label}</span>
                </button>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}

function MobileDesignButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) schedulePrefetchDesignSystemStyles()
      }}
      shouldScaleBackground={false}
      repositionInputs={false}
    >
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-label="دیزاین"
          className={cn(
            "h-9 shrink-0 cursor-pointer gap-1.5 border-border/80 bg-background/80 px-3 text-sm shadow-none",
            className
          )}
          onPointerEnter={() => schedulePrefetchDesignSystemStyles()}
        >
          <SlidersHorizontalIcon className="size-4" />
          دیزاین
        </Button>
      </DrawerTrigger>
      <DrawerContent
        dir="rtl"
        lang="fa"
        className="max-h-[90vh] rounded-t-2xl"
      >
        <DrawerHeader className="gap-1 text-start">
          <DrawerTitle className="text-lg">دیزاین</DrawerTitle>
          <DrawerDescription className="text-sm">
            سیستم طراحی، فونت و رنگ را انتخاب کنید.
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <MobileDesignPanel />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

/** Desktop: inline pickers. Mobile: one Design button → drawer with flat options. */
export function HeaderDesignControls({
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex min-w-0 items-center gap-1.5 sm:gap-2", className)}>
      <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
        <DesignSystemPicker />
        <FontPicker />
        <Separator orientation="vertical" className="hidden sm:block" />
        <HeaderPrimaryColors />
      </div>
      <MobileDesignButton className="sm:hidden" />
    </div>
  )
}
