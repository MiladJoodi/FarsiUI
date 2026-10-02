"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Calendars } from "@/registry/base-vega/blocks/sidebar-15/components/calendars"
import { DatePicker } from "@/registry/base-vega/blocks/sidebar-15/components/date-picker"
import { NavUser } from "@/registry/base-vega/blocks/sidebar-15/components/nav-user"
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
} from "@/registry/base-vega/ui/sidebar"

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
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "علاقه‌مندی‌ها",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "سایر",
      items: ["سفر", "یادآورها", "موعدها"],
    },
  ],
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
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
    </Sidebar>
  )
}
