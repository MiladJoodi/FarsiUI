import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/base-maia/ui/sidebar"

// This is sample data.
const data = {
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
          title: "CLI",
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
          title: "دسترس‌پذیری",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
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
    {
      title: "جامعه",
      url: "#",
      items: [
        {
          title: "راهنمای مشارکت",
          url: "#",
        },
      ],
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar dir="rtl" lang="fa" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>فهرست مطالب</SidebarGroupLabel>
          <SidebarGroupContent>
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
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            isActive={item.isActive}
                            render={<a href={item.url} />}
                          >
                            {item.title}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
