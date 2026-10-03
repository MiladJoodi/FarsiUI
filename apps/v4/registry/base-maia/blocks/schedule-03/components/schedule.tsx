"use client"

import * as React from "react"

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
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import { Textarea } from "@/registry/base-maia/ui/textarea"

const TODAY = new Date()

const TYPE_ITEMS = [
  { value: "جلسه", label: "جلسه" },
  { value: "تمرکز", label: "تمرکز" },
  { value: "شخصی", label: "شخصی" },
  { value: "استراحت", label: "استراحت" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۵:۰۰", label: "۱۵:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function ScheduleSlotForm() {
  const [type, setType] = React.useState("جلسه")
  const [start, setStart] = React.useState("۱۰:۰۰")
  const [end, setEnd] = React.useState("۱۱:۰۰")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>افزودن به برنامه</CardTitle>
          <CardDescription className="tracking-normal">
            {formatJalali(TODAY)} · {formatJalaliCompact(TODAY)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="sch3-title">عنوان</FieldLabel>
            <Input id="sch3-title" placeholder="مثلاً جلسه تیم" dir="rtl" />
          </Field>

          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
            <Field>
              <FieldLabel>شروع</FieldLabel>
              <Select
                items={[...TIME_ITEMS]}
                value={start}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setStart(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="شروع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIME_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>پایان</FieldLabel>
              <Select
                items={[...TIME_ITEMS]}
                value={end}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setEnd(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="پایان" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIME_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="sch3-place">مکان</FieldLabel>
            <Input id="sch3-place" placeholder="اتاق یا لینک" dir="rtl" />
            <FieldDescription>
              لینک جلسه را با <bdi dir="ltr">LTR</bdi> وارد کنید
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="sch3-link">لینک آنلاین</FieldLabel>
            <Input
              id="sch3-link"
              placeholder="meet.example.com/room"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="sch3-notes">یادداشت</FieldLabel>
            <Textarea
              id="sch3-notes"
              placeholder="توضیح کوتاه…"
              dir="rtl"
              rows={3}
            />
          </Field>

          <Separator />

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="sch3-remind">یادآوری ۱۰ دقیقه قبل</Label>
            <Switch id="sch3-remind" defaultChecked />
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
