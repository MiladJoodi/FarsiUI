"use client"

import type { JSX, ReactNode } from "react"
import Link from "next/link"

import type { FeaturedBlockSample } from "@/lib/blocks-featured"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"

/** Soft wire fills — readable, not harsh. */
const fill = "bg-muted-foreground/15"
const fillMid = "bg-muted-foreground/25"
const fillBold = "bg-muted-foreground/40"
const surface =
  "rounded-md border border-border/70 bg-background shadow-sm"

/** Outer shell: grey stage + white card (same pattern as component wireframes). */
function WireStage({
  children,
  className = "w-full max-w-[94%]",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="flex size-full items-center justify-center bg-muted p-2">
      <div className={`flex flex-col overflow-hidden ${surface} ${className}`}>
        {children}
      </div>
    </div>
  )
}

/** login-01 — کارت ورود روی پس‌زمینهٔ خاکستری */
function WireframeFormsAuth() {
  return (
    <WireStage className="w-full max-w-[94%] gap-0.5 p-1.5">
      <div className={`h-1.5 w-1/2 rounded-sm ${fillBold}`} />
      <div className={`h-1 w-3/4 rounded-sm ${fill}`} />
      <div className="mt-0.5 space-y-0.5">
        <div className={`h-1 w-1/3 rounded-sm ${fillMid}`} />
        <div className={`h-4 w-full rounded-sm border border-border/60 ${fill}`} />
      </div>
      <div className="space-y-0.5">
        <div className="flex justify-between gap-2">
          <div className={`h-1 w-1/3 rounded-sm ${fillMid}`} />
          <div className={`h-1 w-1/4 rounded-sm ${fill}`} />
        </div>
        <div className={`h-4 w-full rounded-sm border border-border/60 ${fill}`} />
      </div>
      <div className={`mt-0.5 h-5 w-full rounded-sm ${fillBold}`} />
    </WireStage>
  )
}

/** hero-01 — تیتر درشت + CTA داخل کارت */
function WireframeMarketing() {
  return (
    <WireStage className="w-full max-w-[94%] items-center gap-1 px-2.5 py-2">
      <div className={`h-1 w-8 rounded-full ${fillMid}`} />
      <div className={`h-2 w-[85%] rounded-sm ${fillBold}`} />
      <div className={`h-2 w-[62%] rounded-sm ${fillBold}`} />
      <div className={`h-1 w-[52%] rounded-sm ${fill}`} />
      <div className={`mt-0.5 h-5 w-14 rounded-md ${fillBold}`} />
    </WireStage>
  )
}

/** sidebar-01 — نوار کناری + محتوا داخل کارت */
function WireframeNavigation() {
  return (
    <WireStage className="h-full w-full max-w-none flex-row">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-5 items-center gap-1 border-b border-border/60 px-1.5">
          <div className={`size-2.5 rounded-sm ${fillMid}`} />
          <div className={`h-1 w-6 rounded-sm ${fill}`} />
          <div className={`h-1 w-1 rounded-full ${fill}`} />
          <div className={`h-1 w-8 rounded-sm ${fillMid}`} />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-1.5">
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`aspect-4/3 rounded-sm ${fill}`} />
            ))}
          </div>
          <div className={`min-h-0 flex-1 rounded-sm ${fill}`} />
        </div>
      </div>
      <aside className="flex w-[34%] flex-col gap-1 border-s border-border/60 bg-muted/40 p-1.5">
        <div className={`mb-0.5 h-1.5 w-3/4 rounded-sm ${fillBold}`} />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-sm ${i === 1 ? fillBold : fillMid}`}
            style={{ width: `${90 - i * 10}%` }}
          />
        ))}
        <div className={`mt-auto h-4 w-full rounded-sm ${fillMid}`} />
      </aside>
    </WireStage>
  )
}

/** blog-grid-01 — سه ستون متن داخل کارت */
function WireframeContent() {
  return (
    <WireStage className="w-full max-w-[94%] justify-center gap-1.5 px-2 py-1.5">
      <div className="border-b border-border/60 pb-1">
        <div className={`h-2 w-2/5 rounded-sm ${fillBold}`} />
        <div className={`mt-1 h-1 w-1/2 rounded-sm ${fill}`} />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          ["w-1/2", "w-full", "w-4/5", "w-full"],
          ["w-2/3", "w-full", "w-full", "w-5/6"],
          ["w-1/3", "w-full", "w-3/4", "w-full"],
        ].map((lines, i) => (
          <div
            key={i}
            className="flex flex-col gap-0.5 border-s border-border/60 ps-1.5 first:border-s-0 first:ps-0"
          >
            <div className={`h-1 rounded-sm ${fill} ${lines[0]}`} />
            <div className={`mt-0.5 h-1.5 rounded-sm ${fillBold} ${lines[1]}`} />
            <div className={`h-1.5 rounded-sm ${fillBold} ${lines[2]}`} />
            <div className={`h-1 rounded-sm ${fill} ${lines[3]}`} />
          </div>
        ))}
      </div>
    </WireStage>
  )
}

/** dashboard-01 — کارت آمار + نمودار داخل کارت */
function WireframeDashboard() {
  return (
    <WireStage className="h-full w-full max-w-none flex-row">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-5 items-center border-b border-border/60 px-1.5">
          <div className={`h-1.5 w-12 rounded-sm ${fillBold}`} />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-1">
          <div className="grid grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-0.5 rounded-sm border border-border/60 bg-muted/30 p-1"
              >
                <div className={`h-1 w-1/2 rounded-sm ${fill}`} />
                <div className={`h-2 w-3/4 rounded-sm ${fillBold}`} />
              </div>
            ))}
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-border/60 bg-muted/20 px-1.5 pt-2">
            <svg
              viewBox="0 0 100 36"
              className="size-full text-muted-foreground/40"
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
    <WireStage className="w-full max-w-[94%] justify-center gap-1.5 px-2 py-1.5">
      <div className={`h-1.5 w-2/5 rounded-sm ${fillBold}`} />
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <div
              className={`aspect-square rounded-md ${i === 1 ? fillBold : fillMid}`}
            />
            <div className={`h-1.5 w-full rounded-sm ${fillBold}`} />
            <div className={`h-1 w-2/3 rounded-sm ${fill}`} />
          </div>
        ))}
      </div>
    </WireStage>
  )
}

/** profile-01 — آواتار داخل کارت */
function WireframeAccount() {
  return (
    <WireStage className="w-full max-w-[94%] items-center gap-1 px-2.5 py-2">
      <div
        className={`size-8 rounded-full border-2 border-muted ${fillBold} shadow-sm`}
      />
      <div className={`h-1.5 w-16 rounded-sm ${fillBold}`} />
      <div className={`h-1 w-12 rounded-sm ${fillMid}`} />
      <div className={`mt-0.5 h-1 w-24 rounded-sm ${fill}`} />
      <div className={`h-1 w-16 rounded-sm ${fill}`} />
    </WireStage>
  )
}

/** chat-01 — حباب‌های چت داخل کارت */
function WireframeCommunication() {
  return (
    <WireStage className="h-full w-full max-w-none">
      <div className="flex h-5 items-center gap-1.5 border-b border-border/60 px-1.5">
        <div className={`size-3 rounded-full ${fillMid}`} />
        <div className={`h-1.5 w-10 rounded-sm ${fillBold}`} />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 p-1.5">
        <div className="flex items-end gap-1">
          <div className={`size-3 shrink-0 rounded-full ${fillMid}`} />
          <div className={`h-5 w-[62%] rounded-xl rounded-ss-sm ${fill}`} />
        </div>
        <div className="flex flex-row-reverse items-end gap-1">
          <div className={`size-3 shrink-0 rounded-full ${fillBold}`} />
          <div className={`h-5 w-[55%] rounded-xl rounded-se-sm ${fillBold}`} />
        </div>
        <div className="flex items-end gap-1">
          <div className={`size-3 shrink-0 rounded-full ${fillMid}`} />
          <div className={`h-4 w-[40%] rounded-xl rounded-ss-sm ${fill}`} />
        </div>
      </div>
      <div className="flex gap-1 border-t border-border/60 p-1.5">
        <div className={`h-5 flex-1 rounded-full border border-border/60 ${fill}`} />
        <div className={`h-5 w-8 rounded-full ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** search-01 — نوار جستجو داخل کارت */
function WireframeSearch() {
  return (
    <WireStage className="w-full max-w-[94%] gap-1 p-1.5">
      <div className={`h-1.5 w-1/3 rounded-sm ${fillBold}`} />
      <div className={`h-1 w-1/2 rounded-sm ${fill}`} />
      <div className="mt-0.5 flex items-center gap-1 rounded-md border border-border/70 bg-muted/30 p-0.5">
        <div className={`ms-1 size-2.5 rounded-sm ${fillMid}`} />
        <div className={`h-1.5 flex-1 rounded-sm ${fill}`} />
        <div className={`h-5 w-12 rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** file-upload-01 — dropzone داخل کارت */
function WireframeMedia() {
  return (
    <WireStage className="w-full max-w-[94%]">
      <div className="space-y-0.5 p-1.5">
        <div className={`h-1.5 w-2/5 rounded-sm ${fillBold}`} />
        <div className={`h-1 w-3/5 rounded-sm ${fill}`} />
      </div>
      <div className="px-1.5 pb-1.5">
        <div className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-muted-foreground/25 bg-muted/20">
          <div className={`size-4 rounded-md ${fillMid}`} />
          <div className={`h-1 w-12 rounded-sm ${fillMid}`} />
        </div>
      </div>
      <div className="border-t border-border/60 p-1.5">
        <div className={`h-5 w-full rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** calendar-block-01 — تقویم داخل کارت */
function WireframeCalendar() {
  return (
    <WireStage className="w-full max-w-[94%]">
      <div className="flex items-center justify-between px-1.5 pt-1.5 pb-0.5">
        <div className={`h-1.5 w-12 rounded-sm ${fillBold}`} />
        <div className="flex gap-0.5">
          <div className={`size-3 rounded-sm ${fill}`} />
          <div className={`size-3 rounded-sm ${fill}`} />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 px-1.5 py-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={`d-${i}`}
            className={`mx-auto h-1 w-1.5 rounded-sm ${fillMid}`}
          />
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`mx-auto flex size-3 items-center justify-center rounded-full ${
              i === 10
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
    <WireStage className="w-full max-w-[94%]">
      <div className="space-y-0.5 p-1.5">
        <div className={`h-1 w-12 rounded-sm ${fill}`} />
        <div className={`h-1.5 w-2/5 rounded-sm ${fillBold}`} />
      </div>
      <div className="space-y-1 px-1.5 pb-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-md border px-1.5 py-1 ${
              i === 1
                ? "border-muted-foreground/25 bg-muted/40"
                : "border-border/60"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div
                className={`size-2.5 rounded-full border-2 ${
                  i === 1
                    ? "border-muted-foreground/35 bg-muted-foreground/25"
                    : "border-muted-foreground/20"
                }`}
              />
              <div className={`h-1.5 w-10 rounded-sm ${fillBold}`} />
            </div>
            <div className={`h-1.5 w-8 rounded-sm ${fillMid}`} />
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 p-1.5">
        <div className={`h-5 w-full rounded-md ${fillBold}`} />
      </div>
    </WireStage>
  )
}

/** empty-state-01 — empty state داخل کارت */
function WireframeStates() {
  return (
    <WireStage className="w-full max-w-[94%] items-center gap-1 px-2.5 py-2">
      <div className="flex size-7 items-center justify-center rounded-lg border border-border/60 bg-muted/60">
        <div className={`size-3 rounded-md ${fillMid}`} />
      </div>
      <div className={`h-1.5 w-16 rounded-sm ${fillBold}`} />
      <div className={`h-1 w-24 rounded-sm ${fill}`} />
      <div className={`h-1 w-16 rounded-sm ${fill}`} />
      <div className={`mt-0.5 h-5 w-14 rounded-md ${fillBold}`} />
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
    <div aria-hidden className="relative aspect-16/5 overflow-hidden">
      <Frame />
    </div>
  )
}

function SampleCard({ sample }: { sample: FeaturedBlockSample }) {
  const ariaLabel = `${sample.categoryTitle} — ${sample.categoryEn}`

  const titleRow = (
    <>
      <span
        data-block-title=""
        className="shrink-0 text-sm font-semibold tracking-tight text-primary"
      >
        {sample.categoryTitle}
      </span>
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
    </>
  )

  return (
    <div className="min-w-0 border-b border-border/60 last:border-b-0 md:border-b-0">
      {/* Mobile: compact list row — FA | dashed | EN */}
      <Link
        href={sample.item.href}
        aria-label={ariaLabel}
        className="flex min-w-0 items-baseline gap-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        {titleRow}
      </Link>

      {/* Desktop: title + wireframe card */}
      <section className="hidden min-w-0 flex-col gap-2 md:flex">
        <div className="flex min-w-0 items-baseline gap-2">{titleRow}</div>
        <Link
          href={sample.item.href}
          aria-label={ariaLabel}
          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background outline-none ring-offset-background transition-[border-color,box-shadow] hover:border-border hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          <CategoryWireframe slug={sample.categorySlug} />
        </Link>
      </section>
    </div>
  )
}

export function BlocksShowcase({
  samples,
}: {
  samples: FeaturedBlockSample[]
  styleName?: string
}) {
  return (
    <PersianDigits>
      <div
        dir="rtl"
        lang="fa"
        className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {samples.map((sample) => (
            <SampleCard key={sample.categorySlug} sample={sample} />
          ))}
        </div>
      </div>
    </PersianDigits>
  )
}
