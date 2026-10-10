"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { FA_CHART, formatJalaliDate } from "@/lib/chart-locale"
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

export const description = "یک نمودار خطی تعاملی"

const chartData = [
  { date: "2024-04-01", store: 222, online: 150 },
  { date: "2024-04-02", store: 97, online: 180 },
  { date: "2024-04-03", store: 167, online: 120 },
  { date: "2024-04-04", store: 242, online: 260 },
  { date: "2024-04-05", store: 373, online: 290 },
  { date: "2024-04-06", store: 301, online: 340 },
  { date: "2024-04-07", store: 245, online: 180 },
  { date: "2024-04-08", store: 409, online: 320 },
  { date: "2024-04-09", store: 59, online: 110 },
  { date: "2024-04-10", store: 261, online: 190 },
  { date: "2024-04-11", store: 327, online: 350 },
  { date: "2024-04-12", store: 292, online: 210 },
  { date: "2024-04-13", store: 342, online: 380 },
  { date: "2024-04-14", store: 137, online: 220 },
  { date: "2024-04-15", store: 120, online: 170 },
  { date: "2024-04-16", store: 138, online: 190 },
  { date: "2024-04-17", store: 446, online: 360 },
  { date: "2024-04-18", store: 364, online: 410 },
  { date: "2024-04-19", store: 243, online: 180 },
  { date: "2024-04-20", store: 89, online: 150 },
  { date: "2024-04-21", store: 137, online: 200 },
  { date: "2024-04-22", store: 224, online: 170 },
  { date: "2024-04-23", store: 138, online: 230 },
  { date: "2024-04-24", store: 387, online: 290 },
  { date: "2024-04-25", store: 215, online: 250 },
  { date: "2024-04-26", store: 75, online: 130 },
  { date: "2024-04-27", store: 383, online: 420 },
  { date: "2024-04-28", store: 122, online: 180 },
  { date: "2024-04-29", store: 315, online: 240 },
  { date: "2024-04-30", store: 454, online: 380 },
  { date: "2024-05-01", store: 165, online: 220 },
  { date: "2024-05-02", store: 293, online: 310 },
  { date: "2024-05-03", store: 247, online: 190 },
  { date: "2024-05-04", store: 385, online: 420 },
  { date: "2024-05-05", store: 481, online: 390 },
  { date: "2024-05-06", store: 498, online: 520 },
  { date: "2024-05-07", store: 388, online: 300 },
  { date: "2024-05-08", store: 149, online: 210 },
  { date: "2024-05-09", store: 227, online: 180 },
  { date: "2024-05-10", store: 293, online: 330 },
  { date: "2024-05-11", store: 335, online: 270 },
  { date: "2024-05-12", store: 197, online: 240 },
  { date: "2024-05-13", store: 197, online: 160 },
  { date: "2024-05-14", store: 448, online: 490 },
  { date: "2024-05-15", store: 473, online: 380 },
  { date: "2024-05-16", store: 338, online: 400 },
  { date: "2024-05-17", store: 499, online: 420 },
  { date: "2024-05-18", store: 315, online: 350 },
  { date: "2024-05-19", store: 235, online: 180 },
  { date: "2024-05-20", store: 177, online: 230 },
  { date: "2024-05-21", store: 82, online: 140 },
  { date: "2024-05-22", store: 81, online: 120 },
  { date: "2024-05-23", store: 252, online: 290 },
  { date: "2024-05-24", store: 294, online: 220 },
  { date: "2024-05-25", store: 201, online: 250 },
  { date: "2024-05-26", store: 213, online: 170 },
  { date: "2024-05-27", store: 420, online: 460 },
  { date: "2024-05-28", store: 233, online: 190 },
  { date: "2024-05-29", store: 78, online: 130 },
  { date: "2024-05-30", store: 340, online: 280 },
  { date: "2024-05-31", store: 178, online: 230 },
  { date: "2024-06-01", store: 178, online: 200 },
  { date: "2024-06-02", store: 470, online: 410 },
  { date: "2024-06-03", store: 103, online: 160 },
  { date: "2024-06-04", store: 439, online: 380 },
  { date: "2024-06-05", store: 88, online: 140 },
  { date: "2024-06-06", store: 294, online: 250 },
  { date: "2024-06-07", store: 323, online: 370 },
  { date: "2024-06-08", store: 385, online: 320 },
  { date: "2024-06-09", store: 438, online: 480 },
  { date: "2024-06-10", store: 155, online: 200 },
  { date: "2024-06-11", store: 92, online: 150 },
  { date: "2024-06-12", store: 492, online: 420 },
  { date: "2024-06-13", store: 81, online: 130 },
  { date: "2024-06-14", store: 426, online: 380 },
  { date: "2024-06-15", store: 307, online: 350 },
  { date: "2024-06-16", store: 371, online: 310 },
  { date: "2024-06-17", store: 475, online: 520 },
  { date: "2024-06-18", store: 107, online: 170 },
  { date: "2024-06-19", store: 341, online: 290 },
  { date: "2024-06-20", store: 408, online: 450 },
  { date: "2024-06-21", store: 169, online: 210 },
  { date: "2024-06-22", store: 317, online: 270 },
  { date: "2024-06-23", store: 480, online: 530 },
  { date: "2024-06-24", store: 132, online: 180 },
  { date: "2024-06-25", store: 141, online: 190 },
  { date: "2024-06-26", store: 434, online: 380 },
  { date: "2024-06-27", store: 448, online: 490 },
  { date: "2024-06-28", store: 149, online: 200 },
  { date: "2024-06-29", store: 103, online: 160 },
  { date: "2024-06-30", store: 446, online: 400 },
]

const chartConfig = {
  views: {
    label: FA_CHART.pageViews,
  },
  store: {
    label: FA_CHART.store,
    color: "var(--chart-1)",
  },
  online: {
    label: FA_CHART.online,
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartLineInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("store")

  const total = React.useMemo(
    () => ({
      store: chartData.reduce((acc, curr) => acc + curr.store, 0),
      online: chartData.reduce((acc, curr) => acc + curr.online, 0),
    }),
    []
  )

  return (
    <Card dir="rtl" className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 text-right sm:pb-0">
          <CardTitle>روند فروش — تعاملی</CardTitle>
          <CardDescription>{FA_CHART.salesLast3Months}</CardDescription>
        </div>
        <div className="flex">
          {["store", "online"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-right even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString("fa-IR")}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => formatJalaliDate(value)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) =>
                    formatJalaliDate(value, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
