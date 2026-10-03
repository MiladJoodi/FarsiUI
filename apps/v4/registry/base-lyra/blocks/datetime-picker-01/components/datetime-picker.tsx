"use client"

import * as React from "react"

import { Calendar } from "@/registry/base-lyra/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Field, FieldLabel } from "@/registry/base-lyra/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"

const TIME_ITEMS = [
  { value: "۰۸:۰۰", label: "۰۸:۰۰" },
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۰:۳۰", label: "۱۰:۳۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۳:۰۰", label: "۱۳:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۴:۳۰", label: "۱۴:۳۰" },
  { value: "۱۵:۰۰", label: "۱۵:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۷:۰۰", label: "۱۷:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

type TimeValue = (typeof TIME_ITEMS)[number]["value"]

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

export function DatetimePickerSimple() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState<TimeValue>("۱۰:۰۰")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center px-6 py-16 md:px-10"
    >
      <Card className="w-fit max-w-full">
        <CardHeader className="text-start">
          <CardTitle>تاریخ و زمان</CardTitle>
          <CardDescription>تقویم شمسی + ساعت</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-0 px-4 pb-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="mx-auto"
          />
          <Field>
            <FieldLabel>ساعت</FieldLabel>
            <Select
              items={[...TIME_ITEMS]}
              value={time}
              onValueChange={(value) => {
                if (TIME_ITEMS.some((item) => item.value === value)) {
                  setTime(value as TimeValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="ساعت" />
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
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 border-t text-sm">
          <p className="font-medium tracking-normal">
            {date ? formatJalali(date) : "تاریخی انتخاب نشده"}
          </p>
          <p className="tracking-normal text-muted-foreground">ساعت {time}</p>
        </CardFooter>
      </Card>
    </section>
  )
}
