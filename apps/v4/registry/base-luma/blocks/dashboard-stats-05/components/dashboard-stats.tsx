"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import StatNumber from "@/registry/base-luma/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Input } from "@/registry/base-luma/ui/input"
import { Progress } from "@/registry/base-luma/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const METRICS = [
  {
    name: "درآمد خالص",
    category: "مالی",
    value: "۳۸۰٬۰۰۰٬۰۰۰",
    unit: "تومان",
    progress: 76,
  },
  {
    name: "هزینه زیرساخت",
    category: "مالی",
    value: "۴۲٬۰۰۰٬۰۰۰",
    unit: "تومان",
    progress: 54,
  },
  {
    name: "تیکت حل‌شده",
    category: "پشتیبانی",
    value: "۸۹۲",
    unit: "مورد",
    progress: 88,
  },
  {
    name: "زمان اولین پاسخ",
    category: "پشتیبانی",
    value: "۱۱",
    unit: "دقیقه",
    progress: 70,
  },
  {
    name: "نرخ خطا",
    category: "فنی",
    value: "۰٫۱۲٪",
    unit: "",
    progress: 92,
  },
  {
    name: "پوشش تست",
    category: "فنی",
    value: "٪۸۱",
    unit: "",
    progress: 81,
  },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "مالی", label: "مالی" },
  { value: "پشتیبانی", label: "پشتیبانی" },
  { value: "فنی", label: "فنی" },
] as const

const SORT_ITEMS = [
  { value: "نام", label: "نام" },
  { value: "پیشرفت", label: "پیشرفت" },
  { value: "دسته", label: "دسته" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function DashboardStatsHub() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("نام")

  const filtered = React.useMemo(() => {
    let list = METRICS.filter((item) => {
      const matchCat = category === "همه" || item.category === category
      const matchQuery =
        !query || item.name.includes(query) || item.category.includes(query)
      return matchCat && matchQuery
    })
    list = [...list].sort((a, b) => {
      if (sort === "پیشرفت") return b.progress - a.progress
      if (sort === "دسته") return a.category.localeCompare(b.category, "fa")
      return a.name.localeCompare(b.name, "fa")
    })
    return list
  }, [query, category, sort])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مانیتورینگ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مرکز آمار داشبورد
          </h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر دسته و مرتب‌سازی شاخص‌ها
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در شاخص‌ها…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...CATEGORY_ITEMS]}
            value={category}
            onValueChange={(value) => {
              if (typeof value === "string") setCategory(value)
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="دسته" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {CATEGORY_ITEMS.map((item) => (
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
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
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
          شاخصی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <Card key={item.name}>
              <CardHeader className="gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <CardDescription>
                    <StatNumber value={item.value} />
                    {item.unit ? ` ${item.unit}` : null}
                  </CardDescription>
                </div>
                <div className="w-full space-y-1 sm:max-w-48">
                  <Progress value={item.progress} />
                  <p className="text-xs text-muted-foreground">
                    <StatNumber value={`٪${toFa(item.progress)}`} /> نسبت به هدف
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">خلاصه را ایمیل کنید</CardTitle>
          <CardDescription>
            گزارش شاخص‌های فیلترشده برای مدیر ارسال می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام گیرنده"
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
              ارسال گزارش
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
