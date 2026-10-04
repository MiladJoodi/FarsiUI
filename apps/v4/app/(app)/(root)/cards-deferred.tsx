"use client"

import { useEffect, useState } from "react"
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

function useCollageGate(timeoutMs = 4000) {
  const [viewport, setViewport] = useState<Viewport>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const syncViewport = () => {
      setViewport(mql.matches ? "desktop" : "mobile")
    }
    syncViewport()
    mql.addEventListener("change", syncViewport)
    return () => mql.removeEventListener("change", syncViewport)
  }, [])

  useEffect(() => {
    if (viewport === null) return

    let cancelled = false
    const enable = () => {
      if (!cancelled) setReady(true)
    }

    // Wait until the header can hydrate; only then pull the heavy collage.
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(enable, { timeout: timeoutMs })
        : null
    const fallbackId =
      idleId === null ? window.setTimeout(enable, 1200) : null

    const onInteract = () => enable()
    window.addEventListener("pointerdown", onInteract, {
      once: true,
      passive: true,
    })
    window.addEventListener("scroll", onInteract, {
      once: true,
      passive: true,
    })

    return () => {
      cancelled = true
      if (idleId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId)
      }
      if (fallbackId !== null) window.clearTimeout(fallbackId)
      window.removeEventListener("pointerdown", onInteract)
      window.removeEventListener("scroll", onInteract)
    }
  }, [viewport, timeoutMs])

  return { viewport, ready }
}

export function CardsDemoDeferred() {
  const { viewport, ready } = useCollageGate()

  if (viewport === "mobile") {
    return null
  }

  if (!ready || viewport === null) {
    return (
      <CollagePlaceholder
        className="hidden md:block"
        heightClass="min-h-[36rem] lg:min-h-[44rem]"
      />
    )
  }

  return <CardsDemo />
}

export function CardsDemoMobileDeferred() {
  const { viewport, ready } = useCollageGate()

  if (viewport === "desktop") {
    return null
  }

  if (!ready || viewport === null) {
    return (
      <CollagePlaceholder
        className="md:hidden"
        heightClass="min-h-[28rem]"
      />
    )
  }

  return <CardsDemoMobile />
}
