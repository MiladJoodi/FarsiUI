"use client"

import * as React from "react"
import { cn } from "cn"

import { useThemeConfig } from "@/components/active-theme"

/** Map docs `styleName` (e.g. base-nova) → style root class (style-nova). */
export function getPreviewStyleRootClass(styleName = "base-nova") {
  const match = styleName.match(/^(?:base|radix|aria)-(.+)$/)
  return match ? `style-${match[1]}` : "style-nova"
}

/**
 * Scopes the live site Primary Color + visual style to a docs preview only.
 * Keep outside of Copy / ComponentSource so copied registry code stays theme-agnostic.
 */
export function PreviewThemeScope({
  styleName = "base-nova",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  styleName?: string
}) {
  const { activeTheme } = useThemeConfig()
  const theme = activeTheme === "default" ? "neutral" : activeTheme

  return (
    <div
      data-slot="preview-theme"
      className={cn(
        "theme-container",
        `theme-${theme}`,
        getPreviewStyleRootClass(styleName),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/** Same-origin /view iframe that stays in sync with the site Primary Color. */
export function PreviewThemeIframe({
  src,
  className,
  styleName = "base-nova",
}: {
  src: string
  className?: string
  styleName?: string
}) {
  const { activeTheme } = useThemeConfig()
  const theme = activeTheme === "default" ? "neutral" : activeTheme
  const styleRoot = getPreviewStyleRootClass(styleName)
  const ref = React.useRef<HTMLIFrameElement>(null)

  const sync = React.useCallback(() => {
    try {
      const body = ref.current?.contentDocument?.body
      if (!body) return

      Array.from(body.classList)
        .filter(
          (className) =>
            className.startsWith("theme-") || className.startsWith("style-")
        )
        .forEach((className) => {
          body.classList.remove(className)
        })

      body.classList.add(`theme-${theme}`)
      body.classList.add(styleRoot)
      if (theme.endsWith("-scaled")) {
        body.classList.add("theme-scaled")
      }
    } catch {
      // Ignore cross-origin frames.
    }
  }, [styleRoot, theme])

  React.useEffect(() => {
    sync()
  }, [sync])

  return (
    <iframe
      ref={ref}
      src={src}
      className={className}
      onLoad={sync}
      title="Component preview"
    />
  )
}
