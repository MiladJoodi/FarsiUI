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

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

export default function FiltersPanel() {
  const [brands, setBrands] = React.useState<string[]>(["آرام"])
  const [category, setCategory] = React.useState("همه")

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
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>فیلتر محصولات</CardTitle>
          <CardDescription>
            جستجوی فارسی؛ ایمیل فروشنده چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 py-4">
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

          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="f3-min">حداقل قیمت</FieldLabel>
              <Input
                id="f3-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="f3-max">حداکثر قیمت</FieldLabel>
              <Input
                id="f3-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
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
        <CardFooter className="gap-3 border-t py-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => {
              setBrands([])
              setCategory("همه")
            }}
          >
            پاک کردن
          </Button>
          <Button type="button" className="flex-1">
            اعمال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
