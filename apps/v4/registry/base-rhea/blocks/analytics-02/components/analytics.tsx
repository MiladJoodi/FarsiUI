"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-rhea/ui/chart"

const data = [
  { month: "فروردین", organic: 186, paid: 80 },
  { month: "اردیبهشت", organic: 305, paid: 120 },
  { month: "خرداد", organic: 237, paid: 140 },
  { month: "تیر", organic: 273, paid: 160 },
  { month: "مرداد", organic: 309, paid: 180 },
  { month: "شهریور", organic: 350, paid: 200 },
]

const chartConfig = {
  organic: {
    label: "ارگانیک",
    color: "var(--primary)",
  },
  paid: {
    label: "تبلیغات",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function AnalyticsArea() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">روند ترافیک</h2>
        <p className="mt-2 text-muted-foreground">
          مقایسهٔ ارگانیک و تبلیغات در شش ماه
        </p>
      </div>
      <Card>
        <CardHeader className="text-start">
          <CardTitle>منابع بازدید</CardTitle>
          <CardDescription>نمودار ناحیه‌ای پشته‌ای</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-64 w-full"
          >
            <AreaChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                dataKey="paid"
                type="natural"
                fill="var(--color-paid)"
                fillOpacity={0.4}
                stroke="var(--color-paid)"
                stackId="a"
              />
              <Area
                dataKey="organic"
                type="natural"
                fill="var(--color-organic)"
                fillOpacity={0.5}
                stroke="var(--color-organic)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  )
}
