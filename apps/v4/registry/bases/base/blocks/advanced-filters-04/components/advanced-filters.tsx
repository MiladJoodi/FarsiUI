"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
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

type Chip = { id: string; label: string }

const PRODUCTS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · موجود" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · تخفیف" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · موجود" },
] as const

const CITY_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "شیراز", label: "شیراز" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
] as const

const sheetPanelClass =
  "flex w-[min(100%-1.5rem,22rem)] flex-col gap-0 overflow-x-hidden p-4 sm:inset-y-3 sm:end-3 sm:h-[calc(100%-1.5rem)] sm:max-w-sm sm:rounded-xl"

export function AdvancedFiltersChips() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "stock", label: "موجود" },
    { id: "city", label: "تهران" },
    { id: "brand", label: "آرام" },
  ])
  const [sort, setSort] = React.useState("جدیدترین")
  const [city, setCity] = React.useState("تهران")
  const [open, setOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function removeChip(id: string) {
    setChips((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center overflow-x-hidden px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">فیلترهای پیشرفته</h2>
            <p className="text-sm text-muted-foreground">
              چیپ فعال و پنل کناری
            </p>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-36" dir="rtl">
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

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button type="button" variant="outline" size="sm" className="gap-2" />
                }
              >
                <FilterIcon className="size-4" />
                فیلتر
              </SheetTrigger>
              <SheetContent
                side="right"
                className={sheetPanelClass}
                dir="rtl"
                lang="fa"
              >
                <SheetHeader className="text-start">
                  <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                  <SheetDescription>شرایط دقیق‌تر</SheetDescription>
                </SheetHeader>

                <div className="mt-4 min-w-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden">
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
                        <SelectValue placeholder="شهر" />
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

                  <div className="grid grid-cols-2 gap-3">
                    <Field>
                      <FieldLabel htmlFor="af4-min">حداقل</FieldLabel>
                      <Input
                        id="af4-min"
                        inputMode="numeric"
                        placeholder="۱٬۰۰۰٬۰۰۰"
                        dir="rtl"
                        className="text-end tracking-normal"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="af4-max">حداکثر</FieldLabel>
                      <Input
                        id="af4-max"
                        inputMode="numeric"
                        placeholder="۱۰٬۰۰۰٬۰۰۰"
                        dir="rtl"
                        className="text-end tracking-normal"
                      />
                    </Field>
                  </div>

                  <div className="space-y-2">
                    {["ارسال رایگان", "ضمانت اصالت", "فروشندهٔ برتر"].map(
                      (label, i) => (
                        <div key={label} className="flex items-center gap-2">
                          <Checkbox
                            id={`af4-extra-${i}`}
                            defaultChecked={i === 0}
                          />
                          <Label htmlFor={`af4-extra-${i}`}>{label}</Label>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="af4-stock">فقط موجود</Label>
                    <Switch id="af4-stock" defaultChecked />
                  </div>
                </div>

                <SheetFooter className="mt-4 gap-3 border-t pt-4 sm:flex-col">
                  <Button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setChips([
                        { id: "stock", label: "موجود" },
                        { id: "city", label: city },
                        { id: "ship", label: "ارسال رایگان" },
                      ])
                      setOpen(false)
                    }}
                  >
                    اعمال
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setChips([])
                      setOpen(false)
                    }}
                  >
                    پاک کردن
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="min-w-0 space-y-3 overflow-x-hidden p-4">
          {chips.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Badge key={chip.id} variant="secondary" className="gap-1 pe-1">
                  {chip.label}
                  <button
                    type="button"
                    className="rounded-sm p-0.5 hover:bg-muted"
                    onClick={() => removeChip(chip.id)}
                    aria-label={`حذف ${chip.label}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setChips([])}
              >
                پاک کردن
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">فیلتر فعالی نیست</p>
          )}

          <Separator />

          <ul className="space-y-0 rounded-lg border">
            {PRODUCTS.map((p, i) => (
              <li key={p.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.meta}</p>
                  </div>
                  <Popover
                    open={openId === p.name}
                    onOpenChange={(next) =>
                      setOpenId(next ? p.name : null)
                    }
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="shrink-0"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      عملیات
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="start"
                      className="w-40 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        مشاهده
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        مقایسه
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
