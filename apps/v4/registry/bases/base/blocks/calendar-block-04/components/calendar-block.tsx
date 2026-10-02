"use client"

import * as React from "react"
import { addDays, isSameDay } from "date-fns"
import {
  MoreHorizontalIcon,
  XIcon,
} from "lucide-react"

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

type EventItem = {
  id: string
  title: string
  time: string
  date: Date
}

function buildEvents(): EventItem[] {
  const base = new Date()
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: base,
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(base, 1),
    },
    {
      id: "3",
      title: "مصاحبهٔ کاربری",
      time: "۱۱:۰۰",
      date: addDays(base, 3),
    },
    {
      id: "4",
      title: "تحویل نسخهٔ بتا",
      time: "۱۶:۰۰",
      date: addDays(base, 5),
    },
  ]
}

export function CalendarBlockEvents() {
  const [events] = React.useState(buildEvents)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [chips, setChips] = React.useState(["جلسات", "تحویل"])

  const booked = events.map((e) => e.date)
  const dayEvents = events.filter(
    (e) => date && isSameDay(e.date, date)
  )

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>تقویم</CardTitle>
            <CardDescription>
              رویدادهای روز انتخاب‌شده (شمسی)
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>رویداد جدید</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setChips([])}>
                پاک کردن فیلترها
              </DropdownMenuItem>
              <DropdownMenuItem>رفتن به امروز</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-4">
          {chips.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <Badge key={c} variant="secondary" className="gap-1 pe-1">
                  {c}
                  <button
                    type="button"
                    className="rounded-sm p-0.5 hover:bg-muted"
                    onClick={() =>
                      setChips((prev) => prev.filter((x) => x !== c))
                    }
                    aria-label={`حذف ${c}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : null}

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiers={{ booked }}
            modifiersClassNames={{
              booked: "[&>button]:font-bold",
            }}
            className="mx-auto rounded-lg border"
          />

          <div className="rounded-lg border">
            <div className="border-b px-4 py-3">
              <p className="text-sm font-medium">
                {date ? formatJalali(date) : "روزی انتخاب نشده"}
              </p>
              <p className="text-xs text-muted-foreground">
                <bdi dir="ltr">{dayEvents.length}</bdi> رویداد
              </p>
            </div>
            {dayEvents.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                رویدادی برای این روز نیست
              </p>
            ) : (
              <ul>
                {dayEvents.map((ev, i) => (
                  <li key={ev.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex size-9 shrink-0 flex-col items-center justify-center rounded-md bg-muted text-xs font-medium">
                        {formatJalaliDay(ev.date)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {ev.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ساعت <bdi dir="ltr">{ev.time}</bdi>
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuItem>ویرایش</DropdownMenuItem>
                          <DropdownMenuItem>به تعویق انداختن</DropdownMenuItem>
                          <DropdownMenuItem>حذف</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
