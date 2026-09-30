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
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/styles/base-nova/ui/sidebar"

const projects = [
  {
    name: "مهندسی طراحی",
    url: "#",
    icon: FrameIcon,
    badge: "۲۴",
  },
  {
    name: "فروش و بازاریابی",
    url: "#",
    icon: PieChartIcon,
    badge: "۱۲",
  },
  {
    name: "سفر",
    url: "#",
    icon: MapIcon,
    badge: "۳",
  },
  {
    name: "پشتیبانی",
    url: "#",
    icon: LifeBuoyIcon,
    badge: "۲۱",
  },
  {
    name: "بازخورد",
    url: "#",
    icon: SendIcon,
    badge: "۸",
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
                      <SidebarMenuButton
                        render={<a href={project.url} />}
                        className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                      >
                        <project.icon />
                        <span>{project.name}</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
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
