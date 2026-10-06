"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "cn"

function ComponentPreviewShell({
  children,
  embed,
  staticPreview,
  styleClass,
}: {
  children: React.ReactNode
  embed: boolean
  staticPreview: boolean
  styleClass?: string | null
}) {
  // Apply the URL bake's style root on first paint. The parent picker may
  // still sync theme-*/style-* afterward for live Primary Color changes.
  React.useEffect(() => {
    if (!styleClass) return
    const { body } = document
    Array.from(body.classList)
      .filter((className) => className.startsWith("style-"))
      .forEach((className) => {
        body.classList.remove(className)
      })
    body.classList.add(styleClass)
    return () => {
      body.classList.remove(styleClass)
    }
  }, [styleClass])

  // Demo blocks use href="#" placeholders — stop hash jumps / iframe reloads in previews.
  React.useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const raw = event.target
      const el =
        raw instanceof Element
          ? raw
          : raw instanceof Node
            ? raw.parentElement
            : null
      if (!el) return
      const anchor = el.closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (href === "#" || href === "" || href?.startsWith("#")) {
        event.preventDefault()
      }
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  const embedCss = staticPreview
    ? `html,body{height:100%;margin:0;overflow:hidden!important;overscroll-behavior:none;background:transparent;pointer-events:none}.min-h-svh{min-height:100%!important}`
    : `html,body{height:100%;margin:0;background:color-mix(in oklab,var(--muted) 45%,transparent);overscroll-behavior-y:contain}.min-h-svh{min-height:100%!important}`

  return (
    <>
      <style>
        {embed
          ? embedCss
          : `html,body{margin:0;min-height:100%;background:color-mix(in oklab,var(--muted) 45%,transparent)}`}
      </style>
      <div
        className={cn(
          // Keep style root on a wrapper too so portals/recipes resolve even
          // before the parent picker syncs body classes into this iframe.
          styleClass,
          embed
            ? staticPreview
              ? "h-full min-h-full bg-transparent"
              : "h-full min-h-full bg-muted/40"
            : "min-h-svh bg-muted/40",
          "*:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {/* Rebind --color-primary under body.theme-* for Tailwind utilities. */}
        <div
          className={cn(
            "theme-container",
            embed ? "h-full min-h-full" : "min-h-svh"
          )}
        >
          {children}
        </div>
      </div>
    </>
  )
}

function ComponentPreviewFromSearch({
  children,
  embed: embedProp,
  staticPreview: staticPreviewProp,
  styleClass,
}: {
  children: React.ReactNode
  embed?: boolean
  staticPreview?: boolean
  styleClass?: string | null
}) {
  const searchParams = useSearchParams()
  const embed = embedProp || searchParams.get("embed") === "1"
  const staticPreview =
    staticPreviewProp || searchParams.get("static") === "1"

  return (
    <ComponentPreviewShell
      embed={embed}
      staticPreview={staticPreview}
      styleClass={styleClass}
    >
      {children}
    </ComponentPreviewShell>
  )
}

export function ComponentPreview({
  children,
  embed,
  staticPreview,
  styleClass,
}: {
  children: React.ReactNode
  /** Optional server/compat override; query string is the primary source. */
  embed?: boolean
  /** Frozen showcase crop: no scroll, no interaction, clip to iframe. */
  staticPreview?: boolean
  /** Visual style root (e.g. style-nova) — must live on body so portals inherit it. */
  styleClass?: string | null
}) {
  return (
    <React.Suspense
      fallback={
        <ComponentPreviewShell
          embed={!!embed}
          staticPreview={!!staticPreview}
          styleClass={styleClass}
        >
          {children}
        </ComponentPreviewShell>
      }
    >
      <ComponentPreviewFromSearch
        embed={embed}
        staticPreview={staticPreview}
        styleClass={styleClass}
      >
        {children}
      </ComponentPreviewFromSearch>
    </React.Suspense>
  )
}
