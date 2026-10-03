"use client"

import * as React from "react"
import { cn } from "cn"

export function ComponentPreview({
  children,
  embed = false,
  staticPreview = false,
  styleClass,
}: {
  children: React.ReactNode
  /** When true, pin heights to the iframe instead of the parent window's svh. */
  embed?: boolean
  /** Frozen showcase crop: no scroll, no interaction, clip to iframe. */
  staticPreview?: boolean
  /** Visual style root (e.g. style-nova) — must live on body so portals inherit it. */
  styleClass?: string | null
}) {
  React.useEffect(() => {
    if (!styleClass) return
    const { body } = document
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
    : `html,body{height:100%;margin:0;background:var(--muted);overscroll-behavior-y:contain}.min-h-svh{min-height:100%!important}`

  return (
    <>
      <style>
        {embed
          ? embedCss
          : `html,body{margin:0;min-height:100%;background:var(--muted)}`}
      </style>
      <div
        className={cn(
          styleClass,
          embed
            ? staticPreview
              ? "h-full min-h-full bg-transparent"
              : "h-full min-h-full bg-muted"
            : "min-h-svh bg-muted",
          "*:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {children}
      </div>
    </>
  )
}
