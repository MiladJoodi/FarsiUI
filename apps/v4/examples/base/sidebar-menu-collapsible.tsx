"use client"

import { ChevronRightIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/registry/bases/base/ui/sidebar"

const items = [
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
        title: "واکشی داده",
        url: "#",
        isActive: true,
      },
      {
        title: "رندر",
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
        title: "مثال‌ها",
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
]

export default function AppSidebar() {
  return (
    <div dir="rtl">
      <SidebarProvider>
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item, index) => (
                    <Collapsible
                      key={index}
                      className="group/collapsible"
                      defaultOpen={index === 0}
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger render={<SidebarMenuButton />}>
                          <span>{item.title}</span>
                          <ChevronRightIcon className="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180 rtl:group-data-[state=open]/collapsible:-rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem, subIndex) => (
                              <SidebarMenuSubItem key={subIndex}>
                                <SidebarMenuSubButton
                                  render={<a href={subItem.url} />}
                                >
                                  <span>{subItem.title}</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}
