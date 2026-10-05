"use client"

import { Button } from "@/registry/base-sera/ui/button"

export default function FeatureSplitEdge() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh bg-background lg:grid-cols-2"
    >
      <div className="relative min-h-80 lg:min-h-full">
        <img
          src="/farsiui/parsian.jpg"
          alt="فضای کاری الهام‌گرفته از معماری"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        <p className="text-sm font-medium text-muted-foreground">FarsiUI</p>
        <h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight md:text-4xl">
          تصویر لبه‌به‌لبه، متن در نیمهٔ دیگر
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
          برای صفحات معرفی که می‌خواهید تصویر حرف اول را بزند؛ بدون کارت و حاشیه
          اضافه.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">شروع رایگان</Button>
          <Button size="lg" variant="ghost">
            داستان برند
          </Button>
        </div>
      </div>
    </section>
  )
}
