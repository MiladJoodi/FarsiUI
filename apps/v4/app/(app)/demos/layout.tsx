import * as React from "react"
import { type Metadata } from "next"

import { ShowcaseGallery } from "@/components/showcase-gallery"
import { ShowcaseHero } from "@/components/showcase-hero"
import { getShowcaseProjects } from "@/lib/showcase"

const title = "دموها"
const description =
  "دموهای ساخته‌شده با FarsiUI: داشبورد، اپلیکیشن و صفحات وب با لینک لایو و گیت‌هاب."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/demos",
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

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const projects = getShowcaseProjects()

  return (
    <div
      className="container-wrapper relative flex flex-1 flex-col px-2 pb-12"
      dir="rtl"
      lang="fa"
      id="demos"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(70vh,40rem)] bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,color-mix(in_oklab,var(--color-foreground)_4.5%,transparent),transparent_72%)]"
      />

      <ShowcaseHero />

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-6 px-2 md:mt-10 md:gap-8 md:px-4">
        <React.Suspense fallback={null}>
          <ShowcaseGallery projects={projects} />
        </React.Suspense>
      </div>

      {/* Route shell only; gallery lives above and filters client-side. */}
      <div hidden>{children}</div>
    </div>
  )
}
