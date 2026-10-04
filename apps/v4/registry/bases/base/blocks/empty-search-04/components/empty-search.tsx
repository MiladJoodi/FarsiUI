"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  SearchIcon,
  SearchXIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Input } from "@/registry/bases/base/ui/input"
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

const RECENT = ["هدفون بی‌سیم", "کیف چرم", "ساعت نور"] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "مرتبط‌ترین", label: "مرتبط‌ترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function EmptySearchRecent() {
  const [chips, setChips] = React.useState(["موجود", "تهران"])
  const [sort, setSort] = React.useState("جدیدترین")
  const [moreOpen, setMoreOpen] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">نتایج جستجو</h2>
            <p className="text-sm tracking-normal text-muted-foreground">
              {toFa(0)} نتیجه
            </p>
          </div>
          <Popover open={moreOpen} onOpenChange={setMoreOpen}>
            <PopoverTrigger
              render={
                <Button type="button" variant="outline" size="sm" />
              }
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
                ذخیره جستجو
              </Button>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-3 border-b p-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                defaultValue="محصول ناموجود"
                placeholder="جستجو…"
                dir="rtl"
                className="ps-8"
              />
            </div>
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
              {chips.map((c) => (
                <Badge key={c} variant="secondary" className="gap-1 pe-1">
                  {c}
                  <button
                    type="button"
                    className="rounded-sm p-0.5 hover:bg-muted"
                    onClick={() =>
                      setChips((prev) => prev.filter((x) => x !== c))
                    }
                    aria-label={`حذف ${c}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        <div className="p-6">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>نتیجه‌ای پیدا نشد</EmptyTitle>
              <EmptyDescription>
                فیلترها را کم کنید یا یکی از جستجوهای اخیر را امتحان کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="gap-3">
              <p className="text-sm text-muted-foreground">جستجوهای اخیر</p>
              <div className="flex flex-wrap justify-center gap-2">
                {RECENT.map((r) => (
                  <Button key={r} type="button" variant="outline" size="sm">
                    {r}
                  </Button>
                ))}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setChips([])}
              >
                پاک کردن همه فیلترها
              </Button>
            </EmptyContent>
          </Empty>
        </div>

        <Separator />
        <p className="px-4 py-3 text-center text-xs tracking-normal text-muted-foreground">
          مسیر:{" "}
          <span dir="ltr" className="inline-block text-start">
            /search?q=…
          </span>
        </p>
      </div>
    </section>
  )
}
