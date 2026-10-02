"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { NavDocuments } from "@/registry/base-sera/blocks/dashboard-01/components/nav-documents"
import { NavMain } from "@/registry/base-sera/blocks/dashboard-01/components/nav-main"
import { NavSecondary } from "@/registry/base-sera/blocks/dashboard-01/components/nav-secondary"
import { NavUser } from "@/registry/base-sera/blocks/dashboard-01/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/base-sera/ui/sidebar"

const data = {
  user: {
    name: "سارا محمدی",
    email: "sara@example.com",
    avatar: "/avatars/01.png",
  },
  navMain: [
    {
      title: "داشبورد",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="LayoutDashboardIcon"
          tabler="IconDashboard"
          hugeicons="DashboardSquare01Icon"
          phosphor="SquaresFourIcon"
          remixicon="RiDashboardLine"
        />
      ),
    },
    {
      title: "چرخهٔ کار",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="ListIcon"
          tabler="IconListDetails"
          hugeicons="Menu01Icon"
          phosphor="ListIcon"
          remixicon="RiListUnordered"
        />
      ),
    },
    {
      title: "تحلیل",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="ChartBarIcon"
          tabler="IconChartBar"
          hugeicons="ChartHistogramIcon"
          phosphor="ChartBarIcon"
          remixicon="RiBarChartLine"
        />
      ),
    },
    {
      title: "پروژه‌ها",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="FolderIcon"
          tabler="IconFolder"
          hugeicons="Folder01Icon"
          phosphor="FolderIcon"
          remixicon="RiFolderLine"
        />
      ),
    },
    {
      title: "تیم",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="UsersIcon"
          tabler="IconUsers"
          hugeicons="UserGroupIcon"
          phosphor="UsersIcon"
          remixicon="RiGroupLine"
        />
      ),
    },
  ],
  navSecondary: [
    {
      title: "تنظیمات",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="Settings2Icon"
          tabler="IconSettings"
          hugeicons="Settings05Icon"
          phosphor="GearIcon"
          remixicon="RiSettingsLine"
        />
      ),
    },
    {
      title: "راهنما",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="CircleHelpIcon"
          tabler="IconHelp"
          hugeicons="HelpCircleIcon"
          phosphor="QuestionIcon"
          remixicon="RiQuestionLine"
        />
      ),
    },
    {
      title: "جستجو",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="SearchIcon"
          tabler="IconSearch"
          hugeicons="SearchIcon"
          phosphor="MagnifyingGlassIcon"
          remixicon="RiSearchLine"
        />
      ),
    },
  ],
  documents: [
    {
      name: "کتابخانهٔ داده",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="DatabaseIcon"
          tabler="IconDatabase"
          hugeicons="Database01Icon"
          phosphor="DatabaseIcon"
          remixicon="RiDatabase2Line"
        />
      ),
    },
    {
      name: "گزارش‌ها",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="FileChartColumnIcon"
          tabler="IconReport"
          hugeicons="Analytics01Icon"
          phosphor="ChartLineIcon"
          remixicon="RiFileChartLine"
        />
      ),
    },
    {
      name: "دستیار متن",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="FileIcon"
          tabler="IconFileWord"
          hugeicons="File01Icon"
          phosphor="FileIcon"
          remixicon="RiFileLine"
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" dir="rtl" lang="fa" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <IconPlaceholder
                lucide="CommandIcon"
                tabler="IconInnerShadowTop"
                hugeicons="CommandIcon"
                phosphor="CommandIcon"
                remixicon="RiCommandLine"
                className="size-5!"
              />
              <span className="text-base font-semibold">فارسی‌UI</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
