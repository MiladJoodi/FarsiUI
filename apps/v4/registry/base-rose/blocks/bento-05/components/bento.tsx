"use client"

import * as React from "react"
import { cn } from "cn"
import {
  ArrowLeftIcon,
  GaugeIcon,
  PuzzleIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-rose/ui/badge"
import { Button } from "@/registry/base-rose/ui/button"

const HIGHLIGHTS = [
  { id: "rtl", title: "RTL کامل", desc: "فرم و ناوبری راست‌چین" },
  { id: "blocks", title: "بلوک‌ها", desc: "الگوهای صفحهٔ واقعی" },
  { id: "theme", title: "تم‌ها", desc: "روشن و تیره هماهنگ" },
] as const

export default function BentoShowcase() {
  const [active, setActive] =
    React.useState<(typeof HIGHLIGHTS)[number]["id"]>("blocks")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <Badge className="mb-3">نمایش کامل</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            بنتو تعاملی برای داستان محصول
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground md:text-lg">
            کاشی‌های مختلف — تصویر، CTA، آمار و انتخاب‌گر — در یک ترکیب واحد
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          <Button>شروع کنید</Button>
          <Button variant="outline">مستندات</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
        <div className="relative overflow-hidden rounded-2xl border md:col-span-4 md:row-span-2">
          <img
            src="/farsiui/dashboard.png"
            alt="داشبورد"
            className="absolute inset-0 size-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
          <div className="relative flex h-full min-h-80 flex-col justify-end p-6 md:p-8">
            <SparklesIcon className="mb-3 size-5 text-primary" />
            <h3 className="text-2xl font-bold">یک زبان بصری برای کل محصول</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              از معرفی تا پنل؛ همهٔ قطعات در یک شبکهٔ بنتو دیده می‌شوند.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border bg-primary p-5 text-primary-foreground md:col-span-2">
          <div>
            <p className="text-sm opacity-80">آمادهٔ شروع؟</p>
            <p className="mt-2 text-xl font-bold">
              اولین بلوک را امروز بگذارید
            </p>
          </div>
          <Button variant="secondary" className="mt-6 w-fit" size="sm">
            شروع رایگان
            <ArrowLeftIcon className="size-4" />
          </Button>
        </div>

        <div className="rounded-2xl border bg-card p-5 md:col-span-2">
          <p className="text-3xl font-bold tabular-nums">۹۹٪</p>
          <p className="mt-1 text-sm text-muted-foreground">
            رضایت تیم‌هایی که بلوک‌ها را کپی کردند
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border bg-card p-4 md:col-span-3">
          <p className="mb-3 text-sm font-medium">تمرکز روی</p>
          {HIGHLIGHTS.map((item) => {
            const selected = item.id === active
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-start text-sm transition-colors",
                  selected ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                )}
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-muted-foreground">{item.desc}</span>
              </button>
            )
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:col-span-3">
          {[
            { icon: ZapIcon, title: "سریع" },
            { icon: PuzzleIcon, title: "ترکیب‌پذیر" },
            { icon: GaugeIcon, title: "سبک" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center rounded-2xl border bg-card p-4 text-center"
            >
              <item.icon className="size-5" />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border md:col-span-6">
          <img
            src="/farsiui/parsian.jpg"
            alt="پس‌زمینهٔ برند"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center md:px-8 md:py-7">
            <div>
              <p className="text-lg font-semibold text-white">
                FarsiUI برای تیم‌هایی که فارسی می‌سازند
              </p>
              <p className="mt-1 text-sm text-white/75">
                انتخاب فعلی:{" "}
                {HIGHLIGHTS.find((item) => item.id === active)?.title}
              </p>
            </div>
            <Button variant="secondary">گالری بلوک‌ها</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
