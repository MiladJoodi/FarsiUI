"use client"

import { CalendarIcon, CreditCardIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Progress } from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"

const PERIOD_START = new Date()
PERIOD_START.setDate(PERIOD_START.getDate() - 18)
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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function BillingPeriodCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>دوره جاری</Badge>
            <Badge variant="outline">در انتظار پرداخت</Badge>
          </div>
          <CardTitle>صورتحساب</CardTitle>
          <CardDescription>
            از {formatJalali(PERIOD_START)} تا {formatJalali(PERIOD_END)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>پیشرفت دوره</span>
              <bdi dir="ltr" className="text-muted-foreground">
                ۱۸ / ۳۰ روز
              </bdi>
            </div>
            <Progress value={60} />
          </div>
          <Separator />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">طرح پایه</span>
              <bdi dir="ltr">۴۹۹٬۰۰۰</bdi>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">API اضافه</span>
              <bdi dir="ltr">۸۰٬۰۰۰</bdi>
            </div>
            <div className="flex justify-between gap-2 font-medium">
              <span>جمع دوره</span>
              <span>
                <bdi dir="ltr">۵۷۹٬۰۰۰</bdi> تومان
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-lg border bg-muted/30 p-3 text-sm">
            <p className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />
              سررسید <bdi dir="ltr">{formatJalaliCompact(PERIOD_END)}</bdi>
            </p>
            <p className="flex items-center gap-2">
              <CreditCardIcon className="size-4 text-muted-foreground" />
              کارت <bdi dir="ltr">**** ۴۲۱۸</bdi>
            </p>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">پرداخت</Button>
          <Button variant="outline" className="flex-1">
            جزئیات
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
