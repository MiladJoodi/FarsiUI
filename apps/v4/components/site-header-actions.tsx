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

function useHeaderHeavyReady(timeoutMs = 2500) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const enable = () => {
      if (!cancelled) setReady(true)
    }

    // Prefer idle after first paint so logo/nav/theme toggle hydrate first.
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(enable, { timeout: timeoutMs })
        : null
    const fallbackId =
      idleId === null ? window.setTimeout(enable, 400) : null

    const onInteract = () => enable()
    window.addEventListener("pointerdown", onInteract, {
      once: true,
      passive: true,
    })
    window.addEventListener("keydown", onInteract, { once: true })

    return () => {
      cancelled = true
      if (idleId !== null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId)
      }
      if (fallbackId !== null) window.clearTimeout(fallbackId)
      window.removeEventListener("pointerdown", onInteract)
      window.removeEventListener("keydown", onInteract)
    }
  }, [timeoutMs])

  return ready
}

export function SiteHeaderActions({
  tree,
  colors,
  navItems = siteConfig.navItems,
}: {
  tree: typeof source.pageTree
  colors: ColorPalette[]
  navItems?: { href: string; label: string }[]
}) {
  const ready = useHeaderHeavyReady()

  return (
    <>
      <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
        {ready ? (
          <CommandMenu tree={tree} colors={colors} navItems={navItems} />
        ) : (
          <div
            aria-hidden
            className="h-8 w-full max-w-56 rounded-lg bg-muted/60 md:w-56"
          />
        )}
      </div>
      <Separator
        orientation="vertical"
        className="ms-2 hidden lg:block"
      />
      {ready ? (
        <HeaderDesignControls />
      ) : (
        <div aria-hidden className="h-8 w-[4.5rem] rounded-md bg-muted/60" />
      )}
    </>
  )
}
