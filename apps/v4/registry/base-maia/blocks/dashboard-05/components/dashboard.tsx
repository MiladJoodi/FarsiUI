"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"

const ROWS = [
  {
    title: "فروش آنلاین",
    owner: "مریم رضایی",
    status: "فعال",
    amount: "۱۲٬۴۰۰٬۰۰۰",
  },
  {
    title: "پشتیبانی سازمانی",
    owner: "علی محمدی",
    status: "در انتظار",
    amount: "۸٬۲۰۰٬۰۰۰",
  },
  {
    title: "اشتراک سالانه",
    owner: "سارا کریمی",
    status: "فعال",
    amount: "۳۱٬۰۰۰٬۰۰۰",
  },
  {
    title: "پروژه سفارشی",
    owner: "نیما پورحسین",
    status: "بسته",
    amount: "۵۵٬۰۰۰٬۰۰۰",
  },
  {
    title: "آموزش تیم",
    owner: "هستی احمدی",
    status: "فعال",
    amount: "۴٬۸۰۰٬۰۰۰",
  },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "فعال", label: "فعال" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "بسته", label: "بسته" },
] as const

const SORT_ITEMS = [
  { value: "عنوان", label: "عنوان" },
  { value: "مبلغ", label: "مبلغ" },
  { value: "وضعیت", label: "وضعیت" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export function DashboardOps() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("عنوان")

  const filtered = React.useMemo(() => {
    let list = ROWS.filter((row) => {
      const matchStatus = status === "همه" || row.status === status
      const matchQuery =
        !query ||
        row.title.includes(query) ||
        row.owner.includes(query) ||
        row.status.includes(query)
      return matchStatus && matchQuery
    })
    const key =
      sort === "عنوان" ? "title" : sort === "مبلغ" ? "amount" : "status"
    list = [...list].sort((a, b) => a[key].localeCompare(b[key], "fa"))
    return list
  }, [query, status, sort])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            عملیات
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">میز کار فروش</h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر وضعیت و مرتب‌سازی
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو عنوان یا مسئول…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...STATUS_ITEMS]}
            value={status}
            onValueChange={(value) => {
              if (typeof value === "string") setStatus(value)
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {STATUS_ITEMS.map((item) => (
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

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">فهرست معاملات</CardTitle>
          <CardDescription>
            {filtered.length.toLocaleString("fa-IR")} مورد نمایش داده می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {filtered.length === 0 ? (
            <p className="rounded-lg border border-dashed px-4 py-10 text-center text-sm text-muted-foreground">
              موردی پیدا نشد.
            </p>
          ) : (
            filtered.map((row) => (
              <div
                key={row.title}
                className="flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium">{row.title}</p>
                  <p className="text-sm text-muted-foreground">{row.owner}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{row.status}</Badge>
                  <span className="text-sm font-medium">
                    <bdi
                      dir="ltr"
                      className="inline-block tracking-normal [letter-spacing:0]"
                    >
                      {row.amount}
                    </bdi>{" "}
                    تومان
                  </span>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">گزارش ایمیلی</CardTitle>
          <CardDescription>خلاصهٔ میز کار را برای مدیر بفرستید</CardDescription>
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
            <Button type="submit">ارسال</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
