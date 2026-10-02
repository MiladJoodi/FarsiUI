"use client"

import { DownloadIcon } from "lucide-react"

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
import { Separator } from "@/registry/bases/base/ui/separator"

const ISSUE_DATE = new Date()
ISSUE_DATE.setDate(ISSUE_DATE.getDate() - 3)
const DUE_DATE = new Date()
DUE_DATE.setDate(DUE_DATE.getDate() + 7)

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

const LINES = [
  { name: "اشتراک حرفه‌ای — ماهانه", qty: "۱", amount: "۴۹۹٬۰۰۰" },
  { name: "صندلی اضافی", qty: "۲", amount: "۲۰۰٬۰۰۰" },
  { name: "پشتیبانی اولویت‌دار", qty: "۱", amount: "۱۵۰٬۰۰۰" },
] as const

export function InvoiceDocument() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row flex-wrap items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge>پرداخت‌شده</Badge>
              <Badge variant="outline" className="tracking-normal">
                فاکتور-۱۰۴۲
              </Badge>
            </div>
            <CardTitle>فاکتور فروش</CardTitle>
            <CardDescription>شرکت نوآوران · تهران</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            PDF
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div>
              <p className="text-muted-foreground">تاریخ صدور</p>
              <p className="font-medium tracking-normal">
                {formatJalali(ISSUE_DATE)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">سررسید</p>
              <p className="font-medium tracking-normal">
                {formatJalali(DUE_DATE)}
              </p>
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            {LINES.map((line) => (
              <div
                key={line.name}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <div>
                  <p className="font-medium">{line.name}</p>
                  <p className="text-xs text-muted-foreground tracking-normal">
                    تعداد {line.qty}
                  </p>
                </div>
                <span className="shrink-0 tracking-normal">{line.amount}</span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="space-y-2 text-sm tracking-normal">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">جمع جزء</span>
              <span>۸۴۹٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">مالیات</span>
              <span>۷۶٬۴۱۰</span>
            </div>
            <div className="flex justify-between gap-2 font-semibold">
              <span>مبلغ قابل پرداخت</span>
              <span>۹۲۵٬۴۱۰ تومان</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t text-xs text-muted-foreground">
          رسید به{" "}
          <span dir="ltr" className="mx-1 inline-block">
            billing@example.com
          </span>{" "}
          ارسال شد
        </CardFooter>
      </Card>
    </section>
  )
}
