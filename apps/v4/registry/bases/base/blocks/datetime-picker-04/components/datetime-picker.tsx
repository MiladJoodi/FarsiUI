"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { CalendarIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

const PRESETS = [
  { label: "امروز", days: 0 },
  { label: "فردا", days: 1 },
  { label: "هفتهٔ بعد", days: 7 },
] as const

const TIME_PRESETS = ["۰۹:۰۰", "۱۰:۰۰", "۱۴:۰۰", "۱۶:۳۰"] as const

const TIME_PRESET_VALUES = ["09:00", "10:00", "14:00", "16:30"] as const

export function DatetimePickerDashboard() {
  const [dateOpen, setDateOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [time, setTime] = React.useState("10:00")

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
                {TIME_PRESETS.map((label, i) => (
                  <Button
                    key={label}
                    variant={
                      time === TIME_PRESET_VALUES[i] ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setTime(TIME_PRESET_VALUES[i])}
                  >
                    <bdi dir="ltr">{label}</bdi>
                  </Button>
                ))}
              </div>
            </div>

            <Field>
              <FieldLabel htmlFor="dt4-time">ساعت دقیق</FieldLabel>
              <Input
                id="dt4-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                dir="ltr"
                className="max-w-xs text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
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
                <p className="font-medium">
                  {date ? formatJalali(date) : "—"}
                </p>
                {date ? (
                  <bdi
                    dir="ltr"
                    className="text-xs text-muted-foreground"
                  >
                    {formatJalaliCompact(date)}
                  </bdi>
                ) : null}
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <ClockIcon className="size-4 text-muted-foreground" />
              <bdi dir="ltr" className="font-medium tabular-nums">
                {time}
              </bdi>
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
