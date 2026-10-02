"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Badge } from "@/registry/bases/base/ui/badge"
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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"

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

export function DatetimePickerRangeForm() {
  const today = new Date()
  const [open, setOpen] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 2),
  })
  const [startTime, setStartTime] = React.useState("09:00")
  const [endTime, setEndTime] = React.useState("18:00")
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
          <CardDescription>
            تاریخ شمسی و ساعت به‌صورت LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select defaultValue="leave">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="leave">مرخصی</SelectItem>
                <SelectItem value="trip">سفر کاری</SelectItem>
                <SelectItem value="event">رویداد</SelectItem>
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
                    className="h-auto min-h-9 w-full justify-start whitespace-normal py-2 text-start font-normal"
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
              <FieldDescription>
                <bdi dir="ltr">{formatJalaliCompact(range.from)}</bdi>
                {range.to ? (
                  <>
                    {" – "}
                    <bdi dir="ltr">{formatJalaliCompact(range.to)}</bdi>
                  </>
                ) : null}
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
                <FieldLabel htmlFor="dt3-start">شروع</FieldLabel>
                <Input
                  id="dt3-start"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  dir="ltr"
                  className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="dt3-end">پایان</FieldLabel>
                <Input
                  id="dt3-end"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  dir="ltr"
                  className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                />
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
