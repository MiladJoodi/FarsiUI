"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

export const description = "روند فروش شمسی — نمودار خطی"

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

export function ChartLineDefault() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>{FA_CHART.titleSalesTrend}</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} dir="ltr">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 4,
              right: 8,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
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
            <Line
              dataKey="store"
              type="natural"
              stroke="var(--color-store)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
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
