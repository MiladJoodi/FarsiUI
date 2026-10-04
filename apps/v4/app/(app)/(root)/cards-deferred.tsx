"use client"

import { useEffect, useState } from "react"

import { CardsDemo, CardsDemoMobile } from "./cards"
import { CollageSkeleton } from "./cards/collage-skeleton"

/** Mount collage after first paint so the header hydrates without competition. */
export function CardsCollage() {
  const [ready, setReady] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const sync = () => setIsDesktop(mql.matches)
    sync()
    mql.addEventListener("change", sync)
    return () => mql.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  if (!ready || isDesktop === null) {
    return (
      <section className="relative overflow-x-clip">
        <CollageSkeleton mobile={isDesktop === false} />
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
