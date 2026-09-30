"use client"

import { FrameIcon, MapIcon, PieChartIcon, PlusIcon } from "lucide-react"
import { toast, Toaster } from "sonner"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/styles/base-nova/ui/sidebar"

export default function AppSidebar() {
  return (
    <div dir="rtl">
      <SidebarProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "me-[160px]",
          }}
        />
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>پروژه‌ها</SidebarGroupLabel>
              <SidebarGroupAction
                title="افزودن پروژه"
                onClick={() => toast("روی اقدام گروه کلیک کردید!")}
              >
                <PlusIcon /> <span className="sr-only">افزودن پروژه</span>
              </SidebarGroupAction>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton render={<a href="#" />}>
                      <FrameIcon />
                      <span>مهندسی طراحی</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton render={<a href="#" />}>
                      <PieChartIcon />
                      <span>فروش و بازاریابی</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton render={<a href="#" />}>
                      <MapIcon />
                      <span>سفر</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}
