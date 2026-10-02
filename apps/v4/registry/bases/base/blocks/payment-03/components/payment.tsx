"use client"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { Switch } from "@/registry/bases/base/ui/switch"

export function PaymentCardForm() {
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
          <CardDescription>
            شماره کارت، CVV و تاریخ انقضا LTR
          </CardDescription>
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
              placeholder="6037-****-****-****"
              dir="ltr"
              className="text-start tracking-wider"
              inputMode="numeric"
              autoComplete="cc-number"
            />
            <FieldDescription>۱۶ رقم · بدون فاصله</FieldDescription>
          </Field>

          <FieldGroup className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="pay3-exp">انقضا</FieldLabel>
              <Input
                id="pay3-exp"
                placeholder="MM/YY"
                dir="ltr"
                className="text-start"
                autoComplete="cc-exp"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay3-cvv">CVV</FieldLabel>
              <Input
                id="pay3-cvv"
                placeholder="***"
                dir="ltr"
                className="text-start"
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
            <div className="flex justify-between gap-2 font-medium">
              <span>مبلغ</span>
              <span>
                <bdi dir="ltr">۱٬۲۹۵٬۰۰۰</bdi> تومان
              </span>
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
