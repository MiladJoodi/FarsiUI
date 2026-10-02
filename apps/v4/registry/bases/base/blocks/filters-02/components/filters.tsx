"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"

export function FiltersSelects() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فیلترها</CardTitle>
          <CardDescription>
            دسته، شهر و مرتب‌سازی با Select راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel>دسته</FieldLabel>
              <Select defaultValue="all">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب دسته" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="all">همه</SelectItem>
                  <SelectItem value="audio">صوتی</SelectItem>
                  <SelectItem value="wearable">پوشیدنی</SelectItem>
                  <SelectItem value="home">خانه</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>شهر</FieldLabel>
              <Select defaultValue="tehran">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب شهر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="tehran">تهران</SelectItem>
                  <SelectItem value="isfahan">اصفهان</SelectItem>
                  <SelectItem value="shiraz">شیراز</SelectItem>
                  <SelectItem value="mashhad">مشهد</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>مرتب‌سازی</FieldLabel>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="newest">جدیدترین</SelectItem>
                  <SelectItem value="price-asc">ارزان‌ترین</SelectItem>
                  <SelectItem value="price-desc">گران‌ترین</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button variant="outline" className="flex-1">
            پاک کردن
          </Button>
          <Button className="flex-1">اعمال</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
