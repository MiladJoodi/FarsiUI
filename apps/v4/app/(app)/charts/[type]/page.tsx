import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { cn } from "cn"

import {
  ChartDisplay,
  getCachedRegistryItem,
  getChartHighlightedCode,
} from "@/components/chart-display"
import {
  chartCatalog,
  chartTypes,
  getChartTypeMeta,
  type ChartType,
} from "@/app/(app)/charts/chart-catalog"

/** Chart demos live in the legacy new-york-v4 registry shard. */
const CHARTS_STYLE = "new-york-v4" as const

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface ChartPageProps {
  params: Promise<{
    type: string
  }>
}

export async function generateStaticParams() {
  return chartTypes.map((type) => ({
    type,
  }))
}

export async function generateMetadata({ params }: ChartPageProps) {
  const { type } = await params
  const meta = getChartTypeMeta(type)

  if (!meta) {
    return notFound()
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.href,
    },
  } satisfies Metadata
}

export default async function ChartPage({ params }: ChartPageProps) {
  const { type } = await params
  const meta = getChartTypeMeta(type)

  if (!meta || !chartTypes.includes(type as ChartType)) {
    notFound()
  }

  const chartType = type as ChartType
  const chartList = chartCatalog[chartType]

  const chartDataPromises = chartList.map(async (chart) => {
    const registryItem = await getCachedRegistryItem(chart.id, CHARTS_STYLE)
    if (!registryItem) return null

    const highlightedCode = await getChartHighlightedCode(
      registryItem.files?.[0]?.content ?? ""
    )
    if (!highlightedCode) return null

    return {
      ...registryItem,
      highlightedCode,
      fullWidth: chart.fullWidth,
    }
  })

  const prefetchedCharts = (await Promise.all(chartDataPromises)).filter(
    (chart): chart is NonNullable<typeof chart> => chart != null
  )

  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 px-4 pb-8 md:px-6"
    >
      <h1 className="sr-only">{meta.title}</h1>

      <div className="grid flex-1 scroll-mt-20 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        {prefetchedCharts.map((chart) => (
          <ChartDisplay
            key={chart.name}
            chart={chart}
            styleName={CHARTS_STYLE}
            className={cn(chart.fullWidth && "md:col-span-2 lg:col-span-3")}
          />
        ))}
      </div>
    </div>
  )
}
