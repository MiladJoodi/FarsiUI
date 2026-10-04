"use client"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function LoadingMediaGallery() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center px-6 py-16 md:px-10"
      aria-busy="true"
      aria-label="در حال بارگذاری گالری"
    >
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
