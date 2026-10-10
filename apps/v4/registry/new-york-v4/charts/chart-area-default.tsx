"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "یک نمودار ناحیه‌ای ساده"

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

export function ChartAreaDefault() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>روند فروش تجمعی</CardTitle>
        <CardDescription>{FA_CHART.salesLast6Months}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
              tickFormatter={formatPersianMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="store"
              type="natural"
              fill="var(--color-store)"
              fillOpacity={0.4}
              stroke="var(--color-store)"
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
