"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-mira/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

type Chip = { id: string; label: string }

const PRODUCTS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · موجود" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · تخفیف" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · موجود" },
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
] as const

export default function FiltersChips() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "cat", label: "صوتی" },
    { id: "stock", label: "موجود" },
    { id: "city", label: "تهران" },
  ])
  const [category, setCategory] = React.useState("صوتی")
  const [sort, setSort] = React.useState("جدیدترین")
  const [headerOpen, setHeaderOpen] = React.useState(false)
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
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FilterIcon className="size-5" />
              فیلترها
            </CardTitle>
            <CardDescription>
              چیپ فعال و منوی مرتب‌سازی راست‌چین
            </CardDescription>
          </div>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
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
              className="w-44 space-y-1 p-2"
            >
              <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => {
                  setChips([])
                  setHeaderOpen(false)
                }}
              >
                پاک کردن همه
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                ذخیره فیلتر
              </Button>
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input placeholder="جستجو در نتایج…" dir="rtl" className="flex-1" />
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
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.meta}</p>
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
                      className="w-44 space-y-1 p-2"
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
                        افزودن به علاقه‌مندی
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
