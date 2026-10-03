"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { SearchForm } from "@/registry/aria-rhea/blocks/sidebar-02/components/search-form"
import { VersionSwitcher } from "@/registry/aria-rhea/blocks/sidebar-02/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/aria-rhea/ui/collapsible"
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
} from "@/registry/aria-rhea/ui/sidebar"

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
    <Sidebar side="right" {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            defaultExpanded
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                elementType={CollapsibleTrigger}
              >
                {item.title}{" "}
                <IconPlaceholder
                  lucide="ChevronRightIcon"
                  tabler="IconChevronRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="CaretRightIcon"
                  remixicon="RiArrowRightSLine"
                  className="ms-auto transition-transform group-data-expanded/collapsible:rotate-90"
                />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          href={item.url}
                          isActive={item.isActive}
                        >
                          {item.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
