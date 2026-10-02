"use client"

import * as React from "react"
import {
  ArrowUpDownIcon,
  FilterIcon,
  MoreHorizontalIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

type Chip = { id: string; label: string }

const PRODUCTS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · ۴٬۲۹۰٬۰۰۰" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · ۸٬۹۰۰٬۰۰۰" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · ۱٬۸۵۰٬۰۰۰" },
] as const

export function SortFilterBar() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "stock", label: "موجود" },
    { id: "cat", label: "صوتی" },
  ])
  const [sort, setSort] = React.useState("newest")

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
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setChips([])}>
                  پاک کردن فیلترها
                </DropdownMenuItem>
                <DropdownMenuItem>ذخیره نمای فعلی</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              placeholder="جستجو…"
              dir="rtl"
              className="flex-1"
            />
            <Select defaultValue="audio">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="دسته" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="audio">صوتی</SelectItem>
                <SelectItem value="wearable">پوشیدنی</SelectItem>
                <SelectItem value="home">خانه</SelectItem>
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" className="w-full gap-2 sm:w-auto" />
                }
              >
                <ArrowUpDownIcon className="size-3.5" />
                مرتب‌سازی
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-44">
                <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => setSort(v ?? "newest")}
                >
                  <DropdownMenuRadioItem value="newest">
                    جدیدترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-asc">
                    ارزان‌ترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">
                    گران‌ترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="popular">
                    محبوب‌ترین
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    <bdi dir="ltr">{p.meta}</bdi>
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">عملیات</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent dir="rtl" lang="fa" align="start">
                    <DropdownMenuItem>مشاهده</DropdownMenuItem>
                    <DropdownMenuItem>مقایسه</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
