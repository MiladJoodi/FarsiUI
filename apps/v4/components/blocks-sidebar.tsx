"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import {
  findBlocksNavMatch,
  getVisibleBlocksNav,
} from "@/lib/blocks-nav"
import { ListIndexNav } from "@/components/list-index-nav"
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
  "relative h-[30px] w-full overflow-visible border border-transparent pe-1.5 text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"

function BlocksNavList() {
  const pathname = usePathname()
  const categories = React.useMemo(() => getVisibleBlocksNav(), [])
  const match = React.useMemo(
    () => findBlocksNavMatch(pathname),
    [pathname]
  )
  const [openCategories, setOpenCategories] = React.useState<
    Record<string, boolean>
  >({})

  React.useEffect(() => {
    if (match?.category) {
      setOpenCategories((prev) => ({
        ...prev,
        [match.category.slug]: true,
      }))
    }
  }, [match?.category?.slug])

  return (
    <SidebarGroup className="pt-1">
      <SidebarGroupContent>
        <SidebarMenu className="gap-0.5">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/blocks"}
              className={ACTIVE_ITEM_CLASS}
            >
              <Link href="/blocks">ویژه</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {categories.map((category) => {
            const isCategoryOpen =
              openCategories[category.slug] ??
              match?.category.slug === category.slug

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
                  <CollapsibleTrigger className="flex h-[30px] w-full cursor-pointer items-center gap-1.5 rounded-md px-2 text-[0.8rem] font-medium text-muted-foreground outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <ChevronDownIcon className="size-3.5 shrink-0 opacity-60 transition-transform group-data-[state=closed]/blocks-cat:rotate-90" />
                    <span className="truncate">{category.title}</span>
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
                                className="shrink-0 font-mono text-[0.65rem] font-normal tracking-wide text-muted-foreground"
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
  )
}

export function BlocksListIndex() {
  const pathname = usePathname()
  const match = React.useMemo(
    () => findBlocksNavMatch(pathname),
    [pathname]
  )
  const current =
    pathname === "/blocks" ? "ویژه" : (match?.item.title ?? null)

  return (
    <ListIndexNav title="فهرست بلوک‌ها" current={current}>
      <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
        <BlocksNavList />
      </SidebarProvider>
    </ListIndexNav>
  )
}

export function BlocksSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className={SIDEBAR_CLASS}
      collapsible="none"
      dir="rtl"
      lang="fa"
      {...props}
    >
      <SidebarContent
        data-blocks-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-1 pt-2"
      >
        <BlocksNavList />
      </SidebarContent>
    </Sidebar>
  )
}
