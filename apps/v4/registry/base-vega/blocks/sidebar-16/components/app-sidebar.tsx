"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { NavMain } from "@/registry/base-vega/blocks/sidebar-16/components/nav-main"
import { NavProjects } from "@/registry/base-vega/blocks/sidebar-16/components/nav-projects"
import { NavSecondary } from "@/registry/base-vega/blocks/sidebar-16/components/nav-secondary"
import { NavUser } from "@/registry/base-vega/blocks/sidebar-16/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/base-vega/ui/sidebar"

const data = {
  user: {
    name: "سارا محمدی",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "میز کار",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="TerminalSquareIcon"
          tabler="IconTerminal2"
          hugeicons="ComputerTerminalIcon"
          phosphor="TerminalIcon"
          remixicon="RiTerminalBoxLine"
        />
      ),
      isActive: true,
      items: [
        {
          title: "تاریخچه",
          url: "#",
        },
        {
          title: "نشان‌شده‌ها",
          url: "#",
        },
        {
          title: "تنظیمات",
          url: "#",
        },
      ],
    },
    {
      title: "مدل‌ها",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="BotIcon"
          tabler="IconRobot"
          hugeicons="RoboticIcon"
          phosphor="RobotIcon"
          remixicon="RiRobotLine"
        />
      ),
      items: [
        {
          title: "ژنسیس",
          url: "#",
        },
        {
          title: "اکتشاف",
          url: "#",
        },
        {
          title: "کوانتوم",
          url: "#",
        },
      ],
    },
    {
      title: "مستندات",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="BookOpenIcon"
          tabler="IconBook"
          hugeicons="BookOpen02Icon"
          phosphor="BookOpenIcon"
          remixicon="RiBookOpenLine"
        />
      ),
      items: [
        {
          title: "مقدمه",
          url: "#",
        },
        {
          title: "شروع کار",
          url: "#",
        },
        {
          title: "آموزش‌ها",
          url: "#",
        },
        {
          title: "تغییرات",
          url: "#",
        },
      ],
    },
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
      items: [
        {
          title: "عمومی",
          url: "#",
        },
        {
          title: "تیم",
          url: "#",
        },
        {
          title: "صورتحساب",
          url: "#",
        },
        {
          title: "محدودیت‌ها",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "پشتیبانی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="LifeBuoyIcon"
          tabler="IconLifebuoy"
          hugeicons="ChartRingIcon"
          phosphor="LifebuoyIcon"
          remixicon="RiLifebuoyLine"
        />
      ),
    },
    {
      title: "بازخورد",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="SendIcon"
          tabler="IconSend"
          hugeicons="SentIcon"
          phosphor="PaperPlaneTiltIcon"
          remixicon="RiSendPlaneLine"
        />
      ),
    },
  ],
  projects: [
    {
      name: "مهندسی طراحی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="FrameIcon"
          tabler="IconFrame"
          hugeicons="CropIcon"
          phosphor="CropIcon"
          remixicon="RiCropLine"
        />
      ),
    },
    {
      name: "فروش و بازاریابی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="PieChartIcon"
          tabler="IconChartPie"
          hugeicons="PieChartIcon"
          phosphor="ChartPieIcon"
          remixicon="RiPieChartLine"
        />
      ),
    },
    {
      name: "سفر و گردشگری",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="MapIcon"
          tabler="IconMap"
          hugeicons="MapsIcon"
          phosphor="MapTrifoldIcon"
          remixicon="RiMapLine"
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      dir="rtl"
      lang="fa"
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <IconPlaceholder
                  lucide="TerminalIcon"
                  tabler="IconCommand"
                  hugeicons="CommandIcon"
                  phosphor="CommandIcon"
                  remixicon="RiCommandLine"
                  className="size-4"
                />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">FarsiUI</span>
                <span className="truncate text-xs">سازمانی</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
