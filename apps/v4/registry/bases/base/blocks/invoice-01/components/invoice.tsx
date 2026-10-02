"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const ISSUE_DATE = new Date()
ISSUE_DATE.setDate(ISSUE_DATE.getDate() - 3)

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
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
          <CardDescription>
            شماره <bdi dir="ltr">INV-1042</bdi>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">تاریخ صدور</span>
            <span>{formatJalali(ISSUE_DATE)}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-muted-foreground">خریدار</span>
            <span>شرکت نوآوران</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-3 font-medium">
            <span>مبلغ کل</span>
            <span>
              <bdi dir="ltr">۱٬۲۹۵٬۰۰۰</bdi> تومان
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t text-xs text-muted-foreground">
          وضعیت: پرداخت‌شده
        </CardFooter>
      </Card>
    </section>
  )
}
