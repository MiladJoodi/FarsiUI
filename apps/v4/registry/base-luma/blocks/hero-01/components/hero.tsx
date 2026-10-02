"use client"

import { Button } from "@/registry/base-luma/ui/button"

export function HeroSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16 text-center"
    >
      <p className="text-sm font-medium text-muted-foreground">FarsiUI</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        رابط کاربری فارسی، آمادهٔ استفاده
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        کامپوننت‌ها و بلاک‌های راست‌چین برای ساخت سریع محصول فارسی
      </p>
      <Button size="lg" className="mt-8">
        شروع رایگان
      </Button>
    </section>
  )
}
