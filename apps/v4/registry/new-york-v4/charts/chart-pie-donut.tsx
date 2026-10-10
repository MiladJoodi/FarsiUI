"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import { FA_CHART, FA_PAYMENT_SHARE } from "@/lib/chart-locale"
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

export const description = "سهم روش‌های پرداخت — دونات"

const chartData = [...FA_PAYMENT_SHARE]

const chartConfig = {
  sales: {
    label: FA_CHART.sales,
  },
  card: {
    label: FA_CHART.card,
    color: "var(--chart-1)",
  },
  gateway: {
    label: FA_CHART.gateway,
    color: "var(--chart-2)",
  },
  cash: {
    label: FA_CHART.cash,
    color: "var(--chart-3)",
  },
  wallet: {
    label: FA_CHART.wallet,
    color: "var(--chart-4)",
  },
  other: {
    label: FA_CHART.other,
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieDonut() {
  return (
    <Card dir="rtl" className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{FA_CHART.titlePaymentShare}</CardTitle>
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
              content={<ChartTooltipContent hideLabel nameKey="method" />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="method"
              innerRadius={60}
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
