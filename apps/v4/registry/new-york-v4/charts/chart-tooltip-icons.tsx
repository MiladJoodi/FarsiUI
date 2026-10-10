"use client"

import { Footprints, Waves } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"

import { FA_CHART, formatJalaliDate } from "@/lib/chart-locale"
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

export const description = "نمودار میله‌ای انباشته با آیکون در راهنما"

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
    icon: Footprints,
  },
  pickup: {
    label: FA_CHART.pickup,
    color: "var(--chart-2)",
    icon: Waves,
  },
} satisfies ChartConfig

export function ChartTooltipIcons() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>راهنما — آیکون‌ها</CardTitle>
        <CardDescription>راهنما با آیکون‌های سری داده.</CardDescription>
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
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
