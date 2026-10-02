"use client"

import { Button } from "@/registry/base-maia/ui/button"

export function HeroSplit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh bg-background lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        <p className="text-sm font-medium text-muted-foreground">FarsiUI</p>
        <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
          طراحی برای زبان و فرهنگ شما
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
          بلاک‌های معرفی، احراز هویت و داشبورد با ظاهر یکدست؛ کپی کنید و روی
          محصول خود بگذارید.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">شروع کنید</Button>
          <Button size="lg" variant="outline">
            گالری نمونه‌ها
          </Button>
        </div>
      </div>
      <div className="relative min-h-72 lg:min-h-full">
        <img
          src="/farsiui/parsian.jpg"
          alt="نمای معماری ایرانی"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </section>
  )
}
