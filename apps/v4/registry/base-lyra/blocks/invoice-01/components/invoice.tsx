"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Separator } from "@/registry/base-lyra/ui/separator"

const ISSUE_DATE = new Date()
ISSUE_DATE.setDate(ISSUE_DATE.getDate() - 3)

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

export function InvoiceSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فاکتور</CardTitle>
          <CardDescription className="tracking-normal">
            شماره فاکتور-۱۰۴۲
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">تاریخ صدور</span>
            <span>{formatJalali(ISSUE_DATE)}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">خریدار</span>
            <span>شرکت نوآوران</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-3 font-medium tracking-normal">
            <span>مبلغ کل</span>
            <span>۱٬۲۹۵٬۰۰۰ تومان</span>
          </div>
        </CardContent>
        <CardFooter className="border-t text-xs text-muted-foreground">
          وضعیت: پرداخت‌شده
        </CardFooter>
      </Card>
    </section>
  )
}
