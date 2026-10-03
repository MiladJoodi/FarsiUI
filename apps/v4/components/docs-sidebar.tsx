"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import { PAGES_NEW, splitDocTitle } from "@/lib/docs"
import { DOCS_SIDEBAR_SCROLL_STORAGE_KEY } from "@/lib/docs-sidebar-scroll"
import { showMcpDocs } from "@/lib/flags"
import { getCurrentBase, getPagesFromFolder } from "@/lib/page-tree"
import type { source } from "@/lib/source"
import { ListIndexNav } from "@/components/list-index-nav"
import {
  matchesNavQuery,
  normalizeNavSearch,
  SidebarNavSearch,
} from "@/components/sidebar-nav-search"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"

const ACTIVE_ITEM_CLASS =
  "relative h-10 w-full overflow-visible border border-transparent py-0 pe-1.5 ps-2 text-[14px] font-medium after:absolute after:inset-x-0 after:inset-y-0 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent lg:h-8"

const ACTIVE_SECTION_CLASS =
  "relative h-10 w-fit overflow-visible border border-transparent py-0 text-[14px] font-medium after:absolute after:inset-x-0 after:inset-y-0 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent lg:h-8 3xl:fixed:w-full 3xl:fixed:max-w-48"

const GROUP_TRIGGER_CLASS =
  "flex h-10 w-full cursor-pointer items-center gap-1.5 rounded-md px-2 text-[13px] font-medium text-muted-foreground outline-none hover:text-foreground lg:h-8"

const SIDEBAR_EN_CLASS =
  "shrink-0 font-sans text-[12px] font-normal tracking-normal text-muted-foreground"

const TOP_LEVEL_SECTIONS = [
  { name: "مقدمه", href: "/docs" },
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
const SEARCH_DEBOUNCE_MS = 200

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

function getDocsCurrentLabel(
  tree: typeof source.pageTree,
  pathname: string,
  currentBase: string
) {
  for (const item of tree.children) {
    if (item.type !== "folder") continue
    for (const page of getPagesFromFolder(item, currentBase)) {
      if (page.url === pathname) {
        return splitDocTitle(String(page.name)).fa
      }
    }
  }

  let best: { name: string; href: string } | null = null
  for (const section of TOP_LEVEL_SECTIONS) {
    const matches =
      section.href === "/docs"
        ? pathname === "/docs"
        : pathname === section.href || pathname.startsWith(`${section.href}/`)

    if (
      matches &&
      (!best || section.href.length > best.href.length)
    ) {
      best = section
    }
  }

  return best?.name ?? null
}

function DocsSidebarBody({
  tree,
  persistScroll = true,
  showSearch = true,
  scope = "all",
}: {
  tree: typeof source.pageTree
  persistScroll?: boolean
  /** Desktop sidebar keeps search; mobile فهرست matches blocks/skills index. */
  showSearch?: boolean
  /** Mobile components index should only list components — not the full docs tree. */
  scope?: "all" | "components"
}) {
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = React.useState("")
  const [debouncedQuery, setDebouncedQuery] = React.useState("")
  const componentsOnly =
    scope === "components" || pathname.startsWith("/docs/components")

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(normalizeNavSearch(searchValue))
    }, SEARCH_DEBOUNCE_MS)

    return () => window.clearTimeout(timeout)
  }, [searchValue])

  const clearSearch = React.useCallback(() => {
    setSearchValue("")
    setDebouncedQuery("")
  }, [])

  const filteredSections = React.useMemo(() => {
    if (componentsOnly) {
      return []
    }
    return TOP_LEVEL_SECTIONS.filter(({ name, href }) => {
      if (!showMcpDocs && href.includes("/mcp")) {
        return false
      }
      return matchesNavQuery(name, debouncedQuery)
    })
  }, [componentsOnly, debouncedQuery])

  const filteredGroups = React.useMemo(() => {
    return tree.children.flatMap((item) => {
      if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
        return []
      }

      if (item.type !== "folder") {
        return []
      }

      const isComponents =
        item.$id === "components" || String(item.name) === "کامپوننت‌ها"

      if (componentsOnly && !isComponents) {
        return []
      }

      const pages = getPagesFromFolder(item, currentBase).filter((page) => {
        if (!showMcpDocs && page.url.includes("/mcp")) {
          return false
        }
        if (EXCLUDED_PAGES.includes(page.url)) {
          return false
        }

        const title = String(page.name)
        const { fa, en } = splitDocTitle(title)
        return (
          matchesNavQuery(title, debouncedQuery) ||
          matchesNavQuery(fa, debouncedQuery) ||
          (en ? matchesNavQuery(en, debouncedQuery) : false) ||
          matchesNavQuery(String(item.name), debouncedQuery)
        )
      })

      if (pages.length === 0) {
        return []
      }

      return [
        {
          id: item.$id ?? String(item.name),
          name: item.name,
          pages,
          isComponents,
        },
      ]
    })
  }, [tree.children, currentBase, debouncedQuery, componentsOnly])

  const componentGroup = filteredGroups.find((group) => group.isComponents)
  const otherGroups = componentsOnly
    ? []
    : filteredGroups.filter((group) => !group.isComponents)

  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
    {}
  )

  const isGroupOpen = React.useCallback(
    (id: string) => {
      if (debouncedQuery) {
        return true
      }
      return openGroups[id] ?? false
    },
    [debouncedQuery, openGroups]
  )

  const setGroupOpen = React.useCallback((id: string, open: boolean) => {
    setOpenGroups((prev) => ({ ...prev, [id]: open }))
  }, [])

  const hasResults =
    filteredSections.length > 0 || filteredGroups.length > 0

  React.useLayoutEffect(() => {
    if (!persistScroll) {
      return
    }

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
  }, [pathname, persistScroll])

  React.useEffect(() => {
    if (!persistScroll) {
      return
    }

    const container = contentRef.current

    if (!container) {
      return
    }

    const onScroll = () => saveScrollState(container)
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [persistScroll])

  return (
    <div data-docs-sidebar="">
      {showSearch ? (
        <div className="shrink-0 pe-2 pt-2 pb-3">
          <SidebarNavSearch
            value={searchValue}
            onValueChange={setSearchValue}
            onClear={clearSearch}
            inputClassName="text-[14px]"
          />
        </div>
      ) : null}
      <SidebarContent
        ref={contentRef}
        data-docs-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-2"
      >
        {!hasResults ? (
          <div className="px-2 py-6 text-center text-[14px] text-muted-foreground">
            جستجو خالی
          </div>
        ) : null}
        {filteredSections.length > 0 ? (
          <SidebarGroup className="p-1 pt-1">
            <SidebarGroupLabel className="h-8 text-[13px] font-medium text-muted-foreground">
              بخش‌ها
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {filteredSections.map(({ name, href }) => (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      size="sm"
                      asChild
                      isActive={
                        href === "/docs"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                      className={ACTIVE_SECTION_CLASS}
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
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}

        {componentsOnly && componentGroup ? (
          <SidebarGroup className="p-1 pt-1">
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {componentGroup.pages.map((page) => {
                  const { fa, en } = splitDocTitle(String(page.name))
                  const isNew = PAGES_NEW.includes(page.url)

                  return (
                    <SidebarMenuItem key={page.url}>
                      <SidebarMenuButton
                        size="sm"
                        asChild
                        isActive={page.url === pathname}
                        className={ACTIVE_ITEM_CLASS}
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
                              <span dir="ltr" lang="en" className={SIDEBAR_EN_CLASS}>
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
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}

        {otherGroups.map((group) => (
          <SidebarGroup key={group.id} className="p-1">
            <Collapsible
              open={isGroupOpen(group.id)}
              onOpenChange={(open) => setGroupOpen(group.id, open)}
              className="group/docs-folder"
            >
              <CollapsibleTrigger className={GROUP_TRIGGER_CLASS}>
                <ChevronDownIcon className="size-3.5 shrink-0 opacity-60 transition-transform group-data-[state=closed]/docs-folder:rotate-90" />
                <span>{group.name}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-0.5">
                    {group.pages.map((page) => {
                      const { fa, en } = splitDocTitle(String(page.name))
                      const isNew = PAGES_NEW.includes(page.url)

                      return (
                        <SidebarMenuItem key={page.url}>
                          <SidebarMenuButton
                            size="sm"
                            asChild
                            isActive={page.url === pathname}
                            className={ACTIVE_ITEM_CLASS}
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
                                  <span dir="ltr" lang="en" className={SIDEBAR_EN_CLASS}>
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
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </div>
  )
}

export function DocsListIndex({ tree }: { tree: typeof source.pageTree }) {
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const isComponents = pathname.startsWith("/docs/components")
  const current = React.useMemo(
    () => getDocsCurrentLabel(tree, pathname, currentBase),
    [tree, pathname, currentBase]
  )
  const title = isComponents ? "فهرست کامپوننت‌ها" : "فهرست مستندات"

  return (
    <ListIndexNav title={title} current={current}>
      <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
        <DocsSidebarBody
          tree={tree}
          persistScroll={false}
          showSearch={isComponents}
          scope={isComponents ? "components" : "all"}
        />
      </SidebarProvider>
    </ListIndexNav>
  )
}

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overflow-hidden overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <div className="absolute top-12 bottom-0 left-2 hidden h-full w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] lg:flex" />
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <DocsSidebarBody tree={tree} />
      </div>
    </Sidebar>
  )
}
