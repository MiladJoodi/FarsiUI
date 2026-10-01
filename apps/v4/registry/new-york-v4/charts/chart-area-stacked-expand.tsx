"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "یک نمودار ناحیه‌ای انباشتهٔ کامل"

const chartData = [
  { month: FA_MONTHS[0], desktop: 186, mobile: 80, other: 45 },
  { month: FA_MONTHS[1], desktop: 305, mobile: 200, other: 100 },
  { month: FA_MONTHS[2], desktop: 237, mobile: 120, other: 150 },
  { month: FA_MONTHS[3], desktop: 73, mobile: 190, other: 50 },
  { month: FA_MONTHS[4], desktop: 209, mobile: 130, other: 100 },
  { month: FA_MONTHS[5], desktop: 214, mobile: 140, other: 160 },
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
  other: {
    label: FA_CHART.other,
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartAreaStackedExpand() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>نمودار ناحیه‌ای — انباشتهٔ کامل</CardTitle>
        <CardDescription>{FA_CHART.visitorsLast6Months}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
            stackOffset="expand"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={abbreviatePersianMonth}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="other"
              type="natural"
              fill="var(--color-other)"
              fillOpacity={0.1}
              stroke="var(--color-other)"
              stackId="a"
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {FA_CHART.rangeFarvardinShahrivar}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
