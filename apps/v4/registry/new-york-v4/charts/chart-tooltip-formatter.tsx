"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  FA_CHART,
  formatJalaliDate,
  formatPersianNumber,
} from "@/lib/chart-locale"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "نمودار میله‌ای انباشته با قالب‌بند سفارشی راهنما"

const chartData = [
  { date: "2024-07-15", delivery: 450, pickup: 300 },
  { date: "2024-07-16", delivery: 380, pickup: 420 },
  { date: "2024-07-17", delivery: 520, pickup: 120 },
  { date: "2024-07-18", delivery: 140, pickup: 550 },
  { date: "2024-07-19", delivery: 600, pickup: 350 },
  { date: "2024-07-20", delivery: 480, pickup: 400 },
]

const chartConfig = {
  delivery: {
    label: FA_CHART.delivery,
    color: "var(--chart-1)",
  },
  pickup: {
    label: FA_CHART.pickup,
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartTooltipFormatter() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>راهنما — قالب‌بند</CardTitle>
        <CardDescription>راهنما با قالب‌بند سفارشی مقدار.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                formatJalaliDate(value, { weekday: "short" })
              }
            />
            <Bar
              dataKey="delivery"
              stackId="a"
              fill="var(--color-delivery)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="pickup"
              stackId="a"
              fill="var(--color-pickup)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ms-auto flex items-baseline gap-0.5 font-medium tracking-normal [letter-spacing:0] text-foreground">
                        {formatPersianNumber(Number(value))}
                        <span className="font-normal text-muted-foreground">
                          کیلوکالری
                        </span>
                      </div>
                    </div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
