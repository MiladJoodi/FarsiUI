"use client"

import * as React from "react"
import { cn } from "cn"
import {
  ArrowUpDownIcon,
  FilterIcon,
  MoreHorizontalIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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

const PRODUCTS = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    category: "صوتی",
    price: "۴٬۲۹۰٬۰۰۰",
    stock: true,
  },
  {
    id: "2",
    name: "ساعت هوشمند نور",
    category: "پوشیدنی",
    price: "۸٬۹۰۰٬۰۰۰",
    stock: false,
  },
  {
    id: "3",
    name: "لامپ رومیزی مینیمال",
    category: "خانه",
    price: "۱٬۸۵۰٬۰۰۰",
    stock: true,
  },
  {
    id: "4",
    name: "کیف چرم دستی",
    category: "اکسسوری",
    price: "۳٬۱۵۰٬۰۰۰",
    stock: true,
  },
] as const

const CATEGORIES = ["صوتی", "پوشیدنی", "خانه", "اکسسوری"] as const

const SORT_ITEMS = [
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "popular", label: "محبوب‌ترین" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export function SortFilterHub() {
  const [cats, setCats] = React.useState<string[]>(["صوتی"])
  const [stockOnly, setStockOnly] = React.useState(true)
  const [sort, setSort] = React.useState<SortKey>("newest")
  const [query, setQuery] = React.useState("")

  const rows = PRODUCTS.filter((p) => {
    if (stockOnly && !p.stock) return false
    if (cats.length > 0 && !cats.includes(p.category)) return false
    if (query && !p.name.includes(query)) return false
    return true
  })

  function toggleCat(name: string, on: boolean) {
    setCats((prev) =>
      on ? [...prev, name] : prev.filter((c) => c !== name)
    )
  }

  function clearAll() {
    setCats([])
    setStockOnly(false)
    setQuery("")
  }

  const sortLabel =
    SORT_ITEMS.find((item) => item.value === sort)?.label ?? "جدیدترین"

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرتب‌سازی و فیلتر
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مرتب‌سازی و فیلتر
          </h2>
          <p className="mt-2 text-muted-foreground">
            <bdi>{rows.length}</bdi> نتیجه · {sortLabel}
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
            <DropdownMenuItem>ذخیره نمای فعلی</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="gap-1">
          <ArrowUpDownIcon className="size-3" />
          {sortLabel}
        </Badge>
        {cats.map((c) => (
          <Badge key={c} variant="secondary" className="gap-1 pe-1">
            {c}
            <button
              type="button"
              className="rounded-sm p-0.5 hover:bg-muted"
              onClick={() => toggleCat(c, false)}
              aria-label={`حذف ${c}`}
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {stockOnly ? (
          <Badge variant="secondary" className="gap-1 pe-1">
            موجود
            <button
              type="button"
              className="rounded-sm p-0.5 hover:bg-muted"
              onClick={() => setStockOnly(false)}
              aria-label="حذف موجود"
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ) : null}
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[15rem_1fr]">
        <aside className="space-y-5 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FilterIcon className="size-4" />
            فیلتر و مرتب‌سازی
          </div>

          <Field>
            <FieldLabel>جستجو</FieldLabel>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="نام محصول…"
              dir="rtl"
            />
          </Field>

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (
                  value === "newest" ||
                  value === "price-asc" ||
                  value === "price-desc" ||
                  value === "popular"
                ) {
                  setSort(value)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
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

          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full gap-2" />}
            >
              <ArrowUpDownIcon className="size-3.5" />
              میانبر مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44"
            >
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(value) => {
                  if (
                    value === "newest" ||
                    value === "price-asc" ||
                    value === "price-desc" ||
                    value === "popular"
                  ) {
                    setSort(value)
                  }
                }}
              >
                {SORT_ITEMS.map((item) => (
                  <DropdownMenuRadioItem key={item.value} value={item.value}>
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div>
            <p className="mb-2 text-sm font-medium">دسته</p>
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    id={`sf5-${cat}`}
                    checked={cats.includes(cat)}
                    onCheckedChange={(checked) =>
                      toggleCat(cat, checked === true)
                    }
                  />
                  <Label htmlFor={`sf5-${cat}`}>{cat}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <Field>
              <FieldLabel htmlFor="sf5-min">حداقل</FieldLabel>
              <Input
                id="sf5-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sf5-max">حداکثر</FieldLabel>
              <Input
                id="sf5-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="sf5-email">ایمیل فروشنده</FieldLabel>
            <Input
              id="sf5-email"
              type="email"
              placeholder="ایمیل"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="sf5-stock">فقط موجود</Label>
            <Switch
              id="sf5-stock"
              checked={stockOnly}
              onCheckedChange={(checked) => setStockOnly(checked)}
            />
          </div>

          <Button className="w-full" variant="outline" onClick={clearAll}>
            پاک کردن همه
          </Button>
        </aside>

        <div className="p-4 md:p-5">
          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                نتیجه‌ای با این شرایط نیست
              </p>
            ) : (
              rows.map((p, i) => (
                <div key={p.id}>
                  {i > 0 && <Separator />}
                  <div
                    className={cn(
                      "flex items-center gap-3 px-4 py-3",
                      !p.stock && "opacity-70"
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium">{p.name}</p>
                        <Badge variant="outline">{p.category}</Badge>
                        {!p.stock ? (
                          <Badge variant="destructive">ناموجود</Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm tabular-nums text-muted-foreground">
                        <bdi>{p.price}</bdi> تومان
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
                        <DropdownMenuItem>مشاهده</DropdownMenuItem>
                        <DropdownMenuItem>مقایسه</DropdownMenuItem>
                        <DropdownMenuItem>علاقه‌مندی</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
