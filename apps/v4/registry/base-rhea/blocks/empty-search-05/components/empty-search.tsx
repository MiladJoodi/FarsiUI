"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  SearchIcon,
  SearchXIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-rhea/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-rhea/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"

const CATEGORIES = [
  { title: "صوتی", count: 128 },
  { title: "پوشیدنی", count: 64 },
  { title: "خانه", count: 91 },
  { title: "اکسسوری", count: 42 },
] as const

const SORT_ITEMS = [
  { value: "مرتبط‌ترین", label: "مرتبط‌ترین" },
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function EmptySearchHub() {
  const [query, setQuery] = React.useState("محصول ناموجود خیلی خاص")
  const [chips, setChips] = React.useState(["موجود", "ارسال سریع"])
  const [stockOnly, setStockOnly] = React.useState(true)
  const [sort, setSort] = React.useState("مرتبط‌ترین")
  const [category, setCategory] = React.useState("همه")
  const [moreOpen, setMoreOpen] = React.useState(false)

  function clearAll() {
    setChips([])
    setStockOnly(false)
    setQuery("")
    setMoreOpen(false)
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            برای «{query || "…"}» چیزی پیدا نشد · {toFa(0)} نتیجه
          </p>
        </div>
        <Popover open={moreOpen} onOpenChange={setMoreOpen}>
          <PopoverTrigger
            render={<Button type="button" variant="outline" size="sm" />}
          >
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            lang="fa"
            align="start"
            className="w-52 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={clearAll}
            >
              پاک کردن همه
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              گزارش مشکل جستجو
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[14rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">تنظیمات جستجو</p>
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
          <Field>
            <FieldLabel>دسته</FieldLabel>
            <Select
              items={[...CATEGORY_ITEMS]}
              value={category}
              onValueChange={(value) => {
                if (CATEGORY_ITEMS.some((item) => item.value === value)) {
                  setCategory(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
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
          </Field>
          <div className="grid gap-3">
            <Field>
              <FieldLabel htmlFor="es5-min">حداقل</FieldLabel>
              <Input
                id="es5-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="es5-max">حداکثر</FieldLabel>
              <Input
                id="es5-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
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
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={clearAll}
          >
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
            <Button type="button">جستجو</Button>
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
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {toFa(cat.count)} محصول
                      </p>
                    </button>
                  ))}
                </div>
                <Separator className="w-full" />
                <Field className="w-full text-start">
                  <FieldLabel htmlFor="es5-email">
                    اطلاع‌رسانی موجودی
                  </FieldLabel>
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
                <div className="flex w-full gap-3">
                  <Button type="button" className="flex-1" onClick={clearAll}>
                    پاک کردن و ادامه
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
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
