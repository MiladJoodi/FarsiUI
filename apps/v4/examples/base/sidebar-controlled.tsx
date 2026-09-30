"use client"

import * as React from "react"
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/styles/base-nova/ui/sidebar"

const projects = [
  {
    name: "مهندسی طراحی",
    url: "#",
    icon: FrameIcon,
  },
  {
    name: "فروش و بازاریابی",
    url: "#",
    icon: PieChartIcon,
  },
  {
    name: "سفر",
    url: "#",
    icon: MapIcon,
  },
  {
    name: "پشتیبانی",
    url: "#",
    icon: LifeBuoyIcon,
  },
  {
    name: "بازخورد",
    url: "#",
    icon: SendIcon,
  },
]

export default function AppSidebar() {
  const [open, setOpen] = React.useState(true)

  return (
    <div dir="rtl">
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>پروژه‌ها</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {projects.map((project) => (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton render={<a href={project.url} />}>
                        <project.icon />
                        <span>{project.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 items-center justify-between px-4">
            <Button
              onClick={() => setOpen((open) => !open)}
              size="sm"
              variant="ghost"
            >
              {open ? (
                <PanelLeftCloseIcon className="rtl:rotate-180" />
              ) : (
                <PanelLeftOpenIcon className="rtl:rotate-180" />
              )}
              <span>
                {open ? "بستن" : "باز کردن"} نوار کناری
              </span>
            </Button>
          </header>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
