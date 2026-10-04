import Link from "next/link"

import { getColors } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { ContactLink } from "@/components/contact-link"
import { GitHubLink } from "@/components/github-link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { SiteHeaderActions } from "@/components/site-header-actions"
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
          <MobileNav
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <Link
            href="/"
            className="me-1.5 flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              aria-hidden
              className="text-[0.98rem] leading-none font-extrabold tracking-tight text-primary"
            >
              فارسیUI
            </span>
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ms-auto flex min-w-0 items-center gap-1.5 sm:gap-2 md:flex-1 md:justify-end">
            <SiteHeaderActions
              tree={pageTree}
              colors={colors}
              navItems={siteConfig.navItems}
            />
            <Separator orientation="vertical" className="hidden sm:block" />
            <div className="flex shrink-0 items-center gap-0.5">
              <GitHubLink />
              <ContactLink className="hidden lg:inline-flex" />
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
