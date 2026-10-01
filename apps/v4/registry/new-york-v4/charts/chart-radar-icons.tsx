"use client"

import { ArrowDownFromLine, ArrowUpFromLine, TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "یک نمودار راداری با آیکون‌ها"

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
    icon: ArrowDownFromLine,
  },
  mobile: {
    label: FA_CHART.mobile,
    color: "var(--chart-2)",
    icon: ArrowUpFromLine,
  },
} satisfies ChartConfig

export function ChartRadarIcons() {
  return (
    <Card dir="rtl">
      <CardHeader className="items-center pb-4">
        <CardTitle>نمودار راداری — آیکون‌ها</CardTitle>
        <CardDescription>{FA_CHART.visitorsLast6Months}</CardDescription>
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
              tickFormatter={abbreviatePersianMonth}
            />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
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
