"use client"

import * as React from "react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Switch } from "@/registry/base-mira/ui/switch"

const TYPE_ITEMS = [
  { value: "کارت بانکی", label: "کارت بانکی" },
  { value: "کیف پول", label: "کیف پول" },
] as const

type TypeValue = (typeof TYPE_ITEMS)[number]["value"]

function toFaDigits(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

function formatCardNumber(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/\D/g, "")
    .slice(0, 16)
  const fa = toFaDigits(digits)
  return fa.match(/.{1,4}/g)?.join("-") ?? fa
}

function formatExp(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/\D/g, "")
    .slice(0, 4)
  const fa = toFaDigits(digits)
  if (fa.length <= 2) return fa
  return `${fa.slice(0, 2)}/${fa.slice(2)}`
}

export default function PaymentMethodsAddForm() {
  const [type, setType] = React.useState<TypeValue>("کارت بانکی")
  const [card, setCard] = React.useState("")
  const [exp, setExp] = React.useState("")
  const [cvv, setCvv] = React.useState("")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            جدید
          </Badge>
          <CardTitle>افزودن روش پرداخت</CardTitle>
          <CardDescription>شماره کارت و انقضا فارسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as TypeValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="pm3-label">برچسب</FieldLabel>
            <Input id="pm3-label" placeholder="مثلاً کارت شخصی" dir="rtl" />
          </Field>

          {type === "کارت بانکی" ? (
            <>
              <Field>
                <FieldLabel htmlFor="pm3-card">شماره کارت</FieldLabel>
                <Input
                  id="pm3-card"
                  value={card}
                  onChange={(e) => setCard(formatCardNumber(e.target.value))}
                  placeholder="۶۰۳۷-****-****-****"
                  dir="ltr"
                  className="text-start tracking-normal"
                  inputMode="numeric"
                  autoComplete="cc-number"
                />
                <FieldDescription className="tracking-normal">
                  ۱۶ رقم
                </FieldDescription>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="pm3-exp">انقضا</FieldLabel>
                  <Input
                    id="pm3-exp"
                    value={exp}
                    onChange={(e) => setExp(formatExp(e.target.value))}
                    placeholder="ماه/سال"
                    dir="rtl"
                    className="text-end tracking-normal"
                    autoComplete="cc-exp"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="pm3-cvv">CVV</FieldLabel>
                  <Input
                    id="pm3-cvv"
                    value={cvv}
                    onChange={(e) =>
                      setCvv(
                        toFaDigits(
                          e.target.value
                            .replace(/[۰-۹]/g, (d) =>
                              String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
                            )
                            .replace(/\D/g, "")
                            .slice(0, 4)
                        )
                      )
                    }
                    placeholder="۰۰۰"
                    dir="rtl"
                    className="text-end tracking-normal"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                  />
                </Field>
              </div>
            </>
          ) : null}

          <Field>
            <FieldLabel htmlFor="pm3-email">ایمیل رسید</FieldLabel>
            <Input
              id="pm3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="pm3-default">تنظیم به‌عنوان پیش‌فرض</Label>
            <Switch id="pm3-default" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">ذخیره</Button>
          <Button variant="outline" className="flex-1">
            لغو
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
