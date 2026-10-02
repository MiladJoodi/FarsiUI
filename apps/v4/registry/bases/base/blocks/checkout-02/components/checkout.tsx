"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const SUMMARY = [
  { name: "هدفون بی‌سیم آرام", price: "۴٬۲۹۰٬۰۰۰" },
  { name: "کیف چرم دستی", price: "۳٬۱۵۰٬۰۰۰" },
] as const

export function CheckoutSplit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">تسویه‌حساب</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          فرم ارسال و خلاصه سفارش در دو ستون
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">اطلاعات ارسال</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="c2-name">نام گیرنده</FieldLabel>
                  <Input
                    id="c2-name"
                    placeholder="نام و نام خانوادگی"
                    dir="rtl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c2-phone">موبایل</FieldLabel>
                  <Input
                    id="c2-phone"
                    type="tel"
                    placeholder="0912•••••••"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c2-city">استان</FieldLabel>
                  <Select defaultValue="tehran">
                    <SelectTrigger id="c2-city" className="w-full" dir="rtl">
                      <SelectValue placeholder="استان را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="tehran">تهران</SelectItem>
                      <SelectItem value="isfahan">اصفهان</SelectItem>
                      <SelectItem value="shiraz">فارس</SelectItem>
                      <SelectItem value="mashhad">خراسان رضوی</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="c2-address">آدرس کامل</FieldLabel>
                  <Input
                    id="c2-address"
                    placeholder="خیابان، کوچه، پلاک، واحد"
                    dir="rtl"
                  />
                </Field>
              </FieldGroup>

              <div className="space-y-3">
                <Label>روش پرداخت</Label>
                <RadioGroup defaultValue="online" className="gap-3">
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="online" id="pay-online" />
                    <Label htmlFor="pay-online" className="font-normal">
                      درگاه آنلاین
                    </Label>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="cod" id="pay-cod" />
                    <Label htmlFor="pay-cod" className="font-normal">
                      پرداخت در محل
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">سفارش شما</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {SUMMARY.map((item) => (
              <div key={item.name} className="flex justify-between gap-3">
                <span className="text-muted-foreground">{item.name}</span>
                <span>
                  <bdi dir="ltr" className="tabular-nums">
                    {item.price}
                  </bdi>
                </span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between gap-3 font-semibold">
              <span>جمع کل</span>
              <span>
                <bdi dir="ltr" className="tabular-nums">
                  ۷٬۴۴۰٬۰۰۰
                </bdi>{" "}
                تومان
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              تأیید و پرداخت
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
