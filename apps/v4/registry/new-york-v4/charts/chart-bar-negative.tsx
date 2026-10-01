"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

import { FA_CHART, FA_MONTHS } from "@/lib/chart-locale"
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

export const description = "یک نمودار میله‌ای با مقادیر منفی"

const chartData = [
  { month: FA_MONTHS[0], visitors: 186 },
  { month: FA_MONTHS[1], visitors: 205 },
  { month: FA_MONTHS[2], visitors: -207 },
  { month: FA_MONTHS[3], visitors: 173 },
  { month: FA_MONTHS[4], visitors: -209 },
  { month: FA_MONTHS[5], visitors: 214 },
]

const chartConfig = {
  visitors: {
    label: FA_CHART.visitors,
  },
} satisfies ChartConfig

export function ChartBarNegative() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>نمودار میله‌ای — مقادیر منفی</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="visitors">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={item.visitors > 0 ? "var(--chart-1)" : "var(--chart-2)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {FA_CHART.visitorsLast6Months}
        </div>
      </CardFooter>
    </Card>
  )
}
