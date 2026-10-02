"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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

export function FiltersPanel() {
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
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فیلتر محصولات</CardTitle>
          <CardDescription>
            جستجوی فارسی · ایمیل فروشنده LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="جستجو نام محصول…"
              className="ps-9"
              dir="rtl"
            />
          </div>

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

          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="f3-min">حداقل قیمت</FieldLabel>
              <Input
                id="f3-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="f3-max">حداکثر قیمت</FieldLabel>
              <Input
                id="f3-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">برند</p>
            <div className="space-y-2">
              {BRANDS.map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={brands.includes(brand)}
                    onCheckedChange={(v) => toggleBrand(brand, Boolean(v))}
                  />
                  <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                </div>
              ))}
            </div>
            {brands.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {brands.map((b) => (
                  <Badge key={b} variant="secondary">
                    {b}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          <Separator />

          <Field>
            <FieldLabel htmlFor="f3-email">ایمیل فروشنده</FieldLabel>
            <Input
              id="f3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>فیلتر اختیاری</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="f3-stock">فقط موجود</Label>
            <Switch id="f3-stock" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setBrands([])}
          >
            پاک کردن
          </Button>
          <Button className="flex-1">اعمال</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
