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

import { CardsDemo } from "./cards"

const title = "چند قدم جلوتر شروع کنید"
const metadataTitle = `${siteConfig.name} - ${title}`
const description = siteConfig.description

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: ["FarsiUI"],
  description: siteConfig.description,
  inLanguage: "fa-IR",
  sameAs: [siteConfig.links.github, siteConfig.links.twitter],
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
    url: "/",
    title: metadataTitle,
    description,
    siteName: siteConfig.name,
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
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        dir="rtl"
        lang="fa"
        className="md:**:[.container]:pb-8 lg:**:[.container]:pb-12"
      >
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild className="h-[35px]">
            <Link href="/docs/installation">شروع کنید</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/docs/components">مشاهده کامپوننت‌ها</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper flex-1 p-0">
        <div className="container overflow-hidden md:px-0 lg:max-w-none">
          {/* Mobile: same Persian collage, scaled to keep the multi-column look. */}
          <section className="relative h-[min(72vh,680px)] overflow-hidden md:hidden">
            <div className="origin-top-right w-[263%] scale-[0.38]">
              <CardsDemo forceColumns />
            </div>
          </section>
          <section className="hidden md:block">
            <CardsDemo />
          </section>
        </div>
      </div>
    </div>
  )
}
