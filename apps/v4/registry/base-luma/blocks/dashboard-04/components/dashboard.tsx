"use client"

import * as React from "react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"

const SERIES = {
  week: [
    { label: "ش", value: 40 },
    { label: "ی", value: 65 },
    { label: "د", value: 52 },
    { label: "س", value: 80 },
    { label: "چ", value: 70 },
    { label: "پ", value: 90 },
    { label: "ج", value: 58 },
  ],
  month: [
    { label: "ه۱", value: 45 },
    { label: "ه۲", value: 62 },
    { label: "ه۳", value: 55 },
    { label: "ه۴", value: 78 },
  ],
  year: [
    { label: "بهار", value: 50 },
    { label: "تابستان", value: 72 },
    { label: "پاییز", value: 64 },
    { label: "زمستان", value: 88 },
  ],
} as const

type Period = keyof typeof SERIES

export function DashboardChart() {
  const [period, setPeriod] = React.useState<Period>("week")
  const bars = SERIES[period]
  const max = Math.max(...bars.map((b) => b.value))

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            آمار
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">عملکرد فروش</h2>
          <p className="mt-2 text-muted-foreground">
            بازه را انتخاب کنید تا نمودار به‌روز شود
          </p>
        </div>
        <Select
          value={period}
          onValueChange={(value) => setPeriod((value as Period) ?? "week")}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="بازه" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectItem value="week">هفته</SelectItem>
            <SelectItem value="month">ماه</SelectItem>
            <SelectItem value="year">سال</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">نمودار میله‌ای</CardTitle>
          <CardDescription>مقادیر نسبی بدون فاصلهٔ ارقام</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-48 items-end gap-2 sm:gap-3">
            {bars.map((bar) => (
              <div
                key={bar.label}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t-md bg-primary/80"
                  style={{ height: `${(bar.value / max) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-6 w-full sm:w-fit">
            دانلود گزارش
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
