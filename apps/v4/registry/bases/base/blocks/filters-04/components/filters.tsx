"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · موجود" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · تخفیف" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · موجود" },
] as const

export function FiltersChips() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "cat", label: "صوتی" },
    { id: "stock", label: "موجود" },
    { id: "city", label: "تهران" },
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
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FilterIcon className="size-5" />
              فیلترها
            </CardTitle>
            <CardDescription>
              چیپ فعال و منوی مرتب‌سازی RTL
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setChips([])}>
                پاک کردن همه
              </DropdownMenuItem>
              <DropdownMenuItem>ذخیره فیلتر</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="جستجو در نتایج…"
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
                render={<Button variant="outline" className="w-full sm:w-auto" />}
              >
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
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>مشاهده</DropdownMenuItem>
                      <DropdownMenuItem>افزودن به علاقه‌مندی</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
