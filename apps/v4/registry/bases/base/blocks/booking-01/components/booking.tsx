"use client"

import * as React from "react"

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
import { Separator } from "@/registry/bases/base/ui/separator"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const SLOTS = ["۰۹:۰۰", "۱۰:۳۰", "۱۴:۰۰", "۱۶:۰۰"] as const
const SLOT_VALUES = ["09:00", "10:30", "14:00", "16:00"] as const

export function BookingSimple() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [slot, setSlot] = React.useState(SLOT_VALUES[0])

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
            {SLOTS.map((label, i) => (
              <Button
                key={label}
                variant={slot === SLOT_VALUES[i] ? "default" : "outline"}
                size="sm"
                onClick={() => setSlot(SLOT_VALUES[i])}
              >
                <bdi dir="ltr">{label}</bdi>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-3 border-t">
          <p className="text-sm text-muted-foreground">
            {date ? formatJalali(date) : "تاریخی انتخاب نشده"}
            {" · "}
            <bdi dir="ltr">{slot}</bdi>
          </p>
          <Button>تأیید رزرو</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
