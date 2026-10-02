"use client"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
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
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

export function AccountBillingInvoices() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فاکتور و تمدید</CardTitle>
          <CardDescription>دوره صورت‌حساب، ارز و ایمیل فاکتور</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ab3-cycle">دوره صورت‌حساب</FieldLabel>
              <Select defaultValue="monthly">
                <SelectTrigger id="ab3-cycle" className="w-full" dir="rtl">
                  <SelectValue placeholder="دوره را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="monthly">ماهانه</SelectItem>
                  <SelectItem value="yearly">سالانه</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ab3-currency">ارز نمایش</FieldLabel>
              <Select defaultValue="irr">
                <SelectTrigger id="ab3-currency" className="w-full" dir="rtl">
                  <SelectValue placeholder="ارز" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="irr">تومان</SelectItem>
                  <SelectItem value="usd">دلار</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ab3-company">نام شرکت</FieldLabel>
              <Input
                id="ab3-company"
                defaultValue="شرکت نمونه"
                placeholder="نام شرکت یا شخص"
                dir="rtl"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="ab3-email">ایمیل فاکتور</FieldLabel>
              <Input
                id="ab3-email"
                type="email"
                defaultValue="billing@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>
                PDF فاکتور به این آدرس ارسال می‌شود
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="ab3-tax">شناسه مالیاتی</FieldLabel>
              <Input
                id="ab3-tax"
                placeholder="مثلاً ۱۲۳۴۵۶۷۸۹۰۱"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </FieldGroup>

          <Separator />

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="ab3-auto">تمدید خودکار</Label>
              <p className="text-sm text-muted-foreground">
                در پایان دوره دوباره شارژ شود
              </p>
            </div>
            <Switch id="ab3-auto" defaultChecked />
          </div>

          <div className="rounded-lg border p-3 text-sm">
            <div className="flex items-center justify-between">
              <span>فاکتور اخیر</span>
              <Badge variant="secondary">پرداخت‌شده</Badge>
            </div>
            <p className="mt-2 text-muted-foreground tabular-nums">
              <bdi dir="ltr">INV-1404-07-12</bdi> ·{" "}
              <bdi dir="ltr">۱٬۳۲۰٬۰۰۰</bdi> تومان
            </p>
          </div>

          <Button className="w-full">ذخیره تنظیمات</Button>
        </CardContent>
      </Card>
    </section>
  )
}
