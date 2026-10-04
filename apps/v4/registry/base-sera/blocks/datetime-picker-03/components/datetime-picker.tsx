"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import { Calendar } from "@/registry/base-sera/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-sera/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Switch } from "@/registry/base-sera/ui/switch"

const TYPE_ITEMS = [
  { value: "مرخصی", label: "مرخصی" },
  { value: "سفر کاری", label: "سفر کاری" },
  { value: "رویداد", label: "رویداد" },
] as const

const TIME_ITEMS = [
  { value: "۰۸:۰۰", label: "۰۸:۰۰" },
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۳:۰۰", label: "۱۳:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۵:۰۰", label: "۱۵:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۷:۰۰", label: "۱۷:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
  { value: "۱۹:۰۰", label: "۱۹:۰۰" },
] as const

type TimeValue = (typeof TIME_ITEMS)[number]["value"]
type TypeValue = (typeof TYPE_ITEMS)[number]["value"]

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

export default function DatetimePickerRangeForm() {
  const today = new Date()
  const [open, setOpen] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 2),
  })
  const [type, setType] = React.useState<TypeValue>("مرخصی")
  const [startTime, setStartTime] = React.useState<TimeValue>("۰۹:۰۰")
  const [endTime, setEndTime] = React.useState<TimeValue>("۱۸:۰۰")
  const [allDay, setAllDay] = React.useState(false)

  const rangeLabel =
    range?.from && range?.to
      ? `${formatJalali(range.from)} تا ${formatJalali(range.to)}`
      : range?.from
        ? formatJalali(range.from)
        : "انتخاب بازه"

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="secondary">بازه</Badge>
            <Badge variant="outline">شمسی</Badge>
          </div>
          <CardTitle>رزرو بازه زمانی</CardTitle>
          <CardDescription>تاریخ شمسی و ساعت فارسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as TypeValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="dt3-range">بازه تاریخ</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    id="dt3-range"
                    className="h-auto min-h-9 w-full justify-start py-2 text-start font-normal whitespace-normal"
                  />
                }
              >
                <CalendarIcon data-icon="inline-start" className="shrink-0" />
                {rangeLabel}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  numberOfMonths={1}
                  defaultMonth={range?.from}
                />
              </PopoverContent>
            </Popover>
            {range?.from ? (
              <FieldDescription className="tracking-normal">
                {formatJalaliCompact(range.from)}
                {range.to ? ` – ${formatJalaliCompact(range.to)}` : null}
              </FieldDescription>
            ) : null}
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="dt3-allday">تمام‌روز</Label>
            <Switch
              id="dt3-allday"
              checked={allDay}
              onCheckedChange={setAllDay}
            />
          </div>

          {!allDay ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel>شروع</FieldLabel>
                <Select
                  items={[...TIME_ITEMS]}
                  value={startTime}
                  onValueChange={(value) => {
                    if (TIME_ITEMS.some((item) => item.value === value)) {
                      setStartTime(value as TimeValue)
                    }
                  }}
                >
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="شروع" />
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
              <Field>
                <FieldLabel>پایان</FieldLabel>
                <Select
                  items={[...TIME_ITEMS]}
                  value={endTime}
                  onValueChange={(value) => {
                    if (TIME_ITEMS.some((item) => item.value === value)) {
                      setEndTime(value as TimeValue)
                    }
                  }}
                >
                  <SelectTrigger className="w-full" dir="rtl">
                    <SelectValue placeholder="پایان" />
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
            </div>
          ) : null}

          <Field>
            <FieldLabel htmlFor="dt3-email">ایمیل اطلاع‌رسانی</FieldLabel>
            <Input
              id="dt3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">ذخیره</Button>
          <Button variant="outline" className="flex-1">
            لغو
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
