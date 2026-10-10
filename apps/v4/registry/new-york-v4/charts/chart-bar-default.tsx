"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  CHART_TOMAN_AXIS_WIDTH,
  FA_CHART,
  FA_MONTHLY_SALES,
  formatPersianMonthTick,
  formatToman,
  formatTomanAxis,
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

export const description = "فروش ماهانه شعب — نمودار میله‌ای"

const chartData = FA_MONTHLY_SALES.map(({ month, store }) => ({
  month,
  store,
}))

const chartConfig = {
  store: {
    label: FA_CHART.store,
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>{FA_CHART.titleMonthlySales}</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} dir="ltr">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 4, right: 8 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={formatPersianMonthTick}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={CHART_TOMAN_AXIS_WIDTH}
              tickFormatter={formatTomanAxis}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => (
                    <div className="flex flex-1 items-center justify-between gap-4">
                      <span className="text-muted-foreground">
                        {FA_CHART.store}
                      </span>
                      <span className="font-medium text-foreground tabular-nums">
                        {formatToman(Number(value), { compact: true })}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="store" fill="var(--color-store)" radius={6} />
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
