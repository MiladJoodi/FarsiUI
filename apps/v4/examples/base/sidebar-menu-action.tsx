"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  MoreHorizontalIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
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
                      <SidebarMenuButton
                        render={<a href={project.url} />}
                        className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                      >
                        <project.icon />
                        <span>{project.name}</span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                        <DropdownMenuTrigger render={<SidebarMenuAction />}>
                          <MoreHorizontalIcon />
                          <span className="sr-only">بیشتر</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="left" align="start">
                          <DropdownMenuItem>
                            <span>ویرایش پروژه</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>حذف پروژه</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
