import { getColors } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { CommandMenu } from "@/components/command-menu"
import { GitHubLink } from "@/components/github-link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { PrimaryColorPalette } from "@/components/primary-color-palette"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function SiteHeader() {
  const colors = getColors()
  const pageTree = source.pageTree

  return (
    <header dir="rtl" lang="fa" className="sticky top-0 z-50 w-full bg-background">
      <div className="container-wrapper px-6 3xl:fixed:px-0">
        <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
          <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ms-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu
                tree={pageTree}
                colors={colors}
                navItems={siteConfig.navItems}
              />
            </div>
            <Separator
              orientation="vertical"
              className="ms-2 hidden lg:block"
            />
            <GitHubLink />
            <Separator orientation="vertical" />
            <PrimaryColorPalette compact className="hidden sm:flex" />
            <Separator orientation="vertical" className="hidden sm:block" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
