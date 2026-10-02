"use client"

import { FilterIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"

export function AdvancedFiltersSheet() {
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
            <SheetTrigger render={<Button variant="outline" className="gap-2" />}>
              <FilterIcon className="size-4" />
              فیلترهای پیشرفته
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex w-[min(100%,20rem)] flex-col"
              dir="rtl"
              lang="fa"
            >
              <SheetHeader className="text-start">
                <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                <SheetDescription>
                  دسته‌بندی و شرایط نمایش
                </SheetDescription>
              </SheetHeader>

              <FieldGroup className="mt-4 flex-1 gap-4">
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
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af2-stock">فقط موجود</Label>
                  <Switch id="af2-stock" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="af2-sale">تخفیف‌دار</Label>
                  <Switch id="af2-sale" />
                </div>
              </FieldGroup>

              <SheetFooter className="mt-4 gap-2 sm:flex-col">
                <Button className="w-full">اعمال</Button>
                <Button variant="outline" className="w-full">
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
