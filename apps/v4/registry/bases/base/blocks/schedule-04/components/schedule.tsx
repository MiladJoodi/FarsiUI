"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"

function startOfWeek(date: Date) {
  const d = new Date(date)
  const day = d.getDay()
  // Saturday start for Iranian week feel: Sat=6 → 0 offset from Sat
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

export function ScheduleWeekBoard() {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()))
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
          <h1 className="text-2xl font-semibold tracking-tight">برنامه هفتگی</h1>
          <p className="mt-1 text-sm text-muted-foreground">
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
              className={isToday ? "border-primary/40 ring-1 ring-primary/20" : undefined}
            >
              <CardHeader className="pb-2 text-start">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <CardDescription>{formatJalaliDayName(day)}</CardDescription>
                    <CardTitle className="text-lg tabular-nums">
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
                  events.map((ev) => (
                    <div
                      key={`${ev.time}-${ev.title}`}
                      className="rounded-md border bg-muted/30 px-2 py-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <Badge variant="outline" className="text-[10px]">
                          {ev.type}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                aria-label="عملیات"
                              />
                            }
                          >
                            <MoreHorizontalIcon />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" dir="rtl" lang="fa">
                            <DropdownMenuItem>ویرایش</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              حذف
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="mt-1 font-medium">{ev.title}</p>
                      <bdi dir="ltr" className="text-muted-foreground">
                        {ev.time}
                      </bdi>
                    </div>
                  ))
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
