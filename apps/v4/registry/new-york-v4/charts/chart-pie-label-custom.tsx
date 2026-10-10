"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export const description = "یک نمودار دایره‌ای با برچسب سفارشی"

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

export function ChartPieLabelCustom() {
  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>نمودار دایره‌ای — برچسب سفارشی</CardTitle>
        <CardDescription>{FA_CHART.rangeFarvardinShahrivar}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="sales" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                  >
                    {formatPersianNumber(payload.sales)}
                  </text>
                )
              }}
              nameKey="province"
            />
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
