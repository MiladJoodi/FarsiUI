"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

import { type ColorPalette } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { type source } from "@/lib/source"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const CommandMenu = dynamic(
  () =>
    import("@/components/command-menu").then((mod) => ({
      default: mod.CommandMenu,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="h-8 w-full max-w-56 rounded-lg bg-muted/60 md:w-56"
      />
    ),
  }
)

const HeaderDesignControls = dynamic(
  () =>
    import("@/components/header-design-controls").then((mod) => ({
      default: mod.HeaderDesignControls,
    })),
  {
    ssr: false,
    loading: () => (
      <div aria-hidden className="h-8 w-[4.5rem] rounded-md bg-muted/60" />
    ),
  }
)

export function SiteHeaderActions({
  tree,
  colors,
  navItems = siteConfig.navItems,
}: {
  tree: typeof source.pageTree
  colors: ColorPalette[]
  navItems?: { href: string; label: string }[]
}) {
  // Only load heavy header widgets when the user asks for them — never on
  // global pointerdown/idle (that was stealing the first click's main thread).
  const [loadSearch, setLoadSearch] = useState(false)
  const [loadStudio, setLoadStudio] = useState(false)

  useEffect(() => {
    // #region agent log
    const t = Math.round(performance.now())
    const dbg = (window as Window & {
      __farsiHeaderDebug?: { headerActionsMount?: number }
    }).__farsiHeaderDebug
    if (dbg) dbg.headerActionsMount = t
    fetch("http://127.0.0.1:7896/ingest/5b150b1c-f596-4344-bc6e-c0563c0599de", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bf5044",
      },
      body: JSON.stringify({
        sessionId: "bf5044",
        runId: "post-fix",
        hypothesisId: "A",
        location: "site-header-actions.tsx:mount",
        message: "SiteHeaderActions mounted",
        data: {
          t,
          treeChildCount: Array.isArray(tree?.children)
            ? tree.children.length
            : -1,
          colorsCount: colors?.length ?? -1,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
  }, [tree, colors])

  useEffect(() => {
    if (!loadSearch && !loadStudio) return
    // #region agent log
    const t = Math.round(performance.now())
    const dbg = (window as Window & {
      __farsiHeaderDebug?: { headerHeavyReady?: number }
    }).__farsiHeaderDebug
    if (dbg) dbg.headerHeavyReady = t
    fetch("http://127.0.0.1:7896/ingest/5b150b1c-f596-4344-bc6e-c0563c0599de", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bf5044",
      },
      body: JSON.stringify({
        sessionId: "bf5044",
        runId: "post-fix",
        hypothesisId: "A",
        location: "site-header-actions.tsx:enable",
        message: "header heavy ready",
        data: { t, reason: "explicit", loadSearch, loadStudio },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
    // #endregion
  }, [loadSearch, loadStudio])

  return (
    <>
      <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
        {loadSearch ? (
          <CommandMenu tree={tree} colors={colors} navItems={navItems} />
        ) : (
          <button
            type="button"
            className="h-8 w-full max-w-56 rounded-lg bg-muted/60 text-start text-sm text-muted-foreground md:w-56 px-3"
            onClick={() => setLoadSearch(true)}
          >
            جستجو...
          </button>
        )}
      </div>
      <Separator
        orientation="vertical"
        className="ms-2 hidden lg:block"
      />
      {loadStudio ? (
        <HeaderDesignControls />
      ) : (
        <button
          type="button"
          aria-label="دیزاین"
          className="h-8 w-[4.5rem] rounded-md bg-muted/60"
          onClick={() => setLoadStudio(true)}
        />
      )}
    </>
  )
}
