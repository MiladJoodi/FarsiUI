"use client"

import { Bar, BarChart, Cell, XAxis } from "recharts"

import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/styles/base-rhea/ui/chart"
import { Item, ItemContent, ItemDescription } from "@/styles/base-rhea/ui/item"

const chartData = [
  { month: "دی", amount: 800, fill: "var(--chart-1)" },
  { month: "بهمن", amount: 1100, fill: "var(--chart-2)" },
  { month: "اسفند", amount: 900, fill: "var(--chart-3)" },
  { month: "فروردین", amount: 1300, fill: "var(--chart-4)" },
  { month: "اردیبهشت", amount: 750, fill: "var(--chart-5)" },
]

const chartConfig = {
  amount: {
    label: "واریز",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ContributionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>تاریخچهٔ واریزها</CardTitle>
        <CardDescription>فعالیت ۶ ماه گذشته</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
          aria-label="فعالیت واریز ۶ ماه گذشته"
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
              cursor={{ fill: "var(--muted)", opacity: 0.35 }}
              content={<ChartTooltipContent indicator="dot" nameKey="amount" />}
            />
            <Bar dataKey="amount" radius={8} maxBarSize={48}>
              {chartData.map((item) => (
                <Cell key={item.month} fill={item.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
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
