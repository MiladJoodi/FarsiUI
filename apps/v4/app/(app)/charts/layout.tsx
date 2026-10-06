import { type Metadata } from "next"

import {
  ChartsListIndex,
  ChartsSidebar,
} from "@/components/charts-sidebar"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

const title = "نمودارها"
const description =
  "نمودارهای آمادهٔ FarsiUI برای نمایش داده در رابط کاربری فارسی — ساخته‌شده با Recharts."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/charts",
  },
  openGraph: {
    title,
    description,
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
    title,
    description,
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-slot="charts"
      className="flex flex-1 flex-col"
      dir="rtl"
      lang="fa"
      id="charts"
    >
      <PersianDigits>
        <ChartsListIndex />
        <div className="container-wrapper flex flex-1 flex-col px-2">
          <SidebarProvider
            className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
              } as React.CSSProperties
            }
          >
            <ChartsSidebar />
            <div className="theme-container h-full w-full min-w-0 section-soft ps-1 pe-2 pt-2 md:ps-2 md:pe-4 md:py-6">
              {children}
            </div>
          </SidebarProvider>
        </div>
      </PersianDigits>
    </div>
  )
}
