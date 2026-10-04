"use client"

import { useState } from "react"
import { SlidersHorizontalIcon } from "lucide-react"
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

const DS_HINTS: Record<string, string> = {
  default: "استاندارد",
  comfort: "آروم و باز",
  glass: "شیشه‌ای",
  rose: "گرم و نرم",
  nili: "سرد و تیره",
  khesht: "خاکی و پررنگ",
}

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

type MobileTab = "style" | "font" | "color"

function themeSwatch(themeName: string) {
  const theme = THEMES.find((item) => item.name === themeName) ?? THEMES[0]
  return `hsl(${theme?.activeColor.light})`
}

function SectionLabel({
  children,
  value,
}: {
  children: React.ReactNode
  value?: string
}) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <h3 className="text-xs font-medium text-muted-foreground">{children}</h3>
      {value ? (
        <span className="truncate text-xs text-foreground/80">{value}</span>
      ) : null}
    </div>
  )
}

/** Compact mobile panel: tabs + chips — easy to scan, one job at a time. */
function MobileDesignPanel() {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()
  const { fontId, setFontId, fonts } = useFontPreview()
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const showPrimaryColor = !OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme
  const [tab, setTab] = useState<MobileTab>("style")

  const activeDs =
    presets.find((preset) => preset.id === designSystemId) ?? presets[0]
  const activeFont = fonts.find((font) => font.id === fontId) ?? fonts[0]
  const activeColorLabel = THEME_LABELS[currentTheme] ?? currentTheme

  const tabs: { id: MobileTab; label: string }[] = [
    { id: "style", label: "ظاهر" },
    { id: "font", label: "فونت" },
    ...(showPrimaryColor
      ? [{ id: "color" as const, label: "رنگ" }]
      : []),
  ]

  // If color tab hides after switching DS, fall back to style.
  const visibleTab =
    tab === "color" && !showPrimaryColor ? "style" : tab

  return (
    <div dir="rtl" lang="fa" className="flex flex-col gap-4 px-4 pb-6 pt-1">
      <div
        role="tablist"
        aria-label="تنظیمات دیزاین"
        className={cn(
          "grid gap-1 rounded-xl bg-muted p-1",
          showPrimaryColor ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {tabs.map((item) => {
          const selected = visibleTab === item.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setTab(item.id)}
              className={cn(
                "min-h-9 cursor-pointer rounded-lg px-2 text-sm font-medium transition-colors",
                selected
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground active:text-foreground"
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {visibleTab === "style" ? (
        <section className="grid gap-2">
          <SectionLabel value={activeDs.label}>سیستم طراحی</SectionLabel>
          <div
            role="listbox"
            aria-label="سیستم طراحی"
            className="grid grid-cols-2 gap-2"
          >
            {presets.map((preset) => {
              const selected = designSystemId === preset.id
              return (
                <button
                  key={preset.id}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() =>
                    setDesignSystemId(preset.id as DesignSystemId)
                  }
                  className={cn(
                    "flex cursor-pointer flex-col items-start gap-0.5 rounded-xl border px-3 py-2.5 text-start transition-colors",
                    selected
                      ? "border-primary bg-primary/8 ring-1 ring-primary/30"
                      : "border-border/70 active:bg-muted"
                  )}
                >
                  <span className="text-sm font-medium leading-none">
                    {preset.label}
                  </span>
                  <span className="text-[11px] leading-snug text-muted-foreground">
                    {DS_HINTS[preset.id] ?? ""}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      ) : null}

      {visibleTab === "font" ? (
        <section className="grid gap-2">
          <SectionLabel value={activeFont.label}>فونت متن</SectionLabel>
          <div
            role="listbox"
            aria-label="فونت"
            className="flex flex-wrap gap-1.5"
          >
            {fonts.map((font) => {
              const selected = fontId === font.id
              return (
                <button
                  key={font.id}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => setFontId(font.id as UiFontId)}
                  style={{ fontFamily: `var(${font.cssVar})` }}
                  className={cn(
                    "cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors",
                    selected
                      ? "border-primary bg-primary/8 text-foreground ring-1 ring-primary/30"
                      : "border-border/70 text-foreground active:bg-muted"
                  )}
                >
                  {font.label}
                </button>
              )
            })}
          </div>
          <p
            className="rounded-xl bg-muted/60 px-3 py-3 text-[15px] leading-7 text-foreground"
            style={{ fontFamily: `var(${activeFont.cssVar})` }}
          >
            نمونه: کتابخانه کامپوننت فارسی — ۱۲۳۴۵
          </p>
        </section>
      ) : null}

      {visibleTab === "color" && showPrimaryColor ? (
        <section className="grid gap-2">
          <SectionLabel value={activeColorLabel}>رنگ اصلی</SectionLabel>
          <div
            role="listbox"
            aria-label="رنگ اصلی"
            className="flex flex-wrap justify-start gap-2.5"
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
                    "flex size-10 cursor-pointer items-center justify-center rounded-full transition-transform active:scale-95",
                    selected && "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  )}
                >
                  <span
                    className="size-8 rounded-full shadow-sm ring-1 ring-foreground/10"
                    style={{ backgroundColor: themeSwatch(theme.name) }}
                  />
                </button>
              )
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            انتخاب‌شده: {activeColorLabel}
          </p>
        </section>
      ) : null}
    </div>
  )
}

function MobileDesignButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const { designSystemId, presets } = useDesignSystemPreview()
  const { fontId, fonts } = useFontPreview()
  const activeDs =
    presets.find((preset) => preset.id === designSystemId)?.label ?? "پیشفرض"
  const activeFont =
    fonts.find((font) => font.id === fontId)?.label ?? "فونت"

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
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
            "h-8 shrink-0 cursor-pointer gap-1.5 border-border/80 bg-background/80 px-2.5 text-xs shadow-none",
            className
          )}
        >
          <SlidersHorizontalIcon className="size-3.5" />
          دیزاین
        </Button>
      </DrawerTrigger>
      <DrawerContent
        dir="rtl"
        lang="fa"
        className="max-h-[min(85vh,32rem)] rounded-t-2xl"
      >
        <DrawerHeader className="gap-0.5 pb-2 text-start">
          <DrawerTitle className="text-base">دیزاین</DrawerTitle>
          <DrawerDescription className="text-xs">
            {activeDs} · {activeFont}
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <MobileDesignPanel />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

/** Desktop: inline pickers. Mobile: compact tabbed design drawer. */
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
