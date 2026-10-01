import { type Metadata } from "next"
import Link from "next/link"

import { ChartsNav } from "@/components/charts-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { Button } from "@/styles/radix-luma/ui/button"

const title = "نمودارهای زیبا و کاربردی"
const description =
  "مجموعه‌ای از نمودارهای آماده برای نمایش داده‌ها، ساخته‌شده با Recharts و قابل استفاده در پروژه‌های شما."

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

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader dir="rtl" lang="fa">
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild className="h-[35px]">
            <a href="#charts">مرور نمودارها</a>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/docs/components/chart">مستندات</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav id="charts">
        <ChartsNav />
      </PageNav>
      <div className="container-wrapper flex-1">
        <div className="container pb-6">
          <section className="theme-container">{children}</section>
        </div>
      </div>
    </>
  )
}
