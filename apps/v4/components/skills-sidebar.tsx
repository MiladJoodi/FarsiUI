"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { getSkills, getSkillsNavCurrent } from "@/lib/skills-data"
import { ListIndexNav } from "@/components/list-index-nav"
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

function SkillsNavList() {
  const pathname = usePathname()
  const skillItems = React.useMemo(() => getSkills(), [])

  return (
    <SidebarGroup className="pt-1">
      <SidebarGroupContent>
        <SidebarMenu className="gap-0.5">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/skills"}
              className={ACTIVE_ITEM_CLASS}
            >
              <Link href="/skills">معرفی</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {skillItems.map((skill) => (
            <SidebarMenuItem key={skill.slug}>
              <SidebarMenuButton
                asChild
                isActive={pathname === `/skills/${skill.slug}`}
                className={`${ACTIVE_ITEM_CLASS} ps-2`}
              >
                <Link
                  href={`/skills/${skill.slug}`}
                  className="flex w-full min-w-0 items-center gap-1.5"
                >
                  <span className="shrink-0 whitespace-nowrap">{skill.title}</span>
                  <span
                    aria-hidden
                    className="mb-0.5 min-w-2 flex-1 border-b border-dashed border-border/60"
                  />
                  <span
                    dir="ltr"
                    lang="en"
                    title={skill.slug}
                    className="min-w-0 shrink truncate font-mono text-[0.65rem] font-normal tracking-wide text-muted-foreground"
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
  )
}

export function SkillsListIndex() {
  const pathname = usePathname()
  const current = getSkillsNavCurrent(pathname)

  return (
    <ListIndexNav title="فهرست مهارت‌ها" current={current}>
      <SidebarProvider className="min-h-0! flex h-full w-full flex-col">
        <SkillsNavList />
      </SidebarProvider>
    </ListIndexNav>
  )
}

export function SkillsSidebar({
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
        data-skills-sidebar-content=""
        className="w-full scroll-fade scrollbar-none overflow-x-hidden pe-1 pt-2"
      >
        <SkillsNavList />
      </SidebarContent>
    </Sidebar>
  )
}
