"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import { Separator } from "@/registry/base-nova/ui/separator"

const ITEMS = [
  {
    name: "کفش دویدن سبک",
    qty: "۱",
    price: "۵٬۴۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "ماگ سرامیکی دست‌ساز",
    qty: "۲",
    price: "۹۶۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&auto=format&fit=crop&q=80",
  },
] as const

export default function OrderSummaryActions() {
  const [status, setStatus] = React.useState("آماده ارسال")
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
          <div>
            <CardTitle className="text-base tracking-normal">
              سفارش #۱۴۰۵۰۷۲۲۱۸
            </CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              مشتری: علی رضایی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border">
              {status}
            </Badge>
            <Popover open={menuOpen} onOpenChange={setMenuOpen}>
              <PopoverTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8"
                  />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">منوی سفارش</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="end"
                className="w-44 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMenuOpen(false)}
                >
                  چاپ رسید
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMenuOpen(false)}
                >
                  ارسال ایمیل
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => {
                    setStatus("ارسال‌شده")
                    setMenuOpen(false)
                  }}
                >
                  علامت ارسال‌شده
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setMenuOpen(false)}
                >
                  لغو سفارش
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
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
                    تعداد {item.qty}
                  </p>
                </div>
                <p className="text-sm tracking-normal">{item.price}</p>
              </div>
            ))}
          </div>

          <Separator />

          <div className="rounded-xl border bg-muted/30 p-4 text-sm">
            <p className="font-medium">آدرس تحویل</p>
            <p className="mt-1 text-muted-foreground">
              تهران، ونک، خیابان گاندی، پلاک ۸
            </p>
            <p className="mt-2 tracking-normal text-muted-foreground">
              موبایل:{" "}
              <span dir="ltr" className="inline-block text-end">
                ۰۹۱۲•••••••
              </span>
            </p>
          </div>

          <div className="flex justify-between gap-3 text-sm font-semibold tracking-normal">
            <span>جمع پرداختی</span>
            <span>۶٬۳۶۰٬۰۰۰ تومان</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
