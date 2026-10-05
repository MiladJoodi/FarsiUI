"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Label } from "@/registry/base-vega/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"

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

const FORMAT_ITEMS = [
  { value: "چاپ A۴", label: "چاپ A۴" },
  { value: "فیش حرارتی", label: "فیش حرارتی" },
  { value: "فایل PDF", label: "فایل PDF" },
] as const

export default function OrderSummaryExpandable() {
  const [open, setOpen] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
          <div>
            <CardTitle className="text-base tracking-normal">
              سفارش #۱۴۰۵۰۷۲۱۰۱
            </CardTitle>
            <p className="mt-1 text-xs tracking-normal text-muted-foreground">
              ۲۱ مهر ۱۴۰۵ · ساعت ۱۴:۳۲
            </p>
          </div>
          <Badge variant="outline" className="border">
            پرداخت‌شده
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium tracking-normal"
          >
            <span>۲ کالا</span>
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
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {item.variant} · تعداد {item.qty}
                    </p>
                  </div>
                  <p className="text-sm tracking-normal">{item.price}</p>
                </div>
              ))}
            </div>
          )}

          <Separator />

          <div className="space-y-2">
            <Label>خروجی رسید</Label>
            <Select items={[...FORMAT_ITEMS]} defaultValue="چاپ A۴">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="فرمت چاپ" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FORMAT_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 text-sm tracking-normal">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع جزء</span>
              <span>۱۳٬۱۹۰٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">تخفیف</span>
              <span>۰</span>
            </div>
            <div className="flex justify-between gap-3 font-semibold">
              <span>پرداخت‌شده</span>
              <span>۱۳٬۱۹۰٬۰۰۰ تومان</span>
            </div>
          </div>

          <Button type="button" className="w-full" variant="outline">
            دانلود رسید
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
