import type { ReactNode } from "react"
import Link from "next/link"

import {
  chartTypeMeta,
  type ChartType,
} from "@/app/(app)/charts/chart-catalog"
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"

const fill = "bg-muted-foreground/15"
const fillMid = "bg-muted-foreground/25"
const fillBold = "bg-muted-foreground/40"
const surface =
  "rounded-md border border-border/70 bg-background shadow-sm"

function WireStage({
  children,
  className = "w-full max-w-[94%]",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="flex size-full items-center justify-center bg-muted p-2">
      <div className={`flex flex-col overflow-hidden ${surface} ${className}`}>
        {children}
      </div>
    </div>
  )
}

function WireframeArea() {
  return (
    <WireStage className="h-full w-full max-w-none gap-1 p-2">
      <div className="flex items-center justify-between gap-2">
        <div className={`h-1.5 w-10 rounded-sm ${fillBold}`} />
        <div className="flex gap-1">
          <div className={`h-1 w-4 rounded-sm ${fillMid}`} />
          <div className={`h-1 w-4 rounded-sm ${fill}`} />
        </div>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm border border-border/60 bg-muted/20 px-1 pt-1">
        <svg
          viewBox="0 0 100 40"
          className="size-full text-muted-foreground/45"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 C14 28, 24 12, 36 16 S58 32, 70 20 S88 8, 100 14 V40 H0 Z"
            fill="currentColor"
            opacity="0.22"
          />
          <path
            d="M0 30 C14 28, 24 12, 36 16 S58 32, 70 20 S88 8, 100 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      </div>
    </WireStage>
  )
}

function WireframeBar() {
  return (
    <WireStage className="h-full w-full max-w-none justify-end gap-1 p-2">
      <div className={`h-1.5 w-12 rounded-sm ${fillBold}`} />
      <div className="flex min-h-0 flex-1 items-end gap-1.5 px-1 pb-0.5">
        {[42, 68, 34, 78, 52, 64].map((h, i) => (
          <div
            key={i}
            className={`w-full rounded-t-sm ${i % 2 ? fillBold : fillMid}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </WireStage>
  )
}

function WireframeLine() {
  return (
    <WireStage className="h-full w-full max-w-none gap-1 p-2">
      <div className={`h-1.5 w-14 rounded-sm ${fillBold}`} />
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm border border-border/60 bg-muted/20 px-1 pt-1">
        <svg
          viewBox="0 0 100 40"
          className="size-full text-muted-foreground/50"
          preserveAspectRatio="none"
        >
          <path
            d="M4 28 L22 18 L40 24 L58 10 L76 16 L96 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {[
            [4, 28],
            [22, 18],
            [40, 24],
            [58, 10],
            [76, 16],
            [96, 8],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.2" fill="currentColor" />
          ))}
        </svg>
      </div>
    </WireStage>
  )
}

function WireframePie() {
  return (
    <WireStage className="h-full w-full max-w-none flex-row items-center gap-2 p-2">
      <div className="relative size-[58%] shrink-0">
        <svg viewBox="0 0 40 40" className="size-full">
          <circle
            cx="20"
            cy="20"
            r="14"
            className="fill-muted-foreground/20"
          />
          <path
            d="M20 20 L20 6 A14 14 0 0 1 33 24 Z"
            className="fill-muted-foreground/45"
          />
          <path
            d="M20 20 L33 24 A14 14 0 0 1 10 30 Z"
            className="fill-muted-foreground/30"
          />
          <circle cx="20" cy="20" r="6" className="fill-background" />
        </svg>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className={`size-2 shrink-0 rounded-sm ${i === 0 ? fillBold : i === 1 ? fillMid : fill}`}
            />
            <div className={`h-1.5 flex-1 rounded-sm ${fill}`} />
          </div>
        ))}
      </div>
    </WireStage>
  )
}

function WireframeRadar() {
  return (
    <WireStage className="h-full w-full max-w-none items-center justify-center p-2">
      <svg viewBox="0 0 80 80" className="size-[78%] text-muted-foreground/40">
        {[12, 20, 28].map((r) => (
          <polygon
            key={r}
            points={radarPoints(40, 40, r)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
        <polygon
          points={radarPoints(40, 40, 22, [1, 0.7, 0.9, 0.55, 0.8, 0.65])}
          fill="currentColor"
          opacity="0.28"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </WireStage>
  )
}

function radarPoints(
  cx: number,
  cy: number,
  r: number,
  scales?: number[]
) {
  const n = 6
  return Array.from({ length: n }, (_, i) => {
    const scale = scales?.[i] ?? 1
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n
    const x = cx + Math.cos(angle) * r * scale
    const y = cy + Math.sin(angle) * r * scale
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(" ")
}

function WireframeRadial() {
  return (
    <WireStage className="h-full w-full max-w-none items-center justify-center p-2">
      <div className="relative size-[70%]">
        <svg viewBox="0 0 40 40" className="size-full -rotate-90">
          <circle
            cx="20"
            cy="20"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            className="text-muted-foreground/15"
          />
          <circle
            cx="20"
            cy="20"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray="55 88"
            className="text-muted-foreground/45"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`h-2 w-6 rounded-sm ${fillBold}`} />
        </div>
      </div>
    </WireStage>
  )
}

function WireframeTooltip() {
  return (
    <WireStage className="h-full w-full max-w-none gap-1 p-2">
      <div className={`h-1.5 w-12 rounded-sm ${fillBold}`} />
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm border border-border/60 bg-muted/20 px-1 pt-1">
        <svg
          viewBox="0 0 100 40"
          className="size-full text-muted-foreground/40"
          preserveAspectRatio="none"
        >
          <path
            d="M4 26 L24 20 L44 28 L64 12 L84 18 L96 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="64"
            y1="4"
            x2="64"
            y2="36"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.7"
          />
        </svg>
        <div className="absolute top-1.5 start-[28%] flex w-[42%] flex-col gap-0.5 rounded-sm border border-border/70 bg-background p-1 shadow-sm">
          <div className={`h-1 w-3/4 rounded-sm ${fillBold}`} />
          <div className={`h-1 w-1/2 rounded-sm ${fillMid}`} />
        </div>
      </div>
    </WireStage>
  )
}

const WIREFRAMES: Record<ChartType, () => ReactNode> = {
  area: WireframeArea,
  bar: WireframeBar,
  line: WireframeLine,
  pie: WireframePie,
  radar: WireframeRadar,
  radial: WireframeRadial,
  tooltip: WireframeTooltip,
}

function ChartWireframe({ type }: { type: ChartType }) {
  const Frame = WIREFRAMES[type]
  return (
    <div aria-hidden className="relative aspect-16/5 overflow-hidden">
      <Frame />
    </div>
  )
}

function ChartTypeCard({
  title,
  en,
  href,
  type,
}: {
  title: string
  en: string
  href: string
  type: ChartType
}) {
  const ariaLabel = `${title} — ${en}`

  const titleRow = (
    <>
      <span className="shrink-0 text-sm font-semibold tracking-tight text-primary">
        {title}
      </span>
      <span
        aria-hidden
        className="mb-1 min-w-4 flex-1 border-b border-dashed border-muted-foreground/30"
      />
      <span
        dir="ltr"
        lang="en"
        className="shrink-0 text-xs tracking-wide text-muted-foreground"
      >
        {en}
      </span>
    </>
  )

  return (
    <div className="min-w-0 border-b border-border/60 last:border-b-0 md:border-b-0">
      <Link
        href={href}
        aria-label={ariaLabel}
        className="flex min-w-0 items-baseline gap-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        {titleRow}
      </Link>

      <section className="hidden min-w-0 flex-col gap-2 md:flex">
        <div className="flex min-w-0 items-baseline gap-2">{titleRow}</div>
        <Link
          href={href}
          aria-label={ariaLabel}
          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-background outline-none ring-offset-background transition-[border-color,box-shadow] hover:border-border hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChartWireframe type={type} />
        </Link>
      </section>
    </div>
  )
}

export function ChartsShowcase() {
  return (
    <PersianDigits>
      <div
        dir="rtl"
        lang="fa"
        className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {chartTypeMeta.map((item) => (
            <ChartTypeCard
              key={item.type}
              type={item.type}
              title={item.title}
              en={item.en}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </PersianDigits>
  )
}
