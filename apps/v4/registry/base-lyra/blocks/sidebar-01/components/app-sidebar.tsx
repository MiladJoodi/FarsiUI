"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/base-lyra/ui/sidebar"

const NAV = [
  { title: "نمای کلی", icon: "LayoutDashboardIcon", active: true },
  { title: "پروژه‌ها", icon: "FolderIcon" },
  { title: "پیام‌ها", icon: "MessageSquareIcon" },
  { title: "تقویم", icon: "CalendarIcon" },
  { title: "تنظیمات", icon: "SettingsIcon" },
] as const

const SECONDARY = [
  { title: "راهنما", icon: "LifeBuoyIcon" },
  { title: "بازخورد", icon: "SendIcon" },
] as const

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <IconPlaceholder
                  lucide="GalleryVerticalEndIcon"
                  className="size-4"
                />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-semibold">FarsiUI</span>
                <span className="truncate text-xs text-muted-foreground">
                  سازمان
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.active}
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

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {SECONDARY.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
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
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-xs font-medium">
                مر
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">مریم رضایی</span>
                <span className="truncate text-xs text-muted-foreground">
                  maryam@example.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
