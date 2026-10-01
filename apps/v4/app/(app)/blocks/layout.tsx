import { type Metadata } from "next"

import { BlocksSidebar } from "@/components/blocks-sidebar"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

const title = "بلاک‌ها"
const description = "بلوک‌های آمادهٔ UI برای کپی در پروژه‌های فارسی و راست‌چین."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="container-wrapper flex flex-1 flex-col px-2"
      dir="rtl"
      lang="fa"
      id="blocks"
    >
      <SidebarProvider
        className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
          } as React.CSSProperties
        }
      >
        <BlocksSidebar />
        <div className="h-full w-full min-w-0 section-soft ps-1 pe-2 pt-2 md:ps-2 md:pe-4 md:py-6">
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}
