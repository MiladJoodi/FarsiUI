"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "یک نمودار راداری با راهنما"

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

export function ChartRadarLegend() {
  return (
    <Card dir="rtl">
      <CardHeader className="items-center">
        <CardTitle>نمودار راداری — راهنما</CardTitle>
        <CardDescription>{FA_CHART.salesLast6Months}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
              left: 0,
              right: 0,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="month"
              tickFormatter={formatPersianMonthTick}
            />
            <PolarGrid />
            <Radar
              dataKey="store"
              fill="var(--color-store)"
              fillOpacity={0.6}
            />
            <Radar dataKey="online" fill="var(--color-online)" />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {FA_CHART.trendingUp} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          {FA_CHART.rangeFarvardinShahrivar}
        </div>
      </CardFooter>
    </Card>
  )
}
