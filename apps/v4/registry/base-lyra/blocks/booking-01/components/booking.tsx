"use client"

import * as React from "react"

import { Button } from "@/registry/base-lyra/ui/button"
import { Calendar } from "@/registry/base-lyra/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Separator } from "@/registry/base-lyra/ui/separator"

const SLOTS = ["۰۹:۰۰", "۱۰:۳۰", "۱۴:۰۰", "۱۶:۰۰"] as const

type SlotValue = (typeof SLOTS)[number]

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

export default function BookingSimple() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [slot, setSlot] = React.useState<SlotValue>(SLOTS[0])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center px-6 py-16 md:px-10"
    >
      <Card className="w-fit max-w-full">
        <CardHeader className="text-start">
          <CardTitle>رزرو نوبت</CardTitle>
          <CardDescription>تاریخ شمسی و ساعت</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-0 px-4 pb-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="mx-auto"
          />
          <Separator />
          <div className="grid grid-cols-2 gap-2">
            {SLOTS.map((label) => (
              <Button
                key={label}
                variant={slot === label ? "default" : "outline"}
                size="sm"
                className="tracking-normal"
                onClick={() => setSlot(label)}
              >
                {label}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-3 border-t">
          <p className="text-sm tracking-normal text-muted-foreground">
            {date ? formatJalali(date) : "تاریخی انتخاب نشده"}
            {" · "}
            {slot}
          </p>
          <Button>تأیید رزرو</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
