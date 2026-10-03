"use client"

import type { JSX, ReactNode } from "react"
import Link from "next/link"

import type { FeaturedBlockSample } from "@/lib/blocks-featured"

/** Soft wireframe fills — readable without looking heavy. */
const fill = "bg-muted-foreground/8"
const fillMid = "bg-muted-foreground/12"
const fillBold = "bg-muted-foreground/18"
const surface =
  "rounded-lg border border-border/70 bg-background shadow-sm"

/** Outer shell shared by every category: grey stage + white card. */
function WireStage({
  children,
  className = "w-[78%]",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="flex size-full items-center justify-center bg-muted p-3">
      <div className={`flex flex-col overflow-hidden ${surface} ${className}`}>
        {children}
      </div>
    </div>
  )
}

/** login-01 — کارت ورود روی پس‌زمینهٔ خاکستری */
function WireframeFormsAuth() {
  return (
    <WireStage className="w-[78%] gap-2 p-2.5">
      <div className={`h-2.5 w-1/2 rounded-sm ${fillBold}`} />
      <div className={`h-1.5 w-3/4 rounded-sm ${fill}`} />
      <div className="mt-1 space-y-1">
        <div className={`h-1.5 w-1/3 rounded-sm ${fillMid}`} />
        <div className={`h-6 w-full rounded-md border border-border/60 ${fill}`} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between gap-2">
          <div className={`h-1.5 w-1/3 rounded-sm ${fillMid}`} />
          <div className={`h-1.5 w-1/4 rounded-sm ${fill}`} />
        </div>
        <div className={`h-6 w-full rounded-md border border-border/60 ${fill}`} />
      </div>
      <div className={`mt-0.5 h-7 w-full rounded-md ${fillBold}`} />
    </WireStage>
  )
}

/** hero-01 — تیتر درشت + CTA داخل کارت */
function WireframeMarketing() {
  return (
    <WireStage className="w-[86%] items-center gap-2 px-4 py-5">
      <div className={`h-1.5 w-10 rounded-full ${fillMid}`} />
      <div className={`h-3.5 w-[85%] rounded-sm ${fillBold}`} />
      <div className={`h-3.5 w-[62%] rounded-sm ${fillBold}`} />
      <div className={`h-1.5 w-[52%] rounded-sm ${fill}`} />
      <div className={`mt-1.5 h-7 w-[4.5rem] rounded-md ${fillBold}`} />
    </WireStage>
  )
}

/** sidebar-01 — نوار کناری + محتوا داخل کارت */
function WireframeNavigation() {
  return (
    <WireStage className="h-[88%] w-[92%] flex-row">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-7 items-center gap-1.5 border-b border-border/60 px-2">
          <div className={`size-3.5 rounded-sm ${fillMid}`} />
          <div className={`h-1.5 w-8 rounded-sm ${fill}`} />
          <div className={`h-1 w-1 rounded-full ${fill}`} />
          <div className={`h-1.5 w-10 rounded-sm ${fillMid}`} />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`aspect-4/3 rounded-md ${fill}`} />
            ))}
          </div>
          <div className={`min-h-0 flex-1 rounded-md ${fill}`} />
        </div>
      </div>
      <aside className="flex w-[34%] flex-col gap-1.5 border-s border-border/60 bg-muted/40 p-2">
        <div className={`mb-1 h-2.5 w-3/4 rounded-sm ${fillBold}`} />
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-sm ${i === 1 ? fillBold : fillMid}`}
            style={{ width: `${90 - i * 10}%` }}
          />
        ))}
        <div className={`mt-auto h-5 w-full rounded-md ${fillMid}`} />
      </aside>
    </WireStage>
  )
}

/** blog-grid-01 — سه ستون متن داخل کارت */
function WireframeContent() {
  return (
    <WireStage className="w-[90%] justify-center gap-3 px-3 py-3">
      <div className="border-b border-border/50 pb-2">
        <div className={`h-3 w-2/5 rounded-sm ${fillBold}`} />
        <div className={`mt-1.5 h-1.5 w-1/2 rounded-sm ${fill}`} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["w-1/2", "w-full", "w-4/5", "w-full", "w-3/4"],
          ["w-2/3", "w-full", "w-full", "w-5/6", "w-1/2"],
          ["w-1/3", "w-full", "w-3/4", "w-full", "w-2/3"],
        ].map((lines, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 border-s border-border/50 ps-2 first:border-s-0 first:ps-0"
          >
            <div className={`h-1.5 rounded-sm ${fill} ${lines[0]}`} />
            <div className={`mt-0.5 h-2 rounded-sm ${fillBold} ${lines[1]}`} />
            <div className={`h-2 rounded-sm ${fillBold} ${lines[2]}`} />
            <div className={`h-1.5 rounded-sm ${fill} ${lines[3]}`} />
            <div className={`h-1.5 rounded-sm ${fill} ${lines[4]}`} />
          </div>
        ))}
      </div>
    </WireStage>
  )
}

/** dashboard-01 — کارت آمار + نمودار داخل کارت */
function WireframeDashboard() {
  return (
    <WireStage className="h-[88%] w-[92%] flex-row">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-6 items-center border-b border-border/60 px-2">
          <div className={`h-2 w-14 rounded-sm ${fillBold}`} />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-1.5">
          <div className="grid grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-1 rounded-md border border-border/60 bg-muted/30 p-1.5"
              >
                <div className={`h-1 w-1/2 rounded-sm ${fill}`} />
                <div className={`h-2.5 w-3/4 rounded-sm ${fillBold}`} />
              </div>
            ))}
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-border/60 bg-muted/20 px-1.5 pt-2">
            <svg
              viewBox="0 0 100 36"
              className="size-full text-muted-foreground/35"
              preserveAspectRatio="none"
            >
              <path
                d="M0 28 C12 26, 22 10, 34 14 S55 30, 68 18 S88 6, 100 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M0 28 C12 26, 22 10, 34 14 S55 30, 68 18 S88 6, 100 12 V36 H0 Z"
                fill="currentColor"
                opacity="0.18"
              />
            </svg>
          </div>
        </div>
      </div>
      <aside className="flex w-[28%] flex-col gap-1.5 border-s border-border/60 bg-muted/40 p-1.5">
        <div className={`mb-0.5 h-2 w-3/4 rounded-sm ${fillBold}`} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-sm ${i === 0 ? fillBold : fill}`}
            style={{ width: `${88 - (i % 4) * 14}%` }}
          />
        ))}
      </aside>
    </WireStage>
  )
}

/** product-grid-01 — سه محصول داخل کارت */
function WireframeCommerce() {
  return (
    <WireStage className="w-[90%] justify-center gap-2.5 px-3 py-3">
      <div className={`h-2.5 w-2/5 rounded-sm ${fillBold}`} />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div
              className={`aspect-square rounded-lg ${i === 1 ? fillBold : fillMid}`}
            />
            <div className={`h-2 w-full rounded-sm ${fillBold}`} />
            <div className={`h-1.5 w-2/3 rounded-sm ${fill}`} />
          </div>
        ))}
      </div>
    </WireStage>
  )
}

/** profile-01 — آواتار داخل کارت */
function WireframeAccount() {
  return (
    <WireStage className="w-[78%] items-center gap-2 px-4 py-4">
      <div
        className={`size-14 rounded-full border-2 border-muted ${fillBold} shadow-sm`}
      />
      <div className={`mt-0.5 h-2.5 w-20 rounded-sm ${fillBold}`} />
      <div className={`h-1.5 w-16 rounded-sm ${fillMid}`} />
      <div className={`mt-1 h-1.5 w-28 rounded-sm ${fill}`} />
      <div className={`h-1.5 w-20 rounded-sm ${fill}`} />
    </WireStage>
  )
}

/** chat-01 — حباب‌های چت داخل کارت */
function WireframeCommunication() {
  return (
    <WireStage className="h-[90%] w-[90%]">
      <div className="flex h-7 items-center gap-2 border-b border-border/60 px-2.5">
        <div className={`size-4 rounded-full ${fillMid}`} />
        <div className={`h-2 w-12 rounded-sm ${fillBold}`} />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 p-2.5">
        <div className="flex items-end gap-1.5">
          <div className={`size-4 shrink-0 rounded-full ${fillMid}`} />
          <div className={`h-8 w-[62%] rounded-2xl rounded-ss-sm ${fill}`} />
        </div>
        <div className="flex flex-row-reverse items-end gap-1.5">
          <div className={`size-4 shrink-0 rounded-full ${fillBold}`} />
          <div className={`h-8 w-[55%] rounded-2xl rounded-se-sm ${fillBold}`} />
        </div>
        <div className="flex items-end gap-1.5">
          <div className={`size-4 shrink-0 rounded-full ${fillMid}`} />
          <div className={`h-6 w-[40%] rounded-2xl rounded-ss-sm ${fill}`} />
        </div>
      </div>
      <div className="flex gap-1.5 border-t border-border/60 p-2">
        <div className={`h-6 flex-1 rounded-full border border-border/60 ${fill}`} />
        <div className={`h-6 w-10 rounded-full ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** search-01 — نوار جستجو داخل کارت */
function WireframeSearch() {
  return (
    <WireStage className="w-[86%] gap-2.5 p-3">
      <div className={`h-2.5 w-1/3 rounded-sm ${fillBold}`} />
      <div className={`h-1.5 w-1/2 rounded-sm ${fill}`} />
      <div className="mt-1 flex items-center gap-1.5 rounded-lg border-2 border-border/70 bg-muted/30 p-1">
        <div className={`ms-1 size-3.5 rounded-sm ${fillMid}`} />
        <div className={`h-2 flex-1 rounded-sm ${fill}`} />
        <div className={`h-7 w-14 rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** file-upload-01 — dropzone داخل کارت */
function WireframeMedia() {
  return (
    <WireStage className="w-[88%]">
      <div className="space-y-1 p-2.5">
        <div className={`h-2.5 w-2/5 rounded-sm ${fillBold}`} />
        <div className={`h-1.5 w-3/5 rounded-sm ${fill}`} />
      </div>
      <div className="px-2.5 pb-2.5">
        <div className="flex h-[4.5rem] flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/20">
          <div className={`size-6 rounded-md ${fillMid}`} />
          <div className={`h-1.5 w-16 rounded-sm ${fillMid}`} />
          <div className={`h-1 w-12 rounded-sm ${fill}`} />
        </div>
      </div>
      <div className="border-t border-border/60 p-2">
        <div className={`h-7 w-full rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** calendar-block-01 — تقویم داخل کارت */
function WireframeCalendar() {
  return (
    <WireStage className="w-[86%]">
      <div className="flex items-center justify-between px-2.5 pt-2.5 pb-1">
        <div className={`h-2.5 w-14 rounded-sm ${fillBold}`} />
        <div className="flex gap-1">
          <div className={`size-4 rounded-sm ${fill}`} />
          <div className={`size-4 rounded-sm ${fill}`} />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 px-2.5 py-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={`d-${i}`}
            className={`mx-auto h-1 w-2 rounded-sm ${fillMid}`}
          />
        ))}
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className={`mx-auto flex size-4 items-center justify-center rounded-full ${
              i === 15
                ? fillBold
                : i % 7 === 5 || i % 7 === 6
                  ? "bg-transparent"
                  : fill
            }`}
          />
        ))}
      </div>
    </WireStage>
  )
}

/** plan-selection-01 — پلن‌ها داخل کارت */
function WireframeBilling() {
  return (
    <WireStage className="w-[88%]">
      <div className="space-y-1 p-2.5">
        <div className={`h-1.5 w-14 rounded-sm ${fill}`} />
        <div className={`h-2.5 w-2/5 rounded-sm ${fillBold}`} />
      </div>
      <div className="space-y-1.5 px-2.5 pb-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-lg border px-2 py-2 ${
              i === 1
                ? "border-muted-foreground/25 bg-muted/40"
                : "border-border/60"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`size-3.5 rounded-full border-2 ${
                  i === 1
                    ? "border-muted-foreground/35 bg-muted-foreground/25"
                    : "border-muted-foreground/20"
                }`}
              />
              <div className={`h-2 w-12 rounded-sm ${fillBold}`} />
            </div>
            <div className={`h-2 w-10 rounded-sm ${fillMid}`} />
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 p-2">
        <div className={`h-7 w-full rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** empty-state-01 — empty state داخل کارت */
function WireframeStates() {
  return (
    <WireStage className="w-[78%] items-center gap-2 px-4 py-5">
      <div className="flex size-12 items-center justify-center rounded-xl border border-border/60 bg-muted">
        <div className={`size-5 rounded-md ${fillMid}`} />
      </div>
      <div className={`mt-1 h-2.5 w-24 rounded-sm ${fillBold}`} />
      <div className={`h-1.5 w-32 rounded-sm ${fill}`} />
      <div className={`h-1.5 w-24 rounded-sm ${fill}`} />
      <div className={`mt-1.5 h-7 w-[4.5rem] rounded-md ${fillBold}`} />
    </WireStage>
  )
}

const WIREFRAMES: Record<string, () => JSX.Element> = {
  "forms-auth": WireframeFormsAuth,
  marketing: WireframeMarketing,
  navigation: WireframeNavigation,
  content: WireframeContent,
  dashboard: WireframeDashboard,
  commerce: WireframeCommerce,
  account: WireframeAccount,
  communication: WireframeCommunication,
  search: WireframeSearch,
  media: WireframeMedia,
  calendar: WireframeCalendar,
  billing: WireframeBilling,
  states: WireframeStates,
}

function CategoryWireframe({ slug }: { slug: string }) {
  const Frame = WIREFRAMES[slug] ?? WireframeStates
  return (
    <div aria-hidden className="relative aspect-16/10 overflow-hidden">
      <Frame />
    </div>
  )
}

function SampleCard({ sample }: { sample: FeaturedBlockSample }) {
  return (
    <section className="flex min-w-0 flex-col gap-2">
      <div className="flex min-w-0 items-baseline gap-2">
        <h2 className="shrink-0 text-sm font-semibold tracking-tight">
          {sample.categoryTitle}
        </h2>
        <span
          aria-hidden
          className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
        />
        <span
          dir="ltr"
          lang="en"
          className="shrink-0 text-xs tracking-wide text-muted-foreground"
        >
          {sample.categoryEn}
        </span>
      </div>

      <Link
        href={sample.item.href}
        aria-label={`${sample.categoryTitle} — ${sample.categoryEn}`}
        className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background outline-none ring-offset-background transition-[border-color,box-shadow] hover:border-border hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
      >
        <CategoryWireframe slug={sample.categorySlug} />
      </Link>
    </section>
  )
}

export function BlocksShowcase({
  samples,
}: {
  samples: FeaturedBlockSample[]
  styleName?: string
}) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      {samples.map((sample) => (
        <SampleCard key={sample.categorySlug} sample={sample} />
      ))}
    </div>
  )
}
