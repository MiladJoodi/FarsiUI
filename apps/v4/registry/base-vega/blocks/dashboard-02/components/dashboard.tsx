"use client"

import { Badge } from "@/registry/base-vega/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"

const STATS = [
  { label: "فروش امروز", value: "۱۸٬۴۰۰٬۰۰۰", unit: "تومان", delta: "٪۸+" },
  { label: "سفارش‌های باز", value: "۴۲", unit: "مورد", delta: "٪۳−" },
  { label: "مشتریان فعال", value: "۱٬۲۰۸", unit: "نفر", delta: "٪۱۲+" },
] as const

export function DashboardSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">نمای کلی</h2>
        <p className="mt-2 text-muted-foreground">سه شاخص اصلی امروز</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="gap-2">
              <div className="flex items-center justify-between gap-2">
                <CardDescription>{stat.label}</CardDescription>
                <Badge variant="outline">{stat.delta}</Badge>
              </div>
              <CardTitle className="text-2xl tabular-nums">
                <bdi
                  dir="ltr"
                  className="inline-block tracking-normal [letter-spacing:0]"
                >
                  {stat.value}
                </bdi>
                <span className="ms-1 text-sm font-normal text-muted-foreground">
                  {stat.unit}
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
