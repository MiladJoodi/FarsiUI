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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"

export function PaymentMethodsAddForm() {
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
          <CardDescription>
            شماره کارت و انقضا به‌صورت LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select defaultValue="card">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="card">کارت بانکی</SelectItem>
                <SelectItem value="wallet">کیف پول</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="pm3-label">برچسب</FieldLabel>
            <Input
              id="pm3-label"
              placeholder="مثلاً کارت شخصی"
              dir="rtl"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="pm3-card">شماره کارت</FieldLabel>
            <Input
              id="pm3-card"
              placeholder="6037-****-****-****"
              dir="ltr"
              className="text-start tracking-wider"
              inputMode="numeric"
              autoComplete="cc-number"
            />
            <FieldDescription>۱۶ رقم</FieldDescription>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="pm3-exp">انقضا</FieldLabel>
              <Input
                id="pm3-exp"
                placeholder="MM/YY"
                dir="ltr"
                className="text-start"
                autoComplete="cc-exp"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pm3-cvv">CVV</FieldLabel>
              <Input
                id="pm3-cvv"
                placeholder="***"
                dir="ltr"
                className="text-start"
                inputMode="numeric"
                autoComplete="cc-csc"
              />
            </Field>
          </div>

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
