"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

const LG_BREAKPOINT = 1024
const SCROLL_THRESHOLD = 10
const TOP_REVEAL_OFFSET = 64

function isIndexedRoute(pathname: string) {
  return (
    pathname.startsWith("/docs") ||
    pathname.startsWith("/blocks") ||
    pathname.startsWith("/skills")
  )
}

function setHeaderHidden(hidden: boolean) {
  const root = document.documentElement
  if (hidden) {
    root.setAttribute("data-header-hidden", "")
  } else {
    root.removeAttribute("data-header-hidden")
  }
}

/** Hides the site header on mobile scroll-down for docs/blocks/skills; keeps فهرست pinned. */
export function MobileHeaderScroll() {
  const pathname = usePathname()

  React.useEffect(() => {
    if (!isIndexedRoute(pathname)) {
      setHeaderHidden(false)
      return
    }

    const mql = window.matchMedia(`(max-width: ${LG_BREAKPOINT - 1}px)`)
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      ticking = false

      if (!mql.matches) {
        setHeaderHidden(false)
        lastY = window.scrollY
        return
      }

      const y = window.scrollY
      const delta = y - lastY

      if (y <= TOP_REVEAL_OFFSET) {
        setHeaderHidden(false)
        lastY = y
        return
      }

      if (Math.abs(delta) < SCROLL_THRESHOLD) {
        return
      }

      setHeaderHidden(delta > 0)
      lastY = y
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    const onBreakpointChange = () => {
      if (!mql.matches) {
        setHeaderHidden(false)
      }
      lastY = window.scrollY
    }

    setHeaderHidden(false)
    lastY = window.scrollY
    window.addEventListener("scroll", onScroll, { passive: true })
    mql.addEventListener("change", onBreakpointChange)

    return () => {
      window.removeEventListener("scroll", onScroll)
      mql.removeEventListener("change", onBreakpointChange)
      setHeaderHidden(false)
    }
  }, [pathname])

  return null
}
