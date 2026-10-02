"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-vega/ui/dropdown-menu"
import { Separator } from "@/registry/base-vega/ui/separator"

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

export function OrderSummaryActions() {
  const [status, setStatus] = React.useState("آماده ارسال")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
          <div>
            <CardTitle className="text-base">سفارش #۱۴۰۴۰۷۲۲۱۸</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              مشتری: علی رضایی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{status}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8" />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">منوی سفارش</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                dir="rtl"
                lang="fa"
                align="end"
                className="w-44"
              >
                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>چاپ رسید</DropdownMenuItem>
                <DropdownMenuItem>ارسال ایمیل</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("ارسال‌شده")}>
                  علامت ارسال‌شده
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  لغو سفارش
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  <p className="text-xs text-muted-foreground">
                    تعداد <bdi dir="ltr">{item.qty}</bdi>
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

          <Separator />

          <div className="rounded-xl border bg-muted/30 p-4 text-sm">
            <p className="font-medium">آدرس تحویل</p>
            <p className="mt-1 text-muted-foreground">
              تهران، ونک، خیابان گاندی، پلاک ۸
            </p>
            <p className="mt-2 text-muted-foreground">
              موبایل:{" "}
              <span dir="ltr" className="inline-block text-start">
                0912•••••••
              </span>
            </p>
          </div>

          <div className="flex justify-between gap-3 text-sm font-semibold">
            <span>جمع پرداختی</span>
            <span>
              <bdi dir="ltr" className="tabular-nums">
                ۶٬۳۶۰٬۰۰۰
              </bdi>{" "}
              تومان
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
