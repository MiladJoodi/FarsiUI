"use client"

import * as React from "react"

import { Calendars } from "@/registry/bases/base/blocks/sidebar-12/components/calendars"
import { DatePicker } from "@/registry/bases/base/blocks/sidebar-12/components/date-picker"
import { NavUser } from "@/registry/bases/base/blocks/sidebar-12/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/registry/bases/base/ui/sidebar"
import { IconPlaceholder } from "@/components/icon-placeholder"

// This is sample data.
const data = {
  user: {
    name: "سارا محمدی",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "تقویم‌های من",
      items: ["شخصی", "کاری", "خانوادگی"],
    },
    {
      name: "علاقه‌مندی‌ها",
      items: ["تعطیلات", "تولدها"],
    },
    {
      name: "سایر",
      items: ["سفر", "یادآورها", "موعدها"],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar dir="rtl" lang="fa" {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconPlaceholder
                lucide="PlusIcon"
                tabler="IconPlus"
                hugeicons="PlusSignIcon"
                phosphor="PlusIcon"
                remixicon="RiAddLine"
              />
              <span>تقویم جدید</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
