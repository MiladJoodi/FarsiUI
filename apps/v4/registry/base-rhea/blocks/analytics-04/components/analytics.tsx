"use client"

import * as React from "react"
import { Cell, Pie, PieChart } from "recharts"

import { StatNumber } from "@/registry/base-rhea/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-rhea/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-rhea/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"

const SOURCES = {
  week: [
    { name: "جستجو", key: "search", value: 44 },
    { name: "مستقیم", key: "direct", value: 28 },
    { name: "شبکه اجتماعی", key: "social", value: 18 },
    { name: "ارجاع", key: "referral", value: 10 },
  ],
  month: [
    { name: "جستجو", key: "search", value: 40 },
    { name: "مستقیم", key: "direct", value: 30 },
    { name: "شبکه اجتماعی", key: "social", value: 20 },
    { name: "ارجاع", key: "referral", value: 10 },
  ],
} as const

type Range = keyof typeof SOURCES

const chartConfig = {
  search: { label: "جستجو", color: "var(--primary)" },
  direct: { label: "مستقیم", color: "var(--chart-2)" },
  social: { label: "شبکه اجتماعی", color: "var(--chart-3)" },
  referral: { label: "ارجاع", color: "var(--chart-4)" },
} satisfies ChartConfig

export function AnalyticsSources() {
  const [range, setRange] = React.useState<Range>("week")
  const data = SOURCES[range].map((item) => ({
    ...item,
    fill: `var(--color-${item.key})`,
  }))

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-3">
            منابع
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            سهم کانال‌های ترافیک
          </h2>
          <p className="mt-2 text-muted-foreground">
            نمودار دایره‌ای با فیلتر بازه
          </p>
        </div>
        <Select
          value={range}
          onValueChange={(value) => setRange((value as Range) ?? "week")}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="بازه" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectItem value="week">هفته</SelectItem>
            <SelectItem value="month">ماه</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="text-start">
            <CardTitle className="text-lg">توزیع</CardTitle>
            <CardDescription>درصد هر کانال</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ChartContainer
              config={chartConfig}
              className="aspect-square h-56 w-full max-w-xs"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  strokeWidth={2}
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-start">
            <CardTitle className="text-lg">جزئیات</CardTitle>
            <CardDescription>فهرست کانال‌ها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: item.fill }}
                  />
                  {item.name}
                </div>
                <StatNumber value={`${item.value}٪`} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
