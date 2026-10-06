"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  chartTypeMeta,
  getChartTypeMeta,
} from "@/app/(app)/charts/chart-catalog"
import { ListIndexNav } from "@/components/list-index-nav"
import {
  matchesNavQuery,
  normalizeNavSearch,
  SidebarNavSearch,
} from "@/components/sidebar-nav-search"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
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
  "min-w-0 shrink truncate font-sans text-[12px] font-normal tracking-normal text-muted-foreground"

const SEARCH_DEBOUNCE_MS = 200

function ChartsNavBody({ showSearch = true }: { showSearch?: boolean }) {
  const pathname = usePathname()
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

  const filteredTypes = React.useMemo(() => {
    return chartTypeMeta.filter(
      (item) =>
        matchesNavQuery(item.title, debouncedQuery) ||
        matchesNavQuery(item.en, debouncedQuery) ||
        matchesNavQuery(item.type, debouncedQuery) ||
        matchesNavQuery(item.description, debouncedQuery)
    )
  }, [debouncedQuery])

  const introVisible =
    !debouncedQuery ||
    matchesNavQuery("معرفی", debouncedQuery) ||
    matchesNavQuery("charts", debouncedQuery) ||
    matchesNavQuery("نمودار", debouncedQuery)

  const hasResults = introVisible || filteredTypes.length > 0

  return (
    <>
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
        data-charts-sidebar-content=""
        className="w-full scroll-fade scrollbar-soft overflow-x-hidden pe-1 [--scroll-fade-t-size:0px]"
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
                    isActive={pathname === "/charts"}
                    className={ACTIVE_ITEM_CLASS}
                  >
                    <Link href="/charts">معرفی</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}

              {filteredTypes.map((item) => (
                <SidebarMenuItem key={item.type}>
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
                        title={item.en}
                        className={SIDEBAR_EN_CLASS}
                      >
                        {item.en}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  )
}

export function ChartsListIndex() {
  const pathname = usePathname()
  const current =
    pathname === "/charts"
      ? null
      : (getChartTypeMeta(pathname.split("/")[2] ?? "")?.title ?? null)

  return (
    <PersianDigits>
      <ListIndexNav title="فهرست نمودارها" current={current}>
        <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
          <ChartsNavBody showSearch />
        </SidebarProvider>
      </ListIndexNav>
    </PersianDigits>
  )
}

export function ChartsSidebar({
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
          <ChartsNavBody showSearch />
        </div>
      </Sidebar>
    </PersianDigits>
  )
}
