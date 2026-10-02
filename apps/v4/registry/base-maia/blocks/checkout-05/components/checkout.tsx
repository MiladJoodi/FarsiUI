"use client"

import * as React from "react"

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
import { Checkbox } from "@/registry/base-maia/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/base-maia/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

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

export function CheckoutHub() {
  const [sameBilling, setSameBilling] = React.useState(true)
  const [newsletter, setNewsletter] = React.useState(true)
  const [coupon, setCoupon] = React.useState("")
  const [applied, setApplied] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          مرحله نهایی
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">تسویه‌حساب کامل</h2>
        <p className="mt-2 text-muted-foreground">
          اطلاعات گیرنده، ارسال، پرداخت و خلاصه سفارش
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">اطلاعات تماس</CardTitle>
              <CardDescription>
                نام فارسی راست‌چین؛ ایمیل و موبایل چپ‌چین
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="c5-name">نام و نام خانوادگی</FieldLabel>
                  <Input
                    id="c5-name"
                    placeholder="نام گیرنده"
                    dir="rtl"
                    defaultValue="سارا محمدی"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="c5-email">ایمیل</FieldLabel>
                    <Input
                      id="c5-email"
                      type="email"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                      defaultValue="sara@example.com"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="c5-phone">موبایل</FieldLabel>
                    <Input
                      id="c5-phone"
                      type="tel"
                      placeholder="0912•••••••"
                      dir="ltr"
                      className="text-start"
                      defaultValue="09121234567"
                    />
                  </Field>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="c5-news"
                    checked={newsletter}
                    onCheckedChange={(v) => setNewsletter(!!v)}
                  />
                  <Label htmlFor="c5-news" className="font-normal">
                    تخفیف‌ها را با ایمیل بگیرم
                  </Label>
                </div>
              </FieldGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">آدرس ارسال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="c5-province">استان</FieldLabel>
                    <Select defaultValue="tehran">
                      <SelectTrigger
                        id="c5-province"
                        className="w-full"
                        dir="rtl"
                      >
                        <SelectValue placeholder="استان" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        <SelectItem value="tehran">تهران</SelectItem>
                        <SelectItem value="alborz">البرز</SelectItem>
                        <SelectItem value="isfahan">اصفهان</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="c5-city">شهر</FieldLabel>
                    <Select defaultValue="tehran-city">
                      <SelectTrigger id="c5-city" className="w-full" dir="rtl">
                        <SelectValue placeholder="شهر" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        <SelectItem value="tehran-city">تهران</SelectItem>
                        <SelectItem value="shemiran">شمیرانات</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="c5-address">آدرس کامل</FieldLabel>
                  <Input
                    id="c5-address"
                    placeholder="خیابان، کوچه، پلاک، واحد"
                    dir="rtl"
                    defaultValue="سعادت‌آباد، خیابان سرو، پلاک ۱۲"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c5-postal">کد پستی</FieldLabel>
                  <Input
                    id="c5-postal"
                    placeholder="1234567890"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
              </FieldGroup>

              <div className="flex items-center justify-between gap-4 rounded-xl border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="c5-same">آدرس صورتحساب همین باشد</Label>
                  <p className="text-xs text-muted-foreground">
                    در غیر این صورت فرم جداگانه باز می‌شود
                  </p>
                </div>
                <Switch
                  id="c5-same"
                  checked={sameBilling}
                  onCheckedChange={setSameBilling}
                />
              </div>

              {!sameBilling && (
                <Field>
                  <FieldLabel htmlFor="c5-billing">آدرس صورتحساب</FieldLabel>
                  <Input
                    id="c5-billing"
                    placeholder="آدرس صورتحساب را وارد کنید"
                    dir="rtl"
                  />
                </Field>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">پرداخت و ارسال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>روش ارسال</Label>
                <RadioGroup defaultValue="standard" className="gap-2">
                  <div className="flex items-center justify-between gap-3 rounded-xl border p-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="standard" id="c5-std" />
                      <Label htmlFor="c5-std" className="font-normal">
                        عادی (۲–۴ روز)
                      </Label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      رایگان
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border p-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="express" id="c5-exp" />
                      <Label htmlFor="c5-exp" className="font-normal">
                        پیشتاز (۱ روز)
                      </Label>
                    </div>
                    <span className="text-sm">
                      <bdi dir="ltr" className="tabular-nums">
                        ۲۵۰٬۰۰۰
                      </bdi>
                    </span>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>روش پرداخت</Label>
                <Select defaultValue="online">
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="روش پرداخت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="online">درگاه آنلاین</SelectItem>
                    <SelectItem value="wallet">کیف پول</SelectItem>
                    <SelectItem value="cod">پرداخت در محل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">سفارش شما</CardTitle>
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
                      <p className="truncate text-sm font-medium">
                        {item.name}
                      </p>
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
                  placeholder="کد تخفیف"
                  dir="rtl"
                  className="flex-1"
                />
                <Button type="submit" variant="outline">
                  اعمال
                </Button>
              </form>
              {applied && <Badge variant="secondary">۱۰٪ تخفیف اعمال شد</Badge>}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">جمع جزء</span>
                  <bdi dir="ltr" className="tabular-nums">
                    ۷٬۴۴۰٬۰۰۰
                  </bdi>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">تخفیف</span>
                  <bdi dir="ltr" className="tabular-nums">
                    {applied ? "۷۴۴٬۰۰۰" : "۰"}
                  </bdi>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-muted-foreground">ارسال</span>
                  <span>رایگان</span>
                </div>
                <Separator />
                <div className="flex justify-between gap-3 text-base font-semibold">
                  <span>قابل پرداخت</span>
                  <span>
                    <bdi dir="ltr" className="tabular-nums">
                      {applied ? "۶٬۶۹۶٬۰۰۰" : "۷٬۴۴۰٬۰۰۰"}
                    </bdi>{" "}
                    تومان
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                ثبت سفارش و پرداخت
              </Button>
            </CardFooter>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            با ادامه، شرایط فروش و حریم خصوصی را می‌پذیرید.
          </p>
        </div>
      </div>
    </section>
  )
}
