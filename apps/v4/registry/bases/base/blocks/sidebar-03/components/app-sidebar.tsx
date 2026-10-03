"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
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
    title: "پلتفرم",
    icon: "SquareTerminalIcon",
    open: true,
    items: [
      { title: "نمای کلی", active: true },
      { title: "تحلیل" },
      { title: "گزارش‌ها" },
    ],
  },
  {
    title: "پروژه‌ها",
    icon: "FolderIcon",
    open: true,
    items: [
      { title: "فعال" },
      { title: "بایگانی" },
      {
        title: "تیم‌ها",
        items: [{ title: "طراحی" }, { title: "مهندسی" }, { title: "محصول" }],
      },
    ],
  },
  {
    title: "تنظیمات",
    icon: "Settings2Icon",
    open: false,
    items: [{ title: "عمومی" }, { title: "اعضا" }, { title: "صورتحساب" }],
  },
] as const

function NestedItems({
  items,
}: {
  items: readonly {
    title: string
    active?: boolean
    items?: readonly { title: string }[]
  }[]
}) {
  return (
    <SidebarMenuSub>
      {items.map((item) =>
        item.items ? (
          <Collapsible key={item.title} defaultOpen className="group/nested">
            <SidebarMenuSubItem>
              <CollapsibleTrigger
                render={<SidebarMenuSubButton className="w-full" />}
              >
                <span>{item.title}</span>
                <IconPlaceholder
                  lucide="ChevronLeftIcon"
                  className="ms-auto size-3.5 transition-transform group-data-open/nested:-rotate-90"
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((child) => (
                    <SidebarMenuSubItem key={child.title}>
                      <SidebarMenuSubButton render={<a href="#" />}>
                        <span>{child.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuSubItem>
          </Collapsible>
        ) : (
          <SidebarMenuSubItem key={item.title}>
            <SidebarMenuSubButton
              isActive={item.active}
              render={<a href="#" />}
            >
              <span>{item.title}</span>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        )
      )}
    </SidebarMenuSub>
  )
}

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader className="border-b px-4 py-3">
        <p className="text-sm font-semibold">منوی تو در تو</p>
        <p className="text-xs text-muted-foreground">گروه‌های جمع‌شونده</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ناوبری</SidebarGroupLabel>
          <SidebarMenu>
            {NAV.map((item) => (
              <Collapsible
                key={item.title}
                defaultOpen={item.open}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={<SidebarMenuButton tooltip={item.title} />}
                  >
                    <IconPlaceholder lucide={item.icon} className="size-4" />
                    <span>{item.title}</span>
                    <IconPlaceholder
                      lucide="ChevronLeftIcon"
                      className="ms-auto size-4 transition-transform group-data-open/collapsible:-rotate-90"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <NestedItems items={item.items} />
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
