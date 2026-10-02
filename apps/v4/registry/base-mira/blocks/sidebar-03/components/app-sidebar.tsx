"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/base-mira/ui/sidebar"

const data = {
  navMain: [
    {
      title: "شروع کار",
      url: "#",
      items: [
        { title: "نصب", url: "#" },
        { title: "ساختار پروژه", url: "#" },
      ],
    },
    {
      title: "ساخت اپلیکیشن",
      url: "#",
      items: [
        { title: "مسیریابی", url: "#" },
        { title: "دریافت داده", url: "#", isActive: true },
        { title: "رندرینگ", url: "#" },
        { title: "کش", url: "#" },
        { title: "استایل‌دهی", url: "#" },
        { title: "بهینه‌سازی", url: "#" },
        { title: "پیکربندی", url: "#" },
        { title: "تست", url: "#" },
        { title: "احراز هویت", url: "#" },
        { title: "استقرار", url: "#" },
        { title: "ارتقاء", url: "#" },
        { title: "نمونه‌ها", url: "#" },
      ],
    },
    {
      title: "مرجع API",
      url: "#",
      items: [
        { title: "کامپوننت‌ها", url: "#" },
        { title: "قراردادهای فایل", url: "#" },
        { title: "توابع", url: "#" },
        { title: "گزینه‌های next.config", url: "#" },
        { title: "CLI", url: "#" },
        { title: "Edge Runtime", url: "#" },
      ],
    },
    {
      title: "معماری",
      url: "#",
      items: [
        { title: "دسترس‌پذیری", url: "#" },
        { title: "Fast Refresh", url: "#" },
        { title: "کامپایلر Next.js", url: "#" },
        { title: "مرورگرهای پشتیبانی‌شده", url: "#" },
        { title: "Turbopack", url: "#" },
      ],
    },
    {
      title: "جامعه",
      url: "#",
      items: [{ title: "راهنمای مشارکت", url: "#" }],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar dir="rtl" lang="fa" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <IconPlaceholder
                  lucide="GalleryVerticalEndIcon"
                  tabler="IconLayoutRows"
                  hugeicons="LayoutBottomIcon"
                  phosphor="RowsIcon"
                  remixicon="RiGalleryLine"
                  className="size-4"
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">مستندات</span>
                <span className="">نسخه ۱٫۰٫۰</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<a href={item.url} className="font-medium" />}
                >
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          isActive={subItem.isActive}
                          render={<a href={subItem.url} />}
                        >
                          {subItem.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
