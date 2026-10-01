"use client"

import { TrendingUp } from "lucide-react"
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
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "یک نمودار راداری با شبکه سفارشی"

const chartData = [
  { month: FA_MONTHS[0], desktop: 186 },
  { month: FA_MONTHS[1], desktop: 305 },
  { month: FA_MONTHS[2], desktop: 237 },
  { month: FA_MONTHS[3], desktop: 273 },
  { month: FA_MONTHS[4], desktop: 209 },
  { month: FA_MONTHS[5], desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: FA_CHART.desktop,
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarGridCustom() {
  return (
    <Card dir="rtl">
      <CardHeader className="items-center pb-4">
        <CardTitle>نمودار راداری — شبکه سفارشی</CardTitle>
        <CardDescription>{FA_CHART.visitorsLast6Months}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid radialLines={false} polarRadius={[90]} strokeWidth={1} />
            <PolarAngleAxis
              dataKey="month"
              tickFormatter={abbreviatePersianMonth}
            />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
