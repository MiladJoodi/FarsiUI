"use client"

import * as React from "react"
import Script from "next/script"
import { cn } from "cn"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { useMetaColor } from "@/hooks/use-meta-color"
import { Button } from "@/registry/new-york-v4/ui/button"

export const DARK_MODE_FORWARD_TYPE = "dark-mode-forward"

export function ModeSwitcher({
  variant = "ghost",
  className,
}: {
  variant?: React.ComponentProps<typeof Button>["variant"]
  className?: React.ComponentProps<typeof Button>["className"]
}) {
  const { setTheme, resolvedTheme } = useTheme()
  const { setMetaColor, metaColor } = useMetaColor()

  React.useEffect(() => {
    setMetaColor(metaColor)
  }, [metaColor, setMetaColor])

  // Hand off from the pre-hydration click listener in root layout.
  React.useEffect(() => {
    ;(window as Window & { __modeSwitchHydrated?: boolean }).__modeSwitchHydrated =
      true
    // #region agent log
    const t = Math.round(performance.now())
    const dbg = (
      window as Window & { __farsiHeaderDebug?: { modeSwitcherMount?: number } }
    ).__farsiHeaderDebug
    if (dbg) dbg.modeSwitcherMount = t
    fetch("http://127.0.0.1:7896/ingest/5b150b1c-f596-4344-bc6e-c0563c0599de", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bf5044",
      },
      body: JSON.stringify({
        sessionId: "bf5044",
        runId: "post-fix",
        hypothesisId: "C",
        location: "mode-switcher.tsx:hydrate",
        message: "ModeSwitcher hydrated",
        data: { t },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
  }, [])

  const toggleTheme = React.useCallback(() => {
    // Fall back to the html class when next-themes has not resolved yet.
    const current =
      resolvedTheme ??
      (typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light")
    setTheme(current === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <Button
      type="button"
      variant={variant}
      size="icon"
      data-mode-switch=""
      className={cn(
        "group/toggle relative extend-touch-target size-8 cursor-pointer",
        className
      )}
      onClick={toggleTheme}
    >
      <SunIcon className="size-4.5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-4.5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">تغییر تم</span>
    </Button>
  )
}

export function DarkModeScript() {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id="dark-mode-listener"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function() {
              // Forward D key
              document.addEventListener('keydown', function(e) {
                if ((e.key === 'd' || e.key === 'D') && !e.metaKey && !e.ctrlKey && !e.altKey) {
                  if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                  ) {
                    return;
                  }
                  e.preventDefault();
                  if (window.parent && window.parent !== window) {
                    window.parent.postMessage({
                      type: '${DARK_MODE_FORWARD_TYPE}',
                      key: e.key
                    }, '*');
                  }
                }
              });

            })();
          `,
      }}
    />
  )
}
