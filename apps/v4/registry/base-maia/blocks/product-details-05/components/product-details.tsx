"use client"

import * as React from "react"
import { HeartIcon, MinusIcon, PlusIcon, Share2Icon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-maia/ui/accordion"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
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

const IMAGES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
] as const

const RELATED = [
  {
    name: "کیف چرم دستی",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "هدفون بی‌سیم آرام",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
  },
] as const

export function ProductDetailsHub() {
  const [active, setActive] = React.useState(0)
  const [qty, setQty] = React.useState(1)
  const [liked, setLiked] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-2xl border bg-muted">
            <img
              src={IMAGES[active]}
              alt="کفش دویدن سبک"
              className="size-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {IMAGES.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className={`aspect-square overflow-hidden rounded-lg border ${
                  active === index ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge>پرفروش</Badge>
              <Badge variant="outline">پوشیدنی</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              کفش دویدن سبک
            </h1>
            <p className="text-xl">
              <bdi dir="ltr" className="font-semibold tabular-nums">
                ۵٬۴۰۰٬۰۰۰
              </bdi>{" "}
              <span className="text-base text-muted-foreground">تومان</span>
            </p>
            <p className="leading-relaxed text-muted-foreground">
              رویهٔ تنفس‌پذیر، کفی ضربه‌گیر و طراحی سبک برای دویدن شهری و تمرین
              روزانه.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>سایز</Label>
              <Select defaultValue="42">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="سایز را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="40">۴۰</SelectItem>
                  <SelectItem value="41">۴۱</SelectItem>
                  <SelectItem value="42">۴۲</SelectItem>
                  <SelectItem value="43">۴۳</SelectItem>
                  <SelectItem value="44">۴۴</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>رنگ</Label>
              <Select defaultValue="red">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="رنگ" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="red">قرمز آتشی</SelectItem>
                  <SelectItem value="black">مشکی</SelectItem>
                  <SelectItem value="white">سفید</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
              <span className="w-10 text-center">
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

          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="flex-1">
              افزودن به سبد
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => setLiked((v) => !v)}
              aria-label={liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}
            >
              <HeartIcon
                className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
              />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button size="lg" variant="outline" />}
              >
                <Share2Icon className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                dir="rtl"
                lang="fa"
                align="end"
                className="w-40"
              >
                <DropdownMenuLabel>اشتراک</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>کپی لینک</DropdownMenuItem>
                <DropdownMenuItem>تلگرام</DropdownMenuItem>
                <DropdownMenuItem>ایمیل</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Accordion
            type="single"
            collapsible
            dir="rtl"
            lang="fa"
            className="w-full"
          >
            <AccordionItem value="ship">
              <AccordionTrigger className="text-start">
                ارسال و مرجوعی
              </AccordionTrigger>
              <AccordionContent>
                ارسال رایگان بالای ۲ میلیون تومان؛ مرجوعی تا ۷ روز در صورت سلامت
                بسته‌بندی.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger className="text-start">
                نگهداری
              </AccordionTrigger>
              <AccordionContent>
                با پارچهٔ مرطوب تمیز کنید؛ از خشک‌کن و حرارت مستقیم خودداری
                کنید.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger className="text-start">
                راهنمای سایز
              </AccordionTrigger>
              <AccordionContent>
                اگر بین دو سایز هستید، سایز بزرگ‌تر را انتخاب کنید. جدول پا را
                در صفحهٔ راهنما ببینید.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">محصولات مرتبط</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            پیشنهادهایی که معمولاً با هم خریداری می‌شوند
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {RELATED.map((item) => (
            <article key={item.name} className="flex flex-col gap-3">
              <div className="aspect-square overflow-hidden rounded-xl border bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {item.price}
                  </bdi>{" "}
                  تومان
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">موجود شد خبرم کن</CardTitle>
          <CardDescription>
            نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام شما"
              dir="rtl"
              className="sm:flex-1"
            />
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              ثبت اطلاع
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
