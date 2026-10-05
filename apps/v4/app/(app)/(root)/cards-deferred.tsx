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

function getDesktopServerSnapshot() {
  return false
}

/**
 * Mount collage after first paint so the header hydrates without competition.
 * Skeleton uses CSS breakpoints (not JS) so desktop never flashes the zoomed
 * mobile collage, and phone never flashes the desktop grid.
 */
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
      <>
        <section className="relative -mx-4 overflow-x-clip md:hidden">
          <CollageSkeleton mobile />
        </section>
        <section className="relative hidden overflow-x-clip md:block">
          <CollageSkeleton />
        </section>
      </>
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
