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

export function SortFilterSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
          <CardDescription>دو کنترل پایه</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className="gap-4">
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
            <Field>
              <FieldLabel>فیلتر</FieldLabel>
              <Select defaultValue="all">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="فیلتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="all">همه</SelectItem>
                  <SelectItem value="stock">موجود</SelectItem>
                  <SelectItem value="sale">تخفیف‌دار</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">اعمال</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
