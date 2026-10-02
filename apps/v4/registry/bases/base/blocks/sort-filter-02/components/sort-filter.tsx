"use client"

import * as React from "react"
import { ArrowUpDownIcon } from "lucide-react"

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
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"

const FILTERS = ["موجود", "تخفیف‌دار", "ارسال سریع"] as const

const ITEMS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه" },
] as const

export function SortFilterChips() {
  const [active, setActive] = React.useState<string[]>(["موجود"])
  const [sort, setSort] = React.useState("newest")

  function toggle(label: string) {
    setActive((prev) =>
      prev.includes(label)
        ? prev.filter((x) => x !== label)
        : [...prev, label]
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
            <CardDescription>چیپ فیلتر + منوی مرتب‌سازی</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="sm" className="gap-2" />}
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
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const on = active.includes(f)
              return (
                <Button
                  key={f}
                  type="button"
                  size="sm"
                  variant={on ? "default" : "outline"}
                  onClick={() => toggle(f)}
                >
                  {f}
                </Button>
              )
            })}
          </div>
          {active.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {active.map((f) => (
                <Badge key={f} variant="secondary">
                  {f}
                </Badge>
              ))}
            </div>
          ) : null}
          <Separator />
          <ul className="space-y-0 rounded-lg border">
            {ITEMS.map((item, i) => (
              <li key={item.name}>
                {i > 0 && <Separator />}
                <div className="px-4 py-3">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
