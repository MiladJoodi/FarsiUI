"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/bases/base/ui/sidebar"
import { IconPlaceholder } from "@/components/icon-placeholder"

const NAV = [
  {
    title: "داشبورد",
    icon: "LayoutDashboardIcon",
    items: [{ title: "نمای کلی", active: true }, { title: "آمار" }],
  },
  {
    title: "فروشگاه",
    icon: "ShoppingBagIcon",
    items: [{ title: "محصولات" }, { title: "سفارش‌ها" }, { title: "مشتریان" }],
  },
  {
    title: "محتوا",
    icon: "FileTextIcon",
    items: [{ title: "نوشته‌ها" }, { title: "رسانه" }],
  },
] as const

const QUICK = [
  { title: "جستجو", icon: "SearchIcon" },
  { title: "تنظیمات", icon: "SettingsIcon" },
] as const

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="FarsiUI" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <IconPlaceholder lucide="PanelsTopLeftIcon" className="size-4" />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-semibold">FarsiUI</span>
                <span className="truncate text-xs text-muted-foreground">
                  جمع‌شونده
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
          <SidebarMenu>
            {NAV.map((item) => (
              <Collapsible
                key={item.title}
                defaultOpen={item.title === "داشبورد"}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={<SidebarMenuButton tooltip={item.title} />}
                  >
                    <IconPlaceholder lucide={item.icon} className="size-4" />
                    <span>{item.title}</span>
                    <IconPlaceholder
                      lucide="ChevronDownIcon"
                      className="ms-auto size-4 opacity-60 transition-transform group-data-open/collapsible:rotate-180"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton
                            isActive={"active" in sub && sub.active}
                            render={<a href="#" />}
                          >
                            <span>{sub.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            {QUICK.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title} render={<a href="#" />}>
                  <IconPlaceholder lucide={item.icon} className="size-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="حساب کاربری" render={<a href="#" />}>
              <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-xs font-medium">
                عل
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">علی محمدی</span>
                <span className="truncate text-xs text-muted-foreground">
                  مدیر
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
