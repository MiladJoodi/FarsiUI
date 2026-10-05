"use client"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Separator } from "@/registry/base-maia/ui/separator"

const PERIOD_END = new Date()
PERIOD_END.setDate(PERIOD_END.getDate() + 12)

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

export default function BillingPeriodSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>صورتحساب دوره</CardTitle>
          <CardDescription className="tracking-normal">
            پایان دوره: {formatJalali(PERIOD_END)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">طرح حرفه‌ای</span>
            <span>۴۹۹٬۰۰۰</span>
          </div>
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">مصرف اضافه</span>
            <span>۸۰٬۰۰۰</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-3 font-medium tracking-normal">
            <span>مبلغ دوره</span>
            <span>۵۷۹٬۰۰۰ تومان</span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">پرداخت اکنون</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
