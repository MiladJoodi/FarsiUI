"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { StatNumber } from "@/registry/base-luma/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
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

type SortKey = "name" | "progress" | "category"

const SORT_LABELS: Record<SortKey, string> = {
  name: "نام",
  progress: "پیشرفت",
  category: "دسته",
}

export function DashboardStatsHub() {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("name")

  const filtered = React.useMemo(() => {
    let list = METRICS.filter((item) => {
      const matchCat = category === "all" || item.category === category
      const matchQuery =
        !query || item.name.includes(query) || item.category.includes(query)
      return matchCat && matchQuery
    })
    list = [...list].sort((a, b) => {
      if (sort === "progress") return b.progress - a.progress
      return a[sort].localeCompare(b[sort], "fa")
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
            value={category}
            onValueChange={(value) => setCategory((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="دسته" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه</SelectItem>
              <SelectItem value="مالی">مالی</SelectItem>
              <SelectItem value="پشتیبانی">پشتیبانی</SelectItem>
              <SelectItem value="فنی">فنی</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-40"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "name")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
                    <StatNumber value={`${item.progress}٪`} /> نسبت به هدف
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
              placeholder="name@example.com"
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
