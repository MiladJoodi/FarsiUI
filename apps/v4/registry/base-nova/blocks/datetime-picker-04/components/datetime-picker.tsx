"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { CalendarIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import { Calendar } from "@/registry/base-nova/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Field, FieldLabel } from "@/registry/base-nova/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"

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
  { value: "۱۶:۳۰", label: "۱۶:۳۰" },
  { value: "۱۷:۰۰", label: "۱۷:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

type TimeValue = (typeof TIME_ITEMS)[number]["value"]

const PRESETS = [
  { label: "امروز", days: 0 },
  { label: "فردا", days: 1 },
  { label: "هفتهٔ بعد", days: 7 },
] as const

const TIME_PRESETS = ["۰۹:۰۰", "۱۰:۰۰", "۱۴:۰۰", "۱۶:۳۰"] as const

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

export default function DatetimePickerDashboard() {
  const [dateOpen, setDateOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState<TimeValue>("۱۰:۰۰")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          انتخاب تاریخ و زمان
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          میان‌برهای شمسی و ساعت
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Card>
          <CardHeader className="text-start">
            <CardTitle>تنظیم زمان</CardTitle>
            <CardDescription>تقویم شمسی در پاپ‌اور</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium">میان‌بر تاریخ</p>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <Button
                    key={p.label}
                    variant="outline"
                    size="sm"
                    onClick={() => setDate(addDays(new Date(), p.days))}
                  >
                    {p.label}
                  </Button>
                ))}
              </div>
            </div>

            <Field>
              <FieldLabel htmlFor="dt4-date">تاریخ</FieldLabel>
              <Popover open={dateOpen} onOpenChange={setDateOpen}>
                <PopoverTrigger
                  render={
                    <Button
                      variant="outline"
                      id="dt4-date"
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
                      setDateOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <div>
              <p className="mb-2 text-sm font-medium">میان‌بر ساعت</p>
              <div className="flex flex-wrap gap-2">
                {TIME_PRESETS.map((label) => (
                  <Button
                    key={label}
                    variant={time === label ? "default" : "outline"}
                    size="sm"
                    className="tracking-normal"
                    onClick={() => setTime(label as TimeValue)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <Field>
              <FieldLabel>ساعت دقیق</FieldLabel>
              <Select
                items={[...TIME_ITEMS]}
                value={time}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setTime(value as TimeValue)
                  }
                }}
              >
                <SelectTrigger className="w-full max-w-xs" dir="rtl">
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
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <CalendarIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium tracking-normal">
                  {date ? formatJalali(date) : "—"}
                </p>
                {date ? (
                  <p className="text-xs tracking-normal text-muted-foreground">
                    {formatJalaliCompact(date)}
                  </p>
                ) : null}
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <ClockIcon className="size-4 text-muted-foreground" />
              <span className="font-medium tracking-normal">{time}</span>
            </div>
            <Separator />
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">شمسی</Badge>
              <Badge variant="outline">۲۴ ساعته</Badge>
            </div>
            <Button className="w-full">اعمال</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
