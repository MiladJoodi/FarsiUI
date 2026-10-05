"use client"

import { Button } from "@/registry/base-aether/ui/button"

export default function HeroFullBleed() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop&q=80"
        alt="فضای کاری مدرن"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20"
      />
      <div className="relative z-10 w-full px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <p className="text-sm font-medium text-white/80">FarsiUI</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          محصول فارسی‌تان را سریع‌تر به بازار برسانید
        </h1>
        <p className="mt-4 max-w-lg text-white/80 md:text-lg">
          مجموعه‌ای از بلوک‌های واقعی برای صفحات معرفی، ورود و تنظیمات — آمادهٔ
          کپی در پروژهٔ Next.js
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">شروع رایگان</Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            تماشای دمو
          </Button>
        </div>
      </div>
    </section>
  )
}
