"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"

const RESULTS = [
  {
    id: "1",
    title: "کامپوننت دکمه",
    path: "components/button",
    type: "کامپوننت",
    snippet: "دکمه‌های راست‌چین با انواع و اندازه‌ها",
  },
  {
    id: "2",
    title: "فرم ورود",
    path: "blocks/login",
    type: "بلوک",
    snippet: "ورود با ایمیل چپ‌چین و برچسب فارسی",
  },
  {
    id: "3",
    title: "جدول داده",
    path: "components/data-table",
    type: "کامپوننت",
    snippet: "جدول با فیلتر و صفحه‌بندی",
  },
  {
    id: "4",
    title: "راهنمای راست‌چین",
    path: "docs/rtl",
    type: "مستند",
    snippet: "پیاده‌سازی جهت راست‌چین در پروژه",
  },
] as const

const SORT_ITEMS = [
  { value: "مرتبط‌ترین", label: "مرتبط‌ترین" },
  { value: "الفبایی", label: "الفبایی" },
  { value: "جدیدترین", label: "جدیدترین" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function SearchResultsActions() {
  const [sort, setSort] = React.useState("مرتبط‌ترین")
  const [saved, setSaved] = React.useState<string[]>([])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = RESULTS.slice().sort((a, b) => {
    if (sort === "الفبایی") return a.title.localeCompare(b.title, "fa")
    return 0
  })

  function toggleSave(id: string) {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>نتایج جستجو</CardTitle>
            <CardDescription className="tracking-normal">
              {toFa(RESULTS.length)} نتیجه · منوی عملیات راست‌چین
            </CardDescription>
          </div>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                />
              }
            >
              <MoreHorizontalIcon className="size-4" />
              عملیات
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 space-y-1 p-2"
            >
              <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                ذخیره همه
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                اشتراک نتایج
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                خروجی جدول
              </Button>
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                defaultValue="دکمه"
                placeholder="جستجو مجدد…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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

          <div className="space-y-0 overflow-hidden rounded-lg border">
            {rows.map((r, i) => (
              <div key={r.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{r.title}</p>
                      <Badge variant="outline" className="border">
                        {r.type}
                      </Badge>
                      {saved.includes(r.id) ? (
                        <Badge variant="secondary">ذخیره‌شده</Badge>
                      ) : null}
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
                  <Popover
                    open={openId === r.id}
                    onOpenChange={(open) => setOpenId(open ? r.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="shrink-0"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      عملیات
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="start"
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        <ArrowUpRightIcon className="size-4" />
                        باز کردن
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => toggleSave(r.id)}
                      >
                        <BookmarkIcon className="size-4" />
                        {saved.includes(r.id) ? "حذف از ذخیره‌ها" : "ذخیره"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        کپی مسیر
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
