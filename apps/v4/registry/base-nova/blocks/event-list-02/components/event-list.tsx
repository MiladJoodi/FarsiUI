"use client"

import { addDays } from "date-fns"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Separator } from "@/registry/base-nova/ui/separator"

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

function formatJalaliMonth(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    month: "short",
  })
}

function formatJalaliFull(date: Date) {
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

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

const today = new Date()
const EVENTS = [
  {
    title: "جلسهٔ تیم محصول",
    time: "۱۰:۰۰",
    date: today,
    kind: "جلسه",
    place: "اتاق آبی",
  },
  {
    title: "بازبینی طراحی",
    time: "۱۴:۳۰",
    date: addDays(today, 1),
    kind: "طراحی",
    place: "آنلاین",
  },
  {
    title: "مصاحبهٔ کاربری",
    time: "۱۱:۰۰",
    date: addDays(today, 2),
    kind: "تحقیق",
    place: "اتاق سبز",
  },
  {
    title: "تحویل نسخهٔ بتا",
    time: "۱۶:۰۰",
    date: addDays(today, 5),
    kind: "ددلاین",
    place: "—",
  },
] as const

export function EventListCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>فهرست رویدادها</CardTitle>
            <CardDescription className="tracking-normal">
              {toFa(EVENTS.length)} رویداد پیش‌رو
            </CardDescription>
          </div>
          <Button size="sm">رویداد جدید</Button>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {EVENTS.map((ev, i) => (
              <li key={ev.title}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-6 py-3">
                  <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg border bg-muted/40 text-center">
                    <span className="text-sm leading-none font-semibold tracking-normal">
                      {formatJalaliDay(ev.date)}
                    </span>
                    <span className="mt-0.5 text-[0.65rem] text-muted-foreground">
                      {formatJalaliMonth(ev.date)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium">{ev.title}</p>
                      <Badge variant="secondary">{ev.kind}</Badge>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {formatJalaliFull(ev.date)}
                    </p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      ساعت {ev.time} · {ev.place}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
