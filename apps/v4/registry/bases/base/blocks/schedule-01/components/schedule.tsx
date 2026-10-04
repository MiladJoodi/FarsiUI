"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const TODAY = new Date()

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

const SLOTS = [
  { time: "۰۹:۰۰", title: "جلسه صبحگاهی" },
  { time: "۱۱:۰۰", title: "بازبینی طراحی" },
  { time: "۱۴:۳۰", title: "تماس با مشتری" },
  { time: "۱۶:۰۰", title: "برنامه‌ریزی اسپرینت" },
] as const

export default function ScheduleSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>برنامه امروز</CardTitle>
          <CardDescription className="tracking-normal">
            {formatJalali(TODAY)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {SLOTS.map((slot, i) => (
            <div key={slot.time}>
              {i > 0 ? <Separator className="mb-3" /> : null}
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium">{slot.title}</span>
                <span className="shrink-0 tracking-normal text-muted-foreground">
                  {slot.time}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
