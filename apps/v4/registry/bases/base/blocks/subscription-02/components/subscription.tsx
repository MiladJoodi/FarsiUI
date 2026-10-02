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

const NEXT_BILLING = new Date()
NEXT_BILLING.setDate(NEXT_BILLING.getDate() + 18)

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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function SubscriptionUsageCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>حرفه‌ای</Badge>
            <Badge variant="outline">فعال</Badge>
          </div>
          <CardTitle>وضعیت اشتراک</CardTitle>
          <CardDescription>مصرف دوره و تمدید شمسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-sm tracking-normal">
              <span>پروژه‌ها</span>
              <span className="text-muted-foreground">۷ / ۱۰</span>
            </div>
            <Progress value={70} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm tracking-normal">
              <span>فضای ذخیره</span>
              <span className="text-muted-foreground">۱۲ / ۲۰ گیگابایت</span>
            </div>
            <Progress value={60} />
          </div>
          <Separator />
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2 tracking-normal">
              <CalendarIcon className="size-4 text-muted-foreground" />
              تمدید: {formatJalali(NEXT_BILLING)}
            </p>
            <p className="text-xs text-muted-foreground tracking-normal">
              {formatJalaliCompact(NEXT_BILLING)}
            </p>
            <p className="flex items-center gap-2 tracking-normal">
              <CreditCardIcon className="size-4 text-muted-foreground" />
              کارت **** ۴۲۱۸
            </p>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">تغییر طرح</Button>
          <Button variant="outline" className="flex-1">
            به‌روزرسانی کارت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
