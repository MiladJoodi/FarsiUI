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
import { Textarea } from "@/registry/bases/base/ui/textarea"

export function InvoiceCreateForm() {
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
          <CardTitle>صدور فاکتور</CardTitle>
          <CardDescription>
            شماره، ایمیل و مبالغ به‌صورت LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="inv3-no">شماره فاکتور</FieldLabel>
            <Input
              id="inv3-no"
              defaultValue="INV-1043"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="inv3-customer">خریدار</FieldLabel>
            <Input
              id="inv3-customer"
              placeholder="نام شخص یا شرکت"
              dir="rtl"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="inv3-email">ایمیل</FieldLabel>
            <Input
              id="inv3-email"
              type="email"
              placeholder="billing@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="inv3-issue">تاریخ صدور</FieldLabel>
              <Input
                id="inv3-issue"
                placeholder="۱۴۰۵/۰۷/۱۰"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>تاریخ شمسی</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="inv3-due">سررسید</FieldLabel>
              <Input
                id="inv3-due"
                placeholder="۱۴۰۵/۰۷/۲۰"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel>وضعیت</FieldLabel>
            <Select defaultValue="draft">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="draft">پیش‌نویس</SelectItem>
                <SelectItem value="sent">ارسال‌شده</SelectItem>
                <SelectItem value="paid">پرداخت‌شده</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="inv3-item">شرح ردیف</FieldLabel>
            <Input
              id="inv3-item"
              placeholder="مثلاً اشتراک حرفه‌ای"
              dir="rtl"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="inv3-qty">تعداد</FieldLabel>
              <Input
                id="inv3-qty"
                type="number"
                defaultValue={1}
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="inv3-amount">مبلغ (تومان)</FieldLabel>
              <Input
                id="inv3-amount"
                placeholder="499000"
                dir="ltr"
                className="text-start"
                inputMode="numeric"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="inv3-notes">یادداشت</FieldLabel>
            <Textarea
              id="inv3-notes"
              placeholder="شرایط پرداخت…"
              dir="rtl"
              rows={3}
            />
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="inv3-tax">اعمال مالیات ۹٪</Label>
            <Switch id="inv3-tax" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">صدور فاکتور</Button>
          <Button variant="outline" className="flex-1">
            ذخیره پیش‌نویس
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
