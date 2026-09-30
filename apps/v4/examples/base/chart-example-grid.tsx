"use client"

import { Bar, BarChart, CartesianGrid } from "recharts"

import { ChartContainer, type ChartConfig } from "@/styles/base-nova/ui/chart"

const chartData = [
  { month: "فروردین", desktop: 186, mobile: 80 },
  { month: "اردیبهشت", desktop: 305, mobile: 200 },
  { month: "خرداد", desktop: 237, mobile: 120 },
  { month: "تیر", desktop: 73, mobile: 190 },
  { month: "مرداد", desktop: 209, mobile: 130 },
  { month: "شهریور", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "#2563eb",
  },
  mobile: {
    label: "موبایل",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function ChartBarDemoGrid() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
