"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/base-maia/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/base-maia/ui/sidebar"

const NAV = [
  {
    title: "عملیات",
    icon: "ActivityIcon",
    open: true,
    items: [
      { title: "صف", active: true },
      { title: "لاگ‌ها" },
      { title: "هشدارها" },
    ],
  },
  {
    title: "منابع",
    icon: "DatabaseIcon",
    open: false,
    items: [{ title: "پایگاه‌داده" }, { title: "کش" }, { title: "فایل‌ها" }],
  },
] as const

export function AppSidebar() {
  const [userOpen, setUserOpen] = React.useState(false)

  return (
    <Sidebar side="right" collapsible="offcanvas" variant="sidebar">
      <SidebarHeader className="border-b px-3 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <IconPlaceholder lucide="OrbitIcon" className="size-4" />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-semibold">کنسول</span>
                <span className="truncate text-xs text-muted-foreground">
                  سرویس‌ها
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>سرویس‌ها</SidebarGroupLabel>
          <SidebarMenu>
            {NAV.map((item) => (
              <Collapsible
                key={item.title}
                defaultOpen={item.open}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={<SidebarMenuButton tooltip={item.title} />}
                  >
                    <IconPlaceholder lucide={item.icon} className="size-4" />
                    <span>{item.title}</span>
                    <IconPlaceholder
                      lucide="ChevronDownIcon"
                      className="ms-auto size-4 opacity-60 transition-transform group-data-open/collapsible:rotate-180"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton
                            isActive={"active" in sub && sub.active}
                            render={<a href="#" />}
                          >
                            <span>{sub.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Popover open={userOpen} onOpenChange={setUserOpen}>
              <PopoverTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent"
                  />
                }
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-xs font-medium">
                  سا
                </div>
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">سارا کریمی</span>
                  <span className="truncate text-xs text-muted-foreground">
                    حساب
                  </span>
                </div>
                <IconPlaceholder
                  lucide="ChevronsUpDownIcon"
                  className="ms-auto size-4 opacity-60"
                />
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                className="w-56 p-1"
                dir="rtl"
              >
                <button
                  type="button"
                  className="flex w-full rounded-md px-2 py-1.5 text-start text-sm hover:bg-muted"
                  onClick={() => setUserOpen(false)}
                >
                  پروفایل
                </button>
                <button
                  type="button"
                  className="flex w-full rounded-md px-2 py-1.5 text-start text-sm hover:bg-muted"
                  onClick={() => setUserOpen(false)}
                >
                  تنظیمات
                </button>
                <button
                  type="button"
                  className="flex w-full rounded-md px-2 py-1.5 text-start text-sm text-destructive hover:bg-muted"
                  onClick={() => setUserOpen(false)}
                >
                  خروج
                </button>
              </PopoverContent>
            </Popover>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
