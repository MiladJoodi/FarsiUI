"use client"

import * as React from "react"
import { addDays } from "date-fns"

import { Button } from "@/registry/base-rhea/ui/button"
import { Calendar } from "@/registry/base-rhea/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"

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

const PRESETS = [
  { label: "امروز", value: 0 },
  { label: "فردا", value: 1 },
  { label: "۳ روز دیگر", value: 3 },
  { label: "یک هفته دیگر", value: 7 },
  { label: "دو هفته دیگر", value: 14 },
] as const

export default function CalendarBlockPresets() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [month, setMonth] = React.useState<Date>(new Date())

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center px-6 py-16"
    >
      <Card className="w-fit max-w-[20rem]" size="sm">
        <CardHeader className="text-start">
          <CardTitle>تقویم</CardTitle>
          <CardDescription>میانبرهای شمسی برای پرش سریع</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            fixedWeeks
            className="p-0 [--cell-size:--spacing(9.5)]"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t">
          <p className="w-full text-sm tracking-normal text-muted-foreground">
            {date ? formatJalali(date) : "روزی انتخاب نشده"}
          </p>
          <div className="flex w-full flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <Button
                key={preset.value}
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  const next = addDays(new Date(), preset.value)
                  setDate(next)
                  setMonth(next)
                }}
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
