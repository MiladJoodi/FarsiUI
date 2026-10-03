"use client"

import * as React from "react"
import { Cell, Pie, PieChart } from "recharts"

import { StatNumber } from "@/registry/base-vega/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-vega/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-vega/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

const SOURCES = {
  هفته: [
    { name: "جستجو", key: "search", value: 44 },
    { name: "مستقیم", key: "direct", value: 28 },
    { name: "شبکه اجتماعی", key: "social", value: 18 },
    { name: "ارجاع", key: "referral", value: 10 },
  ],
  ماه: [
    { name: "جستجو", key: "search", value: 40 },
    { name: "مستقیم", key: "direct", value: 30 },
    { name: "شبکه اجتماعی", key: "social", value: 20 },
    { name: "ارجاع", key: "referral", value: 10 },
  ],
} as const

type Range = keyof typeof SOURCES

const RANGE_ITEMS = (Object.keys(SOURCES) as Range[]).map((key) => ({
  value: key,
  label: key,
}))

const chartConfig = {
  search: { label: "جستجو", color: "var(--primary)" },
  direct: { label: "مستقیم", color: "var(--chart-2)" },
  social: { label: "شبکه اجتماعی", color: "var(--chart-3)" },
  referral: { label: "ارجاع", color: "var(--chart-4)" },
} satisfies ChartConfig

export function AnalyticsSources() {
  const [range, setRange] = React.useState<Range>("هفته")
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
          items={RANGE_ITEMS}
          value={range}
          onValueChange={(value) => {
            if (value && value in SOURCES) setRange(value as Range)
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="بازه" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {RANGE_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
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
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideLabel
                      formatter={(value, name) => (
                        <div className="flex w-full items-center justify-between gap-4">
                          <span className="text-muted-foreground">{name}</span>
                          <span className="font-mono font-medium tracking-normal [letter-spacing:0] tabular-nums">
                            {typeof value === "number"
                              ? `٪${toFa(value)}`
                              : value}
                          </span>
                        </div>
                      )}
                    />
                  }
                />
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
                <StatNumber value={`٪${toFa(item.value)}`} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
