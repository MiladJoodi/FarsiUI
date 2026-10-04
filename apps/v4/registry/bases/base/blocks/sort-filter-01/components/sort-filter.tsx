"use client"

import * as React from "react"

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

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "موجود", label: "موجود" },
  { value: "تخفیف‌دار", label: "تخفیف‌دار" },
] as const

export default function SortFilterSimple() {
  const [sort, setSort] = React.useState("جدیدترین")
  const [filter, setFilter] = React.useState("همه")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
          <CardDescription>دو کنترل پایه</CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <FieldGroup className="gap-4">
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
              <FieldLabel>فیلتر</FieldLabel>
              <Select
                items={[...FILTER_ITEMS]}
                value={filter}
                onValueChange={(value) => {
                  if (FILTER_ITEMS.some((item) => item.value === value)) {
                    setFilter(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="فیلتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {FILTER_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-3 border-t py-4">
          <Button type="button" className="w-full">
            اعمال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
