"use client"

import * as React from "react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-mira/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

const CITY_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "شیراز", label: "شیراز" },
  { value: "مشهد", label: "مشهد" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

export default function FiltersSelects() {
  const [category, setCategory] = React.useState("همه")
  const [city, setCity] = React.useState("تهران")
  const [sort, setSort] = React.useState("جدیدترین")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>فیلترها</CardTitle>
          <CardDescription>
            دسته، شهر و مرتب‌سازی با انتخابگر راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <FieldGroup>
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
                  <SelectValue placeholder="انتخاب دسته" />
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
            <Field>
              <FieldLabel>شهر</FieldLabel>
              <Select
                items={[...CITY_ITEMS]}
                value={city}
                onValueChange={(value) => {
                  if (CITY_ITEMS.some((item) => item.value === value)) {
                    setCity(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب شهر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {CITY_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
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
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-3 border-t py-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => {
              setCategory("همه")
              setCity("تهران")
              setSort("جدیدترین")
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
