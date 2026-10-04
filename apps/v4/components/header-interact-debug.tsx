"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    __farsiHeaderDebug?: {
      navStart: number
      headerActionsMount?: number
      headerHeavyReady?: number
      collageReady?: number
      modeSwitcherMount?: number
      longTasksMs: number
      longTaskCount: number
    }
  }
}

function dbg(
  hypothesisId: string,
  location: string,
  message: string,
  data: Record<string, unknown>
) {
  // #region agent log
  fetch("http://127.0.0.1:7896/ingest/5b150b1c-f596-4344-bc6e-c0563c0599de", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "bf5044",
    },
    body: JSON.stringify({
      sessionId: "bf5044",
      runId: "post-fix",
      hypothesisId,
      location,
      message,
      data: { ...data, fix: "explicit-load-only" },
      timestamp: Date.now(),
    }),
  }).catch(() => {})
  // #endregion
}

/** Temporary probe: timing + first header clicks / long tasks. */
export function HeaderInteractDebug() {
  useEffect(() => {
    const navStart =
      performance.getEntriesByType("navigation")[0]?.startTime === 0
        ? performance.timeOrigin
        : performance.timeOrigin
    window.__farsiHeaderDebug = {
      navStart: performance.now(),
      longTasksMs: 0,
      longTaskCount: 0,
    }
    dbg("E", "header-interact-debug.tsx:mount", "debug probe mounted", {
      href: location.pathname,
      headerHidden: document.documentElement.hasAttribute("data-header-hidden"),
      t: Math.round(performance.now()),
      navStart,
    })

    const onPointerDown = (e: PointerEvent) => {
      const el = e.target as Element | null
      const header = el?.closest?.("[data-site-header]")
      if (!header) return
      const d = window.__farsiHeaderDebug
      const pe = getComputedStyle(header).pointerEvents
      dbg("A", "header-interact-debug.tsx:pointerdown", "header pointerdown", {
        t: Math.round(performance.now()),
        tag: el?.tagName,
        text: (el?.textContent || "").slice(0, 40),
        pointerEvents: pe,
        headerHidden: document.documentElement.hasAttribute(
          "data-header-hidden"
        ),
        headerHeavyReadyAt: d?.headerHeavyReady ?? null,
        collageReadyAt: d?.collageReady ?? null,
        modeSwitcherMountAt: d?.modeSwitcherMount ?? null,
        longTaskCount: d?.longTaskCount ?? 0,
        longTasksMs: d?.longTasksMs ?? 0,
        heavyReadyAlready: Boolean(d?.headerHeavyReady),
      })
    }

    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null
      const header = el?.closest?.("[data-site-header]")
      if (!header) return
      dbg("A", "header-interact-debug.tsx:click", "header click fired", {
        t: Math.round(performance.now()),
        defaultPrevented: e.defaultPrevented,
        tag: el?.tagName,
      })
    }

    window.addEventListener("pointerdown", onPointerDown, true)
    window.addEventListener("click", onClick, true)

    let obs: PerformanceObserver | null = null
    try {
      obs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration < 50) continue
          const d = window.__farsiHeaderDebug
          if (d) {
            d.longTaskCount += 1
            d.longTasksMs += entry.duration
          }
          dbg("E", "header-interact-debug.tsx:longtask", "long task", {
            t: Math.round(performance.now()),
            duration: Math.round(entry.duration),
            start: Math.round(entry.startTime),
            heavyReady: Boolean(d?.headerHeavyReady),
            collageReady: Boolean(d?.collageReady),
          })
        }
      })
      obs.observe({ type: "longtask", buffered: true } as PerformanceObserverInit)
    } catch {
      // longtask unsupported
    }

    return () => {
      window.removeEventListener("pointerdown", onPointerDown, true)
      window.removeEventListener("click", onClick, true)
      obs?.disconnect()
    }
  }, [])

  return null
}
