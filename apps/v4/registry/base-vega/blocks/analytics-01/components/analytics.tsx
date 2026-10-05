"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import StatNumber from "@/registry/base-vega/blocks/stats-01/components/stat-number"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-vega/ui/chart"

const data = [
  { day: "ش", fullDay: "شنبه", visits: 420 },
  { day: "ی", fullDay: "یکشنبه", visits: 580 },
  { day: "د", fullDay: "دوشنبه", visits: 510 },
  { day: "س", fullDay: "سه‌شنبه", visits: 720 },
  { day: "چ", fullDay: "چهارشنبه", visits: 690 },
  { day: "پ", fullDay: "پنجشنبه", visits: 860 },
  { day: "ج", fullDay: "جمعه", visits: 640 },
]

const chartConfig = {
  visits: {
    label: "بازدید",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export default function AnalyticsBars() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">بازدید هفتگی</h2>
        <p className="mt-2 text-muted-foreground">
          نمودار — نه فقط عدد؛ برای شاخص کارت به «شاخص‌های داشبورد» بروید
        </p>
      </div>
      <Card>
        <CardHeader className="text-start">
          <CardDescription>مجموع هفته</CardDescription>
          <CardTitle className="text-2xl">
            <StatNumber value="۴٬۴۲۰" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-56 w-full"
          >
            <BarChart data={data} accessibilityLayer>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                reversed
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(_, payload) => {
                      const fullDay = payload?.[0]?.payload?.fullDay
                      return typeof fullDay === "string" ? fullDay : ""
                    }}
                  />
                }
              />
              <Bar dataKey="visits" fill="var(--color-visits)" radius={6} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  )
}
