import { type Metadata } from "next"

import { ChartsNav } from "@/components/charts-nav"

const title = "نمودارها"
const description =
  "نمودارهای آمادهٔ FarsiUI برای نمایش داده در رابط کاربری فارسی — ساخته‌شده با Recharts."

export const metadata: Metadata = {
  title,
  description,
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
      data-slot="docs"
      className="flex flex-1 flex-col"
      dir="rtl"
      lang="fa"
      id="charts"
    >
      <div className="container-wrapper flex flex-1 flex-col px-2">
        <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col gap-6 px-4 py-6 md:px-6 lg:py-8">
          <div className="flex flex-col gap-4">
            <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight">
              {title}
            </h1>
            <ChartsNav />
          </div>
          <section className="theme-container min-w-0 pb-6">{children}</section>
        </div>
      </div>
    </div>
  )
}
