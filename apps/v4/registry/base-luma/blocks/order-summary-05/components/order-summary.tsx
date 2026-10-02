"use client"

import * as React from "react"
import {
  CheckIcon,
  MoreHorizontalIcon,
  PackageIcon,
  TruckIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const ITEMS = [
  {
    name: "هدفون بی‌سیم آرام",
    qty: "۱",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    qty: "۱",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&auto=format&fit=crop&q=80",
  },
] as const

const TIMELINE = [
  { label: "ثبت سفارش", done: true, time: "۱۴:۱۰" },
  { label: "تأیید پرداخت", done: true, time: "۱۴:۱۲" },
  { label: "آماده‌سازی انبار", done: true, time: "۱۵:۴۰" },
  { label: "تحویل به پست", done: false, time: "—" },
] as const

export function OrderSummaryHub() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            تأیید سفارش
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            سفارش شما ثبت شد
          </h2>
          <p className="mt-2 text-muted-foreground">
            شماره سفارش{" "}
            <bdi dir="ltr" className="font-medium text-foreground">
              #۱۴۰۴۰۷۲۳۰۹
            </bdi>
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            <MoreHorizontalIcon className="size-4" />
            عملیات
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="end" className="w-44">
            <DropdownMenuLabel>رسید</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>دانلود PDF</DropdownMenuItem>
            <DropdownMenuItem>چاپ</DropdownMenuItem>
            <DropdownMenuItem>پیگیری مرسوله</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">اقلام سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ITEMS.map((item) => (
                <div key={item.name} className="flex gap-3">
                  <div className="size-16 shrink-0 overflow-hidden rounded-lg border bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      تعداد <bdi dir="ltr">{item.qty}</bdi>
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    <bdi dir="ltr" className="tabular-nums">
                      {item.price}
                    </bdi>
                  </p>
                </div>
              ))}
              <Separator />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">جمع جزء</span>
                  <bdi dir="ltr" className="tabular-nums">
                    ۷٬۴۴۰٬۰۰۰
                  </bdi>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">ارسال پیشتاز</span>
                  <bdi dir="ltr" className="tabular-nums">
                    ۲۵۰٬۰۰۰
                  </bdi>
                </div>
                <div className="flex justify-between gap-3 font-semibold">
                  <span>پرداخت‌شده</span>
                  <span>
                    <bdi dir="ltr" className="tabular-nums">
                      ۷٬۶۹۰٬۰۰۰
                    </bdi>{" "}
                    تومان
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">وضعیت ارسال</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {TIMELINE.map((step, index) => (
                  <li key={step.label} className="flex gap-3">
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border ${
                        step.done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.done ? (
                        <CheckIcon className="size-3.5" />
                      ) : index === 2 ? (
                        <PackageIcon className="size-3.5" />
                      ) : (
                        <TruckIcon className="size-3.5" />
                      )}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium">{step.label}</p>
                        <bdi
                          dir="ltr"
                          className="text-xs text-muted-foreground"
                        >
                          {step.time}
                        </bdi>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">تحویل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">گیرنده</p>
                <p className="font-medium">سارا محمدی</p>
              </div>
              <div>
                <p className="text-muted-foreground">آدرس</p>
                <p>تهران، سعادت‌آباد، پلاک ۱۲، واحد ۴</p>
              </div>
              <div>
                <p className="text-muted-foreground">ایمیل رسید</p>
                <p dir="ltr" className="text-start">
                  sara@example.com
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">روش ارسال</p>
                <Select defaultValue="express">
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="روش ارسال" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="express">پیشتاز</SelectItem>
                    <SelectItem value="standard">عادی</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card dir="rtl" lang="fa">
            <CardHeader className="text-start">
              <CardTitle className="text-base">
                ارسال رسید به ایمیل دیگر
              </CardTitle>
              <CardDescription>
                نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" placeholder="نام دریافت‌کننده" dir="rtl" />
                <Input
                  type="email"
                  required
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <Button type="submit" className="w-full" variant="outline">
                  ارسال رسید
                </Button>
              </form>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            بازگشت به فروشگاه
          </Button>
        </div>
      </div>
    </section>
  )
}
