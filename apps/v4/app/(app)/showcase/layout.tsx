import { type Metadata } from "next"

import { ShowcaseHero } from "@/components/showcase-hero"
import { ShowcaseMobileCategories } from "@/components/showcase-mobile-categories"
import { ShowcaseSidebar } from "@/components/showcase-sidebar"

const title = "نمونه‌ها"
const description =
  "پروژه‌ها و نمونه‌سایت‌های ساخته‌شده با FarsiUI — با توضیح، تکنولوژی و لینک لایو."

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

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="container-wrapper relative flex flex-1 flex-col px-2 pb-12"
      dir="rtl"
      lang="fa"
      id="showcase"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-foreground)_5%,transparent),transparent_65%)]"
      />

      <ShowcaseHero />
      <ShowcaseMobileCategories />

      {/* سایدبار در RTL سمت راست می‌آید */}
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 px-2 md:mt-10 md:px-4 lg:flex-row lg:items-start lg:gap-10">
        <ShowcaseSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  )
}
