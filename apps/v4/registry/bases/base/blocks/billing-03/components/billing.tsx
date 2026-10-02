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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const PERIOD_END = new Date()
PERIOD_END.setDate(PERIOD_END.getDate() + 12)

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BillingSettingsForm() {
  const [autoPay, setAutoPay] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            تنظیمات دوره
          </Badge>
          <CardTitle>صورتحساب</CardTitle>
          <CardDescription>
            دوره بعد در {formatJalali(PERIOD_END)} بسته می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>چرخه صورت‌حساب</FieldLabel>
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

          <Field>
            <FieldLabel>ارز نمایش</FieldLabel>
            <Select defaultValue="irr">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="irr">تومان</SelectItem>
                <SelectItem value="usd">
                  دلار (<bdi dir="ltr">USD</bdi>)
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="bill3-email">ایمیل رسید</FieldLabel>
            <Input
              id="bill3-email"
              type="email"
              placeholder="billing@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>برای هر دوره ارسال می‌شود</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="bill3-tax">شناسه مالیاتی</FieldLabel>
            <Input
              id="bill3-tax"
              placeholder="۱۴۰۰۱۲۳۴۵۶۷"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
            <Label htmlFor="bill3-auto">پرداخت خودکار در سررسید</Label>
            <Switch
              id="bill3-auto"
              checked={autoPay}
              onCheckedChange={setAutoPay}
            />
          </div>

          <Separator />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">برآورد دوره بعد</span>
            <span className="font-medium">
              <bdi dir="ltr">۵۷۹٬۰۰۰</bdi> تومان
            </span>
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
