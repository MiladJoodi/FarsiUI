"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import { FA_CHART, formatPersianNumber } from "@/lib/chart-locale"
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

export const description = "یک نمودار دونات با متن"

const chartData = [
  { province: "tehran", sales: 275, fill: "var(--color-tehran)" },
  { province: "isfahan", sales: 200, fill: "var(--color-isfahan)" },
  { province: "fars", sales: 287, fill: "var(--color-fars)" },
  { province: "khorasan", sales: 173, fill: "var(--color-khorasan)" },
  { province: "other", sales: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  sales: {
    label: FA_CHART.sales,
  },
  tehran: {
    label: FA_CHART.tehran,
    color: "var(--chart-1)",
  },
  isfahan: {
    label: FA_CHART.isfahan,
    color: "var(--chart-2)",
  },
  fars: {
    label: FA_CHART.fars,
    color: "var(--chart-3)",
  },
  khorasan: {
    label: FA_CHART.khorasan,
    color: "var(--chart-4)",
  },
  other: {
    label: FA_CHART.other,
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>سهم استان‌ها — دونات با متن</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="province"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {formatPersianNumber(totalVisitors)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {FA_CHART.sales}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {FA_CHART.salesLast6Months}
        </div>
      </CardFooter>
    </Card>
  )
}
