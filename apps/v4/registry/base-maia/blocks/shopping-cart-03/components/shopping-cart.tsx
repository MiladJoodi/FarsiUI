"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"

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
    name: "کفش دویدن سبک",
    price: 5400000,
    priceLabel: "۵٬۴۰۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "کیف چرم دستی",
    price: 3150000,
    priceLabel: "۳٬۱۵۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80",
  },
]

const SHIPPING_ITEMS = [
  { value: "عادی", label: "عادی · رایگان" },
  { value: "پیشتاز", label: "پیشتاز · ۲۵۰٬۰۰۰ تومان" },
] as const

function formatFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function ShoppingCartCoupon() {
  const [items, setItems] = React.useState(INITIAL)
  const [coupon, setCoupon] = React.useState("")
  const [applied, setApplied] = React.useState(false)
  const [shipping, setShipping] = React.useState("عادی")

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shippingCost = shipping === "پیشتاز" ? 250000 : 0
  const discount = applied ? Math.round(subtotal * 0.1) : 0
  const total = subtotal - discount + shippingCost

  function setQty(id: string, qty: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, Math.min(9, qty)) } : item
      )
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">سبد با کد تخفیف</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          کد تخفیف فارسی و روش ارسال Select راست‌چین
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="divide-y overflow-hidden rounded-xl border bg-card">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4">
                <div className="size-20 shrink-0 overflow-hidden rounded-lg border bg-muted">
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
                      onClick={() =>
                        setItems((prev) => prev.filter((x) => x.id !== item.id))
                      }
                      aria-label="حذف"
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
                    >
                      <PlusIcon className="size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">کد تخفیف</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault()
                  setApplied(coupon.trim().length > 0)
                }}
              >
                <Input
                  value={coupon}
                  onChange={(e) => {
                    setCoupon(e.target.value)
                    setApplied(false)
                  }}
                  placeholder="مثلاً نوروز۱۴۰۵"
                  dir="rtl"
                  className="sm:flex-1"
                />
                <Button type="submit" variant="outline">
                  اعمال کد
                </Button>
              </form>
              {applied && (
                <Badge variant="outline" className="mt-3 border">
                  ۱۰٪ تخفیف اعمال شد
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-base">پرداخت</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="space-y-2">
              <Label>روش ارسال</Label>
              <Select
                items={[...SHIPPING_ITEMS]}
                value={shipping}
                onValueChange={(value) => {
                  if (SHIPPING_ITEMS.some((item) => item.value === value)) {
                    setShipping(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {SHIPPING_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex justify-between gap-4 tracking-normal">
              <span className="text-muted-foreground">جمع جزء</span>
              <span>{formatFa(subtotal)}</span>
            </div>
            <div className="flex justify-between gap-4 tracking-normal">
              <span className="text-muted-foreground">تخفیف</span>
              <span>{formatFa(discount)}</span>
            </div>
            <div className="flex justify-between gap-4 tracking-normal">
              <span className="text-muted-foreground">ارسال</span>
              <span>
                {shippingCost === 0 ? "رایگان" : formatFa(shippingCost)}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between gap-4 font-semibold tracking-normal">
              <span>قابل پرداخت</span>
              <span>{formatFa(total)} تومان</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button" className="w-full" size="lg">
              ادامه به تسویه
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
