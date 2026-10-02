"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { NavFavorites } from "@/registry/base-mira/blocks/sidebar-10/components/nav-favorites"
import { NavMain } from "@/registry/base-mira/blocks/sidebar-10/components/nav-main"
import { NavSecondary } from "@/registry/base-mira/blocks/sidebar-10/components/nav-secondary"
import { NavWorkspaces } from "@/registry/base-mira/blocks/sidebar-10/components/nav-workspaces"
import { TeamSwitcher } from "@/registry/base-mira/blocks/sidebar-10/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/registry/base-mira/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "FarsiUI",
      logo: (
        <IconPlaceholder
          lucide="TerminalIcon"
          tabler="IconCommand"
          hugeicons="CommandIcon"
          phosphor="CommandIcon"
          remixicon="RiCommandLine"
        />
      ),
      plan: "سازمانی",
    },
    {
      name: "شرکت آریا",
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
      name: "استودیو نوآ",
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
    {
      title: "پرسش از هوش مصنوعی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="SparklesIcon"
          tabler="IconSparkles"
          hugeicons="SparklesIcon"
          phosphor="SparkleIcon"
          remixicon="RiSparklingLine"
        />
      ),
    },
    {
      title: "خانه",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="HomeIcon"
          tabler="IconHome"
          hugeicons="HomeIcon"
          phosphor="HouseIcon"
          remixicon="RiHomeLine"
        />
      ),
      isActive: true,
    },
    {
      title: "صندوق ورودی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="InboxIcon"
          tabler="IconInbox"
          hugeicons="InboxIcon"
          phosphor="TrayIcon"
          remixicon="RiInboxLine"
        />
      ),
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "تقویم",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="CalendarIcon"
          tabler="IconCalendar"
          hugeicons="CalendarIcon"
          phosphor="CalendarIcon"
          remixicon="RiCalendarLine"
        />
      ),
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
    },
    {
      title: "قالب‌ها",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="BlocksIcon"
          tabler="IconCube"
          hugeicons="CubeIcon"
          phosphor="CubeIcon"
          remixicon="RiBox3Line"
        />
      ),
    },
    {
      title: "سطل زباله",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="Trash2Icon"
          tabler="IconTrash"
          hugeicons="Delete02Icon"
          phosphor="TrashIcon"
          remixicon="RiDeleteBinLine"
        />
      ),
    },
    {
      title: "راهنما",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="MessageCircleQuestionIcon"
          tabler="IconMessageQuestion"
          hugeicons="MessageQuestionIcon"
          phosphor="ChatCircleIcon"
          remixicon="RiQuestionLine"
        />
      ),
    },
  ],
  favorites: [
    {
      name: "مدیریت پروژه و پیگیری وظایف",
      url: "#",
      emoji: "📊",
    },
    {
      name: "دستور پخت و برنامه غذایی",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "پیگیری تناسب اندام",
      url: "#",
      emoji: "💪",
    },
    {
      name: "یادداشت کتاب و فهرست مطالعه",
      url: "#",
      emoji: "📚",
    },
    {
      name: "باغبانی و نگهداری گیاه",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "پیشرفت زبان‌آموزی",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "بازسازی منزل و بودجه",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "مالی شخصی و سرمایه‌گذاری",
      url: "#",
      emoji: "💰",
    },
    {
      name: "فهرست فیلم و سریال",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "پیگیری عادت و اهداف روزانه",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "مدیریت زندگی شخصی",
      emoji: "🏠",
      pages: [
        {
          name: "یادداشت روزانه",
          url: "#",
          emoji: "📔",
        },
        {
          name: "پیگیری سلامت و تندرستی",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "رشد شخصی و یادگیری",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "رشد حرفه‌ای",
      emoji: "💼",
      pages: [
        {
          name: "اهداف شغلی و نقاط عطف",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "مهارت‌ها و گزارش آموزش",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "ارتباطات و رویدادها",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "پروژه‌های خلاقانه",
      emoji: "🎨",
      pages: [
        {
          name: "ایده نوشتن و طرح داستان",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "نمونه‌کار هنر و طراحی",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "آهنگسازی و تمرین موسیقی",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "مدیریت منزل",
      emoji: "🏡",
      pages: [
        {
          name: "بودجه خانوار و هزینه‌ها",
          url: "#",
          emoji: "💰",
        },
        {
          name: "نگهداری منزل و وظایف",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "تقویم خانواده و برنامه‌ریزی",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "سفر و ماجراجویی",
      emoji: "🧳",
      pages: [
        {
          name: "برنامه سفر و مسیرها",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "لیست سفر و ایده‌ها",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "دفتر سفر و گالری",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar dir="rtl" lang="fa" className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
