"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  abbreviatePersianMonth,
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

export const description = "یک نمودار خطی چندگانه"

const chartData = [
  { month: FA_MONTHS[0], desktop: 186, mobile: 80 },
  { month: FA_MONTHS[1], desktop: 305, mobile: 200 },
  { month: FA_MONTHS[2], desktop: 237, mobile: 120 },
  { month: FA_MONTHS[3], desktop: 73, mobile: 190 },
  { month: FA_MONTHS[4], desktop: 209, mobile: 130 },
  { month: FA_MONTHS[5], desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: FA_CHART.desktop,
    color: "var(--chart-1)",
  },
  mobile: {
    label: FA_CHART.mobile,
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartLineMultiple() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>نمودار خطی — چندگانه</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={abbreviatePersianMonth}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {FA_CHART.visitorsLast6Months}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
