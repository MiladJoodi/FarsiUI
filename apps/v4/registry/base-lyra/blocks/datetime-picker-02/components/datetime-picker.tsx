"use client"

import * as React from "react"
import { CalendarIcon, ClockIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import { Calendar } from "@/registry/base-lyra/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export default function DatetimePickerPopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState<TimeValue>("۱۴:۳۰")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>انتخاب تاریخ و زمان</CardTitle>
          <CardDescription>پاپ‌اور تقویم شمسی · انتخاب ساعت</CardDescription>
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
              <FieldDescription className="tracking-normal">
                {formatJalaliCompact(date)}
              </FieldDescription>
            ) : null}
          </Field>

          <Field>
            <FieldLabel>ساعت</FieldLabel>
            <div className="relative">
              <ClockIcon className="pointer-events-none absolute start-3 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
              <Select
                items={[...TIME_ITEMS]}
                value={time}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setTime(value as TimeValue)
                  }
                }}
              >
                <SelectTrigger className="w-full ps-9" dir="rtl">
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
            </div>
          </Field>

          <div className="rounded-lg border bg-muted/30 p-3 text-sm">
            <p className="text-muted-foreground">انتخاب شما</p>
            <p className="mt-1 font-medium tracking-normal">
              {date ? formatJalali(date) : "—"}
              {" · "}
              {time}
            </p>
          </div>

          <Button className="w-full">تأیید</Button>
        </CardContent>
      </Card>
    </section>
  )
}
