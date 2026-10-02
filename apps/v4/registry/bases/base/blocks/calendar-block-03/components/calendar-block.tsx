"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatJalaliShort(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function CalendarBlockRange() {
  const today = new Date()
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 6),
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 py-16"
    >
      <Card className="w-fit max-w-full">
        <CardHeader className="flex-row flex-wrap items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>تقویم</CardTitle>
            <CardDescription>
              بازهٔ شمسی دو‌ماهه · مسیر{" "}
              <bdi dir="ltr">/calendar/range</bdi>
            </CardDescription>
          </div>
          <Badge variant="secondary">شمسی</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <Field className="flex-1">
              <FieldLabel>نوع بازه</FieldLabel>
              <Select defaultValue="trip">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="trip">سفر</SelectItem>
                  <SelectItem value="leave">مرخصی</SelectItem>
                  <SelectItem value="event">رویداد</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field className="flex-1">
              <FieldLabel htmlFor="cal3-email">ایمیل اطلاع‌رسانی</FieldLabel>
              <Input
                id="cal3-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>اختیاری</FieldDescription>
            </Field>
          </div>

          <Calendar
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            className="mx-auto rounded-lg border"
          />

          <div className="rounded-lg border bg-muted/30 p-3 text-sm">
            {range?.from ? (
              range.to ? (
                <p>
                  از <span className="font-medium">{formatJalali(range.from)}</span>
                  {" تا "}
                  <span className="font-medium">{formatJalali(range.to)}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    <bdi dir="ltr">{formatJalaliShort(range.from)}</bdi>
                    {" — "}
                    <bdi dir="ltr">{formatJalaliShort(range.to)}</bdi>
                  </span>
                </p>
              ) : (
                <p>
                  شروع:{" "}
                  <span className="font-medium">{formatJalali(range.from)}</span>
                </p>
              )
            ) : (
              <p className="text-muted-foreground">بازه‌ای انتخاب نشده</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">تأیید بازه</Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setRange(undefined)}
          >
            پاک کردن
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
