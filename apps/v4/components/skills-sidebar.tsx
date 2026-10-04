"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { getSkills, getSkillsNavCurrent } from "@/lib/skills-data"
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

function SkillsNavBody({ showSearch = true }: { showSearch?: boolean }) {
  const pathname = usePathname()
  const skillItems = React.useMemo(() => getSkills(), [])
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

  const filteredSkills = React.useMemo(() => {
    return skillItems.filter(
      (skill) =>
        matchesNavQuery(skill.title, debouncedQuery) ||
        matchesNavQuery(skill.slug, debouncedQuery) ||
        matchesNavQuery(skill.summary, debouncedQuery) ||
        skill.tags.some((tag) => matchesNavQuery(tag, debouncedQuery))
    )
  }, [skillItems, debouncedQuery])

  const introVisible =
    !debouncedQuery ||
    matchesNavQuery("معرفی", debouncedQuery) ||
    matchesNavQuery("skills", debouncedQuery)

  const hasResults = introVisible || filteredSkills.length > 0

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
        data-skills-sidebar-content=""
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
                    isActive={pathname === "/skills"}
                    className={ACTIVE_ITEM_CLASS}
                  >
                    <Link href="/skills">معرفی</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}

              {filteredSkills.map((skill) => (
                <SidebarMenuItem key={skill.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === `/skills/${skill.slug}`}
                    className={`${ACTIVE_ITEM_CLASS} ps-2`}
                  >
                    <Link
                      href={`/skills/${skill.slug}`}
                      className="flex w-full min-w-0 items-center gap-2"
                    >
                      <span className="truncate">{skill.title}</span>
                      <span
                        aria-hidden
                        className="mb-0.5 min-w-3 flex-1 border-b border-dashed border-border/60"
                      />
                      <span
                        dir="ltr"
                        lang="en"
                        title={skill.slug}
                        className={SIDEBAR_EN_CLASS}
                      >
                        {skill.slug}
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

export function SkillsListIndex() {
  const pathname = usePathname()
  const current = getSkillsNavCurrent(pathname)

  return (
    <PersianDigits>
      <ListIndexNav title="فهرست مهارت‌ها" current={current}>
        <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
          <SkillsNavBody showSearch />
        </SidebarProvider>
      </ListIndexNav>
    </PersianDigits>
  )
}

export function SkillsSidebar({
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
          <SkillsNavBody showSearch />
        </div>
      </Sidebar>
    </PersianDigits>
  )
}
