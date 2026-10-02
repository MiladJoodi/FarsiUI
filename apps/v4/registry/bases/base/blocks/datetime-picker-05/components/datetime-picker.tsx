"use client"

import * as React from "react"
import { addDays } from "date-fns"
import {
  BellIcon,
  CalendarIcon,
  ClockIcon,
  RepeatIcon,
} from "lucide-react"
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
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
  const [startTime, setStartTime] = React.useState("10:00")
  const [endTime, setEndTime] = React.useState("11:30")
  const [remind, setRemind] = React.useState(true)
  const [repeat, setRepeat] = React.useState(false)

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
                <CardDescription>پاپ‌اور شمسی + زمان LTR</CardDescription>
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
                    <FieldLabel htmlFor="dt5-start">شروع</FieldLabel>
                    <Input
                      id="dt5-start"
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="dt5-end">پایان</FieldLabel>
                    <Input
                      id="dt5-end"
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel>منطقه زمانی</FieldLabel>
                  <Select defaultValue="tehran">
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="tehran">
                        تهران (<bdi dir="ltr">UTC+3:30</bdi>)
                      </SelectItem>
                      <SelectItem value="utc">
                        جهانی (<bdi dir="ltr">UTC</bdi>)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    مسیر نمونه: <bdi dir="ltr">/datetime-picker</bdi>
                  </FieldDescription>
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
                          className="h-auto min-h-9 w-full justify-start whitespace-normal py-2 text-start font-normal"
                        />
                      }
                    >
                      <CalendarIcon data-icon="inline-start" className="shrink-0" />
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
              <CardFooter className="border-t text-sm text-muted-foreground">
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
                <p className="font-medium">
                  {date ? formatJalali(date) : "—"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="size-4 text-muted-foreground" />
                <span>
                  <bdi dir="ltr">{startTime}</bdi>
                  {" – "}
                  <bdi dir="ltr">{endTime}</bdi>
                </span>
              </div>
              {range?.from && range?.to ? (
                <>
                  <Separator />
                  <p className="text-muted-foreground">
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
                  <Select defaultValue="4">
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="4">۴ هفته</SelectItem>
                      <SelectItem value="8">۸ هفته</SelectItem>
                      <SelectItem value="never">بدون پایان</SelectItem>
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
