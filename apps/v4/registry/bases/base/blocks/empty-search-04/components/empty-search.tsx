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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const RECENT = ["هدفون بی‌سیم", "کیف چرم", "ساعت نور"] as const

export function EmptySearchRecent() {
  const [chips, setChips] = React.useState(["موجود", "تهران"])

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
            <p className="text-sm text-muted-foreground">
              <bdi dir="ltr">۰</bdi> نتیجه
            </p>
          </div>
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
              <DropdownMenuItem>ذخیره جستجو</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="relevant">مرتبط‌ترین</SelectItem>
                <SelectItem value="price-asc">ارزان‌ترین</SelectItem>
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
              <Button variant="ghost" size="sm" onClick={() => setChips([])}>
                پاک کردن همه فیلترها
              </Button>
            </EmptyContent>
          </Empty>
        </div>

        <Separator />
        <p className="px-4 py-3 text-center text-xs text-muted-foreground">
          مسیر: <bdi dir="ltr">/search?q=…</bdi>
        </p>
      </div>
    </section>
  )
}
