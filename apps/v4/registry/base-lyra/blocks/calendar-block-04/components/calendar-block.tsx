"use client"

import * as React from "react"
import { addDays, isSameDay } from "date-fns"
import { MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import { Separator } from "@/registry/base-lyra/ui/separator"

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

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
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

export default function CalendarBlockEvents() {
  const [events] = React.useState(buildEvents)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [chips, setChips] = React.useState(["جلسات", "تحویل"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const booked = events.map((e) => e.date)
  const dayEvents = events.filter((e) => date && isSameDay(e.date, date))

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
            <CardDescription>رویدادهای روز انتخاب‌شده (شمسی)</CardDescription>
          </div>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={<Button type="button" variant="ghost" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 p-1"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                رویداد جدید
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => {
                  setChips([])
                  setHeaderOpen(false)
                }}
              >
                پاک کردن فیلترها
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => {
                  setDate(new Date())
                  setHeaderOpen(false)
                }}
              >
                رفتن به امروز
              </Button>
            </PopoverContent>
          </Popover>
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
              <p className="text-sm font-medium tracking-normal">
                {date ? formatJalali(date) : "روزی انتخاب نشده"}
              </p>
              <p className="text-xs tracking-normal text-muted-foreground">
                {toFa(dayEvents.length)} رویداد
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
                      <div className="flex size-9 shrink-0 flex-col items-center justify-center rounded-md bg-muted text-xs font-medium tracking-normal">
                        {formatJalaliDay(ev.date)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {ev.title}
                        </p>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          ساعت {ev.time}
                        </p>
                      </div>
                      <Popover
                        open={openId === ev.id}
                        onOpenChange={(open) => setOpenId(open ? ev.id : null)}
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 p-1"
                        >
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            ویرایش
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            به تعویق انداختن
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
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
