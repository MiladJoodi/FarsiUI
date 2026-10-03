"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { StatNumber } from "@/registry/base-mira/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/base-mira/ui/chart"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

const PAGES = [
  { path: "/blocks/login", views: 4200, bounce: 32 },
  { path: "/blocks/pricing", views: 3800, bounce: 28 },
  { path: "/docs", views: 5100, bounce: 22 },
  { path: "/blocks/dashboard", views: 2900, bounce: 35 },
  { path: "/blocks/faq", views: 2100, bounce: 40 },
] as const

const chartByMetric = {
  بازدید: [
    { name: "ورود", value: 42 },
    { name: "قیمت", value: 38 },
    { name: "مستندات", value: 51 },
    { name: "داشبورد", value: 29 },
    { name: "پرسش‌ها", value: 21 },
  ],
  بانس: [
    { name: "ورود", value: 32 },
    { name: "قیمت", value: 28 },
    { name: "مستندات", value: 22 },
    { name: "داشبورد", value: 35 },
    { name: "پرسش‌ها", value: 40 },
  ],
} as const

type Metric = keyof typeof chartByMetric

const METRIC_ITEMS = [
  { value: "بازدید", label: "بازدید" },
  { value: "بانس", label: "نرخ بانس" },
] as const

const SORT_ITEMS = [
  { value: "بازدید", label: "بازدید" },
  { value: "بانس", label: "بانس" },
  { value: "مسیر", label: "مسیر" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

const chartConfig = {
  value: { label: "مقدار", color: "var(--primary)" },
} satisfies ChartConfig

export function AnalyticsExplorer() {
  const [query, setQuery] = React.useState("")
  const [metric, setMetric] = React.useState<Metric>("بازدید")
  const [sort, setSort] = React.useState<SortKey>("بازدید")

  const filtered = React.useMemo(() => {
    let list = PAGES.filter((page) => !query || page.path.includes(query))
    list = [...list].sort((a, b) => {
      if (sort === "مسیر") return a.path.localeCompare(b.path, "fa")
      if (sort === "بانس") return b.bounce - a.bounce
      return b.views - a.views
    })
    return list
  }, [query, sort])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            کاوش صفحه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">تحلیل صفحات</h2>
          <p className="mt-2 text-muted-foreground">
            مسیرها را جستجو کنید و متریک نمودار را عوض کنید
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در مسیر صفحه…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...METRIC_ITEMS]}
            value={metric}
            onValueChange={(value) => {
              if (value === "بازدید" || value === "بانس") setMetric(value)
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="متریک" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {METRIC_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (typeof value === "string") setSort(value as SortKey)
            }}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {SORT_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader className="text-start">
            <CardTitle className="text-lg">
              {metric === "بازدید" ? "بازدید صفحات" : "نرخ بانس"}
            </CardTitle>
            <CardDescription>نمودار مقایسه‌ای</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-56 w-full"
            >
              <BarChart data={[...chartByMetric[metric]]} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => (
                        <span className="font-medium tracking-normal [letter-spacing:0]">
                          {typeof value === "number"
                            ? metric === "بانس"
                              ? `٪${toFa(value)}`
                              : toFa(value)
                            : value}
                        </span>
                      )}
                    />
                  }
                />
                <Bar dataKey="value" fill="var(--color-value)" radius={6} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-start">
            <CardTitle className="text-lg">جدول صفحات</CardTitle>
            <CardDescription>{toFa(filtered.length)} مسیر</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {filtered.length === 0 ? (
              <p className="rounded-lg border border-dashed px-3 py-8 text-center text-sm text-muted-foreground">
                مسیری پیدا نشد.
              </p>
            ) : (
              filtered.map((page) => (
                <div
                  key={page.path}
                  className="flex flex-col gap-1 rounded-lg border px-3 py-2 text-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <code dir="ltr" className="truncate font-mono text-xs">
                    {page.path}
                  </code>
                  <div className="flex gap-3 text-muted-foreground">
                    <span>
                      بازدید{" "}
                      <StatNumber value={page.views.toLocaleString("fa-IR")} />
                    </span>
                    <span>
                      بانس <StatNumber value={`٪${toFa(page.bounce)}`} />
                    </span>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">گزارش تحلیل را بفرستید</CardTitle>
          <CardDescription>لینک همین نما برای تیم محصول</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام تیم"
              dir="rtl"
              className="sm:flex-1"
            />
            <Input
              type="email"
              required
              placeholder="ایمیل"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit">ارسال</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
