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
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const SLOTS = [
  { time: "۰۹:۰۰", title: "جلسه صبحگاهی" },
  { time: "۱۱:۰۰", title: "بازبینی طراحی" },
  { time: "۱۴:۳۰", title: "تماس با مشتری" },
  { time: "۱۶:۰۰", title: "برنامه‌ریزی اسپرینت" },
] as const

export function ScheduleSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>برنامه امروز</CardTitle>
          <CardDescription>{formatJalali(TODAY)}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {SLOTS.map((slot, i) => (
            <div key={slot.time}>
              {i > 0 ? <Separator className="mb-3" /> : null}
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium">{slot.title}</span>
                <bdi dir="ltr" className="shrink-0 tabular-nums text-muted-foreground">
                  {slot.time}
                </bdi>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
