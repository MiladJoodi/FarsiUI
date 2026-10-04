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

export default function CalendarBlockSimple() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center px-6 py-16"
    >
      <Card className="w-fit">
        <CardHeader className="text-start">
          <CardTitle>تقویم</CardTitle>
          <CardDescription>تقویم شمسی — انتخاب یک روز</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="mx-auto"
          />
        </CardContent>
        <CardFooter className="border-t text-sm tracking-normal text-muted-foreground">
          {date ? formatJalali(date) : "روزی انتخاب نشده"}
        </CardFooter>
      </Card>
    </section>
  )
}
