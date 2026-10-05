"use client"

import { useEffect, useState, useSyncExternalStore } from "react"

import { CardsDemo, CardsDemoMobile } from "./cards"
import { CollageSkeleton } from "./cards/collage-skeleton"

const DESKTOP_QUERY = "(min-width: 768px)"

function subscribeDesktop(onChange: () => void) {
  const mql = window.matchMedia(DESKTOP_QUERY)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches
}

/** SSR / first paint: assume mobile so the skeleton matches CardsDemoMobile. */
function getDesktopServerSnapshot() {
  return false
}

/** Mount collage after first paint so the header hydrates without competition. */
export function CardsCollage() {
  const [ready, setReady] = useState(false)
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  if (!ready) {
    return (
      <section
        className={
          isDesktop
            ? "relative overflow-x-clip"
            : "relative -mx-4 overflow-x-clip"
        }
      >
        <CollageSkeleton mobile={!isDesktop} />
      </section>
    )
  }

  if (isDesktop) {
    return (
      <section>
        <CardsDemo />
      </section>
    )
  }

  return (
    <section className="relative -mx-4 overflow-x-clip">
      <CardsDemoMobile />
    </section>
  )
}
