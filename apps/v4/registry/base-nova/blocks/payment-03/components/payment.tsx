"use client"

import * as React from "react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import { Label } from "@/registry/base-nova/ui/label"
import { Switch } from "@/registry/base-nova/ui/switch"

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

export function PaymentCardForm() {
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
          <Badge className="mb-2 w-fit">درگاه امن</Badge>
          <CardTitle>اطلاعات کارت</CardTitle>
          <CardDescription>شماره کارت و تاریخ انقضا فارسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="pay3-name">نام روی کارت</FieldLabel>
            <Input
              id="pay3-name"
              placeholder="مطابق کارت بانکی"
              dir="rtl"
              autoComplete="cc-name"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="pay3-card">شماره کارت</FieldLabel>
            <Input
              id="pay3-card"
              value={card}
              onChange={(e) => setCard(formatCardNumber(e.target.value))}
              placeholder="۶۰۳۷-****-****-****"
              dir="ltr"
              className="text-start tracking-normal"
              inputMode="numeric"
              autoComplete="cc-number"
            />
            <FieldDescription className="tracking-normal">
              ۱۶ رقم · بدون فاصله
            </FieldDescription>
          </Field>

          <FieldGroup className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="pay3-exp">انقضا</FieldLabel>
              <Input
                id="pay3-exp"
                value={exp}
                onChange={(e) => setExp(formatExp(e.target.value))}
                placeholder="ماه/سال"
                dir="rtl"
                className="text-end tracking-normal"
                autoComplete="cc-exp"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay3-cvv">CVV</FieldLabel>
              <Input
                id="pay3-cvv"
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
          </FieldGroup>

          <Field>
            <FieldLabel htmlFor="pay3-email">رسید ایمیل</FieldLabel>
            <Input
              id="pay3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
            <Label htmlFor="pay3-save">ذخیره کارت برای بعد</Label>
            <Switch id="pay3-save" />
          </div>

          <div className="rounded-lg border bg-muted/30 px-3 py-2 text-sm">
            <div className="flex justify-between gap-2 font-medium tracking-normal">
              <span>مبلغ</span>
              <span>۱٬۲۹۵٬۰۰۰ تومان</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">پرداخت</Button>
          <Button variant="outline" className="flex-1">
            انصراف
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
