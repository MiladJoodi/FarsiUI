"use client"

import { Button } from "@/registry/base-nili/ui/button"

export default function FeatureSplitSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh items-center gap-10 bg-background px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          راست‌چین، بدون دردسر
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          یک نیمه برای پیام، یک نیمه برای تصویر — ساده‌ترین الگوی معرفی قابلیت.
        </p>
        <Button size="lg" className="mt-8">
          شروع کنید
        </Button>
      </div>
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <img
          src="/farsiui/parsian.jpg"
          alt="نمای معماری"
          className="aspect-4/3 w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
