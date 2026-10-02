import * as React from "react"

import { SearchForm } from "@/registry/bases/base/blocks/sidebar-01/components/search-form"
import { VersionSwitcher } from "@/registry/bases/base/blocks/sidebar-01/components/version-switcher"
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
} from "@/registry/bases/base/ui/sidebar"

// This is sample data.
const data = {
  versions: ["پایدار ۱٫۰٫۱", "آلفا ۱٫۱٫۰", "بتا ۲٫۰٫۰"],
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
      title: "ساخت اپلیکیشن",
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
          title: "کش",
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
          title: "تست",
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
          title: "ارتقاء",
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
          title: "گزینه‌های next.config",
          url: "#",
        },
        {
          title: "خط فرمان",
          url: "#",
        },
        {
          title: "زمان‌اجرای لبه",
          url: "#",
        },
      ],
    },
    {
      title: "معماری",
      url: "#",
      items: [
        {
          title: "دسترس‌پذیری",
          url: "#",
        },
        {
          title: "تازه‌سازی سریع",
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
          title: "توربوپک",
          url: "#",
        },
      ],
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar dir="rtl" lang="fa" {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      render={<a href={item.url} onClick={(e) => { if (item.url === "#") e.preventDefault() }} />}
                    >
                      {item.title}
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
