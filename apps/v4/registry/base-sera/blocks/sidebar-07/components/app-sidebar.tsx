"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { NavMain } from "@/registry/base-sera/blocks/sidebar-07/components/nav-main"
import { NavProjects } from "@/registry/base-sera/blocks/sidebar-07/components/nav-projects"
import { NavUser } from "@/registry/base-sera/blocks/sidebar-07/components/nav-user"
import { TeamSwitcher } from "@/registry/base-sera/blocks/sidebar-07/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/registry/base-sera/ui/sidebar"

const data = {
  user: {
    name: "سارا محمدی",
    email: "sara@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "شرکت آریا",
      logo: (
        <IconPlaceholder
          lucide="GalleryVerticalEndIcon"
          tabler="IconLayoutRows"
          hugeicons="LayoutBottomIcon"
          phosphor="RowsIcon"
          remixicon="RiGalleryLine"
        />
      ),
      plan: "سازمانی",
    },
    {
      name: "استودیو نوآ",
      logo: (
        <IconPlaceholder
          lucide="AudioLinesIcon"
          tabler="IconWaveSine"
          hugeicons="AudioWave01Icon"
          phosphor="WaveformIcon"
          remixicon="RiPulseLine"
        />
      ),
      plan: "استارتاپ",
    },
    {
      name: "تیم آزاد",
      logo: (
        <IconPlaceholder
          lucide="TerminalIcon"
          tabler="IconCommand"
          hugeicons="CommandIcon"
          phosphor="CommandIcon"
          remixicon="RiCommandLine"
        />
      ),
      plan: "رایگان",
    },
  ],
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
        { title: "تاریخچه", url: "#" },
        { title: "نشان‌شده‌ها", url: "#" },
        { title: "تنظیمات", url: "#" },
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
        { title: "ژنسیس", url: "#" },
        { title: "اکتشاف", url: "#" },
        { title: "کوانتوم", url: "#" },
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
        { title: "مقدمه", url: "#" },
        { title: "شروع کار", url: "#" },
        { title: "آموزش‌ها", url: "#" },
        { title: "تغییرات", url: "#" },
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
        { title: "عمومی", url: "#" },
        { title: "تیم", url: "#" },
        { title: "صورتحساب", url: "#" },
        { title: "محدودیت‌ها", url: "#" },
      ],
    },
  ],
  projects: [
    {
      name: "طراحی محصول",
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
      collapsible="icon"
      dir="rtl"
      lang="fa"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
