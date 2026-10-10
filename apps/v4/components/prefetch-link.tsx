"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const prefetched = new Set<string>()

function prefetchHref(
  router: ReturnType<typeof useRouter>,
  href: string | undefined
) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) return
  if (prefetched.has(href)) return
  prefetched.add(href)
  try {
    router.prefetch(href)
  } catch {
    prefetched.delete(href)
  }
}

/**
 * next/link that prefetches once on hover/focus — for sidebar items
 * that may still be outside the viewport (collapsed groups).
 */
export const PrefetchLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(function PrefetchLink({ href, onMouseEnter, onFocus, ...props }, ref) {
  const router = useRouter()
  const hrefString =
    typeof href === "string"
      ? href
      : `${href.pathname ?? ""}${href.search ?? ""}${href.hash ?? ""}`

  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={(event) => {
        prefetchHref(router, hrefString || undefined)
        onMouseEnter?.(event)
      }}
      onFocus={(event) => {
        prefetchHref(router, hrefString || undefined)
        onFocus?.(event)
      }}
      {...props}
    />
  )
})
