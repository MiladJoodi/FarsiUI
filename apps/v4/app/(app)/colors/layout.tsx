import { siteConfig } from "@/lib/config"
import { type Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { ColorsNav } from "@/components/colors-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/styles/radix-luma/ui/button"

const title = "پالت رنگ Tailwind"
const description =
  "پالت کامل رنگ‌های Tailwind به‌صورت HEX، RGB، HSL، متغیر CSS و کلاس — آمادهٔ کپی در پروژهٔ FarsiUI."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/colors",
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
}

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div dir="rtl" lang="fa">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild className="h-[35px]">
            <a href="#colors">مشاهده رنگ‌ها</a>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/docs/theming">مستندات تم</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="hidden">
        <div className="container-wrapper">
          <div className="container flex items-center justify-between gap-8 py-4">
            <ColorsNav className="flex-1 overflow-hidden [&>a:first-child]:text-primary" />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section id="colors" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}
