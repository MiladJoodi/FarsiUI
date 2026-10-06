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

/** Mini visual thumbnail — fixed height so all recipes match. */
function StyleThumb({ id }: { id: DesignSystemId }) {
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
      a: "h-1.5 w-6 rounded-full bg-primary",
      b: "h-1 w-9 rounded-full bg-foreground/18",
      c: "h-1 w-7 rounded-full bg-foreground/10",
    },
    glass: {
      wrap: "rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/40",
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
        "flex h-10 w-full shrink-0 flex-col justify-center gap-1 border border-border/60 px-2",
        look.wrap
      )}
    >
      <span className={cn("shrink-0", look.a)} />
      <span className={cn("shrink-0", look.b)} />
      <span className={cn("shrink-0", look.c)} />
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
                  className="flex cursor-pointer flex-col gap-1.5 rounded-xl border border-border/70 p-2 text-start transition-colors hover:bg-muted/40 active:bg-muted/60"
                >
                  <StyleThumb id={preset.id} />
                  <span className="flex items-center gap-1 px-0.5 text-sm font-medium leading-none">
                    <span className="min-w-0 flex-1 truncate">{preset.label}</span>
                    {selected ? (
                      <CheckIcon
                        className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden
                      />
                    ) : null}
                  </span>
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
