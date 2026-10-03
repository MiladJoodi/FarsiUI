"use client"

import { Button } from "@/registry/base-maia/ui/button"

export function CtaSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16 text-center"
    >
      <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
        امروز شروع کنید
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        بلوک‌های فارسی را کپی کنید و محصولتان را سریع‌تر بسازید
      </p>
      <Button size="lg" className="mt-8">
        شروع رایگان
      </Button>
    </section>
  )
}
