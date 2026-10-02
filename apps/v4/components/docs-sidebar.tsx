"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon, SearchIcon, XIcon } from "lucide-react"

import { PAGES_NEW, splitDocTitle } from "@/lib/docs"
import { DOCS_SIDEBAR_SCROLL_STORAGE_KEY } from "@/lib/docs-sidebar-scroll"
import { showMcpDocs } from "@/lib/flags"
import { getCurrentBase, getPagesFromFolder } from "@/lib/page-tree"
import type { source } from "@/lib/source"
import { ListIndexNav } from "@/components/list-index-nav"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd"
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
  "relative h-[30px] w-full overflow-visible border border-transparent pe-1.5 ps-2 text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"

const ACTIVE_SECTION_CLASS =
  "relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent 3xl:fixed:w-full 3xl:fixed:max-w-48"

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

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .replace(/\u200c/g, "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .trim()
}

function matchesQuery(haystack: string, query: string) {
  if (!query) return true
  return normalizeSearch(haystack).includes(query)
}

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

function DocsSidebarSearch({
  value,
  onValueChange,
  onClear,
}: {
  value: string
  onValueChange: (value: string) => void
  onClear: () => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.key === "k" && (event.metaKey || event.ctrlKey))) {
        return
      }

      const input = inputRef.current
      // Skip when sidebar search is hidden (e.g. mobile).
      if (!input || input.offsetParent === null) {
        return
      }

      const target = event.target
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        if (target !== input) {
          return
        }
      }

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()
      input.focus()
      input.select()
    }

    document.addEventListener("keydown", onKeyDown, true)
    return () => document.removeEventListener("keydown", onKeyDown, true)
  }, [])

  return (
    <InputGroup className="group/sidebar-search h-8 border-border/70 bg-background/80 shadow-none transition-colors focus-within:border-foreground/35 has-[[data-slot=input-group-control]:focus-visible]:border-foreground/35 has-[[data-slot=input-group-control]:focus-visible]:ring-0 dark:bg-input/20 dark:focus-within:border-foreground/45 dark:has-[[data-slot=input-group-control]:focus-visible]:border-foreground/45">
      <InputGroupAddon>
        <SearchIcon className="size-3.5 opacity-60" />
      </InputGroupAddon>
      <InputGroupInput
        ref={inputRef}
        data-docs-sidebar-search=""
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault()
            if (value) {
              onClear()
            } else {
              event.currentTarget.blur()
            }
          }
        }}
        placeholder="جستجو در ناوبری..."
        className="h-8 text-[0.8rem]"
        aria-label="جستجو در آیتم‌های سایدبار"
      />
      <InputGroupAddon align="inline-end" className="gap-1">
        {value ? (
          <InputGroupButton
            size="icon-xs"
            aria-label="پاک کردن جستجو"
            onClick={() => {
              onClear()
              inputRef.current?.focus()
            }}
          >
            <XIcon className="size-3.5" />
          </InputGroupButton>
        ) : (
          <KbdGroup
            dir="ltr"
            className="pointer-events-none opacity-0 transition-opacity group-focus-within/sidebar-search:opacity-100 group-hover/sidebar-search:opacity-100"
          >
            <Kbd className="h-5 bg-muted/80 px-1.5 text-[0.65rem]">Ctrl</Kbd>
            <Kbd className="h-5 bg-muted/80 px-1.5 text-[0.65rem]">K</Kbd>
          </KbdGroup>
        )}
      </InputGroupAddon>
    </InputGroup>
  )
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
}: {
  tree: typeof source.pageTree
  persistScroll?: boolean
  /** Desktop sidebar keeps search; mobile فهرست matches blocks/skills index. */
  showSearch?: boolean
}) {
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = React.useState("")
  const [debouncedQuery, setDebouncedQuery] = React.useState("")

  React.useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(normalizeSearch(searchValue))
    }, SEARCH_DEBOUNCE_MS)

    return () => window.clearTimeout(timeout)
  }, [searchValue])

  const clearSearch = React.useCallback(() => {
    setSearchValue("")
    setDebouncedQuery("")
  }, [])

  const filteredSections = React.useMemo(() => {
    return TOP_LEVEL_SECTIONS.filter(({ name, href }) => {
      if (!showMcpDocs && href.includes("/mcp")) {
        return false
      }
      return matchesQuery(name, debouncedQuery)
    })
  }, [debouncedQuery])

  const filteredGroups = React.useMemo(() => {
    return tree.children.flatMap((item) => {
      if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
        return []
      }

      if (item.type !== "folder") {
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
          matchesQuery(title, debouncedQuery) ||
          matchesQuery(fa, debouncedQuery) ||
          (en ? matchesQuery(en, debouncedQuery) : false) ||
          matchesQuery(String(item.name), debouncedQuery)
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
          isComponents:
            item.$id === "components" || String(item.name) === "کامپوننت‌ها",
        },
      ]
    })
  }, [tree.children, currentBase, debouncedQuery])

  const componentGroup = filteredGroups.find((group) => group.isComponents)
  const otherGroups = filteredGroups.filter((group) => !group.isComponents)

  const isComponentsPath = pathname.startsWith("/docs/components")
  const [componentsOpen, setComponentsOpen] = React.useState(true)

  React.useEffect(() => {
    if (isComponentsPath) {
      setComponentsOpen(true)
    }
  }, [isComponentsPath])

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
    <>
      {showSearch ? (
        <div className="shrink-0 pe-2 pt-2 pb-3">
          <DocsSidebarSearch
            value={searchValue}
            onValueChange={setSearchValue}
            onClear={clearSearch}
          />
        </div>
      ) : null}
      <SidebarContent
        ref={contentRef}
        data-docs-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-2"
      >
        {!hasResults ? (
          <div className="px-2 py-6 text-center text-[0.8rem] text-muted-foreground">
            جستجو خالی
          </div>
        ) : null}
        {filteredSections.length > 0 ? (
          <SidebarGroup className="pt-1">
            <SidebarGroupLabel className="font-medium text-muted-foreground">
              بخش‌ها
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredSections.map(({ name, href }) => (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
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

        {componentGroup ? (
          <SidebarGroup>
            <Collapsible
              open={componentsOpen}
              onOpenChange={setComponentsOpen}
              className="group/components-root"
            >
              <CollapsibleTrigger className="flex h-8 w-full cursor-pointer items-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground outline-none hover:text-foreground">
                <ChevronDownIcon className="size-3.5 shrink-0 opacity-60 transition-transform group-data-[state=closed]/components-root:rotate-90" />
                <span>کامپوننت‌ها</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-0.5">
                    {componentGroup.pages.map((page) => {
                      const { fa, en } = splitDocTitle(String(page.name))
                      const isNew = PAGES_NEW.includes(page.url)

                      return (
                        <SidebarMenuItem key={page.url}>
                          <SidebarMenuButton
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
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ) : null}

        {otherGroups.map((group) => (
          <SidebarGroup key={group.id}>
            <SidebarGroupLabel className="font-medium text-muted-foreground">
              {group.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {group.pages.map((page) => {
                  const { fa, en } = splitDocTitle(String(page.name))
                  const isNew = PAGES_NEW.includes(page.url)

                  return (
                    <SidebarMenuItem key={page.url}>
                      <SidebarMenuButton
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
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </>
  )
}

export function DocsListIndex({ tree }: { tree: typeof source.pageTree }) {
  const pathname = usePathname()
  const currentBase = getCurrentBase(pathname)
  const current = React.useMemo(
    () => getDocsCurrentLabel(tree, pathname, currentBase),
    [tree, pathname, currentBase]
  )
  const title = pathname.startsWith("/docs/components")
    ? "فهرست کامپوننت‌ها"
    : "فهرست مستندات"

  return (
    <ListIndexNav title={title} current={current}>
      <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
        <DocsSidebarBody
          tree={tree}
          persistScroll={false}
          showSearch={false}
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
      <DocsSidebarBody tree={tree} />
    </Sidebar>
  )
}
