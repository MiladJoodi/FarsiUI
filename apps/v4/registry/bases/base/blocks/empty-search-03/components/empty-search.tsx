"use client"

import { SearchIcon, SearchXIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

export function EmptySearchForm() {
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
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:flex-1" dir="rtl">
                <SelectValue placeholder="دسته" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="audio">صوتی</SelectItem>
                <SelectItem value="wearable">پوشیدنی</SelectItem>
                <SelectItem value="home">خانه</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="sm:w-auto">
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
              <div className="flex w-full gap-2">
                <Button className="flex-1">جستجوی دوباره</Button>
                <Button variant="outline" className="flex-1">
                  بازگشت
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        </div>

        <Separator />
        <p className="px-4 py-3 text-center text-xs text-muted-foreground">
          قیمت‌ها از <bdi dir="ltr">۱٬۰۰۰٬۰۰۰</bdi> تومان شروع می‌شوند
        </p>
      </div>
    </section>
  )
}
