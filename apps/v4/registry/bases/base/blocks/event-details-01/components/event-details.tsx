"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const EVENT_DATE = new Date()

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function EventDetailsSimple() {
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
            <p className="font-medium">{formatJalali(EVENT_DATE)}</p>
          </div>
          <Separator />
          <div>
            <p className="text-muted-foreground">ساعت</p>
            <p className="font-medium">
              <bdi dir="ltr">۱۰:۰۰ – ۱۱:۳۰</bdi>
            </p>
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
