"use client"

import * as React from "react"
import { FilterIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import { Checkbox } from "@/registry/base-sera/ui/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-sera/ui/drawer"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"
import { Switch } from "@/registry/base-sera/ui/switch"

const BRANDS = ["آرام", "نور", "مینیمال", "سبک"] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

export default function AdvancedFiltersPanel() {
  const [brands, setBrands] = React.useState<string[]>(["آرام"])
  const [category, setCategory] = React.useState("صوتی")

  function toggleBrand(name: string, on: boolean) {
    setBrands((prev) => (on ? [...prev, name] : prev.filter((b) => b !== name)))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Badge variant="secondary" className="mb-2">
              پیشرفته
            </Badge>
            <h2 className="text-xl font-semibold">فیلترهای پیشرفته</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              جستجو، برند و محدوده قیمت
            </p>
          </div>
          <Drawer>
            <DrawerTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="gap-2"
                />
              }
            >
              <FilterIcon className="size-4" />
              باز کردن
            </DrawerTrigger>
            <DrawerContent dir="rtl" lang="fa" className="overflow-x-hidden">
              <DrawerHeader className="text-start">
                <DrawerTitle>فیلترهای پیشرفته</DrawerTitle>
                <DrawerDescription>
                  قیمت و ایمیل به‌صورت چپ‌چین
                </DrawerDescription>
              </DrawerHeader>

              <div className="max-h-[50vh] min-w-0 space-y-4 overflow-x-hidden overflow-y-auto px-4 pb-6">
                <Field>
                  <FieldLabel>جستجو</FieldLabel>
                  <div className="relative">
                    <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="نام محصول…"
                      dir="rtl"
                      className="ps-8"
                    />
                  </div>
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

                <div>
                  <p className="mb-2 text-sm font-medium">برند</p>
                  <div className="grid grid-cols-2 gap-2">
                    {BRANDS.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <Checkbox
                          id={`af3-${b}`}
                          checked={brands.includes(b)}
                          onCheckedChange={(v) => toggleBrand(b, Boolean(v))}
                        />
                        <Label htmlFor={`af3-${b}`}>{b}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <FieldLabel htmlFor="af3-min">حداقل</FieldLabel>
                    <Input
                      id="af3-min"
                      inputMode="numeric"
                      placeholder="۱٬۰۰۰٬۰۰۰"
                      dir="rtl"
                      className="text-end tracking-normal"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="af3-max">حداکثر</FieldLabel>
                    <Input
                      id="af3-max"
                      inputMode="numeric"
                      placeholder="۱۰٬۰۰۰٬۰۰۰"
                      dir="rtl"
                      className="text-end tracking-normal"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="af3-email">ایمیل فروشنده</FieldLabel>
                  <Input
                    id="af3-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>اختیاری</FieldDescription>
                </Field>

                <Separator />

                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af3-stock">فقط موجود</Label>
                  <Switch id="af3-stock" defaultChecked />
                </div>
              </div>

              <DrawerFooter className="gap-3 border-t pt-4">
                <Button type="button" className="w-full">
                  اعمال فیلتر
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setBrands([])}
                >
                  پاک کردن
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {brands.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {brands.map((b) => (
              <Badge key={b} variant="secondary">
                {b}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            برندی انتخاب نشده
          </p>
        )}
      </div>
    </section>
  )
}
