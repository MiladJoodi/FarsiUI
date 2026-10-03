import { type Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/styles/radix-luma/ui/button"

import { CardsDemo, CardsDemoMobile } from "./cards"

const title = "کتابخانه کامپوننت UI فارسی برای React"
const metadataTitle = `${siteConfig.name} — ${title}`
const description = siteConfig.description

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: ["FarsiUI", "فارسی‌یوآی"],
      description: siteConfig.description,
      inLanguage: "fa-IR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/farsiui/logo.png`,
      sameAs: [siteConfig.links.github],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description: siteConfig.description,
      url: siteConfig.url,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
}

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: metadataTitle,
    description,
    siteName: siteConfig.name,
    locale: "fa_IR",
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
    title: metadataTitle,
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

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        dir="rtl"
        lang="fa"
        className="md:**:[.container]:pb-8 lg:**:[.container]:pb-12"
      >
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>
          کامپوننت‌های آماده برای ساخت رابط کاربری فارسی با React، Tailwind و پشتیبانی
          کامل RTL — کد را مالک می‌شوید و مطابق نیاز پروژه سفارشی می‌کنید.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild className="h-[35px]">
            <Link href="/docs/installation">شروع کنید</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/docs/components">مشاهده کامپوننت‌ها</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/blocks">بلوک‌ها</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex-1 p-0">
        <div className="container overflow-hidden md:px-0 lg:max-w-none">
          {/* Mobile: 140vw bleed of a scaled desktop collage (live Persian cards). */}
          <section className="-mx-4 w-[140vw] overflow-hidden md:hidden">
            <CardsDemoMobile />
          </section>
          <section className="hidden md:block">
            <CardsDemo />
          </section>
        </div>
      </div>
    </div>
  )
}
