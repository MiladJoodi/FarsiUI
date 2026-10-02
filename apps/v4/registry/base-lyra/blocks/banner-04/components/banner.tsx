"use client"

import { Button } from "@/registry/base-lyra/ui/button"

export function BannerSplit() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-background p-6"
    >
      <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl border bg-card shadow-sm md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
          <p className="text-sm font-medium text-muted-foreground">رویداد</p>
          <h2 className="text-2xl font-bold tracking-tight">
            وبینار ساخت رابط فارسی
          </h2>
          <p className="text-sm text-muted-foreground">
            سه‌شنبه ۱۸ شهریور · آنلاین · رایگان برای همه
          </p>
          <div className="flex flex-wrap gap-2">
            <Button>ثبت‌نام</Button>
            <Button variant="outline">جزئیات</Button>
          </div>
        </div>
        <div className="relative min-h-44 md:min-h-full">
          <img
            src="/farsiui/dashboard.png"
            alt="پیش‌نمایش محصول"
            className="absolute inset-0 size-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}
