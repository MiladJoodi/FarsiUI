"use client"

import * as React from "react"
import dynamic from "next/dynamic"

import { CollageSkeleton } from "./cards/collage-skeleton"

const DESKTOP_QUERY = "(min-width: 768px)"
/** Start loading live cards a bit before the section is fully on screen. */
const LOAD_ROOT_MARGIN = "240px 0px"

const CardsDemo = dynamic(
  () => import("./cards").then((m) => ({ default: m.CardsDemo })),
  {
    ssr: false,
    loading: () => <CollageSkeleton />,
  }
)

const CardsDemoMobile = dynamic(
  () => import("./cards").then((m) => ({ default: m.CardsDemoMobile })),
  {
    ssr: false,
    loading: () => <CollageSkeleton mobile />,
  }
)

function subscribeDesktop(onStoreChange: () => void) {
  const mql = window.matchMedia(DESKTOP_QUERY)
  mql.addEventListener("change", onStoreChange)
  return () => mql.removeEventListener("change", onStoreChange)
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches
}

function getDesktopServerSnapshot() {
  return false
}

/**
 * Skeleton first (light). Live collage mounts only when the section nears
 * the viewport — keeps the header/hamburger free on first paint.
 */
export function CardsCollage() {
  const isDesktop = React.useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )
  const sentinelRef = React.useRef<HTMLElement>(null)
  const [shouldRender, setShouldRender] = React.useState(false)

  React.useEffect(() => {
    if (shouldRender) return

    const node = sentinelRef.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldRender(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        setShouldRender(true)
        observer.disconnect()
      },
      { rootMargin: LOAD_ROOT_MARGIN, threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldRender])

  if (isDesktop) {
    return (
      <section
        ref={sentinelRef}
        className="relative min-h-[52rem] overflow-x-clip lg:min-h-[58rem]"
      >
        {shouldRender ? <CardsDemo /> : <CollageSkeleton />}
      </section>
    )
  }

  return (
    <section
      ref={sentinelRef}
      className="relative -mx-4 min-h-[70dvh] overflow-x-clip md:hidden"
    >
      {shouldRender ? <CardsDemoMobile /> : <CollageSkeleton mobile />}
    </section>
  )
}
