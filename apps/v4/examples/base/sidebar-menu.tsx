"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
  return (
    <div dir="rtl">
      <SidebarProvider>
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
      </SidebarProvider>
    </div>
  )
}
