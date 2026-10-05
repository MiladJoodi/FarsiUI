"use client"

import { CommandMenu } from "@/components/command-menu"
import { type ColorPalette } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { type source } from "@/lib/source"

/** Search only — design switcher lives centered in the site header. */
export function SiteHeaderActions({
  tree,
  colors,
  navItems = siteConfig.navItems,
}: {
  tree: typeof source.pageTree
  colors: ColorPalette[]
  navItems?: { href: string; label: string }[]
}) {
  return (
    <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
      <CommandMenu tree={tree} colors={colors} navItems={navItems} />
    </div>
  )
}
