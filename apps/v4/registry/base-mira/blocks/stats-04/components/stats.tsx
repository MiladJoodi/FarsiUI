"use client"

import { StatNumber } from "@/registry/base-mira/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"

const BARS = [42, 58, 51, 67, 73, 69, 88] as const
const DAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"] as const

const SIDE = [
  { label: "بازدید امروز", value: "۱۸٬۲۳۰" },
  { label: "نشست فعال", value: "۱٬۰۴۲" },
  { label: "میانگین زمان", value: "۴٫۸ دقیقه" },
] as const

export function StatsSpotlight() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3">
            این هفته
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            رشد پایدار، به زبان فارسی
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            شنبه تا جمعه · بر اساس تقویم شمسی
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-fit">
          خروجی گزارش
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">نصب بلاک‌ها</p>
              <p className="mt-1 text-4xl font-bold">
                <StatNumber value="۳٬۲۸۴" />
              </p>
              <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">
                <StatNumber value="+۲۴٪" /> نسبت به هفتهٔ قبل
              </p>
            </div>
            <Badge>اوج جمعه</Badge>
          </div>

          <div className="mt-10 flex h-44 gap-2 sm:gap-3">
            {BARS.map((height, index) => (
              <div
                key={DAYS[index]}
                className="flex h-full min-w-0 flex-1 flex-col items-center gap-2"
              >
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-primary/80 transition-colors hover:bg-primary"
                    style={{ height: `${height}%` }}
                    title={`${DAYS[index]}: ${height}`}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {DAYS[index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {SIDE.map((item) => (
            <div
              key={item.label}
              className="flex flex-1 flex-col justify-center rounded-2xl border bg-card p-5 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-bold">
                <StatNumber value={item.value} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
