"use client"

import { GaugeIcon, LanguagesIcon, ShieldCheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"

const STATS = [
  { label: "بلوک آماده", value: "۸۰+" },
  { label: "کامپوننت", value: "۴۰+" },
  { label: "تم", value: "روشن / تیره" },
] as const

const HIGHLIGHTS = [
  {
    icon: LanguagesIcon,
    title: "فارسی بومی",
    desc: "اعداد، تاریخ و جهت درست",
  },
  {
    icon: ShieldCheckIcon,
    title: "الگوی هویت",
    desc: "ورود تا احراز هویت",
  },
  {
    icon: GaugeIcon,
    title: "سبک و متمرکز",
    desc: "فقط آنچه لازم دارید",
  },
] as const

export default function FeatureSplitStats() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh items-center gap-10 bg-background px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-lg lg:mx-0">
        <Badge>محصول</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          داشبورد فارسی، آمادهٔ استقرار
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          نیمهٔ متن با آمار و نکات کلیدی؛ نیمهٔ تصویر با پیش‌نمایش واقعی محصول.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border bg-muted/40 p-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-semibold tabular-nums">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <ul className="mt-6 space-y-4">
          {HIGHLIGHTS.map((item) => (
            <li key={item.title} className="flex gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <item.icon className="size-4" />
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <Button size="lg" className="mt-8">
          مشاهدهٔ داشبورد
        </Button>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:mx-0">
        <div
          aria-hidden
          className="absolute -inset-4 rounded-3xl bg-muted/50 blur-2xl md:-inset-6"
        />
        <img
          src="/farsiui/dashboard.png"
          alt="پیش‌نمایش داشبورد"
          className="relative z-10 aspect-4/3 w-full rounded-2xl border object-cover object-top shadow-lg"
        />
      </div>
    </section>
  )
}
