"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
    type: "بلاک",
    snippet: "ورود با ایمیل LTR و برچسب فارسی",
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
    title: "راهنمای RTL",
    path: "docs/rtl",
    type: "مستند",
    snippet: "پیاده‌سازی جهت راست‌چین در پروژه",
  },
] as const

export function SearchResultsActions() {
  const [sort, setSort] = React.useState("relevance")
  const [saved, setSaved] = React.useState<string[]>([])

  function toggleSave(id: string) {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>نتایج جستجو</CardTitle>
            <CardDescription>
              <bdi dir="ltr">{RESULTS.length}</bdi> نتیجه · منوی عملیات RTL
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>ذخیره همه</DropdownMenuItem>
              <DropdownMenuItem>اشتراک نتایج</DropdownMenuItem>
              <DropdownMenuItem>خروجی CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "relevance")}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="relevance">مرتبط‌ترین</SelectItem>
                <SelectItem value="az">الفبایی</SelectItem>
                <SelectItem value="newest">جدیدترین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0 overflow-hidden rounded-lg border">
            {RESULTS.map((r, i) => (
              <div key={r.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{r.title}</p>
                      <Badge variant="outline">{r.type}</Badge>
                      {saved.includes(r.id) ? (
                        <Badge variant="secondary">ذخیره‌شده</Badge>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      <bdi dir="ltr">{r.path}</bdi>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.snippet}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>
                        <ArrowUpRightIcon className="size-4" />
                        باز کردن
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleSave(r.id)}>
                        <BookmarkIcon className="size-4" />
                        {saved.includes(r.id) ? "حذف از ذخیره‌ها" : "ذخیره"}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>کپی مسیر</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
