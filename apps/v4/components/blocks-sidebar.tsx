"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import { getNavCategoryBlockCounts } from "@/lib/blocks-counts"
import {
  findBlocksNavMatch,
  getVisibleBlocksNav,
  type BlocksNavCategory,
} from "@/lib/blocks-nav"
import { ListIndexNav } from "@/components/list-index-nav"
import {
  matchesNavQuery,
  normalizeNavSearch,
  SidebarNavSearch,
} from "@/components/sidebar-nav-search"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"

const SIDEBAR_CLASS =
  "sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overflow-hidden overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"

const ACTIVE_ITEM_CLASS =
  "relative h-10 w-full overflow-visible border border-transparent pe-1.5 text-[14px] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-primary/20 data-[active=true]:bg-primary/10 data-[active=true]:text-primary lg:h-8"

const SIDEBAR_EN_CLASS =
  "shrink-0 font-sans text-[12px] font-normal tracking-normal text-muted-foreground"

const SEARCH_DEBOUNCE_MS = 200

function BlocksNavBody({ showSearch = true }: { showSearch?: boolean }) {
  const pathname = usePathname()
  const categories = React.useMemo(() => getVisibleBlocksNav(), [])
  const categoryCounts = React.useMemo(() => getNavCategoryBlockCounts(), [])
  const match = React.useMemo(
    () => findBlocksNavMatch(pathname),
    [pathname]
  )
  const [openCategories, setOpenCategories] = React.useState<
    Record<string, boolean>
  >({})
  const [searchValue, setSearchValue] = React.useState("")
  const [debouncedQuery, setDebouncedQuery] = React.useState("")

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

  React.useEffect(() => {
    if (match?.category) {
      setOpenCategories((prev) => ({
        ...prev,
        [match.category.slug]: true,
      }))
    }
  }, [match?.category?.slug])

  const filteredCategories = React.useMemo(() => {
    return categories.flatMap((category) => {
      const categoryMatches =
        matchesNavQuery(category.title, debouncedQuery) ||
        matchesNavQuery(category.en, debouncedQuery)

      const items = category.items.filter(
        (item) =>
          categoryMatches ||
          matchesNavQuery(item.title, debouncedQuery) ||
          matchesNavQuery(item.en, debouncedQuery) ||
          matchesNavQuery(item.slug, debouncedQuery)
      )

      if (items.length === 0) {
        return []
      }

      return [{ ...category, items } satisfies BlocksNavCategory]
    })
  }, [categories, debouncedQuery])

  const introVisible =
    !debouncedQuery ||
    matchesNavQuery("معرفی", debouncedQuery) ||
    matchesNavQuery("blocks", debouncedQuery)

  const hasResults = introVisible || filteredCategories.length > 0

  return (
    <>
      {showSearch ? (
        <div className="shrink-0 pe-2 pt-2 pb-3">
          <SidebarNavSearch
            value={searchValue}
            onValueChange={setSearchValue}
            onClear={clearSearch}
          />
        </div>
      ) : null}

      <SidebarContent
        data-blocks-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-1"
      >
        <SidebarGroup className="pt-1">
          <SidebarGroupContent>
            {!hasResults ? (
              <div className="px-2 py-6 text-center text-[14px] text-muted-foreground">
                نتیجه‌ای پیدا نشد.
              </div>
            ) : null}

            <SidebarMenu className="gap-0.5">
              {introVisible ? (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/blocks"}
                    className={ACTIVE_ITEM_CLASS}
                  >
                    <Link href="/blocks">معرفی</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}

              {filteredCategories.map((category) => {
                const isCategoryOpen =
                  Boolean(debouncedQuery) ||
                  (openCategories[category.slug] ??
                    match?.category.slug === category.slug)
                const count = categoryCounts[category.slug] ?? 0

                return (
                  <Collapsible
                    key={category.slug}
                    open={isCategoryOpen}
                    onOpenChange={(open) =>
                      setOpenCategories((prev) => ({
                        ...prev,
                        [category.slug]: open,
                      }))
                    }
                    className="group/blocks-cat"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger className="flex h-10 w-full cursor-pointer items-center gap-1.5 rounded-md px-2 text-[13px] font-medium text-muted-foreground outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:h-8">
                        <ChevronDownIcon className="size-3.5 shrink-0 opacity-60 transition-transform group-data-[state=closed]/blocks-cat:rotate-90" />
                        <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                          <span className="truncate">{category.title}</span>
                          <span className="shrink-0 text-[12px] font-normal tracking-normal text-muted-foreground/80">
                            {count.toLocaleString("fa-IR")}
                          </span>
                        </span>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenu className="ms-3 gap-0.5 border-none pe-1 ps-0">
                          {category.items.map((item) => (
                            <SidebarMenuItem key={item.href}>
                              <SidebarMenuButton
                                asChild
                                isActive={
                                  pathname === item.href ||
                                  pathname.startsWith(`${item.href}/`)
                                }
                                className={`${ACTIVE_ITEM_CLASS} ps-2`}
                              >
                                <Link
                                  href={item.href}
                                  className="flex w-full min-w-0 items-center gap-2"
                                >
                                  <span className="truncate">{item.title}</span>
                                  <span
                                    aria-hidden
                                    className="mb-0.5 min-w-3 flex-1 border-b border-dashed border-border/60"
                                  />
                                  <span
                                    dir="ltr"
                                    lang="en"
                                    className={SIDEBAR_EN_CLASS}
                                  >
                                    {item.en}
                                  </span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}

export function BlocksListIndex() {
  const pathname = usePathname()
  const match = React.useMemo(
    () => findBlocksNavMatch(pathname),
    [pathname]
  )
  const current =
    pathname === "/blocks" ? "معرفی" : (match?.item.title ?? null)

  return (
    <PersianDigits>
      <ListIndexNav title="فهرست بلوک‌ها" current={current}>
        <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
          <BlocksNavBody showSearch />
        </SidebarProvider>
      </ListIndexNav>
    </PersianDigits>
  )
}

export function BlocksSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <PersianDigits>
      <Sidebar
        className={SIDEBAR_CLASS}
        collapsible="none"
        dir="rtl"
        lang="fa"
        {...props}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <BlocksNavBody showSearch />
        </div>
      </Sidebar>
    </PersianDigits>
  )
}
