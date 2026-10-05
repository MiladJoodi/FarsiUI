"use client"

import * as React from "react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
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
import { Switch } from "@/registry/base-lyra/ui/switch"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

const STATUS_ITEMS = [
  { value: "پیش‌نویس", label: "پیش‌نویس" },
  { value: "ارسال‌شده", label: "ارسال‌شده" },
  { value: "پرداخت‌شده", label: "پرداخت‌شده" },
] as const

const QTY_ITEMS = [
  { value: "۱", label: "۱" },
  { value: "۲", label: "۲" },
  { value: "۳", label: "۳" },
  { value: "۵", label: "۵" },
  { value: "۱۰", label: "۱۰" },
] as const

type StatusValue = (typeof STATUS_ITEMS)[number]["value"]
type QtyValue = (typeof QTY_ITEMS)[number]["value"]

function toFaDigits(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

function formatAmount(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/\D/g, "")
  if (!digits) return ""
  return toFaDigits(Number(digits).toLocaleString("en-US")).replace(/,/g, "٬")
}

export default function InvoiceCreateForm() {
  const [status, setStatus] = React.useState<StatusValue>("پیش‌نویس")
  const [qty, setQty] = React.useState<QtyValue>("۱")
  const [amount, setAmount] = React.useState("")

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
          <CardDescription>شماره، تاریخ و مبالغ فارسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="inv3-no">شماره فاکتور</FieldLabel>
            <Input
              id="inv3-no"
              defaultValue="فاکتور-۱۰۴۳"
              dir="rtl"
              className="text-end tracking-normal"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="inv3-customer">خریدار</FieldLabel>
            <Input id="inv3-customer" placeholder="نام شخص یا شرکت" dir="rtl" />
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
                dir="rtl"
                className="text-end tracking-normal"
              />
              <FieldDescription>تاریخ شمسی</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="inv3-due">سررسید</FieldLabel>
              <Input
                id="inv3-due"
                placeholder="۱۴۰۵/۰۷/۲۰"
                dir="rtl"
                className="text-end tracking-normal"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel>وضعیت</FieldLabel>
            <Select
              items={[...STATUS_ITEMS]}
              value={status}
              onValueChange={(value) => {
                if (STATUS_ITEMS.some((item) => item.value === value)) {
                  setStatus(value as StatusValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {STATUS_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
              <FieldLabel>تعداد</FieldLabel>
              <Select
                items={[...QTY_ITEMS]}
                value={qty}
                onValueChange={(value) => {
                  if (QTY_ITEMS.some((item) => item.value === value)) {
                    setQty(value as QtyValue)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="تعداد" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {QTY_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="inv3-amount">مبلغ (تومان)</FieldLabel>
              <Input
                id="inv3-amount"
                value={amount}
                onChange={(e) => setAmount(formatAmount(e.target.value))}
                placeholder="۴۹۹٬۰۰۰"
                dir="rtl"
                className="text-end tracking-normal"
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
