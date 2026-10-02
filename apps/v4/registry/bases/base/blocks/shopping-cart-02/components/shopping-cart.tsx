"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

type CartItem = {
  id: string
  name: string
  price: number
  priceLabel: string
  qty: number
  image: string
}

const INITIAL: CartItem[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    price: 4290000,
    priceLabel: "۴٬۲۹۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "ساعت هوشمند نور",
    price: 8900000,
    priceLabel: "۸٬۹۰۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "ماگ سرامیکی دست‌ساز",
    price: 480000,
    priceLabel: "۴۸۰٬۰۰۰",
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=80",
  },
]

function formatFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function ShoppingCartEditable() {
  const [items, setItems] = React.useState(INITIAL)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  function setQty(id: string, qty: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, Math.min(9, qty)) } : item
      )
    )
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">سبد خرید</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          تغییر تعداد و حذف آیتم
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="divide-y overflow-hidden rounded-xl border bg-card">
          {items.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted-foreground">
              سبد خرید خالی است.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4">
                <div className="size-20 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-24">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                        {item.priceLabel} تومان
                      </p>
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => remove(item.id)}
                      aria-label="حذف از سبد"
                    >
                      <Trash2Icon className="size-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="size-8"
                      onClick={() => setQty(item.id, item.qty - 1)}
                      aria-label="کاهش تعداد"
                    >
                      <MinusIcon className="size-3.5" />
                    </Button>
                    <span className="w-8 text-center text-sm tracking-normal">
                      {formatFa(item.qty)}
                    </span>
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="size-8"
                      onClick={() => setQty(item.id, item.qty + 1)}
                      aria-label="افزایش تعداد"
                    >
                      <PlusIcon className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-base">خلاصه سفارش</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 tracking-normal">
              <span className="text-muted-foreground">جمع جزء</span>
              <span>{formatFa(subtotal)} تومان</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">هزینه ارسال</span>
              <span>رایگان</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-4 font-semibold tracking-normal">
              <span>مبلغ قابل پرداخت</span>
              <span>{formatFa(subtotal)} تومان</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="button"
              className="w-full"
              size="lg"
              disabled={items.length === 0}
            >
              تسویه‌حساب
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
