"use client"

import * as React from "react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"

const IMAGES = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
] as const

const SIZE_ITEMS = [
  { value: "کوچک", label: "کوچک (S)" },
  { value: "متوسط", label: "متوسط (M)" },
  { value: "بزرگ", label: "بزرگ (L)" },
] as const

export default function ProductDetailsGallery() {
  const [active, setActive] = React.useState(0)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-2xl border bg-muted">
            <img
              src={IMAGES[active]}
              alt="ساعت هوشمند نور"
              className="size-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {IMAGES.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className={`aspect-square overflow-hidden rounded-xl border bg-muted transition ${
                  active === index
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <div className="space-y-2">
            <Badge variant="outline" className="border">
              پوشیدنی
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">
              ساعت هوشمند نور
            </h1>
            <p className="text-lg tracking-normal">
              <span className="font-semibold">۸٬۹۰۰٬۰۰۰</span>{" "}
              <span className="text-muted-foreground">تومان</span>
            </p>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            نمایشگر همیشه روشن، پایش ضربان قلب و مقاومت در برابر آب تا ۵۰ متر.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">سایز بند</p>
            <Select items={[...SIZE_ITEMS]} defaultValue="متوسط">
              <SelectTrigger className="w-full sm:w-48" dir="rtl">
                <SelectValue placeholder="سایز را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SIZE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" className="flex-1">
              افزودن به سبد
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="flex-1"
            >
              خرید سریع
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
