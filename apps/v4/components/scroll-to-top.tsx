"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

/**
 * Sticky headers make App Router skip scroll-to-top on same-layout navigations
 * (e.g. /docs/* via [[...slug]]). Reset window scroll on pathname change.
 * Hash deep-links are left alone so TOC / DocsCollapsible still work.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  React.useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
  }, [])

  React.useLayoutEffect(() => {
    if (window.location.hash) return

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return null
}
