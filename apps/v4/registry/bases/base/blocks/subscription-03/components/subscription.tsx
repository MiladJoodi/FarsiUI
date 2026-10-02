"use client"

import * as React from "react"

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

const NEXT_BILLING = new Date()
NEXT_BILLING.setDate(NEXT_BILLING.getDate() + 18)

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function SubscriptionManageForm() {
  const [cancelAtPeriodEnd, setCancelAtPeriodEnd] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            مدیریت
          </Badge>
          <CardTitle>تغییر یا لغو اشتراک</CardTitle>
          <CardDescription>
            طرح فعلی: حرفه‌ای · تمدید {formatJalali(NEXT_BILLING)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>عملیات</FieldLabel>
            <Select defaultValue="change">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="change">تغییر طرح</SelectItem>
                <SelectItem value="pause">توقف موقت</SelectItem>
                <SelectItem value="cancel">لغو اشتراک</SelectItem>
              </SelectContent>
            </Select>
            <FieldDescription>
              تغییر از طرح فعلی به طرح جدید
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel>طرح مقصد</FieldLabel>
            <Select defaultValue="team">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="starter">شروع</SelectItem>
                <SelectItem value="pro">حرفه‌ای (فعلی)</SelectItem>
                <SelectItem value="team">تیم</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>دوره صورت‌حساب</FieldLabel>
            <Select defaultValue="monthly">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="monthly">ماهانه</SelectItem>
                <SelectItem value="yearly">سالانه</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <div className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
            <Label htmlFor="sub3-end">لغو در پایان دوره</Label>
            <Switch
              id="sub3-end"
              checked={cancelAtPeriodEnd}
              onCheckedChange={setCancelAtPeriodEnd}
            />
          </div>

          <Field>
            <FieldLabel htmlFor="sub3-reason">دلیل (اختیاری)</FieldLabel>
            <Textarea
              id="sub3-reason"
              placeholder="چرا می‌خواهید تغییر دهید؟"
              dir="rtl"
              rows={3}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="sub3-email">تأیید به ایمیل</FieldLabel>
            <Input
              id="sub3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">اعمال</Button>
          <Button variant="outline" className="flex-1">
            انصراف
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
