"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const RESULTS = [
  {
    title: "کامپوننت دکمه",
    path: "components/button",
    type: "کامپوننت",
    snippet: "دکمه‌های راست‌چین با انواع و اندازه‌ها",
  },
  {
    title: "فرم ورود",
    path: "blocks/login",
    type: "بلوک",
    snippet: "ورود با ایمیل و رمز عبور فارسی",
  },
  {
    title: "جدول داده",
    path: "components/data-table",
    type: "کامپوننت",
    snippet: "جدول با مرتب‌سازی و صفحه‌بندی",
  },
  {
    title: "راهنمای راست‌چین",
    path: "docs/rtl",
    type: "مستند",
    snippet: "پیاده‌سازی جهت راست‌چین",
  },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "کامپوننت", label: "کامپوننت" },
  { value: "بلوک", label: "بلوک" },
  { value: "مستند", label: "مستند" },
] as const

const SORT_ITEMS = [
  { value: "مرتبط‌ترین", label: "مرتبط‌ترین" },
  { value: "الفبایی", label: "الفبایی" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function SearchResultsSort() {
  const [sort, setSort] = React.useState("مرتبط‌ترین")
  const [type, setType] = React.useState("همه")
  const [query, setQuery] = React.useState("دکمه")

  const rows = RESULTS.filter((r) => {
    if (type !== "همه" && r.type !== type) return false
    if (query && !`${r.title}${r.snippet}`.includes(query)) return false
    return true
  }).slice()

  if (sort === "الفبایی") {
    rows.sort((a, b) => a.title.localeCompare(b.title, "fa"))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>نتایج جستجو</CardTitle>
          <CardDescription>
            مرتب‌سازی و فیلتر با انتخابگر راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو مجدد…"
              className="ps-9"
              dir="rtl"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel>نوع</FieldLabel>
              <Select
                items={[...TYPE_ITEMS]}
                value={type}
                onValueChange={(value) => {
                  if (TYPE_ITEMS.some((item) => item.value === value)) {
                    setType(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TYPE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>مرتب‌سازی</FieldLabel>
              <Select
                items={[...SORT_ITEMS]}
                value={sort}
                onValueChange={(value) => {
                  if (SORT_ITEMS.some((item) => item.value === value)) {
                    setSort(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
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
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="srr3-email">فیلتر ایمیل نویسنده</FieldLabel>
            <Input
              id="srr3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری · چپ‌چین</FieldDescription>
          </Field>

          <p className="text-sm tracking-normal text-muted-foreground">
            {toFa(rows.length)} نتیجه
          </p>

          <div className="space-y-0 overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                نتیجه‌ای پیدا نشد
              </p>
            ) : (
              rows.map((r, i) => (
                <div key={r.path}>
                  {i > 0 && <Separator />}
                  <div className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{r.title}</p>
                      <Badge variant="outline" className="border">
                        {r.type}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs tracking-normal text-muted-foreground">
                      <span dir="ltr" className="inline-block text-start">
                        {r.path}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.snippet}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <Button type="button" className="w-full">
            اعمال فیلتر
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
