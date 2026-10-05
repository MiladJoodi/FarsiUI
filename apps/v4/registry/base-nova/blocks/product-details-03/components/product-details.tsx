"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, StarIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import { Label } from "@/registry/base-nova/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"

const IMAGES = [
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1590874103328-eac38a67437e?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622560480605-d876095ceb11?w=800&auto=format&fit=crop&q=80",
] as const

const COLORS = [
  { id: "مشکی", label: "مشکی مات", swatch: "bg-zinc-900" },
  { id: "بژ", label: "بژ شنی", swatch: "bg-amber-200" },
  { id: "زیتونی", label: "زیتونی", swatch: "bg-green-800" },
] as const

const SIZE_ITEMS = [
  { value: "یک‌سایز", label: "یک‌سایز" },
  { value: "نسخهٔ سفر", label: "نسخهٔ سفر" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function ProductDetailsVariants() {
  const [active, setActive] = React.useState(0)
  const [color, setColor] =
    React.useState<(typeof COLORS)[number]["id"]>("مشکی")
  const [qty, setQty] = React.useState(1)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border bg-muted">
            <img
              src={IMAGES[active]}
              alt="کیف چرم دستی"
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

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border">
                جدید
              </Badge>
              <Badge variant="outline" className="border">
                اکسسوری
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">کیف چرم دستی</h1>
            <div className="flex items-center gap-2 text-sm tracking-normal text-muted-foreground">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`size-4 ${i < 4 ? "fill-current" : ""}`}
                  />
                ))}
              </div>
              <span>امتیاز ۴٫۶ از {toFa(128)} نظر</span>
            </div>
            <p className="text-xl tracking-normal">
              <span className="font-semibold">۳٬۱۵۰٬۰۰۰</span>{" "}
              <span className="text-base text-muted-foreground">تومان</span>
            </p>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            چرم طبیعی، دوخت دستی و فضای کافی برای لپ‌تاپ ۱۳ اینچ و وسایل روزمره.
          </p>

          <div className="space-y-3">
            <Label>رنگ</Label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setColor(item.id)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                    color === item.id
                      ? "border-primary bg-primary/5"
                      : "hover:bg-muted"
                  }`}
                >
                  <span
                    className={`size-3.5 rounded-full border ${item.swatch}`}
                  />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>اندازه</Label>
              <Select items={[...SIZE_ITEMS]} defaultValue="یک‌سایز">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="اندازه" />
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
            <div className="space-y-2">
              <Label>تعداد</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="کاهش تعداد"
                >
                  <MinusIcon className="size-4" />
                </Button>
                <span className="w-10 text-center tracking-normal">
                  {toFa(qty)}
                </span>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  aria-label="افزایش تعداد"
                >
                  <PlusIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <Button type="button" size="lg" className="w-full">
            افزودن به سبد
          </Button>
        </div>
      </div>
    </section>
  )
}
