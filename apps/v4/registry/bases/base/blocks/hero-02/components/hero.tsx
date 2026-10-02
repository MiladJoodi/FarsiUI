"use client"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"

export function HeroBadgeCta() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--muted)_0%,transparent_55%)]"
      />
      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <Badge variant="secondary">نسخهٔ جدید</Badge>
        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          از ایده تا رابط، بدون دردسر راست‌چین
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          دکمه‌ها، فرم‌ها و بلاک‌های آماده با تایپوگرافی فارسی و جهت RTL از روز
          اول
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">مشاهدهٔ مستندات</Button>
          <Button size="lg" variant="outline">
            دیدن بلاک‌ها
          </Button>
        </div>
      </div>
    </section>
  )
}
