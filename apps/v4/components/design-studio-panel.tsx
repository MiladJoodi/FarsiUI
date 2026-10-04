"use client"

import { useState } from "react"
import { CheckIcon } from "lucide-react"
import { cn } from "cn"

import { useThemeConfig } from "@/components/active-theme"
import {
  OWNED_ACCENT_SYSTEMS,
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { useFontPreview } from "@/components/font-preview"
import type { UiFontId } from "@/lib/fonts"
import { THEME_LABELS, THEMES } from "@/lib/themes"

type MobileTab = "style" | "font" | "color"

function themeSwatch(themeName: string) {
  const theme = THEMES.find((item) => item.name === themeName) ?? THEMES[0]
  return `hsl(${theme?.activeColor.light})`
}

/** Mini visual thumbnail that hints at each design system's personality. */
function StyleThumb({
  id,
  selected,
}: {
  id: DesignSystemId
  selected: boolean
}) {
  const shells: Record<
    DesignSystemId,
    { wrap: string; a: string; b: string; c: string }
  > = {
    default: {
      wrap: "rounded-md bg-background",
      a: "h-1.5 w-5 rounded-sm bg-primary",
      b: "h-1 w-8 rounded-sm bg-foreground/20",
      c: "h-1 w-6 rounded-sm bg-foreground/12",
    },
    comfort: {
      wrap: "rounded-xl bg-background",
      a: "h-2 w-6 rounded-full bg-primary",
      b: "h-1.5 w-9 rounded-full bg-foreground/18",
      c: "h-1.5 w-7 rounded-full bg-foreground/10",
    },
    glass: {
      wrap: "rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/40 backdrop-blur-sm",
      a: "h-1.5 w-5 rounded-md bg-cyan-500/80",
      b: "h-1 w-8 rounded-md bg-foreground/25",
      c: "h-1 w-6 rounded-md bg-foreground/15",
    },
    rose: {
      wrap: "rounded-2xl bg-rose-500/12",
      a: "h-1.5 w-5 rounded-full bg-rose-400",
      b: "h-1 w-8 rounded-full bg-rose-300/50",
      c: "h-1 w-6 rounded-full bg-rose-200/40",
    },
    nili: {
      wrap: "rounded-md bg-slate-800",
      a: "h-1.5 w-5 rounded-sm bg-sky-400",
      b: "h-1 w-8 rounded-sm bg-slate-400/50",
      c: "h-1 w-6 rounded-sm bg-slate-500/40",
    },
    khesht: {
      wrap: "rounded-sm bg-amber-900/20",
      a: "h-1.5 w-5 rounded-[2px] bg-amber-700",
      b: "h-1 w-8 rounded-[2px] bg-amber-800/40",
      c: "h-1 w-6 rounded-[2px] bg-amber-700/30",
    },
  }

  const look = shells[id]

  return (
    <div
      aria-hidden
      className={cn(
        "flex h-10 w-full flex-col justify-center gap-1 border px-2",
        look.wrap,
        selected ? "border-primary/40" : "border-border/60"
      )}
    >
      <span className={look.a} />
      <span className={look.b} />
      <span className={look.c} />
    </div>
  )
}

function LivePreviewStrip({
  fontCssVar,
  showColor,
  colorLabel,
}: {
  fontCssVar: string
  showColor: boolean
  colorLabel: string
}) {
  return (
    <div
      dir="rtl"
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/40 px-3 py-2.5"
    >
      <span className="inline-flex h-8 shrink-0 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">
        دکمه
      </span>
      <div className="min-w-0 flex-1">
        <p
          className="truncate text-sm leading-snug text-foreground"
          style={{ fontFamily: `var(${fontCssVar})` }}
        >
          فارسیUI — نمونه ۱۲۳۴۵
        </p>
        {showColor ? (
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            رنگ اصلی: {colorLabel}
          </p>
        ) : (
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            رنگ این ظاهر ثابت است
          </p>
        )}
      </div>
    </div>
  )
}

export function useDesignStudioSummary() {
  const { designSystemId, presets } = useDesignSystemPreview()
  const { fontId, fonts } = useFontPreview()
  const { activeTheme } = useThemeConfig()
  const showPrimaryColor = !OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme

  const activeDs =
    presets.find((preset) => preset.id === designSystemId) ?? presets[0]
  const activeFont = fonts.find((font) => font.id === fontId) ?? fonts[0]
  const colorLabel = THEME_LABELS[currentTheme] ?? currentTheme

  const parts = [activeDs.label, activeFont.label]
  if (showPrimaryColor) parts.push(colorLabel)

  return {
    activeDs,
    activeFont,
    colorLabel,
    currentTheme,
    showPrimaryColor,
    summary: parts.join(" · "),
  }
}

/** Shared design studio body — used by desktop Popover and mobile Drawer. */
export function DesignStudioPanel({
  className,
  hideColor = false,
}: {
  className?: string
  /** When true (e.g. /showcase), never show the color tab. */
  hideColor?: boolean
}) {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()
  const { fontId, setFontId, fonts } = useFontPreview()
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const ownedAccent = OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const showPrimaryColor = !hideColor && !ownedAccent
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme
  const [tab, setTab] = useState<MobileTab>("style")

  const activeDs =
    presets.find((preset) => preset.id === designSystemId) ?? presets[0]
  const activeFont = fonts.find((font) => font.id === fontId) ?? fonts[0]
  const activeColorLabel = THEME_LABELS[currentTheme] ?? currentTheme

  const tabs: { id: MobileTab; label: string }[] = [
    { id: "style", label: "ظاهر" },
    { id: "font", label: "فونت" },
    ...(showPrimaryColor ? [{ id: "color" as const, label: "رنگ" }] : []),
  ]

  const visibleTab =
    tab === "color" && !showPrimaryColor ? "style" : tab

  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-3", className)}
    >
      <LivePreviewStrip
        fontCssVar={activeFont.cssVar}
        showColor={showPrimaryColor}
        colorLabel={activeColorLabel}
      />

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
                  : "text-muted-foreground hover:text-foreground active:text-foreground"
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {visibleTab === "style" ? (
        <section className="grid gap-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xs font-medium text-muted-foreground">
              سیستم طراحی
            </h3>
            <span className="truncate text-xs text-foreground/80">
              {activeDs.label}
            </span>
          </div>
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
                    "flex cursor-pointer flex-col gap-1.5 rounded-xl border p-2 text-start transition-colors",
                    selected
                      ? "border-primary bg-primary/8 ring-1 ring-primary/30"
                      : "border-border/70 hover:bg-muted/50 active:bg-muted"
                  )}
                >
                  <StyleThumb id={preset.id} selected={selected} />
                  <div className="flex flex-col gap-0.5 px-0.5">
                    <span className="text-sm font-medium leading-none">
                      {preset.label}
                    </span>
                    <span className="text-[11px] leading-snug text-muted-foreground">
                      {preset.hint}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
          {ownedAccent && !hideColor ? (
            <p className="text-[11px] leading-snug text-muted-foreground">
              رنگ این ظاهر ثابت است و از پالت جدا انتخاب نمی‌شود.
            </p>
          ) : null}
        </section>
      ) : null}

      {visibleTab === "font" ? (
        <section className="grid gap-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xs font-medium text-muted-foreground">
              فونت متن
            </h3>
            <span className="truncate text-xs text-foreground/80">
              {activeFont.label}
            </span>
          </div>
          <div
            role="listbox"
            aria-label="فونت"
            className="flex flex-col gap-1"
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
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-start transition-colors",
                    selected
                      ? "border-primary bg-primary/8 ring-1 ring-primary/30"
                      : "border-border/70 hover:bg-muted/50 active:bg-muted"
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <span
                      className="block text-sm font-medium leading-none"
                      style={{ fontFamily: `var(${font.cssVar})` }}
                    >
                      {font.label}
                    </span>
                    <span
                      className="mt-1 block truncate text-[11px] text-muted-foreground"
                      style={{ fontFamily: `var(${font.cssVar})` }}
                    >
                      فارسیUI — نمونه ۱۲۳۴۵
                    </span>
                  </div>
                  {selected ? (
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                  ) : null}
                </button>
              )
            })}
          </div>
        </section>
      ) : null}

      {visibleTab === "color" && showPrimaryColor ? (
        <section className="grid gap-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xs font-medium text-muted-foreground">
              رنگ اصلی
            </h3>
            <span className="truncate text-xs text-foreground/80">
              {activeColorLabel}
            </span>
          </div>
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
                    "flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border px-1.5 py-2 transition-colors",
                    selected
                      ? "border-primary bg-primary/8 ring-1 ring-primary/30"
                      : "border-border/70 hover:bg-muted/50 active:bg-muted"
                  )}
                >
                  <span
                    className="size-7 rounded-full shadow-sm ring-1 ring-foreground/10"
                    style={{ backgroundColor: themeSwatch(theme.name) }}
                  />
                  <span className="text-[11px] leading-none text-foreground/80">
                    {label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}
