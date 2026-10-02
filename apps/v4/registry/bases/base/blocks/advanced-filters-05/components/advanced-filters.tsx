"use client"

import * as React from "react"
import { cn } from "cn"
import {
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
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
const PRESETS = [
  { id: "near", label: "نزدیک من" },
  { id: "deal", label: "پیشنهاد ویژه" },
  { id: "fast", label: "ارسال سریع" },
] as const

export function AdvancedFiltersHub() {
  const [open, setOpen] = React.useState(false)
  const [cats, setCats] = React.useState<string[]>(["صوتی"])
  const [stockOnly, setStockOnly] = React.useState(true)
  const [sort, setSort] = React.useState("newest")
  const [query, setQuery] = React.useState("")
  const [preset, setPreset] = React.useState("near")

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
    setPreset("near")
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
            پنل پیشرفته
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            فیلترهای پیشرفته
          </h2>
          <p className="mt-2 text-muted-foreground">
            <bdi dir="ltr">{rows.length}</bdi> نتیجه · پیش‌فرض و facets
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-44">
              <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort(v ?? "newest")}
              >
                <DropdownMenuRadioItem value="newest">
                  جدیدترین
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-asc">
                  ارزان‌ترین
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-desc">
                  گران‌ترین
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button size="sm" className="gap-2" />}
            >
              <FilterIcon className="size-4" />
              فیلترهای پیشرفته
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex w-[min(100%,24rem)] flex-col"
              dir="rtl"
              lang="fa"
            >
              <SheetHeader className="text-start">
                <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                <SheetDescription>
                  پیش‌فرض، دسته، قیمت و فروشنده
                </SheetDescription>
              </SheetHeader>

              <div className="mt-4 flex-1 space-y-5 overflow-y-auto pe-1">
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
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="af5-max">حداکثر</FieldLabel>
                    <Input
                      id="af5-max"
                      inputMode="numeric"
                      placeholder="۱۰٬۰۰۰٬۰۰۰"
                      dir="ltr"
                      className="text-start"
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
                  <Select defaultValue="city">
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue placeholder="محدوده" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="city">هم‌شهر</SelectItem>
                      <SelectItem value="province">استان</SelectItem>
                      <SelectItem value="country">سراسر کشور</SelectItem>
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

              <SheetFooter className="mt-4 gap-2 sm:flex-col">
                <Button className="w-full" onClick={() => setOpen(false)}>
                  اعمال فیلترها
                </Button>
                <Button
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

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" />}>
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={clearAll}>پاک کردن همه</DropdownMenuItem>
              <DropdownMenuItem>ذخیره به‌عنوان پیش‌فرض</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {PRESETS.find((p) => p.id === preset) ? (
          <Badge variant="secondary">{PRESETS.find((p) => p.id === preset)!.label}</Badge>
        ) : null}
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
                    <Badge variant="outline">{p.category}</Badge>
                    {!p.stock ? (
                      <Badge variant="destructive">ناموجود</Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm tabular-nums text-muted-foreground">
                    <bdi dir="ltr">{p.price}</bdi> تومان
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
    </section>
  )
}
