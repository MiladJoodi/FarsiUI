"use client"

import * as React from "react"

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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function DatetimePickerSimple() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState("10:00")

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
            <FieldLabel htmlFor="dt1-time">ساعت</FieldLabel>
            <Input
              id="dt1-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              dir="ltr"
              className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </Field>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 border-t text-sm">
          <p className="font-medium">
            {date ? formatJalali(date) : "تاریخی انتخاب نشده"}
          </p>
          <p className="text-muted-foreground">
            ساعت <bdi dir="ltr">{time || "—"}</bdi>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
