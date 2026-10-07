"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "cn"
import { useTheme } from "next-themes"

import { applyDocumentColorMode } from "@/lib/view-color-mode"

function ComponentPreviewShell({
  children,
  embed,
  staticPreview,
  flatSurface,
  styleClass,
  colorMode,
}: {
  children: React.ReactNode
  embed: boolean
  staticPreview: boolean
  /** No muted stage — charts/cards sit on page background. */
  flatSurface: boolean
  styleClass?: string | null
  /** Forced dark/light from opener (`?mode=`), e.g. blocks fullscreen. */
  colorMode?: "dark" | "light" | null
}) {
  const { setTheme } = useTheme()

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

  // Match the blocks page color mode when opened via fullscreen (`?mode=`).
  React.useLayoutEffect(() => {
    if (colorMode !== "dark" && colorMode !== "light") return
    applyDocumentColorMode(colorMode)
    setTheme(colorMode)
  }, [colorMode, setTheme])

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

  const stageBg = flatSurface
    ? "transparent"
    : "color-mix(in oklab,var(--muted) 45%,transparent)"

  const embedCss = staticPreview
    ? `html,body{height:100%;margin:0;overflow:hidden!important;overscroll-behavior:none;background:transparent;pointer-events:none}.min-h-svh{min-height:100%!important}`
    : `html,body{height:100%;margin:0;background:${stageBg};overscroll-behavior-y:contain}.min-h-svh{min-height:100%!important}`

  const shellBg = flatSurface || (embed && staticPreview)
    ? embed
      ? "h-full min-h-full bg-transparent"
      : "min-h-svh bg-transparent"
    : embed
      ? "h-full min-h-full bg-muted/40"
      : "min-h-svh bg-muted/40"

  return (
    <>
      {colorMode ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var m=${JSON.stringify(colorMode)};document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(m);document.documentElement.style.colorScheme=m;localStorage.setItem("theme",m)}catch(e){}`,
          }}
        />
      ) : null}
      <style>
        {embed
          ? embedCss
          : `html,body{margin:0;min-height:100%;background:${stageBg}}`}
      </style>
      <div
        className={cn(
          // Keep style root on a wrapper too so portals/recipes resolve even
          // before the parent picker syncs body classes into this iframe.
          styleClass,
          shellBg,
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

function parseColorMode(
  value: string | null
): "dark" | "light" | null {
  if (value === "dark" || value === "light") return value
  return null
}

function ComponentPreviewFromSearch({
  children,
  embed: embedProp,
  staticPreview: staticPreviewProp,
  flatSurface: flatSurfaceProp,
  styleClass,
  colorMode: colorModeProp,
}: {
  children: React.ReactNode
  embed?: boolean
  staticPreview?: boolean
  flatSurface?: boolean
  styleClass?: string | null
  colorMode?: "dark" | "light" | null
}) {
  const searchParams = useSearchParams()
  const embed = embedProp || searchParams.get("embed") === "1"
  const staticPreview =
    staticPreviewProp || searchParams.get("static") === "1"
  const flatSurface =
    flatSurfaceProp || searchParams.get("surface") === "flat"
  const colorMode =
    colorModeProp ?? parseColorMode(searchParams.get("mode"))

  return (
    <ComponentPreviewShell
      embed={embed}
      staticPreview={staticPreview}
      flatSurface={flatSurface}
      styleClass={styleClass}
      colorMode={colorMode}
    >
      {children}
    </ComponentPreviewShell>
  )
}

export function ComponentPreview({
  children,
  embed,
  staticPreview,
  flatSurface,
  styleClass,
  colorMode,
}: {
  children: React.ReactNode
  /** Optional server/compat override; query string is the primary source. */
  embed?: boolean
  /** Frozen showcase crop: no scroll, no interaction, clip to iframe. */
  staticPreview?: boolean
  /** No muted stage behind chart/demo cards. */
  flatSurface?: boolean
  /** Visual style root (e.g. style-nova) — must live on body so portals inherit it. */
  styleClass?: string | null
  /** Color mode from opener (`?mode=dark|light`). */
  colorMode?: "dark" | "light" | null
}) {
  return (
    <React.Suspense
      fallback={
        <ComponentPreviewShell
          embed={!!embed}
          staticPreview={!!staticPreview}
          flatSurface={!!flatSurface}
          styleClass={styleClass}
          colorMode={colorMode}
        >
          {children}
        </ComponentPreviewShell>
      }
    >
      <ComponentPreviewFromSearch
        embed={embed}
        staticPreview={staticPreview}
        flatSurface={flatSurface}
        styleClass={styleClass}
        colorMode={colorMode}
      >
        {children}
      </ComponentPreviewFromSearch>
    </React.Suspense>
  )
}
