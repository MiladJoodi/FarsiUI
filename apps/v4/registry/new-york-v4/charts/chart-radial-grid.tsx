"use client"

import { TrendingUp } from "lucide-react"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

import { FA_CHART } from "@/lib/chart-locale"
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

export const description = "یک نمودار شعاعی با شبکه"

const chartData = [
  { province: "tehran", sales: 275, fill: "var(--color-tehran)" },
  { province: "isfahan", sales: 200, fill: "var(--color-isfahan)" },
  { province: "fars", sales: 187, fill: "var(--color-fars)" },
  { province: "khorasan", sales: 173, fill: "var(--color-khorasan)" },
  { province: "other", sales: 90, fill: "var(--color-other)" },
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

export function ChartRadialGrid() {
  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>نمودار شعاعی — شبکه</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="province" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="sales" />
          </RadialBarChart>
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
