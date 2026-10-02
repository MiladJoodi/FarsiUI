"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

const ITEMS = [
  {
    name: "هدفون بی‌سیم آرام",
    variant: "مشکی",
    qty: "۱",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    variant: "بند متوسط",
    qty: "۱",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80",
  },
] as const

export function OrderSummaryExpandable() {
  const [open, setOpen] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
          <div>
            <CardTitle className="text-base">سفارش #۱۴۰۴۰۷۲۱۰۱</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              ۲۱ مهر ۱۴۰۴ · ساعت ۱۴:۳۲
            </p>
          </div>
          <Badge>پرداخت‌شده</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium"
          >
            <span>
              <bdi dir="ltr">۲</bdi> کالا
            </span>
            <ChevronDownIcon
              className={`size-4 transition ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="space-y-3">
              {ITEMS.map((item) => (
                <div key={item.name} className="flex gap-3">
                  <div className="size-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.variant} · تعداد <bdi dir="ltr">{item.qty}</bdi>
                    </p>
                  </div>
                  <p className="text-sm">
                    <bdi dir="ltr" className="tabular-nums">
                      {item.price}
                    </bdi>
                  </p>
                </div>
              ))}
            </div>
          )}

          <Separator />

          <div className="space-y-2">
            <Label>خروجی رسید</Label>
            <Select defaultValue="a4">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="فرمت چاپ" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="a4">چاپ A۴</SelectItem>
                <SelectItem value="thermal">فیش حرارتی</SelectItem>
                <SelectItem value="pdf">فایل PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع جزء</span>
              <bdi dir="ltr" className="tabular-nums">
                ۱۳٬۱۹۰٬۰۰۰
              </bdi>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">تخفیف</span>
              <bdi dir="ltr" className="tabular-nums">
                ۰
              </bdi>
            </div>
            <div className="flex justify-between gap-3 font-semibold">
              <span>پرداخت‌شده</span>
              <span>
                <bdi dir="ltr" className="tabular-nums">
                  ۱۳٬۱۹۰٬۰۰۰
                </bdi>{" "}
                تومان
              </span>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            دانلود رسید
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
