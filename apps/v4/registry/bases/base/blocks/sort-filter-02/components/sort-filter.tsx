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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const FILTERS = ["موجود", "تخفیف‌دار", "ارسال سریع"] as const

const ITEMS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "ارزان‌ترین", label: "ارزان‌ترین" },
  { value: "گران‌ترین", label: "گران‌ترین" },
  { value: "محبوب‌ترین", label: "محبوب‌ترین" },
] as const

export default function SortFilterChips() {
  const [active, setActive] = React.useState<string[]>(["موجود"])
  const [sort, setSort] = React.useState("جدیدترین")

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
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
            <CardDescription>چیپ فیلتر + انتخابگر مرتب‌سازی</CardDescription>
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
            <SelectTrigger className="w-40 shrink-0" dir="rtl">
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
