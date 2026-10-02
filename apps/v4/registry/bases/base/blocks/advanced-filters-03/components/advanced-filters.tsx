"use client"

import * as React from "react"
import { FilterIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"
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

const BRANDS = ["آرام", "نور", "مینیمال", "سبک"] as const

export function AdvancedFiltersPanel() {
  const [brands, setBrands] = React.useState<string[]>(["آرام"])

  function toggleBrand(name: string, on: boolean) {
    setBrands((prev) =>
      on ? [...prev, name] : prev.filter((b) => b !== name)
    )
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
              render={<Button variant="outline" size="sm" className="gap-2" />}
            >
              <FilterIcon className="size-4" />
              باز کردن
            </DrawerTrigger>
            <DrawerContent dir="rtl" lang="fa">
              <DrawerHeader className="text-start">
                <DrawerTitle>فیلترهای پیشرفته</DrawerTitle>
                <DrawerDescription>
                  قیمت و ایمیل به‌صورت LTR
                </DrawerDescription>
              </DrawerHeader>

              <div className="max-h-[60vh] space-y-4 overflow-y-auto px-4 pb-2">
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
                  <Select defaultValue="audio">
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
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="af3-max">حداکثر</FieldLabel>
                    <Input
                      id="af3-max"
                      inputMode="numeric"
                      placeholder="۱۰٬۰۰۰٬۰۰۰"
                      dir="ltr"
                      className="text-start"
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

              <DrawerFooter className="gap-2">
                <Button className="w-full">اعمال فیلتر</Button>
                <Button
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
          <p className="mt-4 text-sm text-muted-foreground">برندی انتخاب نشده</p>
        )}
      </div>
    </section>
  )
}
