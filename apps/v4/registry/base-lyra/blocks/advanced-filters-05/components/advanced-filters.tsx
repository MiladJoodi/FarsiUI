"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, SearchIcon, XIcon } from "lucide-react"

import { cn } from "@/registry/base-lyra/lib/utils"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import { Checkbox } from "@/registry/base-lyra/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-lyra/ui/sheet"
import { Switch } from "@/registry/base-lyra/ui/switch"

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

const PRESETS = [
  { id: "نزدیک من", label: "نزدیک من" },
  { id: "پیشنهاد ویژه", label: "پیشنهاد ویژه" },
  { id: "ارسال سریع", label: "ارسال سریع" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

const RANGE_ITEMS = [
  { value: "هم‌شهر", label: "هم‌شهر" },
  { value: "استان", label: "استان" },
  { value: "سراسر کشور", label: "سراسر کشور" },
] as const

const sheetPanelClass =
  "flex w-[min(100%-1.5rem,24rem)] flex-col gap-0 overflow-x-hidden p-4 sm:inset-y-3 sm:end-3 sm:h-[calc(100%-1.5rem)] sm:max-w-md sm:rounded-xl"

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function AdvancedFiltersHub() {
  const [open, setOpen] = React.useState(false)
  const [cats, setCats] = React.useState<string[]>(["صوتی"])
  const [stockOnly, setStockOnly] = React.useState(true)
  const [sort, setSort] = React.useState("جدیدترین")
  const [query, setQuery] = React.useState("")
  const [preset, setPreset] = React.useState("نزدیک من")
  const [range, setRange] = React.useState("هم‌شهر")
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
    setPreset("نزدیک من")
    setMoreOpen(false)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center overflow-x-hidden px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <Badge variant="secondary" className="mb-3">
            پنل پیشرفته
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            فیلترهای پیشرفته
          </h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(rows.length)} نتیجه · پیش‌فرض و دسته‌ها
          </p>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (SORT_ITEMS.some((item) => item.value === value)) {
                setSort(value as string)
              }
            }}
          >
            <SelectTrigger className="w-36" dir="rtl">
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

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button type="button" size="sm" className="gap-2" />}
            >
              <FilterIcon className="size-4" />
              فیلترهای پیشرفته
            </SheetTrigger>
            <SheetContent
              side="right"
              className={sheetPanelClass}
              dir="rtl"
              lang="fa"
            >
              <SheetHeader className="text-start">
                <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                <SheetDescription>
                  پیش‌فرض، دسته، قیمت و فروشنده
                </SheetDescription>
              </SheetHeader>

              <div className="mt-4 min-w-0 flex-1 space-y-5 overflow-x-hidden overflow-y-auto">
                <div>
                  <p className="mb-2 text-sm font-medium">پیش‌فرض‌ها</p>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.map((p) => (
                      <Button
                        key={p.id}
                        type="button"
                        size="sm"
                        variant={preset === p.id ? "default" : "outline"}
                        onClick={() => setPreset(p.id)}
                      >
                        {p.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <Field>
                  <FieldLabel>جستجو</FieldLabel>
                  <div className="relative">
                    <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="نام محصول…"
                      dir="rtl"
                      className="ps-8"
                    />
                  </div>
                </Field>

                <div>
                  <p className="mb-2 text-sm font-medium">دسته</p>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <div key={cat} className="flex items-center gap-2">
                        <Checkbox
                          id={`af5-${cat}`}
                          checked={cats.includes(cat)}
                          onCheckedChange={(v) => toggleCat(cat, Boolean(v))}
                        />
                        <Label htmlFor={`af5-${cat}`}>{cat}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <FieldLabel htmlFor="af5-min">حداقل</FieldLabel>
                    <Input
                      id="af5-min"
                      inputMode="numeric"
                      placeholder="۱٬۰۰۰٬۰۰۰"
                      dir="rtl"
                      className="text-end tracking-normal"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="af5-max">حداکثر</FieldLabel>
                    <Input
                      id="af5-max"
                      inputMode="numeric"
                      placeholder="۱۰٬۰۰۰٬۰۰۰"
                      dir="rtl"
                      className="text-end tracking-normal"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="af5-email">ایمیل فروشنده</FieldLabel>
                  <Input
                    id="af5-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>اختیاری</FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>محدوده ارسال</FieldLabel>
                  <Select
                    items={[...RANGE_ITEMS]}
                    value={range}
                    onValueChange={(value) => {
                      if (RANGE_ITEMS.some((item) => item.value === value)) {
                        setRange(value as string)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue placeholder="محدوده" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {RANGE_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af5-stock">فقط موجود</Label>
                  <Switch
                    id="af5-stock"
                    checked={stockOnly}
                    onCheckedChange={setStockOnly}
                  />
                </div>
              </div>

              <SheetFooter className="mt-4 gap-3 border-t pt-4 sm:flex-col">
                <Button
                  type="button"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  اعمال فیلترها
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    clearAll()
                    setOpen(false)
                  }}
                >
                  پاک کردن همه
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

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
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge variant="secondary">{preset}</Badge>
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

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
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
                  onOpenChange={(next) => setOpenId(next ? p.id : null)}
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
                    <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
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
    </section>
  )
}
