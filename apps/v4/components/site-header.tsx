import Link from "next/link"

import { getColors } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { CommandMenu } from "@/components/command-menu"
import { FarsiUILogo } from "@/components/farsiui-logo"
import { GitHubLink } from "@/components/github-link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { HeaderPrimaryColors } from "@/components/header-primary-colors"
import { ModeSwitcher } from "@/components/mode-switcher"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function SiteHeader() {
  const colors = getColors()
  const pageTree = source.pageTree

  return (
    <header
      dir="rtl"
      lang="fa"
      data-site-header=""
      className="sticky top-0 z-50 w-full bg-background transition-transform duration-300 ease-out [[data-header-hidden]_&]:pointer-events-none [[data-header-hidden]_&]:-translate-y-full"
    >
      <div className="container-wrapper px-4 sm:px-6 3xl:fixed:px-0">
        <div className="flex h-(--header-height) items-center gap-1 **:data-[slot=separator]:h-4! 3xl:fixed:container">
          <Link
            href="/"
            className="me-1.5 flex shrink-0 items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FarsiUILogo className="size-[22px] text-primary" />
            <span
              aria-hidden
              className="text-[0.98rem] leading-none font-extrabold tracking-tight text-primary"
            >
              فارسیUI
            </span>
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <MobileNav
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ms-auto flex min-w-0 items-center gap-1.5 sm:gap-2 md:flex-1 md:justify-end">
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
            <HeaderPrimaryColors />
            <Separator orientation="vertical" className="hidden sm:block" />
            <div className="flex shrink-0 items-center gap-0.5">
              <GitHubLink />
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
