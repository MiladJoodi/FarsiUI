"use client"

import * as React from "react"
import { SearchIcon, SearchXIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-mira/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

const CATEGORY_ITEMS = [
  { value: "همه دسته‌ها", label: "همه دسته‌ها" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

export default function EmptySearchForm() {
  const [category, setCategory] = React.useState("همه دسته‌ها")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="space-y-3 border-b p-4">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              defaultValue="کیبورد مکانیکی نادر"
              placeholder="جستجو…"
              dir="rtl"
              className="ps-8"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Select
              items={[...CATEGORY_ITEMS]}
              value={category}
              onValueChange={(value) => {
                if (CATEGORY_ITEMS.some((item) => item.value === value)) {
                  setCategory(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:flex-1" dir="rtl">
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
            <Button type="button" variant="outline" className="sm:w-auto">
              پاک کردن فیلتر
            </Button>
          </div>
        </div>

        <div className="p-6">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
              <EmptyDescription>
                فیلترها را باز کنید یا عبارت دیگری امتحان کنید. برای راهنمایی
                ایمیل بگذارید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="w-full max-w-sm gap-4">
              <Field className="w-full text-start">
                <FieldLabel htmlFor="es3-email">ایمیل پشتیبانی</FieldLabel>
                <Input
                  id="es3-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>اختیاری</FieldDescription>
              </Field>
              <div className="flex w-full gap-3">
                <Button type="button" className="flex-1">
                  جستجوی دوباره
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  بازگشت
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        </div>

        <Separator />
        <p className="px-4 py-3 text-center text-xs tracking-normal text-muted-foreground">
          قیمت‌ها از ۱٬۰۰۰٬۰۰۰ تومان شروع می‌شوند
        </p>
      </div>
    </section>
  )
}
