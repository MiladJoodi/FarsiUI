"use client"

import { CommandMenu } from "@/components/command-menu"
import { HeaderDesignControls } from "@/components/header-design-controls"
import { type ColorPalette } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { type source } from "@/lib/source"
import { Separator } from "@/registry/new-york-v4/ui/separator"

/** Real search + design controls — panel content stays lazy inside each component. */
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
    <>
      <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
        <CommandMenu tree={tree} colors={colors} navItems={navItems} />
      </div>
      <Separator orientation="vertical" className="ms-2 hidden lg:block" />
      <HeaderDesignControls />
    </>
  )
}
