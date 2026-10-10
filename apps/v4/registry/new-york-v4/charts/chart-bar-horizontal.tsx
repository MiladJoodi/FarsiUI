"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  formatPersianMonthTick,
  FA_CHART,
  FA_MONTHS,
} from "@/lib/chart-locale"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "یک نمودار میله‌ای افقی"

const chartData = [
  { month: FA_MONTHS[0], store: 186 },
  { month: FA_MONTHS[1], store: 305 },
  { month: FA_MONTHS[2], store: 237 },
  { month: FA_MONTHS[3], store: 73 },
  { month: FA_MONTHS[4], store: 209 },
  { month: FA_MONTHS[5], store: 214 },
]

const chartConfig = {
  store: {
    label: FA_CHART.store,
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarHorizontal() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>فروش ماهانه شعب</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Recharts vertical layout needs LTR geometry so Y ticks stay outside bars. */}
        <ChartContainer config={chartConfig} dir="ltr">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 8,
              right: 12,
              top: 4,
              bottom: 4,
            }}
          >
            <XAxis type="number" dataKey="store" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={78}
              tickFormatter={formatPersianMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="store" fill="var(--color-store)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {FA_CHART.salesLast6Months}
        </div>
      </CardFooter>
    </Card>
  )
}
