"use client"

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import StatNumber from "@/registry/base-nili/blocks/stats-01/components/stat-number"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nili/ui/card"

const STATS = [
  {
    label: "کاربران فعال",
    value: "۱۲٬۴۸۰",
    delta: "+۱۲٪",
    up: true,
    hint: "نسبت به ماه قبل",
  },
  {
    label: "درآمد ماه",
    value: "۸۴۰ م",
    delta: "+۸٪",
    up: true,
    hint: "میلیون تومان",
  },
  {
    label: "نرخ تبدیل",
    value: "۴٫۲٪",
    delta: "−۰٫۳٪",
    up: false,
    hint: "نسبت به هفتهٔ قبل",
  },
  {
    label: "تیکت باز",
    value: "۳۸",
    delta: "−۱۵٪",
    up: true,
    hint: "کمتر یعنی بهتر",
  },
] as const

export default function StatsTrendCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          شاخص‌های این ماه
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          آخرین به‌روزرسانی · لحظه‌ای
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="gap-3">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">
                <StatNumber value={stat.value} />
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={
                    stat.up
                      ? "inline-flex items-center gap-0.5 font-medium text-emerald-600 dark:text-emerald-400"
                      : "inline-flex items-center gap-0.5 font-medium text-rose-600 dark:text-rose-400"
                  }
                >
                  {stat.up ? (
                    <ArrowUpIcon className="size-3.5" />
                  ) : (
                    <ArrowDownIcon className="size-3.5" />
                  )}
                  <StatNumber value={stat.delta} />
                </span>
                <span className="text-muted-foreground">{stat.hint}</span>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
