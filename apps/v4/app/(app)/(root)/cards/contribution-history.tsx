"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, Cell, XAxis } from "recharts"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/bases/base/ui/chart"
import { Item, ItemContent, ItemDescription } from "@/registry/bases/base/ui/item"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"

const chartData = [
  { month: "دی", amount: 800, fill: "var(--chart-1)" },
  { month: "بهمن", amount: 1100, fill: "var(--chart-2)" },
  { month: "اسفند", amount: 900, fill: "var(--chart-3)" },
  { month: "فروردین", amount: 1300, fill: "var(--chart-4)" },
  { month: "اردیبهشت", amount: 750, fill: "var(--chart-5)" },
  { month: "خرداد", amount: 1050, fill: "var(--chart-1)" },
]

const chartConfig = {
  amount: {
    label: "واریز",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const SKELETON_BARS = [60, 80, 65, 95, 50, 100]

function ContributionChartSkeleton() {
  return (
    <div
      className="flex h-[200px] w-full items-end gap-3"
      aria-hidden
      aria-busy="true"
    >
      {SKELETON_BARS.map((height, index) => (
        <div
          key={index}
          className="flex h-full flex-1 flex-col justify-end gap-2"
        >
          <Skeleton
            className="w-full rounded-t-md rounded-b-none"
            style={{ height: `${height}%` }}
          />
          <Skeleton className="mx-auto h-3 w-6 rounded-md" />
        </div>
      ))}
    </div>
  )
}

function ContributionChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[200px] w-full isolate overflow-hidden"
      aria-label="فعالیت واریز ۶ ماه گذشته"
      initialDimension={{ width: 360, height: 200 }}
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 8, left: 0, right: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 12 }}
        />
        <ChartTooltip
          cursor={false}
          isAnimationActive={false}
          content={
            <ChartTooltipContent
              indicator="dot"
              nameKey="amount"
              className="border-border/60 bg-popover text-popover-foreground shadow-lg backdrop-blur-none"
            />
          }
        />
        <Bar
          dataKey="amount"
          radius={8}
          maxBarSize={48}
          isAnimationActive={false}
        >
          {chartData.map((item) => (
            <Cell key={item.month} fill={item.fill} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export function ContributionHistory() {
  const [chartReady, setChartReady] = useState(false)

  useEffect(() => {
    // Paint the skeleton first, then mount Recharts after layout.
    const frame = requestAnimationFrame(() => {
      setChartReady(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>تاریخچهٔ واریزها</CardTitle>
        <CardDescription>فعالیت ۶ ماه گذشته</CardDescription>
      </CardHeader>
      <CardContent>
        {chartReady ? <ContributionChart /> : <ContributionChartSkeleton />}
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1 text-right">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground">
                پیش‌رو
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                خرداد ۱۴۰۳
              </span>
              <span className="text-sm text-muted-foreground">زمان‌بندی‌شده</span>
            </ItemContent>
          </Item>
          <Item
            variant="muted"
            className="hidden flex-col items-stretch xl:flex"
          >
            <ItemContent className="gap-1 text-right">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground">
                طرح پس‌انداز
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                شتاب‌دار
              </span>
              <span className="text-sm text-muted-foreground">دوره‌ای</span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">مشاهدهٔ گزارش کامل</Button>
      </CardFooter>
    </Card>
  )
}
