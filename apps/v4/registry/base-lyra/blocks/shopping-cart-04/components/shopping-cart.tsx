"use client"

import * as React from "react"
import { MinusIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-lyra/ui/dropdown-menu"
import { Label } from "@/registry/base-lyra/ui/label"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

type CartItem = {
  id: string
  name: string
  variant: string
  price: number
  priceLabel: string
  qty: number
  image: string
}

const INITIAL: CartItem[] = [
  {
    id: "1",
    name: "هدفون بی‌سیم آرام",
    variant: "مشکی",
    price: 4290000,
    priceLabel: "۴٬۲۹۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "ساعت هوشمند نور",
    variant: "بند متوسط",
    price: 8900000,
    priceLabel: "۸٬۹۰۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
  },
]

function formatFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function ShoppingCartActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [saved, setSaved] = React.useState<CartItem[]>([])
  const [giftWrap, setGiftWrap] = React.useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const giftCost = giftWrap ? 150000 : 0
  const total = subtotal + giftCost

  function setQty(id: string, qty: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, Math.min(9, qty)) } : item
      )
    )
  }

  function moveToSaved(id: string) {
    const item = items.find((x) => x.id === id)
    if (!item) return
    setItems((prev) => prev.filter((x) => x.id !== id))
    setSaved((prev) => [...prev, item])
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">سبد با عملیات</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          منوی کشویی راست‌چین و بسته‌بندی هدیه
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="divide-y rounded-xl border">
            {items.length === 0 ? (
              <p className="p-8 text-center text-sm text-muted-foreground">
                سبد خالی است.
              </p>
            ) : (
              items.map((item) => (
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
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.variant}
                        </p>
                        <p className="mt-1 text-sm">
                          <bdi dir="ltr" className="tabular-nums">
                            {item.priceLabel}
                          </bdi>{" "}
                          تومان
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">منوی آیتم</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          dir="rtl"
                          lang="fa"
                          align="end"
                          className="w-44"
                        >
                          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => moveToSaved(item.id)}
                          >
                            ذخیره برای بعد
                          </DropdownMenuItem>
                          <DropdownMenuItem>ویرایش گزینه</DropdownMenuItem>
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => remove(item.id)}
                          >
                            حذف از سبد
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                      <span className="w-8 text-center text-sm">
                        <bdi dir="ltr">{item.qty}</bdi>
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
              ))
            )}
          </div>

          {saved.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                ذخیره‌شده برای بعد
              </h3>
              <div className="divide-y rounded-xl border">
                {saved.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="size-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <p className="truncate text-sm font-medium">
                        {item.name}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSaved((prev) => prev.filter((x) => x.id !== item.id))
                        setItems((prev) => [...prev, item])
                      }}
                    >
                      بازگردانی
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4 rounded-xl border p-3">
              <div className="space-y-0.5">
                <Label htmlFor="gift">بسته‌بندی هدیه</Label>
                <p className="text-xs text-muted-foreground">
                  ۱۵۰٬۰۰۰ تومان اضافه
                </p>
              </div>
              <Switch
                id="gift"
                checked={giftWrap}
                onCheckedChange={setGiftWrap}
              />
            </div>
            {giftWrap && <Badge variant="secondary">هدیه فعال شد</Badge>}
            <Separator />
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">جمع جزء</span>
              <bdi dir="ltr" className="tabular-nums">
                {formatFa(subtotal)}
              </bdi>
            </div>
            <div className="flex justify-between gap-4 font-semibold">
              <span>قابل پرداخت</span>
              <span>
                <bdi dir="ltr" className="tabular-nums">
                  {formatFa(total)}
                </bdi>{" "}
                تومان
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" disabled={items.length === 0}>
              تسویه‌حساب
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
