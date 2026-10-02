"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { StatNumber } from "@/registry/base-lyra/blocks/stats-01/components/stat-number"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-lyra/ui/chart"

const data = [
  { day: "ش", visits: 420 },
  { day: "ی", visits: 580 },
  { day: "د", visits: 510 },
  { day: "س", visits: 720 },
  { day: "چ", visits: 690 },
  { day: "پ", visits: 860 },
  { day: "ج", visits: 640 },
]

const chartConfig = {
  visits: {
    label: "بازدید",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function AnalyticsBars() {
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
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="visits" fill="var(--color-visits)" radius={6} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  )
}
