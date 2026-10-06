"use client"

import { useCallback, useState } from "react"
import { CheckIcon, RotateCcwIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "cn"

import { useThemeConfig } from "@/components/active-theme"
import {
  OWNED_ACCENT_SYSTEMS,
  useDesignSystemPreview,
  type DesignSystemId,
} from "@/components/design-system-preview"
import { useFontPreview } from "@/components/font-preview"
import { DEFAULT_ACTIVE_THEME } from "@/lib/active-theme"
import { THEME_BEFORE_DARK_DS_KEY } from "@/lib/design-system"
import type { UiFontId } from "@/lib/fonts"
import { THEME_LABELS, THEMES } from "@/lib/themes"

type StudioTab = "style" | "font" | "color"

function themeSwatch(themeName: string) {
  const theme = THEMES.find((item) => item.name === themeName) ?? THEMES[0]
  return `hsl(${theme?.activeColor.light})`
}

/** Compact recipe thumb — muted accents; glass title readable on cyan card. */
function StyleThumb({ id }: { id: DesignSystemId }) {
  const looks: Record<
    DesignSystemId,
    { card: string; line: string; lineSoft: string; btn: string }
  > = {
    default: {
      card: "rounded-lg border border-border/60 bg-background",
      line: "rounded-sm bg-foreground/50",
      lineSoft: "rounded-sm bg-foreground/18",
      btn: "rounded-md bg-foreground/35",
    },
    comfort: {
      card: "rounded-2xl border border-border/45 bg-background",
      line: "rounded-full bg-foreground/40",
      lineSoft: "rounded-full bg-foreground/14",
      btn: "rounded-full bg-foreground/30",
    },
    glass: {
      card: "rounded-xl border border-cyan-500/25 bg-cyan-500/10",
      line: "rounded-md bg-cyan-950/55 dark:bg-cyan-100/55",
      lineSoft: "rounded-md bg-cyan-700/25 dark:bg-cyan-200/30",
      btn: "rounded-lg bg-cyan-700/45 dark:bg-cyan-300/35",
    },
    rose: {
      card: "rounded-[1.1rem] border border-rose-200/60 bg-[#fff6f6]",
      line: "rounded-full bg-rose-900/40",
      lineSoft: "rounded-full bg-rose-300/40",
      btn: "rounded-full bg-rose-400/55",
    },
    nili: {
      card: "rounded-md border border-slate-700/80 bg-slate-900",
      line: "rounded-sm bg-slate-300/65",
      lineSoft: "rounded-sm bg-slate-500/45",
      btn: "rounded-sm bg-slate-400/50",
    },
    khesht: {
      card: "rounded-md border-2 border-amber-950/45 bg-amber-50 shadow-[2px_2px_0_0_rgba(69,26,3,0.3)]",
      line: "rounded-[2px] bg-amber-950/55",
      lineSoft: "rounded-[2px] bg-amber-800/30",
      btn: "rounded-[2px] border border-amber-950/40 bg-amber-800/45",
    },
  }

  const look = looks[id]

  return (
    <div
      aria-hidden
      className={cn(
        "flex h-[3.25rem] w-full shrink-0 flex-col justify-center gap-1 p-2",
        look.card
      )}
    >
      <span className={cn("h-1.5 w-[58%] shrink-0", look.line)} />
      <span className={cn("h-1 w-[78%] shrink-0", look.lineSoft)} />
      <span className={cn("mt-0.5 h-3 w-[42%] shrink-0", look.btn)} />
    </div>
  )
}

export { useDesignStudioSummary } from "@/components/design-studio-summary"

/** Shared design studio body — used by desktop Popover and mobile Drawer. */
export function DesignStudioPanel({
  className,
  hideColor = false,
}: {
  className?: string
  /** When true (e.g. /demos), never show the color tab. */
  hideColor?: boolean
}) {
  const { designSystemId, setDesignSystemId, presets } =
    useDesignSystemPreview()
  const { fontId, setFontId, fonts } = useFontPreview()
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const { setTheme } = useTheme()
  const ownedAccent = OWNED_ACCENT_SYSTEMS.has(designSystemId)
  const showPrimaryColor = !hideColor && !ownedAccent
  const currentTheme = activeTheme === "default" ? "neutral" : activeTheme
  const [tab, setTab] = useState<StudioTab>("style")

  const tabs: { id: StudioTab; label: string }[] = [
    { id: "style", label: "ظاهر" },
    { id: "font", label: "فونت" },
    ...(showPrimaryColor ? [{ id: "color" as const, label: "رنگ" }] : []),
  ]

  const visibleTab =
    tab === "color" && !showPrimaryColor ? "style" : tab

  const resetToDefaults = useCallback(() => {
    try {
      sessionStorage.removeItem(THEME_BEFORE_DARK_DS_KEY)
    } catch {
      // Ignore private mode.
    }
    setDesignSystemId("default")
    setFontId("estedad")
    setTheme("system")
    setActiveTheme(DEFAULT_ACTIVE_THEME)
  }, [setActiveTheme, setDesignSystemId, setFontId, setTheme])

  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-2.5", className)}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/70">
        <div
          role="tablist"
          aria-label="تنظیمات دیزاین"
          className="flex min-w-0 items-stretch gap-0.5"
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
                  "relative h-8 cursor-pointer px-2.5 text-[13px] font-medium transition-colors",
                  selected
                    ? "text-foreground after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
        <button
          type="button"
          onClick={resetToDefaults}
          aria-label="بازنشانی به پیشفرض، استعداد و خاکستری"
          title="بازنشانی"
          className="mb-0.5 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        >
          <RotateCcwIcon className="size-3" />
        </button>
      </div>

      {visibleTab === "style" ? (
        <section className="grid gap-2">
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
                    "flex cursor-pointer flex-col gap-1.5 rounded-lg p-1.5 text-start transition-colors",
                    "hover:bg-muted/50 active:bg-muted/70",
                    selected && "bg-muted/40"
                  )}
                >
                  <span className="flex min-h-4 items-center gap-1 px-0.5">
                    <span className="min-w-0 flex-1 truncate text-sm font-medium leading-none">
                      {preset.label}
                    </span>
                    {selected ? (
                      <CheckIcon
                        className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden
                      />
                    ) : (
                      <span className="size-3.5 shrink-0" aria-hidden />
                    )}
                  </span>
                  <StyleThumb id={preset.id} />
                </button>
              )
            })}
          </div>
          {ownedAccent && !hideColor ? (
            <p className="text-[11px] leading-snug text-muted-foreground">
              رنگ این ظاهر ثابت است.
            </p>
          ) : null}
        </section>
      ) : null}

      {visibleTab === "font" ? (
        <section
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
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/70 px-3 py-2 text-start transition-colors hover:bg-muted/40 active:bg-muted/60"
              >
                <span
                  className="min-w-0 flex-1 truncate text-sm font-medium"
                  style={{ fontFamily: `var(${font.cssVar})` }}
                >
                  {font.label}
                </span>
                {selected ? (
                  <CheckIcon
                    className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                    aria-hidden
                  />
                ) : null}
              </button>
            )
          })}
        </section>
      ) : null}

      {visibleTab === "color" && showPrimaryColor ? (
        <section
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
                className="relative flex cursor-pointer items-center justify-center rounded-xl border border-border/70 py-2.5 transition-colors hover:bg-muted/40 active:bg-muted/60"
              >
                <span
                  className="size-7 rounded-full shadow-sm ring-1 ring-foreground/10"
                  style={{ backgroundColor: themeSwatch(theme.name) }}
                />
                {selected ? (
                  <CheckIcon
                    className="absolute end-1.5 top-1.5 size-3 text-emerald-600 dark:text-emerald-400"
                    aria-hidden
                  />
                ) : null}
              </button>
            )
          })}
        </section>
      ) : null}
    </div>
  )
}
