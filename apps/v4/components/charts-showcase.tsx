import Link from "next/link"

import { chartTypeMeta } from "@/app/(app)/charts/chart-catalog"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

/** Quiet skeleton — no chart-shaped wireframe, no heavy stage fill. */
function ChartCardSkeletonPreview() {
  return (
    <div
      aria-hidden
      className="relative flex aspect-16/4 flex-col justify-center gap-2 bg-transparent p-3"
    >
      <Skeleton className="h-2.5 w-1/3 rounded-md bg-muted-foreground/14" />
      <Skeleton className="h-2 w-2/3 rounded-md bg-muted-foreground/10" />
      <Skeleton className="mt-0.5 h-full min-h-8 flex-1 rounded-md bg-muted-foreground/8" />
    </div>
  )
}

function ChartTypeCard({
  title,
  en,
  href,
}: {
  title: string
  en: string
  href: string
}) {
  const ariaLabel = `${title} — ${en}`

  const titleRow = (
    <>
      <span className="shrink-0 text-[0.9375rem] font-semibold tracking-tight text-foreground">
        {title}
      </span>
      <span
        aria-hidden
        className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/20"
      />
      <span
        dir="ltr"
        lang="en"
        className="shrink-0 text-xs tracking-wide text-muted-foreground/70"
      >
        {en}
      </span>
    </>
  )

  return (
    <div className="min-w-0 border-b border-border/40 last:border-b-0 md:border-b-0">
      <Link
        href={href}
        aria-label={ariaLabel}
        className="flex min-w-0 items-baseline gap-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        {titleRow}
      </Link>

      <section className="hidden min-w-0 flex-col gap-2.5 md:flex">
        <div className="flex min-w-0 items-baseline gap-2">{titleRow}</div>
        <Link
          href={href}
          aria-label={ariaLabel}
          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border/40 bg-background/60 outline-none ring-offset-background transition-[border-color,background-color] hover:border-border/60 hover:bg-background focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChartCardSkeletonPreview />
        </Link>
      </section>
    </div>
  )
}

export function ChartsShowcase() {
  return (
    <PersianDigits>
      <div
        dir="rtl"
        lang="fa"
        className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {chartTypeMeta.map((item) => (
            <ChartTypeCard
              key={item.type}
              title={item.title}
              en={item.en}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </PersianDigits>
  )
}
