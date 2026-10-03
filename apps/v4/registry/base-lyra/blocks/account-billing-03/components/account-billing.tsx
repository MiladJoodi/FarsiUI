"use client"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

const CYCLE_ITEMS = [
  { value: "ماهانه", label: "ماهانه" },
  { value: "سالانه", label: "سالانه" },
] as const

const CURRENCY_ITEMS = [
  { value: "تومان", label: "تومان" },
  { value: "دلار", label: "دلار" },
] as const

export function AccountBillingInvoices() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>فاکتور و تمدید</CardTitle>
          <CardDescription>دوره صورت‌حساب، ارز و ایمیل فاکتور</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ab3-cycle">دوره صورت‌حساب</FieldLabel>
              <Select items={[...CYCLE_ITEMS]} defaultValue="ماهانه">
                <SelectTrigger id="ab3-cycle" className="w-full" dir="rtl">
                  <SelectValue placeholder="دوره را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {CYCLE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ab3-currency">ارز نمایش</FieldLabel>
              <Select items={[...CURRENCY_ITEMS]} defaultValue="تومان">
                <SelectTrigger id="ab3-currency" className="w-full" dir="rtl">
                  <SelectValue placeholder="ارز" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {CURRENCY_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
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
                dir="rtl"
                className="text-end tracking-normal"
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
              <Badge variant="outline" className="border">
                پرداخت‌شده
              </Badge>
            </div>
            <p className="mt-2 tracking-normal text-muted-foreground">
              فاکتور-۱۴۰۵-۰۷-۱۲ · ۱٬۳۲۰٬۰۰۰ تومان
            </p>
          </div>

          <Button type="button" className="w-full">
            ذخیره تنظیمات
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
