"use client"

import {
  GaugeIcon,
  PaletteIcon,
  PuzzleIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"

const SMALL = [
  {
    icon: ZapIcon,
    title: "سریع نصب می‌شود",
    desc: "با یک دستور به رجیستری وصل شوید و بلوک بگیرید.",
  },
  {
    icon: PaletteIcon,
    title: "تم قابل‌تنظیم",
    desc: "رنگ‌ها با توکن‌های CSS هماهنگ می‌مانند.",
  },
  {
    icon: PuzzleIcon,
    title: "ترکیب‌پذیر",
    desc: "کامپوننت‌ها را کنار هم بچینید بدون تداخل.",
  },
  {
    icon: GaugeIcon,
    title: "سبک و متمرکز",
    desc: "فقط همان چیزی را می‌آورید که واقعاً لازم دارید.",
  },
] as const

export function FeaturesBento() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 max-w-xl">
        <Badge variant="outline" className="mb-3">
          چرا FarsiUI
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          شبکه‌ای از قابلیت‌های واقعی
        </h2>
        <p className="mt-3 text-muted-foreground">
          یک کارت بزرگ برای داستان اصلی، و چند کارت کوچک برای جزئیات
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <div className="relative overflow-hidden rounded-2xl border bg-card md:col-span-2 md:row-span-2">
          <img
            src="/farsiui/dashboard.png"
            alt="داشبورد FarsiUI"
            className="absolute inset-0 size-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
          <div className="relative flex h-full min-h-72 flex-col justify-end p-6 md:p-8">
            <SparklesIcon className="mb-3 size-5 text-primary" />
            <h3 className="text-xl font-bold">داشبورد و فرم، هم‌سبک</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              از صفحهٔ معرفی تا پنل مدیریت، یک زبان بصری واحد برای تیم شما.
            </p>
            <Button className="mt-5 w-fit" size="sm">
              مشاهدهٔ داشبورد
            </Button>
          </div>
        </div>

        {SMALL.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border bg-card p-5"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
              <item.icon className="size-4" />
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
