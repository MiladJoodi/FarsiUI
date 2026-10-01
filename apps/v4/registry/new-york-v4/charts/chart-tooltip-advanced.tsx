"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  FA_CHART,
  formatJalaliDate,
  formatPersianNumber,
} from "@/lib/chart-locale"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york-v4/ui/chart"

export const description = "نمودار میله‌ای انباشته با راهنمای پیشرفته و مجموع"

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
]

const chartConfig = {
  running: {
    label: FA_CHART.running,
    color: "var(--chart-1)",
  },
  swimming: {
    label: FA_CHART.swimming,
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartTooltipAdvanced() {
  return (
    <Card dir="rtl">
      <CardHeader>
        <CardTitle>راهنما — پیشرفته</CardTitle>
        <CardDescription>
          راهنما با قالب‌بند سفارشی و نمایش مجموع.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                formatJalaliDate(value, { weekday: "short" })
              }
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--color-running)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ms-auto flex items-baseline gap-0.5 font-medium tracking-normal text-foreground">
                        {formatPersianNumber(Number(value))}
                        <span className="font-normal text-muted-foreground">
                          کیلوکالری
                        </span>
                      </div>
                      {index === 1 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          مجموع
                          <div className="ms-auto flex items-baseline gap-0.5 font-medium tracking-normal text-foreground">
                            {formatPersianNumber(
                              item.payload.running + item.payload.swimming
                            )}
                            <span className="font-normal text-muted-foreground">
                              کیلوکالری
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
