"use client"

import * as React from "react"
import { cn } from "cn"

import { ChartPlotSkeleton } from "@/components/route-skeletons"

export function ChartIframe({
  src,
  height,
  title,
  priority = false,
}: {
  src: string
  height: number
  title: string
  /** Load immediately; otherwise wait until near the viewport. */
  priority?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = React.useState(priority)
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    if (priority || shouldLoad) return

    const node = containerRef.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        // Start loading a bit before the iframe enters the viewport.
        rootMargin: "200px 0px",
        threshold: 0,
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [priority, shouldLoad])

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height }}
    >
      {!loaded ? (
        <div className="absolute inset-0 z-10">
          <ChartPlotSkeleton />
        </div>
      ) : null}
      {shouldLoad ? (
        <iframe
          src={src}
          className={cn(
            "absolute inset-0 z-20 h-full w-full border-none transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0"
          )}
          height={height}
          loading={priority ? "eager" : "lazy"}
          title={title}
          onLoad={() => setLoaded(true)}
        />
      ) : null}
    </div>
  )
}