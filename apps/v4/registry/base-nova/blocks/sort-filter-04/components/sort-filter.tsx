"use client"

import * as React from "react"
import {
  ArrowUpDownIcon,
  FilterIcon,
  MoreHorizontalIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import { Input } from "@/registry/base-nova/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"

type Chip = { id: string; label: string }

const PRODUCTS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · ۴٬۲۹۰٬۰۰۰" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · ۸٬۹۰۰٬۰۰۰" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · ۱٬۸۵۰٬۰۰۰" },
] as const

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
  { value: "محبوب‌ترین", label: "محبوب‌ترین" },
] as const

export function SortFilterBar() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "stock", label: "موجود" },
    { id: "cat", label: "صوتی" },
  ])
  const [sort, setSort] = React.useState("جدیدترین")
  const [category, setCategory] = React.useState("صوتی")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function removeChip(id: string) {
    setChips((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="space-y-3 border-b p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-semibold">مرتب‌سازی و فیلتر</h2>
            <Popover open={moreOpen} onOpenChange={setMoreOpen}>
              <PopoverTrigger
                render={<Button type="button" variant="outline" size="sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                بیشتر
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-48 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => {
                    setChips([])
                    setMoreOpen(false)
                  }}
                >
                  پاک کردن فیلترها
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMoreOpen(false)}
                >
                  ذخیره نمای فعلی
                </Button>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Input placeholder="جستجو…" dir="rtl" className="flex-1" />
            <Select
              items={[...CATEGORY_ITEMS]}
              value={category}
              onValueChange={(value) => {
                if (CATEGORY_ITEMS.some((item) => item.value === value)) {
                  setCategory(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <ArrowUpDownIcon className="size-3.5" />
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
          </div>

          {chips.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              <FilterIcon className="size-3.5 text-muted-foreground" />
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
        </div>

        <ul>
          {PRODUCTS.map((p, i) => (
            <li key={p.name}>
              {i > 0 && <Separator />}
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs tracking-normal text-muted-foreground">
                    {p.meta}
                  </p>
                </div>
                <Popover
                  open={openId === p.name}
                  onOpenChange={(open) => setOpenId(open ? p.name : null)}
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
    </section>
  )
}
