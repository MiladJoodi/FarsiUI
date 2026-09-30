import * as React from "react"
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
  SidebarMenuSkeleton,
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

// Dummy fetch function.
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return projects
}

export default function AppSidebar() {
  return (
    <div dir="rtl">
      <SidebarProvider>
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>پروژه‌ها</SidebarGroupLabel>
              <SidebarGroupContent>
                <React.Suspense fallback={<NavProjectsSkeleton />}>
                  <NavProjects />
                </React.Suspense>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

async function NavProjects() {
  const projects = await fetchProjects()

  return (
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
  )
}
