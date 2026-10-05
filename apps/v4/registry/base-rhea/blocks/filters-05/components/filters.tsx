"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, XIcon } from "lucide-react"

import { cn } from "@/registry/base-rhea/lib/utils"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Checkbox } from "@/registry/base-rhea/ui/checkbox"
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
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function FiltersHub() {
  const [cats, setCats] = React.useState<string[]>(["صوتی"])
  const [stockOnly, setStockOnly] = React.useState(true)
  const [sort, setSort] = React.useState("جدیدترین")
  const [query, setQuery] = React.useState("")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = PRODUCTS.filter((p) => {
    if (stockOnly && !p.stock) return false
    if (cats.length > 0 && !cats.includes(p.category)) return false
    if (query && !p.name.includes(query)) return false
    return true
  })

  function toggleCat(name: string, on: boolean) {
    setCats((prev) => (on ? [...prev, name] : prev.filter((c) => c !== name)))
  }

  function clearAll() {
    setCats([])
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
            مرکز فیلتر
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">فیلترها</h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(rows.length)} نتیجه · دسته و موجودی
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
              ذخیره به‌عنوان پیش‌فرض
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
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

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[14rem_1fr]">
        <aside className="space-y-5 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FilterIcon className="size-4" />
            فیلترها
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

          <div>
            <p className="mb-2 text-sm font-medium">دسته</p>
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <Checkbox
                    id={`hub-${cat}`}
                    checked={cats.includes(cat)}
                    onCheckedChange={(v) => toggleCat(cat, Boolean(v))}
                  />
                  <Label htmlFor={`hub-${cat}`}>{cat}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <Field>
              <FieldLabel htmlFor="f5-min">حداقل</FieldLabel>
              <Input
                id="f5-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="f5-max">حداکثر</FieldLabel>
              <Input
                id="f5-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="f5-email">ایمیل فروشنده</FieldLabel>
            <Input
              id="f5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="f5-stock">فقط موجود</Label>
            <Switch
              id="f5-stock"
              checked={stockOnly}
              onCheckedChange={setStockOnly}
            />
          </div>

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

          <Button
            type="button"
            className="w-full"
            variant="outline"
            onClick={clearAll}
          >
            پاک کردن فیلترها
          </Button>
        </aside>

        <div className="p-4 md:p-5">
          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                نتیجه‌ای با این فیلترها نیست
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
                        <Badge variant="outline" className="border">
                          {p.category}
                        </Badge>
                        {!p.stock ? (
                          <Badge variant="destructive">ناموجود</Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                        {p.price} تومان
                      </p>
                    </div>
                    <Popover
                      open={openId === p.id}
                      onOpenChange={(open) => setOpenId(open ? p.id : null)}
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
                        className="w-40 space-y-1 p-2"
                      >
                        <p className="px-2 py-1.5 text-sm font-medium">
                          عملیات
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          مشاهده
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          مقایسه
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          علاقه‌مندی
                        </Button>
                      </PopoverContent>
                    </Popover>
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
