"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { PAGES_NEW, splitDocTitle } from "@/lib/docs"
import { DOCS_SIDEBAR_SCROLL_STORAGE_KEY } from "@/lib/docs-sidebar-scroll"
import { showMcpDocs } from "@/lib/flags"
import { getCurrentBase, getPagesFromFolder } from "@/lib/page-tree"
import type { source } from "@/lib/source"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"

const TOP_LEVEL_SECTIONS = [
  { name: "مقدمه", href: "/docs" },
  {
    name: "کامپوننت‌ها",
    href: "/docs/components",
  },
  {
    name: "نصب",
    href: "/docs/installation",
  },
  {
    name: "تم‌دهی",
    href: "/docs/theming",
  },
  {
    name: "CLI",
    href: "/docs/cli",
  },
  {
    name: "سرور MCP",
    href: "/docs/mcp",
  },
]
const EXCLUDED_SECTIONS = ["installation", "dark-mode", "changelog", "rtl"]
const EXCLUDED_PAGES = ["/docs", "/docs/rtl", "/docs/new"]

function readScrollState() {
  try {
    return JSON.parse(
      sessionStorage.getItem(DOCS_SIDEBAR_SCROLL_STORAGE_KEY) ?? ""
    ) as {
      pathname: string
      scrollTop: number
    }
  } catch {
    return null
  }
}

function saveScrollState(container: HTMLElement) {
  try {
    sessionStorage.setItem(
      DOCS_SIDEBAR_SCROLL_STORAGE_KEY,
      JSON.stringify({
        pathname: location.pathname,
        scrollTop: container.scrollTop,
      })
    )
  } catch {}
}

function getActiveItem(container: HTMLElement) {
  const items = container.querySelectorAll<HTMLElement>('[data-active="true"]')
  let active: HTMLElement | null = null
  let activePathLength = -1
  let activeDistance = Infinity
  const containerRect = container.getBoundingClientRect()
  const containerCenter = containerRect.top + container.clientHeight / 2

  for (const item of items) {
    const link = item.querySelector<HTMLAnchorElement>("a[href]")
    const href = item.getAttribute("href") ?? link?.getAttribute("href")
    const pathLength = href?.length ?? 0
    const itemRect = item.getBoundingClientRect()
    const distance = Math.abs(
      itemRect.top + itemRect.height / 2 - containerCenter
    )

    if (
      pathLength > activePathLength ||
      (pathLength === activePathLength && distance < activeDistance)
    ) {
      active = item
      activePathLength = pathLength
      activeDistance = distance
    }
  }

  return active
}

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const container = contentRef.current

    if (!container) {
      return
    }

    const scrollState = readScrollState()

    if (scrollState?.pathname === pathname) {
      container.scrollTop = scrollState.scrollTop
    } else {
      // Prefer the longest route because section links also match by prefix.
      // Equal routes keep the item closest to the current viewport.
      const active = getActiveItem(container)

      if (active) {
        const containerRect = container.getBoundingClientRect()
        const activeRect = active.getBoundingClientRect()

        if (
          activeRect.top < containerRect.top ||
          activeRect.bottom > containerRect.bottom
        ) {
          container.scrollTop +=
            activeRect.top -
            containerRect.top -
            (container.clientHeight - activeRect.height) / 2
        }
      }
    }

    saveScrollState(container)
  }, [pathname])

  React.useEffect(() => {
    const container = contentRef.current

    if (!container) {
      return
    }

    const onScroll = () => saveScrollState(container)
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overflow-hidden overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="absolute top-12 bottom-0 left-2 hidden h-full w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] lg:flex" />
      <SidebarContent
        ref={contentRef}
        data-docs-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-2"
      >
        <SidebarGroup className="pt-12">
          <SidebarGroupLabel className="font-medium text-muted-foreground">
            بخش‌ها
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                if (!showMcpDocs && href.includes("/mcp")) {
                  return null
                }
                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        href === "/docs"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                      className="relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48"
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
                        {name}
                        {PAGES_NEW.includes(href) && (
                          <span
                            className="flex size-2 rounded-full bg-blue-500"
                            title="New"
                          />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children.map((item) => {
          if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
            return null
          }

          return (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="font-medium text-muted-foreground">
                {item.name}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {item.type === "folder" && (
                  <SidebarMenu className="gap-0.5">
                    {getPagesFromFolder(item, currentBase).map((page) => {
                      if (!showMcpDocs && page.url.includes("/mcp")) {
                        return null
                      }

                      if (EXCLUDED_PAGES.includes(page.url)) {
                        return null
                      }

                      const { fa, en } = splitDocTitle(String(page.name))
                      const isNew = PAGES_NEW.includes(page.url)

                      return (
                        <SidebarMenuItem key={page.url}>
                          <SidebarMenuButton
                            asChild
                            isActive={page.url === pathname}
                            className="relative h-[30px] w-full overflow-visible border border-transparent pe-0 ps-2 text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                          >
                            <Link
                              href={page.url}
                              className="flex w-full min-w-0 items-center gap-2"
                            >
                              <span className="flex min-w-0 shrink items-center gap-1.5">
                                <span className="truncate">{fa}</span>
                                {isNew ? (
                                  <span
                                    className="flex size-2 shrink-0 rounded-full bg-blue-500"
                                    title="New"
                                  />
                                ) : null}
                              </span>
                              {en ? (
                                <>
                                  <span
                                    aria-hidden
                                    className="mb-0.5 min-w-3 flex-1 border-b border-dashed border-border/60"
                                  />
                                  <span
                                    dir="ltr"
                                    lang="en"
                                    className="shrink-0 font-mono text-[0.65rem] font-normal tracking-wide text-muted-foreground"
                                  >
                                    {en}
                                  </span>
                                </>
                              ) : null}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
    </Sidebar>
  )
}
