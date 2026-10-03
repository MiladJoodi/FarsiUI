"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { BellIcon, CalendarIcon, ClockIcon, RepeatIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import { Calendar } from "@/registry/base-maia/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-maia/ui/tabs"

const TIME_ITEMS = [
  { value: "۰۸:۰۰", label: "۰۸:۰۰" },
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۰:۳۰", label: "۱۰:۳۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۱:۳۰", label: "۱۱:۳۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۳:۰۰", label: "۱۳:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۵:۰۰", label: "۱۵:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۷:۰۰", label: "۱۷:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

const TZ_ITEMS = [
  { value: "تهران", label: "تهران (یوتی‌سی ۳:۳۰+)" },
  { value: "جهانی", label: "جهانی (یوتی‌سی)" },
] as const

const REPEAT_END_ITEMS = [
  { value: "۴ هفته", label: "۴ هفته" },
  { value: "۸ هفته", label: "۸ هفته" },
  { value: "بدون پایان", label: "بدون پایان" },
] as const

type TimeValue = (typeof TIME_ITEMS)[number]["value"]
type TzValue = (typeof TZ_ITEMS)[number]["value"]
type RepeatEndValue = (typeof REPEAT_END_ITEMS)[number]["value"]

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

function formatJalaliShort(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    month: "short",
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

export function DatetimePickerFancy() {
  const today = new Date()
  const [singleOpen, setSingleOpen] = React.useState(false)
  const [rangeOpen, setRangeOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(today)
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 3),
  })
  const [startTime, setStartTime] = React.useState<TimeValue>("۱۰:۰۰")
  const [endTime, setEndTime] = React.useState<TimeValue>("۱۱:۳۰")
  const [tz, setTz] = React.useState<TzValue>("تهران")
  const [remind, setRemind] = React.useState(true)
  const [repeat, setRepeat] = React.useState(false)
  const [repeatEnd, setRepeatEnd] = React.useState<RepeatEndValue>("۴ هفته")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>شمسی</Badge>
            <Badge variant="outline">تاریخ و زمان</Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            انتخاب تاریخ و زمان
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            یک‌روزه، بازه، یادآوری و تکرار — نمایش با تقویم فارسی
          </p>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="single" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="single">یک روز</TabsTrigger>
            <TabsTrigger value="range">بازه</TabsTrigger>
            <TabsTrigger value="inline">تقویم</TabsTrigger>
          </TabsList>

          <TabsContent value="single">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>تاریخ و ساعت</CardTitle>
                <CardDescription>پاپ‌اور شمسی + انتخاب ساعت</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="dt5-date">تاریخ</FieldLabel>
                  <Popover open={singleOpen} onOpenChange={setSingleOpen}>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="outline"
                          id="dt5-date"
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
                          setSingleOpen(false)
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
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
                <Field>
                  <FieldLabel>منطقه زمانی</FieldLabel>
                  <Select
                    items={[...TZ_ITEMS]}
                    value={tz}
                    onValueChange={(value) => {
                      if (TZ_ITEMS.some((item) => item.value === value)) {
                        setTz(value as TzValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {TZ_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full">تأیید زمان</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="range">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>بازه تاریخ</CardTitle>
                <CardDescription>از / تا با تقویم شمسی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="dt5-range">بازه</FieldLabel>
                  <Popover open={rangeOpen} onOpenChange={setRangeOpen}>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="outline"
                          id="dt5-range"
                          className="h-auto min-h-9 w-full justify-start py-2 text-start font-normal whitespace-normal"
                        />
                      }
                    >
                      <CalendarIcon
                        data-icon="inline-start"
                        className="shrink-0"
                      />
                      {range?.from && range?.to
                        ? `${formatJalaliShort(range.from)} تا ${formatJalaliShort(range.to)}`
                        : range?.from
                          ? formatJalaliShort(range.from)
                          : "انتخاب بازه"}
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={2}
                        defaultMonth={range?.from}
                        className="hidden sm:block"
                      />
                      <Calendar
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={1}
                        defaultMonth={range?.from}
                        className="sm:hidden"
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
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setRange({ from: today, to: addDays(today, 6) })
                    }
                  >
                    یک هفته
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setRange({ from: today, to: addDays(today, 29) })
                    }
                  >
                    یک ماه
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inline">
            <Card className="w-fit max-w-full">
              <CardHeader className="text-start">
                <CardTitle>تقویم توکار</CardTitle>
                <CardDescription>انتخاب مستقیم روی صفحه</CardDescription>
              </CardHeader>
              <CardContent>
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
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">پیش‌نمایش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CalendarIcon className="mt-0.5 size-4 text-muted-foreground" />
                <p className="font-medium tracking-normal">
                  {date ? formatJalali(date) : "—"}
                </p>
              </div>
              <div className="flex items-center gap-2 tracking-normal">
                <ClockIcon className="size-4 text-muted-foreground" />
                <span>
                  {startTime}
                  {" – "}
                  {endTime}
                </span>
              </div>
              {range?.from && range?.to ? (
                <>
                  <Separator />
                  <p className="tracking-normal text-muted-foreground">
                    بازه: {formatJalaliShort(range.from)} تا{" "}
                    {formatJalaliShort(range.to)}
                  </p>
                </>
              ) : null}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">گزینه‌ها</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="dt5-remind" className="flex items-center gap-2">
                  <BellIcon className="size-4 text-muted-foreground" />
                  یادآوری ۱۵ دقیقه قبل
                </Label>
                <Switch
                  id="dt5-remind"
                  checked={remind}
                  onCheckedChange={setRemind}
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="dt5-repeat" className="flex items-center gap-2">
                  <RepeatIcon className="size-4 text-muted-foreground" />
                  تکرار هفتگی
                </Label>
                <Switch
                  id="dt5-repeat"
                  checked={repeat}
                  onCheckedChange={setRepeat}
                />
              </div>
              {repeat ? (
                <Field>
                  <FieldLabel>پایان تکرار</FieldLabel>
                  <Select
                    items={[...REPEAT_END_ITEMS]}
                    value={repeatEnd}
                    onValueChange={(value) => {
                      if (
                        REPEAT_END_ITEMS.some((item) => item.value === value)
                      ) {
                        setRepeatEnd(value as RepeatEndValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {REPEAT_END_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
