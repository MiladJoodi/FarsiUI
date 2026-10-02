import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import type {
  FeaturedBlockGroup,
  FeaturedBlockSample,
} from "@/lib/blocks-featured"
import { Button } from "@/registry/new-york-v4/ui/button"
import { type Style } from "@/registry/_legacy-styles"

function SamplePreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-muted/50 sm:h-[220px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,color-mix(in_oklch,var(--foreground)_7%,transparent),transparent_65%)]"
      />
      <div className="relative w-[78%] max-w-[240px] rounded-xl border border-border/70 bg-background p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="h-2.5 w-14 rounded-full bg-foreground/15" />
          <div className="h-2 w-8 rounded-full bg-foreground/10" />
        </div>
        <div className="mb-3 h-2 w-24 rounded-full bg-foreground/10" />
        <div className="space-y-2">
          <div className="h-8 rounded-md border border-border/60 bg-muted/50" />
          <div className="h-8 rounded-md border border-border/60 bg-muted/50" />
          <div className="h-8 rounded-md bg-foreground/90" />
        </div>
        <p className="mt-3 truncate text-center text-[11px] text-muted-foreground">
          {title}
        </p>
      </div>
    </div>
  )
}

function SampleCard({ sample }: { sample: FeaturedBlockSample }) {
  const countLabel = sample.blockCount.toLocaleString("fa-IR")

  return (
    <article
      dir="rtl"
      lang="fa"
      className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-background transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-border hover:shadow-md"
    >
      <Link
        href={sample.item.href}
        className="block"
        aria-label={`مشاهده دسته ${sample.item.title}`}
      >
        <SamplePreview title={sample.item.title} />
      </Link>

      <div className="flex items-center justify-between gap-3 border-t border-border/70 px-3.5 py-3">
        <div className="min-w-0 text-start">
          <h3 className="truncate text-sm font-semibold tracking-tight">
            {sample.item.title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            <span dir="ltr" className="font-medium">
              {sample.item.en}
            </span>
            <span className="mx-1.5 text-border">·</span>
            <span>{countLabel} بلاک</span>
          </p>
        </div>

        <Button
          asChild
          size="sm"
          variant="outline"
          className="shrink-0 gap-1.5 rounded-lg ps-3 pe-2.5"
        >
          <Link href={sample.item.href}>
            مشاهده
            <ArrowLeftIcon className="size-3.5 opacity-70" />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export function BlocksShowcase({
  groups,
}: {
  groups: FeaturedBlockGroup[]
  styleName: Style["name"]
}) {
  const totalCategories = groups.reduce(
    (sum, group) => sum + group.samples.length,
    0
  )

  return (
    <div dir="rtl" lang="fa" className="flex flex-col gap-10 pb-10">
      <header className="relative overflow-hidden rounded-2xl border border-border/70 bg-background px-5 py-7 sm:px-7 sm:py-9">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,color-mix(in_oklch,var(--foreground)_8%,transparent),transparent_55%),radial-gradient(90%_70%_at_0%_100%,color-mix(in_oklch,var(--muted-foreground)_10%,transparent),transparent_50%)]"
        />
        <div className="relative flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            ویژه
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            بلاک‌های آماده
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
            نمونه‌ای از هر دسته کنار هم. روی کارت یا «مشاهده» بزنید تا همهٔ
            بلاک‌های همان دسته را ببینید و کپی کنید.
          </p>
          <p className="text-xs text-muted-foreground/80">
            {totalCategories.toLocaleString("fa-IR")} دسته
          </p>
        </div>
      </header>

      {groups.map((group) => (
        <section key={group.slug} className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between gap-3 px-0.5">
            <h2 className="text-base font-semibold tracking-tight sm:text-lg">
              {group.title}
            </h2>
            <span className="text-xs text-muted-foreground">
              {group.samples.length.toLocaleString("fa-IR")} دسته
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {group.samples.map((sample) => (
              <SampleCard key={sample.item.slug} sample={sample} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
