"use client"

import * as React from "react"
import { FilterIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-mira/ui/field"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-mira/ui/sheet"
import { Switch } from "@/registry/base-mira/ui/switch"

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "پوشیدنی", label: "پوشیدنی" },
  { value: "خانه", label: "خانه" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

const sheetPanelClass =
  "flex w-[min(100%-1.5rem,20rem)] flex-col gap-0 overflow-x-hidden p-4 sm:inset-y-3 sm:end-3 sm:h-[calc(100%-1.5rem)] sm:max-w-sm sm:rounded-xl"

export default function AdvancedFiltersSheet() {
  const [category, setCategory] = React.useState("همه")
  const [sort, setSort] = React.useState("جدیدترین")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 px-6 py-16"
    >
      <div className="w-full rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold">فهرست محصولات</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          فیلتر پیشرفته از پنل کناری
        </p>
        <div className="mt-4">
          <Sheet>
            <SheetTrigger
              render={
                <Button type="button" variant="outline" className="gap-2" />
              }
            >
              <FilterIcon className="size-4" />
              فیلترهای پیشرفته
            </SheetTrigger>
            <SheetContent
              side="right"
              className={sheetPanelClass}
              dir="rtl"
              lang="fa"
            >
              <SheetHeader className="text-start">
                <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                <SheetDescription>دسته‌بندی و شرایط نمایش</SheetDescription>
              </SheetHeader>

              <FieldGroup className="mt-4 min-w-0 flex-1 gap-4 overflow-y-auto">
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
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af2-stock">فقط موجود</Label>
                  <Switch id="af2-stock" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af2-sale">تخفیف‌دار</Label>
                  <Switch id="af2-sale" />
                </div>
              </FieldGroup>

              <SheetFooter className="mt-4 gap-3 border-t pt-4 sm:flex-col">
                <Button type="button" className="w-full">
                  اعمال
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  پاک کردن
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  )
}
