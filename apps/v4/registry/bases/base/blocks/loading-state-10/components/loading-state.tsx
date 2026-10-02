"use client"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export function LoadingMediaGallery() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
      aria-busy="true"
      aria-label="در حال بارگذاری گالری"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner className="size-4" />
          در حال دریافت…
        </div>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="aspect-[4/3] w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>

      <Empty className="rounded-xl border border-dashed py-10">
        <EmptyHeader>
          <EmptyMedia>
            <Spinner className="size-8" />
          </EmptyMedia>
          <EmptyTitle>در حال آماده‌سازی رسانه</EmptyTitle>
          <EmptyDescription>
            تصاویر و ویدیوها به‌زودی نمایش داده می‌شوند.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  )
}
