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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const RESULTS = [
  {
    title: "کامپوننت دکمه",
    category: "کامپوننت",
    snippet: "دکمه‌های راست‌چین با انواع و اندازه‌ها",
  },
  {
    title: "فرم ورود",
    category: "بلوک",
    snippet: "ورود با ایمیل و رمز عبور فارسی",
  },
  {
    title: "جدول داده",
    category: "کامپوننت",
    snippet: "جدول با مرتب‌سازی و صفحه‌بندی",
  },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "کامپوننت", label: "کامپوننت" },
  { value: "بلوک", label: "بلوک" },
] as const

export default function SearchFilters() {
  const [category, setCategory] = React.useState("همه")
  const [query, setQuery] = React.useState("دکمه")

  const rows = RESULTS.filter((r) => {
    if (category !== "همه" && r.category !== category) return false
    if (query && !`${r.title}${r.snippet}`.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>جستجوی پیشرفته</CardTitle>
          <CardDescription>
            فیلتر دسته با انتخابگر راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو عنوان یا توضیح…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...CATEGORY_ITEMS]}
              value={category}
              onValueChange={(value) => {
                if (CATEGORY_ITEMS.some((item) => item.value === value)) {
                  setCategory(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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
          </div>

          <Field>
            <FieldLabel htmlFor="sr3-email">جستجو با ایمیل</FieldLabel>
            <Input
              id="sr3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="sr3-docs">فقط مستندات</Label>
            <Switch id="sr3-docs" />
          </div>

          <Separator />

          <div className="space-y-0 rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                نتیجه‌ای پیدا نشد
              </p>
            ) : (
              rows.map((r, i) => (
                <div key={r.title}>
                  {i > 0 && <Separator />}
                  <button
                    type="button"
                    className="flex w-full flex-col gap-1 px-4 py-3 text-start hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{r.title}</p>
                      <Badge variant="outline" className="border">
                        {r.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{r.snippet}</p>
                  </button>
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
