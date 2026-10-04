"use client"

import * as React from "react"
import { cn } from "cn"

import { useThemeConfig } from "@/components/active-theme"
import { useDesignSystemPreview } from "@/components/design-system-preview"

// Docs routes do not load style recipes by default (only /view + /preview do).
// PreviewThemeScope applies .style-* roots, so it must also pull in the cn-*
// recipes that those roots activate.
import "@/app/style-registry.css"

/** Map docs `styleName` (e.g. base-nova) → style root class (style-nova). */
export function getPreviewStyleRootClass(styleName = "base-nova") {
  const match = styleName.match(/^(?:base|radix|aria)-(.+)$/)
  return match ? `style-${match[1]}` : "style-nova"
}

/**
 * Scopes the live site Primary Color + global Design System to a docs preview.
 * Style root comes from DesignSystemPreviewProvider (Header picker), not from
 * per-preview local state. Keep outside Copy / ComponentSource so copied
 * registry code stays theme-agnostic.
 *
 * Structure must match legacy-themes.css: ancestor `.theme-*` → descendant
 * `.theme-container` (same-node classes do not activate the palette overrides).
 */
export function PreviewThemeScope({
  styleName: _styleName,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** @deprecated Ignored — global Design System picker owns the style root. */
  styleName?: string
}) {
  const { activeTheme } = useThemeConfig()
  const { styleRootClass } = useDesignSystemPreview()
  const theme = activeTheme === "default" ? "neutral" : activeTheme

  return (
    <div
      data-slot="preview-theme"
      className={cn(`theme-${theme}`, styleRootClass)}
    >
      <div className={cn("theme-container", className)} {...props}>
        {children}
      </div>
    </div>
  )
}

/** Same-origin /view iframe that stays in sync with Primary Color + Design System. */
export function PreviewThemeIframe({
  src,
  className,
  styleName: _styleName,
}: {
  src: string
  className?: string
  /** @deprecated Ignored — global Design System picker owns the style root. */
  styleName?: string
}) {
  const { activeTheme } = useThemeConfig()
  const { styleRootClass } = useDesignSystemPreview()
  const theme = activeTheme === "default" ? "neutral" : activeTheme
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
      body.classList.add(styleRootClass)
      if (theme.endsWith("-scaled")) {
        body.classList.add("theme-scaled")
      }
    } catch {
      // Ignore cross-origin frames.
    }
  }, [styleRootClass, theme])

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
