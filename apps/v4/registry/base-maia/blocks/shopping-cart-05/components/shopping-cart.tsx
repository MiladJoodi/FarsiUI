"use client"

import * as React from "react"
import {
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

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
    name: "کیف چرم دستی",
    variant: "قهوه‌ای",
    price: 3150000,
    priceLabel: "۳٬۱۵۰٬۰۰۰",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "لامپ رومیزی مینیمال",
    variant: "سفید",
    price: 1850000,
    priceLabel: "۱٬۸۵۰٬۰۰۰",
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop&q=80",
  },
]

const SUGGESTED = [
  {
    name: "ماگ سرامیکی",
    price: "۴۸۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80",
  },
] as const

const SHIPPING_ITEMS = [
  { value: "عادی", label: "عادی · رایگان" },
  { value: "پیشتاز", label: "پیشتاز · ۲۵۰٬۰۰۰ تومان" },
  { value: "حضوری", label: "تحویل حضوری · رایگان" },
] as const

function formatFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function ShoppingCartHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [coupon, setCoupon] = React.useState("")
  const [applied, setApplied] = React.useState(false)
  const [shipping, setShipping] = React.useState("عادی")
  const [giftWrap, setGiftWrap] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shippingCost = shipping === "پیشتاز" ? 250000 : 0
  const discount = applied ? Math.round(subtotal * 0.1) : 0
  const giftCost = giftWrap ? 150000 : 0
  const total = subtotal - discount + shippingCost + giftCost
  const count = items.reduce((sum, item) => sum + item.qty, 0)

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
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge variant="secondary" className="mb-3">
            فروشگاه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">سبد خرید کامل</h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {formatFa(count)} کالا · تخفیف، ارسال و رسید ایمیل
          </p>
        </div>
        <Button type="button" variant="outline">
          <ShoppingBagIcon className="size-4" />
          ادامه خرید
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="divide-y overflow-hidden rounded-xl border bg-card">
            {items.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
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
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.variant}
                        </p>
                        <p className="mt-1 text-sm tracking-normal">
                          {item.priceLabel} تومان
                        </p>
                      </div>
                      <Popover
                        open={openId === item.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? item.id : null)
                        }
                      >
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
                          <span className="sr-only">منوی آیتم</span>
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="end"
                          className="w-44 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            ذخیره برای بعد
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            مشاهده محصول
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => {
                              setItems((prev) =>
                                prev.filter((x) => x.id !== item.id)
                              )
                              setOpenId(null)
                            }}
                          >
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
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
              ))
            )}
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium">
              شاید این‌ها را هم بخواهید
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {SUGGESTED.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl border bg-card p-3"
                >
                  <div className="size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {item.price} تومان
                    </p>
                  </div>
                  <Button type="button" size="sm" variant="outline">
                    افزودن
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">خلاصه سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-2">
                <Label>کد تخفیف</Label>
                <form
                  className="flex gap-2"
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
                    placeholder="کد تخفیف را وارد کنید"
                    dir="rtl"
                    className="flex-1"
                  />
                  <Button type="submit" variant="outline">
                    اعمال
                  </Button>
                </form>
                {applied && (
                  <Badge variant="outline" className="border">
                    ۱۰٪ تخفیف اعمال شد
                  </Badge>
                )}
              </div>

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

              <div className="flex items-center justify-between gap-4 rounded-xl border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="gift5">بسته‌بندی هدیه</Label>
                  <p className="text-xs tracking-normal text-muted-foreground">
                    ۱۵۰٬۰۰۰ تومان
                  </p>
                </div>
                <Switch
                  id="gift5"
                  checked={giftWrap}
                  onCheckedChange={setGiftWrap}
                />
              </div>

              <Separator />

              <div className="space-y-2 tracking-normal">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">جمع جزء</span>
                  <span>{formatFa(subtotal)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">تخفیف</span>
                  <span>{formatFa(discount)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">ارسال</span>
                  <span>
                    {shippingCost === 0 ? "رایگان" : formatFa(shippingCost)}
                  </span>
                </div>
                {giftWrap && (
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">هدیه</span>
                    <span>{formatFa(giftCost)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between gap-4 text-base font-semibold">
                  <span>قابل پرداخت</span>
                  <span>{formatFa(total)} تومان</span>
                </div>
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

          <Card dir="rtl" lang="fa" className="bg-card">
            <CardHeader className="text-start">
              <CardTitle className="text-base">ارسال رسید به ایمیل</CardTitle>
              <CardDescription>
                نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" placeholder="نام گیرنده" dir="rtl" />
                <Input
                  type="email"
                  required
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <Button type="submit" variant="outline" className="w-full">
                  ذخیره ایمیل رسید
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
