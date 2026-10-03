"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/base-nova/ui/sidebar"

const MENUS = [
  {
    title: "فضای کاری",
    icon: "BriefcaseIcon",
    items: ["عمومی", "طراحی", "مهندسی", "بازاریابی"],
  },
  {
    title: "پروژه‌ها",
    icon: "FolderKanbanIcon",
    items: ["فعال", "در انتظار", "بایگانی"],
  },
  {
    title: "برچسب‌ها",
    icon: "TagsIcon",
    items: ["فوری", "باگ", "ویژگی", "مستندات"],
  },
] as const

const FLAT = [
  { title: "خانه", icon: "HomeIcon", active: true },
  { title: "جستجو", icon: "SearchIcon" },
  { title: "اعلان‌ها", icon: "BellIcon" },
] as const

function SoftMenu({
  title,
  icon,
  items,
}: {
  title: string
  icon: string
  items: readonly string[]
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <SidebarMenuItem>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <SidebarMenuButton
              tooltip={title}
              className="data-[state=open]:bg-sidebar-accent"
            />
          }
        >
          <IconPlaceholder lucide={icon} className="size-4" />
          <span>{title}</span>
          <IconPlaceholder
            lucide="ChevronLeftIcon"
            className="ms-auto size-4 opacity-60"
          />
        </PopoverTrigger>
        <PopoverContent
          side="left"
          align="start"
          sideOffset={8}
          className="w-48 p-1"
          dir="rtl"
        >
          <p className="px-2 py-1.5 text-xs text-muted-foreground">{title}</p>
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </PopoverContent>
      </Popover>
    </SidebarMenuItem>
  )
}

export function AppSidebar() {
  return (
    <Sidebar side="right" variant="floating" collapsible="offcanvas">
      <SidebarHeader className="gap-2 border-b p-3">
        <div className="flex items-center justify-between gap-2 px-1">
          <div>
            <p className="text-sm font-semibold">کشویی نرم</p>
            <p className="text-xs text-muted-foreground">Popover زیرمنو</p>
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="افزودن">
            <IconPlaceholder lucide="PlusIcon" className="size-4" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>اصلی</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {FLAT.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={"active" in item && item.active}
                    tooltip={item.title}
                    render={<a href="#" />}
                  >
                    <IconPlaceholder lucide={item.icon} className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>با کشو</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENUS.map((menu) => (
                <SoftMenu key={menu.title} {...menu} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
