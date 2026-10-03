"use client"

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
} from "@/registry/base-maia/ui/sidebar"

const GROUPS = [
  {
    label: "شروع کار",
    items: [
      { title: "معرفی", active: true },
      { title: "نصب" },
      { title: "ساختار پروژه" },
    ],
  },
  {
    label: "راهنما",
    items: [
      { title: "کامپوننت‌ها" },
      { title: "تم و رنگ" },
      { title: "راست‌چین" },
      { title: "دسترسی‌پذیری" },
    ],
  },
  {
    label: "جامعه",
    items: [{ title: "نمونه‌ها" }, { title: "مشارکت" }, { title: "تغییرات" }],
  },
] as const

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader className="border-b px-4 py-3">
        <p className="text-sm font-semibold">مستندات</p>
        <p className="text-xs text-muted-foreground">بدون آیکن · متنی</p>
      </SidebarHeader>
      <SidebarContent>
        {GROUPS.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={"active" in item && item.active}
                      render={<a href="#" />}
                    >
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
