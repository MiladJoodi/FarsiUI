import { siteConfig } from "@/lib/config"
import { type Metadata } from "next"

import {
  SkillsListIndex,
  SkillsSidebar,
} from "@/components/skills-sidebar"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

const title = "مهارت‌ها"
const description =
  "دستورالعمل‌های آماده برای وقتی با هوش مصنوعی فارسی می‌نویسید یا محصول فارسی می‌سازید — مناسب Cursor، Claude و Codex."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col" dir="rtl" lang="fa" id="skills">
      <SkillsListIndex />
      <div className="container-wrapper flex flex-1 flex-col px-2">
        <SidebarProvider
          className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
            } as React.CSSProperties
          }
        >
          <SkillsSidebar />
          <div className="h-full w-full min-w-0 section-soft ps-1 pe-2 pt-2 md:ps-2 md:pe-4 md:py-6">
            {children}
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
