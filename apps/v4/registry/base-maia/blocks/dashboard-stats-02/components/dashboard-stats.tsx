import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import StatNumber from "@/registry/base-maia/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-maia/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"

const STATS = [
  {
    label: "MRR",
    value: "۲۱۰٬۰۰۰٬۰۰۰",
    unit: "تومان",
    delta: "٪۱۲+",
    up: true,
    bars: [40, 48, 45, 62, 58, 70, 78],
  },
  {
    label: "نرخ ریزش",
    value: "۱٫۸٪",
    unit: "ماهانه",
    delta: "٪۰٫۴−",
    up: false,
    bars: [70, 65, 60, 55, 50, 48, 42],
  },
  {
    label: "میانگین پاسخ",
    value: "۱۴",
    unit: "دقیقه",
    delta: "٪۹+",
    up: true,
    bars: [55, 50, 48, 42, 40, 38, 35],
  },
  {
    label: "NPS",
    value: "۶۸",
    unit: "امتیاز",
    delta: "٪۵+",
    up: true,
    bars: [50, 52, 55, 58, 60, 64, 68],
  },
] as const

export default function DashboardStatsCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">شاخص‌های محصول</h2>
        <p className="mt-2 text-muted-foreground">روند هفتگی کنار هر عدد</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="gap-2">
              <div className="flex items-center justify-between gap-2">
                <CardDescription>{stat.label}</CardDescription>
                <Badge variant="outline" className="gap-1 font-normal">
                  {stat.up ? (
                    <TrendingUpIcon className="size-3.5" />
                  ) : (
                    <TrendingDownIcon className="size-3.5" />
                  )}
                  {stat.delta}
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                <StatNumber value={stat.value} />
                <span className="ms-1 text-sm font-normal text-muted-foreground">
                  {stat.unit}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-10 items-end gap-1">
                {stat.bars.map((h, i) => (
                  <div
                    key={i}
                    className="min-h-1 flex-1 rounded-sm bg-primary/70"
                    style={{ height: `${Math.max(h, 12)}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
