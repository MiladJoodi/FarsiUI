"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-mira/ui/avatar"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"

const ITEMS = [
  {
    title: "ورود موفق از تهران",
    detail: "دستگاه Chrome روی ویندوز",
    type: "امنیت",
    time: "همین الان",
    initials: "ا",
  },
  {
    title: "فاکتور جدید صادر شد",
    detail: "مبلغ ۴٬۲۰۰٬۰۰۰ تومان",
    type: "مالی",
    time: "۱۵ دقیقه پیش",
    initials: "ف",
  },
  {
    title: "کامنت روی مقالهٔ بلاگ",
    detail: "سارا محمدی پاسخ داد",
    type: "محتوا",
    time: "۱ ساعت پیش",
    initials: "م",
  },
  {
    title: "تغییر نقش کاربر",
    detail: "علی رضایی → مدیر محصول",
    type: "تیم",
    time: "۳ ساعت پیش",
    initials: "ت",
  },
  {
    title: "تیکت پشتیبانی باز شد",
    detail: "موضوع: خطای ورود OTP",
    type: "پشتیبانی",
    time: "دیروز",
    initials: "پ",
  },
  {
    title: "بازیابی رمز عبور",
    detail: "ایمیل ارسال شد",
    type: "امنیت",
    time: "۲ روز پیش",
    initials: "ا",
  },
] as const

type TypeFilter = "all" | "امنیت" | "مالی" | "محتوا" | "تیم" | "پشتیبانی"

export function ActivityFilterable() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState<TypeFilter>("all")

  const filtered = ITEMS.filter((item) => {
    const matchType = type === "all" || item.type === type
    const matchQuery =
      !query.trim() ||
      item.title.includes(query) ||
      item.detail.includes(query) ||
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
          <h2 className="text-2xl font-bold tracking-tight">فیلتر فعالیت‌ها</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            جستجو و دسته‌بندی با Select راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در عنوان یا جزئیات…"
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
              <SelectItem value="امنیت">امنیت</SelectItem>
              <SelectItem value="مالی">مالی</SelectItem>
              <SelectItem value="محتوا">محتوا</SelectItem>
              <SelectItem value="تیم">تیم</SelectItem>
              <SelectItem value="پشتیبانی">پشتیبانی</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          فعالیتی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="divide-y rounded-xl border">
          {filtered.map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4">
              <Avatar className="size-9">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{item.title}</p>
                  <Badge variant="secondary">{item.type}</Badge>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.detail}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
