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

export const description = "یک نمودار ناحیه‌ای با گرادیان"

const chartData = [
  { month: FA_MONTHS[0], store: 186, online: 80 },
  { month: FA_MONTHS[1], store: 305, online: 200 },
  { month: FA_MONTHS[2], store: 237, online: 120 },
  { month: FA_MONTHS[3], store: 73, online: 190 },
  { month: FA_MONTHS[4], store: 209, online: 130 },
  { month: FA_MONTHS[5], store: 214, online: 140 },
]

const chartConfig = {
  store: {
    label: FA_CHART.store,
    color: "var(--chart-1)",
  },
  online: {
    label: FA_CHART.online,
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaGradient() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>نمودار ناحیه‌ای — گرادیان</CardTitle>
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-store)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-store)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-online)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-online)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="online"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-online)"
              stackId="a"
            />
            <Area
              dataKey="store"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-store)"
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
