"use client"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/base-luma/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const SUMMARY = [
  { name: "هدفون بی‌سیم آرام", price: "۴٬۲۹۰٬۰۰۰" },
  { name: "کیف چرم دستی", price: "۳٬۱۵۰٬۰۰۰" },
] as const

const PROVINCE_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "فارس", label: "فارس" },
  { value: "خراسان رضوی", label: "خراسان رضوی" },
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
        <Card className="bg-card">
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
                    placeholder="۰۹۱۲•••••••"
                    dir="ltr"
                    className="text-start tracking-normal"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c2-city">استان</FieldLabel>
                  <Select items={[...PROVINCE_ITEMS]} defaultValue="تهران">
                    <SelectTrigger id="c2-city" className="w-full" dir="rtl">
                      <SelectValue placeholder="استان را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {PROVINCE_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
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
                <RadioGroup defaultValue="درگاه آنلاین" className="gap-3">
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="درگاه آنلاین" id="pay-online" />
                    <Label htmlFor="pay-online" className="font-normal">
                      درگاه آنلاین
                    </Label>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="پرداخت در محل" id="pay-cod" />
                    <Label htmlFor="pay-cod" className="font-normal">
                      پرداخت در محل
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-base">سفارش شما</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {SUMMARY.map((item) => (
              <div
                key={item.name}
                className="flex justify-between gap-3 tracking-normal"
              >
                <span className="text-muted-foreground">{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between gap-3 font-semibold tracking-normal">
              <span>جمع کل</span>
              <span>۷٬۴۴۰٬۰۰۰ تومان</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button" className="w-full" size="lg">
              تأیید و پرداخت
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
