"use client"

import * as React from "react"
import { CheckIcon, MinusIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"

type FeatureRow = {
  label: string
  category: "rtl" | "form" | "docs"
  values: [boolean, boolean, boolean]
}

const ROWS: FeatureRow[] = [
  { label: "جهت و زبان فارسی", category: "rtl", values: [false, true, true] },
  { label: "چینش منوی کشویی", category: "rtl", values: [false, false, true] },
  {
    label: "مسیر صفحهٔ راست‌چین",
    category: "rtl",
    values: [false, false, true],
  },
  {
    label: "متن راهنمای فارسی",
    category: "form",
    values: [false, false, true],
  },
  { label: "ایمیل با جهت چپ", category: "form", values: [false, false, true] },
  {
    label: "فرم پشتیبانی چندمرحله",
    category: "form",
    values: [false, false, true],
  },
  { label: "راهنمای فارسی", category: "docs", values: [false, true, true] },
  {
    label: "نمونهٔ احراز هویت",
    category: "docs",
    values: [false, false, true],
  },
]

const COLS = ["کیت عمومی", "قالب خارجی", "فارسی‌یوآی"] as const

const SORT_ITEMS = [
  { value: "پیش‌فرض", label: "ترتیب پیش‌فرض" },
  { value: "تفاوت‌ها", label: "اول تفاوت‌های فارسی‌یوآی" },
  { value: "الفبایی", label: "الفبایی" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export default function ComparisonHub() {
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState<SortKey>("پیش‌فرض")

  const filtered = React.useMemo(() => {
    let list = ROWS.filter(
      (row) =>
        !query ||
        row.label.includes(query) ||
        (row.category === "rtl" && "راست‌چین".includes(query)) ||
        (row.category === "form" && "فرم".includes(query)) ||
        (row.category === "docs" && "مستند".includes(query))
    )
    if (sort === "الفبایی") {
      list = [...list].sort((a, b) => a.label.localeCompare(b.label, "fa"))
    } else if (sort === "تفاوت‌ها") {
      list = [...list].sort((a, b) => {
        const score = (row: FeatureRow) =>
          Number(row.values[2]) - Number(row.values[0] || row.values[1])
        return score(b) - score(a)
      })
    }
    return list
  }, [query, sort])

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-8 space-y-4">
          <div>
            <Badge variant="secondary" className="mb-3">
              مقایسهٔ قابلیت
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              کجا با بقیه فرق داریم؟
            </h2>
            <p className="mt-2 text-muted-foreground">
              جدول ابزارها — برای خرید پلن به «قیمت‌گذاری» سر بزنید
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در قابلیت‌ها…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (typeof value === "string") setSort(value as SortKey)
              }}
            >
              <SelectTrigger className="w-full sm:w-52" dir="rtl">
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

        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
            قابلیتی با این عبارت پیدا نشد.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[36rem] text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="px-4 py-4 text-start font-medium">قابلیت</th>
                  {COLS.map((col, index) => (
                    <th
                      key={col}
                      className={`px-4 py-4 text-center font-medium ${
                        index === 2 ? "bg-primary/5" : ""
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.label} className="border-b last:border-0">
                    <td className="px-4 py-3.5 text-start font-medium">
                      {row.label}
                    </td>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.label}-${index}`}
                        className={`px-4 py-3.5 text-center ${
                          index === 2 ? "bg-primary/5" : ""
                        }`}
                      >
                        {value ? (
                          <CheckIcon className="mx-auto size-4 text-primary" />
                        ) : (
                          <MinusIcon className="mx-auto size-4 text-muted-foreground" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Separator className="my-10" />

        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <CardTitle className="text-lg">
              گزارش مقایسه را ایمیل کنید
            </CardTitle>
            <CardDescription>
              لینک همین جدول را برای تیم محصول می‌فرستیم — پلن فروش نیست
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="text"
                placeholder="نام تیم یا شرکت"
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
              <Button type="submit" className="sm:shrink-0">
                ارسال لینک
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
