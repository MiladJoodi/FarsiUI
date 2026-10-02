"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const PERIOD_END = new Date()
PERIOD_END.setDate(PERIOD_END.getDate() + 12)

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BillingPeriodSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>صورتحساب دوره</CardTitle>
          <CardDescription>
            پایان دوره: {formatJalali(PERIOD_END)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">طرح حرفه‌ای</span>
            <bdi dir="ltr">۴۹۹٬۰۰۰</bdi>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">مصرف اضافه</span>
            <bdi dir="ltr">۸۰٬۰۰۰</bdi>
          </div>
          <Separator />
          <div className="flex justify-between gap-3 font-medium">
            <span>مبلغ دوره</span>
            <span>
              <bdi dir="ltr">۵۷۹٬۰۰۰</bdi> تومان
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">پرداخت اکنون</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
