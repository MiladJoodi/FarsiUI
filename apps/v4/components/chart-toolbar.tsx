"use client"

import { cn } from "cn"
import {
  AreaChartIcon,
  BarChartBigIcon,
  HexagonIcon,
  LineChartIcon,
  MousePointer2Icon,
  PieChartIcon,
  RadarIcon,
} from "lucide-react"

import { ChartCodeViewer } from "@/components/chart-code-viewer"
import { ChartCopyButton } from "@/components/chart-copy-button"
import { type Chart } from "@/components/chart-display"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function ChartToolbar({
  chart,
  className,
  children,
}: {
  chart: Chart
} & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)} dir="rtl">
      <div className="flex items-center gap-1.5 pe-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
        <ChartTitle chart={chart} />
      </div>
      <div className="ms-auto flex items-center gap-2 [&>form]:flex">
        <ChartCodeViewer chart={chart}>{children}</ChartCodeViewer>
        <Separator
          orientation="vertical"
          className="mx-0 hidden h-4! md:flex"
        />
        <ChartCopyButton
          event="copy_chart_code"
          name={chart.name}
          code={chart.files?.[0]?.content ?? ""}
          className="[&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
        />
      </div>
    </div>
  )
}

function ChartTitle({ chart }: { chart: Chart }) {
  if (chart.name.includes("chart-line")) {
    return (
      <>
        <LineChartIcon /> نمودار خطی
      </>
    )
  }

  if (chart.name.includes("chart-bar")) {
    return (
      <>
        <BarChartBigIcon /> نمودار میله‌ای
      </>
    )
  }

  if (chart.name.includes("chart-pie")) {
    return (
      <>
        <PieChartIcon /> نمودار دایره‌ای
      </>
    )
  }

  if (chart.name.includes("chart-area")) {
    return (
      <>
        <AreaChartIcon /> نمودار ناحیه‌ای
      </>
    )
  }

  if (chart.name.includes("chart-radar")) {
    return (
      <>
        <HexagonIcon /> نمودار راداری
      </>
    )
  }

  if (chart.name.includes("chart-radial")) {
    return (
      <>
        <RadarIcon /> نمودار شعاعی
      </>
    )
  }

  if (chart.name.includes("chart-tooltip")) {
    return (
      <>
        <MousePointer2Icon />
        راهنما
      </>
    )
  }

  return chart.name
}
