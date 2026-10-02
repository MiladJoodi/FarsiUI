"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, StarIcon } from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"

const COLORS = [
  { id: "black", label: "مشکی مات", swatch: "bg-zinc-900" },
  { id: "sand", label: "بژ شنی", swatch: "bg-amber-200" },
  { id: "olive", label: "زیتونی", swatch: "bg-green-800" },
] as const

export function ProductDetailsVariants() {
  const [color, setColor] =
    React.useState<(typeof COLORS)[number]["id"]>("black")
  const [qty, setQty] = React.useState(1)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border bg-muted">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&auto=format&fit=crop&q=80"
            alt="کیف چرم دستی"
            className="size-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>جدید</Badge>
              <Badge variant="outline">اکسسوری</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">کیف چرم دستی</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`size-4 ${i < 4 ? "fill-current" : ""}`}
                  />
                ))}
              </div>
              <span>
                امتیاز{" "}
                <bdi dir="ltr" className="tabular-nums">
                  ۴٫۶
                </bdi>{" "}
                از{" "}
                <bdi dir="ltr" className="tabular-nums">
                  ۱۲۸
                </bdi>{" "}
                نظر
              </span>
            </div>
            <p className="text-xl">
              <bdi dir="ltr" className="font-semibold tabular-nums">
                ۳٬۱۵۰٬۰۰۰
              </bdi>{" "}
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
              <Select defaultValue="one">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="اندازه" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="one">یک‌سایز</SelectItem>
                  <SelectItem value="travel">نسخهٔ سفر</SelectItem>
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
                <span className="w-10 text-center tabular-nums">
                  <bdi dir="ltr">{qty}</bdi>
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

          <Button size="lg" className="w-full">
            افزودن به سبد
          </Button>
        </div>
      </div>
    </section>
  )
}
