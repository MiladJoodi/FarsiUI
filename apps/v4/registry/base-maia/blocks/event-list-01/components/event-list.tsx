"use client"

import { addDays } from "date-fns"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Separator } from "@/registry/base-maia/ui/separator"

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "short",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
  })
  return `${weekday}، ${rest}`
}

const today = new Date()
const EVENTS = [
  { title: "جلسهٔ تیم محصول", time: "۱۰:۰۰", date: today },
  { title: "بازبینی طراحی", time: "۱۴:۳۰", date: addDays(today, 1) },
  { title: "تحویل نسخهٔ بتا", time: "۱۶:۰۰", date: addDays(today, 3) },
]

export function EventListSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فهرست رویدادها</CardTitle>
          <CardDescription>تاریخ‌ها به شمسی</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {EVENTS.map((ev, i) => (
              <li key={ev.title}>
                {i > 0 && <Separator />}
                <div className="px-6 py-3">
                  <p className="text-sm font-medium">{ev.title}</p>
                  <p className="text-xs tracking-normal text-muted-foreground">
                    {formatJalali(ev.date)} · ساعت {ev.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
