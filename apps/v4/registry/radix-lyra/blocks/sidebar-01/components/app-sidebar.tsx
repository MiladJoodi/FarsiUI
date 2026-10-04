import * as React from "react"

import SearchForm from "@/registry/radix-lyra/blocks/sidebar-01/components/search-form"
import VersionSwitcher from "@/registry/radix-lyra/blocks/sidebar-01/components/version-switcher"
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
} from "@/registry/radix-lyra/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "شروع کار",
      url: "#",
      items: [
        {
          title: "نصب",
          url: "#",
        },
        {
          title: "ساختار پروژه",
          url: "#",
        },
      ],
    },
    {
      title: "ساخت اپلیکیشن شما",
      url: "#",
      items: [
        {
          title: "مسیریابی",
          url: "#",
        },
        {
          title: "دریافت داده",
          url: "#",
          isActive: true,
        },
        {
          title: "رندرینگ",
          url: "#",
        },
        {
          title: "کش‌گذاری",
          url: "#",
        },
        {
          title: "استایل‌دهی",
          url: "#",
        },
        {
          title: "بهینه‌سازی",
          url: "#",
        },
        {
          title: "پیکربندی",
          url: "#",
        },
        {
          title: "تست‌نویسی",
          url: "#",
        },
        {
          title: "احراز هویت",
          url: "#",
        },
        {
          title: "استقرار",
          url: "#",
        },
        {
          title: "ارتقا",
          url: "#",
        },
        {
          title: "نمونه‌ها",
          url: "#",
        },
      ],
    },
    {
      title: "مرجع API",
      url: "#",
      items: [
        {
          title: "کامپوننت‌ها",
          url: "#",
        },
        {
          title: "قراردادهای فایل",
          url: "#",
        },
        {
          title: "توابع",
          url: "#",
        },
        {
          title: "گزینه‌های next.config.js",
          url: "#",
        },
        {
          title: "خط فرمان (CLI)",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "معماری",
      url: "#",
      items: [
        {
          title: "دسترسی‌پذیری",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "کامپایلر Next.js",
          url: "#",
        },
        {
          title: "مرورگرهای پشتیبانی‌شده",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
}

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="right" {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
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
