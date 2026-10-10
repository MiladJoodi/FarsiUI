"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  FA_CHART,
  FA_PROVINCE_SALES,
  formatToman,
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

export const description = "سهم استان‌ها از فروش — نمودار دایره‌ای"

const chartData = [...FA_PROVINCE_SALES]

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

export function ChartPieSimple() {
  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{FA_CHART.titleProvinceShare}</CardTitle>
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
              content={
                <ChartTooltipContent
                  hideLabel
                  nameKey="province"
                  formatter={(value, name) => (
                    <div className="flex flex-1 items-center justify-between gap-4">
                      <span className="text-muted-foreground">
                        {chartConfig[name as keyof typeof chartConfig]?.label ??
                          name}
                      </span>
                      <span className="font-medium text-foreground tabular-nums">
                        {formatToman(Number(value) * 1_000_000, {
                          compact: true,
                        })}
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Pie data={chartData} dataKey="sales" nameKey="province" />
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
