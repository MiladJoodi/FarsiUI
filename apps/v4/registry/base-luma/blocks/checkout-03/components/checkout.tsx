"use client"

import * as React from "react"

import { Badge } from "@/registry/base-luma/ui/badge"
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

const STEPS = ["تماس", "ارسال", "پرداخت"] as const

const CITY_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "کرج", label: "کرج" },
  { value: "اصفهان", label: "اصفهان" },
] as const

export function CheckoutSteps() {
  const [step, setStep] = React.useState(0)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">تسویه چندمرحله‌ای</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          تماس، ارسال، پرداخت
        </p>
        <ol className="mt-4 flex gap-2">
          {STEPS.map((label, index) => (
            <li key={label} className="flex-1">
              <button
                type="button"
                onClick={() => setStep(index)}
                className={`flex w-full flex-col items-center gap-1 rounded-lg border px-2 py-2 text-xs transition ${
                  step === index
                    ? "border-primary bg-primary/5 font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <Badge
                  variant={step === index ? "default" : "secondary"}
                  className="size-6 justify-center rounded-full p-0"
                >
                  {["۱", "۲", "۳"][index]}
                </Badge>
                {label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-base">{STEPS[step]}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="c3-name">نام</FieldLabel>
                <Input
                  id="c3-name"
                  placeholder="نام و نام خانوادگی"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c3-email">ایمیل</FieldLabel>
                <Input
                  id="c3-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c3-phone">موبایل</FieldLabel>
                <Input
                  id="c3-phone"
                  type="tel"
                  placeholder="۰۹۱۲•••••••"
                  dir="ltr"
                  className="text-start tracking-normal"
                />
              </Field>
            </FieldGroup>
          )}

          {step === 1 && (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="c3-city">شهر</FieldLabel>
                <Select items={[...CITY_ITEMS]} defaultValue="تهران">
                  <SelectTrigger id="c3-city" className="w-full" dir="rtl">
                    <SelectValue placeholder="شهر" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {CITY_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="c3-address">آدرس</FieldLabel>
                <Input
                  id="c3-address"
                  placeholder="خیابان، پلاک، واحد"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c3-postal">کد پستی</FieldLabel>
                <Input
                  id="c3-postal"
                  placeholder="۱۲۳۴۵۶۷۸۹۰"
                  dir="ltr"
                  className="text-start tracking-normal"
                />
              </Field>
              <div className="space-y-2">
                <Label>روش ارسال</Label>
                <RadioGroup defaultValue="عادی" className="gap-2">
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="عادی" id="ship-std" />
                    <Label htmlFor="ship-std" className="font-normal">
                      عادی · رایگان
                    </Label>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border p-3">
                    <RadioGroupItem value="پیشتاز" id="ship-exp" />
                    <Label
                      htmlFor="ship-exp"
                      className="font-normal tracking-normal"
                    >
                      پیشتاز · ۲۵۰٬۰۰۰ تومان
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </FieldGroup>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <RadioGroup defaultValue="درگاه آنلاین" className="gap-2">
                <div className="flex items-center gap-3 rounded-xl border p-3">
                  <RadioGroupItem value="درگاه آنلاین" id="c3-online" />
                  <Label htmlFor="c3-online" className="font-normal">
                    درگاه آنلاین
                  </Label>
                </div>
                <div className="flex items-center gap-3 rounded-xl border p-3">
                  <RadioGroupItem value="کیف پول" id="c3-wallet" />
                  <Label htmlFor="c3-wallet" className="font-normal">
                    کیف پول FarsiUI
                  </Label>
                </div>
              </RadioGroup>
              <p className="text-sm tracking-normal text-muted-foreground">
                مبلغ:{" "}
                <span className="font-medium text-foreground">۷٬۴۴۰٬۰۰۰</span>{" "}
                تومان
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            قبلی
          </Button>
          <Button
            type="button"
            className="flex-1"
            onClick={() => {
              if (step < STEPS.length - 1) setStep((s) => s + 1)
            }}
          >
            {step === STEPS.length - 1 ? "پرداخت نهایی" : "ادامه"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
