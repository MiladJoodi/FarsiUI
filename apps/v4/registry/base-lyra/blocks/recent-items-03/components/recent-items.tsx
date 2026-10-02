"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"

const ITEMS = [
  {
    title: "قیمت‌گذاری حرفه‌ای",
    path: "/blocks/pricing",
    type: "صفحه",
    opened: "۵ دقیقه پیش",
  },
  {
    title: "پرسش‌های متداول",
    path: "/blocks/faq",
    type: "صفحه",
    opened: "۳۰ دقیقه پیش",
  },
  {
    title: "فاکتور ۱۴۰۴-۰۷",
    path: "/files/invoice-1404-07.pdf",
    type: "فایل",
    opened: "دیروز",
  },
  {
    title: "کامپوننت Select",
    path: "/docs/components/select",
    type: "مستندات",
    opened: "۲ روز پیش",
  },
  {
    title: "پروژه فروشگاه",
    path: "/projects/shop",
    type: "پروژه",
    opened: "هفتهٔ پیش",
  },
  {
    title: "تحلیل ترافیک",
    path: "/blocks/analytics",
    type: "صفحه",
    opened: "هفتهٔ پیش",
  },
] as const

type TypeFilter = "all" | "صفحه" | "فایل" | "مستندات" | "پروژه"

export function RecentItemsFilterable() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState<TypeFilter>("all")

  const filtered = ITEMS.filter((item) => {
    const matchType = type === "all" || item.type === type
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      item.title.includes(query) ||
      item.path.toLowerCase().includes(q) ||
      item.type.includes(query)
    return matchType && matchQuery
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            جستجو در موارد اخیر
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            فیلتر نوع با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو عنوان یا مسیر…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            value={type}
            onValueChange={(value) => setType((value as TypeFilter) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="نوع" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه انواع</SelectItem>
              <SelectItem value="صفحه">صفحه</SelectItem>
              <SelectItem value="فایل">فایل</SelectItem>
              <SelectItem value="مستندات">مستندات</SelectItem>
              <SelectItem value="پروژه">پروژه</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          موردی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <ul className="divide-y rounded-xl border">
          {filtered.map((item) => (
            <li
              key={item.path}
              className="flex items-center justify-between gap-3 p-4"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{item.title}</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  <span dir="ltr" className="inline-block text-start font-mono">
                    {item.path}
                  </span>
                  {" · "}
                  {item.opened}
                </p>
              </div>
              <Badge variant="secondary" className="shrink-0">
                {item.type}
              </Badge>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
