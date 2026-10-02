"use client"

import { Spinner } from "@/registry/bases/base/ui/spinner"

export function LoadingSpinnerSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center gap-4 px-6 py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <Spinner className="size-8" />
      <p className="text-sm text-muted-foreground">در حال بارگذاری…</p>
    </section>
  )
}
