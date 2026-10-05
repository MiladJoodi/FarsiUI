"use client"

import * as React from "react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Switch } from "@/registry/base-maia/ui/switch"
import { Textarea } from "@/registry/base-maia/ui/textarea"

const ACTION_ITEMS = [
  { value: "تغییر طرح", label: "تغییر طرح" },
  { value: "توقف موقت", label: "توقف موقت" },
  { value: "لغو اشتراک", label: "لغو اشتراک" },
] as const

const PLAN_ITEMS = [
  { value: "شروع", label: "شروع" },
  { value: "حرفه‌ای (فعلی)", label: "حرفه‌ای (فعلی)" },
  { value: "تیم", label: "تیم" },
] as const

const PERIOD_ITEMS = [
  { value: "ماهانه", label: "ماهانه" },
  { value: "سالانه", label: "سالانه" },
] as const

type ActionValue = (typeof ACTION_ITEMS)[number]["value"]
type PlanValue = (typeof PLAN_ITEMS)[number]["value"]
type PeriodValue = (typeof PERIOD_ITEMS)[number]["value"]

const NEXT_BILLING = new Date()
NEXT_BILLING.setDate(NEXT_BILLING.getDate() + 18)

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `${weekday}، ${rest}`
}

export default function SubscriptionManageForm() {
  const [action, setAction] = React.useState<ActionValue>("تغییر طرح")
  const [plan, setPlan] = React.useState<PlanValue>("تیم")
  const [period, setPeriod] = React.useState<PeriodValue>("ماهانه")
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
          <CardDescription className="tracking-normal">
            طرح فعلی: حرفه‌ای · تمدید {formatJalali(NEXT_BILLING)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>عملیات</FieldLabel>
            <Select
              items={[...ACTION_ITEMS]}
              value={action}
              onValueChange={(value) => {
                if (ACTION_ITEMS.some((item) => item.value === value)) {
                  setAction(value as ActionValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {ACTION_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription>تغییر از طرح فعلی به طرح جدید</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>طرح مقصد</FieldLabel>
            <Select
              items={[...PLAN_ITEMS]}
              value={plan}
              onValueChange={(value) => {
                if (PLAN_ITEMS.some((item) => item.value === value)) {
                  setPlan(value as PlanValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {PLAN_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>دوره صورت‌حساب</FieldLabel>
            <Select
              items={[...PERIOD_ITEMS]}
              value={period}
              onValueChange={(value) => {
                if (PERIOD_ITEMS.some((item) => item.value === value)) {
                  setPeriod(value as PeriodValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {PERIOD_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
