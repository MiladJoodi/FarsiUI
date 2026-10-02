"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  SearchIcon,
  SearchXIcon,
  XIcon,
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
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
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

const CATEGORIES = [
  { title: "صوتی", count: "۱۲۸" },
  { title: "پوشیدنی", count: "۶۴" },
  { title: "خانه", count: "۹۱" },
  { title: "اکسسوری", count: "۴۲" },
] as const

export function EmptySearchHub() {
  const [query, setQuery] = React.useState("محصول ناموجود خیلی خاص")
  const [chips, setChips] = React.useState(["موجود", "ارسال سریع"])
  const [stockOnly, setStockOnly] = React.useState(true)

  function clearAll() {
    setChips([])
    setStockOnly(false)
    setQuery("")
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            جستجو
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            نتیجه‌ای پیدا نشد
          </h2>
          <p className="mt-2 text-muted-foreground">
            برای «{query || "…"}» چیزی پیدا نشد ·{" "}
            <bdi dir="ltr">۰</bdi> نتیجه
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
            <DropdownMenuItem onClick={clearAll}>پاک کردن همه</DropdownMenuItem>
            <DropdownMenuItem>گزارش مشکل جستجو</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[14rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">تنظیمات جستجو</p>
          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select defaultValue="relevant">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="relevant">مرتبط‌ترین</SelectItem>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="price-asc">ارزان‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>دسته</FieldLabel>
            <Select defaultValue="all">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="دسته" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="audio">صوتی</SelectItem>
                <SelectItem value="wearable">پوشیدنی</SelectItem>
                <SelectItem value="home">خانه</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <div className="grid gap-3">
            <Field>
              <FieldLabel htmlFor="es5-min">حداقل</FieldLabel>
              <Input
                id="es5-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="es5-max">حداکثر</FieldLabel>
              <Input
                id="es5-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="es5-stock">فقط موجود</Label>
            <Switch
              id="es5-stock"
              checked={stockOnly}
              onCheckedChange={setStockOnly}
            />
          </div>
          <Button variant="outline" className="w-full" onClick={clearAll}>
            پاک کردن فیلترها
          </Button>
        </aside>

        <div className="p-4 md:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Button>جستجو</Button>
          </div>

          {chips.length > 0 ? (
            <div className="mb-4 flex flex-wrap gap-2">
              {chips.map((c) => (
                <Badge key={c} variant="secondary" className="gap-1 pe-1">
                  {c}
                  <button
                    type="button"
                    className="rounded-sm p-0.5 hover:bg-muted"
                    onClick={() =>
                      setChips((prev) => prev.filter((x) => x !== c))
                    }
                    aria-label={`حذف ${c}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="rounded-lg border p-6">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchXIcon className="size-6" />
                </EmptyMedia>
                <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
                <EmptyDescription>
                  عبارت را کوتاه‌تر کنید، فیلترها را کم کنید یا از دسته‌های
                  محبوب شروع کنید.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="w-full max-w-md gap-4">
                <div className="grid w-full grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.title}
                      type="button"
                      className="rounded-lg border bg-background px-3 py-2.5 text-start hover:bg-muted/50"
                    >
                      <p className="text-sm font-medium">{cat.title}</p>
                      <p className="text-xs text-muted-foreground">
                        <bdi dir="ltr">{cat.count}</bdi> محصول
                      </p>
                    </button>
                  ))}
                </div>
                <Separator className="w-full" />
                <Field className="w-full text-start">
                  <FieldLabel htmlFor="es5-email">اطلاع‌رسانی موجودی</FieldLabel>
                  <Input
                    id="es5-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    وقتی محصولی اضافه شد خبرتان می‌کنیم
                  </FieldDescription>
                </Field>
                <div className="flex w-full gap-2">
                  <Button className="flex-1" onClick={clearAll}>
                    پاک کردن و ادامه
                  </Button>
                  <Button variant="outline" className="flex-1">
                    پشتیبانی
                  </Button>
                </div>
              </EmptyContent>
            </Empty>
          </div>
        </div>
      </div>
    </section>
  )
}
