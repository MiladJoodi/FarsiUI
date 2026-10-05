"use client"

import { Button } from "@/registry/base-nova/ui/button"

export default function CtaSplit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh bg-background lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        <p className="text-sm font-medium text-muted-foreground">FarsiUI</p>
        <h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight md:text-4xl">
          محصول فارسی‌تان را یک پله جلو ببرید
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
          از معرفی تا داشبورد؛ بلوک‌های راست‌چین آمادهٔ کپی در پروژهٔ Next.js
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">شروع رایگان</Button>
          <Button size="lg" variant="outline">
            گالری بلوک‌ها
          </Button>
        </div>
      </div>
      <div className="relative min-h-72 lg:min-h-full">
        <img
          src="/farsiui/dashboard.png"
          alt="پیش‌نمایش داشبورد"
          className="absolute inset-0 size-full object-cover object-top"
        />
      </div>
    </section>
  )
}
