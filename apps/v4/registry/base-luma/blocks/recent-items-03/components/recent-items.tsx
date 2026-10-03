"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"

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
    title: "فاکتور ۱۴۰۵-۰۷",
    path: "/files/invoice-1405-07.pdf",
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

const TYPE_ITEMS = [
  { value: "همه", label: "همه انواع" },
  { value: "صفحه", label: "صفحه" },
  { value: "فایل", label: "فایل" },
  { value: "مستندات", label: "مستندات" },
  { value: "پروژه", label: "پروژه" },
] as const

type TypeFilter = (typeof TYPE_ITEMS)[number]["value"]

export function RecentItemsFilterable() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState<TypeFilter>("همه")

  const filtered = ITEMS.filter((item) => {
    const matchType = type === "همه" || item.type === type
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
            items={[...TYPE_ITEMS]}
            value={type}
            onValueChange={(value) => {
              if (TYPE_ITEMS.some((item) => item.value === value)) {
                setType(value as TypeFilter)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {TYPE_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          موردی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <ul className="divide-y overflow-hidden rounded-xl border bg-card">
          {filtered.map((item) => (
            <li key={item.path} className="flex items-center gap-3 p-4">
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm leading-snug font-medium">
                    {item.title}
                  </p>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.opened}
                  </span>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  <span
                    dir="ltr"
                    className="inline-block text-start font-mono tracking-normal"
                  >
                    {item.path}
                  </span>
                </p>
              </div>
              <Badge variant="outline" className="shrink-0 border">
                {item.type}
              </Badge>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
