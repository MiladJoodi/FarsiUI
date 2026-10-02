"use client"

import * as React from "react"
import { cn } from "cn"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
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
    id: "1",
    title: "کامپوننت دکمه",
    path: "components/button",
    type: "کامپوننت",
    snippet: "دکمه‌های راست‌چین با انواع و اندازه‌ها",
  },
  {
    id: "2",
    title: "گروه دکمه",
    path: "components/button-group",
    type: "کامپوننت",
    snippet: "چند دکمه کنار هم در چیدمان RTL",
  },
  {
    id: "3",
    title: "فرم ورود",
    path: "blocks/login",
    type: "بلاک",
    snippet: "ورود با ایمیل LTR و برچسب فارسی",
  },
  {
    id: "4",
    title: "فرم ثبت‌نام",
    path: "blocks/signup",
    type: "بلاک",
    snippet: "ثبت‌نام با اعتبارسنجی فارسی",
  },
  {
    id: "5",
    title: "راهنمای RTL",
    path: "docs/rtl",
    type: "مستند",
    snippet: "پیاده‌سازی جهت راست‌چین",
  },
  {
    id: "6",
    title: "جدول داده",
    path: "components/data-table",
    type: "کامپوننت",
    snippet: "جدول با فیلتر و صفحه‌بندی",
  },
] as const

const NAV = [
  { id: "all", label: "همه", count: 6 },
  { id: "کامپوننت", label: "کامپوننت", count: 3 },
  { id: "بلاک", label: "بلاک", count: 2 },
  { id: "مستند", label: "مستند", count: 1 },
] as const

type NavId = (typeof NAV)[number]["id"]

export function SearchResultsHub() {
  const [query, setQuery] = React.useState("دکمه")
  const [tab, setTab] = React.useState<NavId>("all")
  const [sort, setSort] = React.useState("relevance")
  const [page, setPage] = React.useState(1)

  const rows = RESULTS.filter((r) => {
    if (tab !== "all" && r.type !== tab) return false
    if (query && !`${r.title}${r.snippet}${r.path}`.includes(query)) {
      return false
    }
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            نتایج جستجو
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            نتایج برای «{query}»
          </h2>
          <p className="mt-2 text-muted-foreground">
            <bdi dir="ltr">{rows.length}</bdi> مورد · فیلتر و صفحه‌بندی
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>ذخیره جستجو</DropdownMenuItem>
            <DropdownMenuItem>اشتراک لینک</DropdownMenuItem>
            <DropdownMenuItem>خروجی CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder="جستجو مجدد…"
            className="ps-9"
            dir="rtl"
          />
        </div>
        <Select
          value={sort}
          onValueChange={(v) => setSort((v as string) ?? "relevance")}
        >
          <SelectTrigger className="w-full lg:w-40" dir="rtl">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectItem value="relevance">مرتبط‌ترین</SelectItem>
            <SelectItem value="az">الفبایی</SelectItem>
            <SelectItem value="newest">جدیدترین</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[11rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            فیلتر نوع
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTab(item.id)
                  setPage(1)
                }}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  tab === item.id && "bg-muted font-medium"
                )}
              >
                <span>{item.label}</span>
                <bdi dir="ltr" className="text-xs text-muted-foreground">
                  {item.count}
                </bdi>
              </button>
            ))}
          </nav>
          <Separator className="my-3" />
          <div className="space-y-3 px-1">
            <Field>
              <FieldLabel htmlFor="srr5-email">ایمیل نویسنده</FieldLabel>
              <Input
                id="srr5-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>فیلتر اختیاری</FieldDescription>
            </Field>
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="srr5-draft" className="text-sm">
                شامل پیش‌نویس
              </Label>
              <Switch id="srr5-draft" />
            </div>
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-12 text-muted-foreground">
                <SearchIcon className="size-8 opacity-50" />
                <p className="text-sm">نتیجه‌ای پیدا نشد</p>
              </div>
            ) : (
              rows.map((r, i) => (
                <div key={r.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-start gap-3 px-4 py-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium">{r.title}</p>
                        <Badge variant="outline">{r.type}</Badge>
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
                        <DropdownMenuItem>باز کردن</DropdownMenuItem>
                        <DropdownMenuItem>ذخیره</DropdownMenuItem>
                        <DropdownMenuItem>کپی مسیر</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              صفحه <bdi dir="ltr">{page}</bdi> از{" "}
              <bdi dir="ltr">۱</bdi>
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronRightIcon className="size-4" />
                قبلی
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled
              >
                بعدی
                <ChevronLeftIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
