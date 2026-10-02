"use client"

import * as React from "react"
import { cn } from "cn"

export function ComponentPreview({
  children,
  embed = false,
  styleClass,
}: {
  children: React.ReactNode
  /** When true, pin heights to the iframe instead of the parent window's svh. */
  embed?: boolean
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

  return (
    <>
      <style>
        {embed
          ? `html,body{height:100%;margin:0;background:var(--muted);overscroll-behavior:none}.min-h-svh{min-height:100%!important}`
          : `html,body{margin:0;min-height:100%;background:var(--muted)}`}
      </style>
      <div
        className={cn(
          styleClass,
          embed ? "h-full min-h-full bg-muted" : "min-h-svh bg-muted",
          "*:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
        )}
      >
        {children}
      </div>
    </>
  )
}
