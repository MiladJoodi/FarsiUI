"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { cn } from "cn"

const CardsDemo = dynamic(
  () => import("./cards").then((mod) => ({ default: mod.CardsDemo })),
  { ssr: false }
)

const CardsDemoMobile = dynamic(
  () => import("./cards").then((mod) => ({ default: mod.CardsDemoMobile })),
  { ssr: false }
)

function CollagePlaceholder({
  className,
  heightClass,
}: {
  className?: string
  heightClass: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full animate-pulse rounded-none bg-muted/50",
        heightClass,
        className
      )}
    />
  )
}

type Viewport = "mobile" | "desktop" | null

function useViewport() {
  const [viewport, setViewport] = useState<Viewport>(null)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const sync = () => setViewport(mql.matches ? "desktop" : "mobile")
    sync()
    mql.addEventListener("change", sync)
    return () => mql.removeEventListener("change", sync)
  }, [])

  return viewport
}

/**
 * Homepage collage sits in the first screen, so intersection alone still races
 * the header. Arm only after the user scrolls (or a late idle fallback).
 */
function useVisibleOnce() {
  const ref = useRef<HTMLDivElement>(null)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const arm = () => setArmed(true)
    window.addEventListener("scroll", arm, { once: true, passive: true })
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(arm, { timeout: 8000 })
        : null
    const fallbackId =
      idleId === null ? window.setTimeout(arm, 8000) : null
    return () => {
      window.removeEventListener("scroll", arm)
      if (idleId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId)
      }
      if (fallbackId !== null) window.clearTimeout(fallbackId)
    }
  }, [])

  useEffect(() => {
    if (!armed || visible) return
    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setVisible(true)
        // #region agent log
        const t = Math.round(performance.now())
        const dbg = (window as Window & {
          __farsiHeaderDebug?: { collageReady?: number }
        }).__farsiHeaderDebug
        if (dbg) dbg.collageReady = t
        fetch(
          "http://127.0.0.1:7896/ingest/5b150b1c-f596-4344-bc6e-c0563c0599de",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "bf5044",
            },
            body: JSON.stringify({
              sessionId: "bf5044",
              runId: "post-fix",
              hypothesisId: "A",
              location: "cards-deferred.tsx:enable",
              message: "collage ready",
              data: { t, reason: "intersection-after-arm" },
              timestamp: Date.now(),
            }),
          }
        ).catch(() => {})
        // #endregion
        obs.disconnect()
      },
      { rootMargin: "120px 0px" }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [armed, visible])

  return { ref, visible }
}

export function CardsDemoDeferred() {
  const viewport = useViewport()
  const { ref, visible } = useVisibleOnce()

  if (viewport === "mobile") {
    return null
  }

  if (!visible || viewport === null) {
    return (
      <div ref={ref}>
        <CollagePlaceholder
          className="hidden md:block"
          heightClass="min-h-[36rem] lg:min-h-[44rem]"
        />
      </div>
    )
  }

  return <CardsDemo />
}

export function CardsDemoMobileDeferred() {
  const viewport = useViewport()
  const { ref, visible } = useVisibleOnce()

  if (viewport === "desktop") {
    return null
  }

  if (!visible || viewport === null) {
    return (
      <div ref={ref}>
        <CollagePlaceholder
          className="md:hidden"
          heightClass="min-h-[28rem]"
        />
      </div>
    )
  }

  return <CardsDemoMobile />
}
