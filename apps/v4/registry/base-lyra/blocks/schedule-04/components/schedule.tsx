"use client"

import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import { Separator } from "@/registry/base-lyra/ui/separator"

function startOfWeek(date: Date) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 6 ? 0 : day + 1
  d.setDate(d.getDate() - diff)
  d.setHours(0, 0, 0, 0)
  return d
}

function addDays(date: Date, n: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

function formatJalaliDayName(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "short",
  })
}

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

function formatJalaliRange(start: Date, end: Date) {
  const a = start.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
  })
  const b = end.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `${a} – ${b}`
}

const WEEK_EVENTS: Record<
  number,
  { time: string; title: string; type: string }[]
> = {
  0: [
    { time: "۱۰:۰۰", title: "جلسه محصول", type: "جلسه" },
    { time: "۱۵:۰۰", title: "بازبینی PR", type: "فنی" },
  ],
  1: [{ time: "۰۹:۳۰", title: "تمرکز عمیق", type: "تمرکز" }],
  2: [
    { time: "۱۱:۰۰", title: "تماس مشتری", type: "مشتری" },
    { time: "۱۶:۰۰", title: "آموزش تیم", type: "آموزش" },
  ],
  3: [],
  4: [{ time: "۱۴:۰۰", title: "برنامه‌ریزی", type: "اسپرینت" }],
  5: [{ time: "۱۰:۰۰", title: "جلسه هفتگی", type: "جلسه" }],
  6: [],
}

export default function ScheduleWeekBoard() {
  const [weekStart, setWeekStart] = React.useState(() =>
    startOfWeek(new Date())
  )
  const [openKey, setOpenKey] = React.useState<string | null>(null)
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
  const weekEnd = addDays(weekStart, 6)
  const todayKey = new Date().toDateString()

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            برنامه هفتگی
          </h1>
          <p className="mt-1 text-sm tracking-normal text-muted-foreground">
            {formatJalaliRange(weekStart, weekEnd)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="هفته قبل"
            onClick={() => setWeekStart(addDays(weekStart, -7))}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
          >
            این هفته
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="هفته بعد"
            onClick={() => setWeekStart(addDays(weekStart, 7))}
          >
            <ChevronLeftIcon />
          </Button>
          <Button size="sm">افزودن</Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {days.map((day, idx) => {
          const isToday = day.toDateString() === todayKey
          const events = WEEK_EVENTS[idx] ?? []
          return (
            <Card
              key={day.toISOString()}
              className={
                isToday ? "border-primary/40 ring-1 ring-primary/20" : undefined
              }
            >
              <CardHeader className="pb-2 text-start">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <CardDescription>
                      {formatJalaliDayName(day)}
                    </CardDescription>
                    <CardTitle className="text-lg tracking-normal">
                      {formatJalaliDay(day)}
                    </CardTitle>
                  </div>
                  {isToday ? <Badge>امروز</Badge> : null}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {events.length === 0 ? (
                  <p className="text-xs text-muted-foreground">بدون برنامه</p>
                ) : (
                  events.map((ev) => {
                    const key = `${idx}-${ev.time}-${ev.title}`
                    return (
                      <div
                        key={key}
                        className="rounded-md border bg-muted/30 px-2 py-1.5 text-xs"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <Badge variant="outline" className="text-[10px]">
                            {ev.type}
                          </Badge>
                          <Popover
                            open={openKey === key}
                            onOpenChange={(open) =>
                              setOpenKey(open ? key : null)
                            }
                          >
                            <PopoverTrigger
                              render={
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon-xs"
                                  aria-label="عملیات"
                                />
                              }
                            >
                              <MoreHorizontalIcon />
                            </PopoverTrigger>
                            <PopoverContent
                              dir="rtl"
                              lang="fa"
                              align="start"
                              className="w-32 p-1"
                            >
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start"
                                onClick={() => setOpenKey(null)}
                              >
                                ویرایش
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start text-destructive"
                                onClick={() => setOpenKey(null)}
                              >
                                حذف
                              </Button>
                            </PopoverContent>
                          </Popover>
                        </div>
                        <p className="mt-1 font-medium">{ev.title}</p>
                        <p className="tracking-normal text-muted-foreground">
                          {ev.time}
                        </p>
                      </div>
                    )
                  })
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Separator className="my-6" />
      <p className="text-center text-xs text-muted-foreground">
        هفته از شنبه تا جمعه · تاریخ‌ها شمسی
      </p>
    </section>
  )
}
