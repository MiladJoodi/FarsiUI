"use client"

import { Pie, PieChart } from "recharts"

import { FA_CHART } from "@/lib/chart-locale"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "یک نمودار دایره‌ای با راهنما"

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

export function ChartPieLegend() {
  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>نمودار دایره‌ای — راهنما</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="sales" />
            <ChartLegend
              content={<ChartLegendContent nameKey="province" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
