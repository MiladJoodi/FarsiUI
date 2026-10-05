"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
  { value: "امتیاز", label: "امتیاز" },
] as const

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

export default function SortFilterToolbar() {
  const [sort, setSort] = React.useState("جدیدترین")
  const [category, setCategory] = React.useState("همه")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
          <CardDescription>جستجو، محدوده قیمت و ایمیل چپ‌چین</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <Field>
            <FieldLabel>جستجو</FieldLabel>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="جستجو در نتایج…" dir="rtl" className="ps-8" />
            </div>
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="sf3-min">حداقل</FieldLabel>
              <Input
                id="sf3-min"
                inputMode="numeric"
                placeholder="۱٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sf3-max">حداکثر</FieldLabel>
              <Input
                id="sf3-max"
                inputMode="numeric"
                placeholder="۱۰٬۰۰۰٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="sf3-email">ایمیل فروشنده</FieldLabel>
            <Input
              id="sf3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری</FieldDescription>
          </Field>

          <Separator />

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="sf3-stock">فقط موجود</Label>
            <Switch id="sf3-stock" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="gap-3 border-t py-4">
          <Button type="button" className="flex-1">
            اعمال
          </Button>
          <Button type="button" variant="outline" className="flex-1">
            پاک کردن
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
