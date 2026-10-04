"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import { Separator } from "@/registry/base-rhea/ui/separator"

const EVENT_DATE = new Date()

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

export default function EventDetailsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>جلسهٔ تیم محصول</CardTitle>
          <CardDescription>جزئیات رویداد</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="text-muted-foreground">تاریخ</p>
            <p className="font-medium tracking-normal">
              {formatJalali(EVENT_DATE)}
            </p>
          </div>
          <Separator />
          <div>
            <p className="text-muted-foreground">ساعت</p>
            <p className="font-medium tracking-normal">۱۰:۰۰ – ۱۱:۳۰</p>
          </div>
          <Separator />
          <div>
            <p className="text-muted-foreground">مکان</p>
            <p className="font-medium">اتاق آبی</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
