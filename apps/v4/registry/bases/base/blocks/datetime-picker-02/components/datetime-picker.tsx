"use client"

import * as React from "react"
import { CalendarIcon, ClockIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function DatetimePickerPopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState("14:30")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>انتخاب تاریخ و زمان</CardTitle>
          <CardDescription>
            پاپ‌اور تقویم شمسی · ساعت LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="dt2-date">تاریخ</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    id="dt2-date"
                    className="w-full justify-start font-normal"
                  />
                }
              >
                <CalendarIcon data-icon="inline-start" />
                {date ? formatJalali(date) : "انتخاب تاریخ"}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
            {date ? (
              <FieldDescription>
                <bdi dir="ltr">{formatJalaliCompact(date)}</bdi>
              </FieldDescription>
            ) : null}
          </Field>

          <Field>
            <FieldLabel htmlFor="dt2-time">ساعت</FieldLabel>
            <div className="relative">
              <ClockIcon className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="dt2-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                dir="ltr"
                className="ps-9 text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </div>
          </Field>

          <div className="rounded-lg border bg-muted/30 p-3 text-sm">
            <p className="text-muted-foreground">انتخاب شما</p>
            <p className="mt-1 font-medium">
              {date ? formatJalali(date) : "—"}
              {" · "}
              <bdi dir="ltr">{time}</bdi>
            </p>
          </div>

          <Button className="w-full">تأیید</Button>
        </CardContent>
      </Card>
    </section>
  )
}
