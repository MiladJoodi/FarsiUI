"use client"

import * as React from "react"
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  PrinterIcon,
  SendIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Separator } from "@/registry/base-lyra/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-lyra/ui/tabs"

const ISSUE_DATE = new Date()
ISSUE_DATE.setDate(ISSUE_DATE.getDate() - 3)
const DUE_DATE = new Date()
DUE_DATE.setDate(DUE_DATE.getDate() + 7)
const PAID_DATE = new Date()
PAID_DATE.setDate(PAID_DATE.getDate() - 1)

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

const LINES = [
  {
    name: "اشتراک حرفه‌ای — ماهانه",
    qty: "۱",
    unit: "۴۹۹٬۰۰۰",
    amount: "۴۹۹٬۰۰۰",
  },
  { name: "صندلی اضافی", qty: "۲", unit: "۱۰۰٬۰۰۰", amount: "۲۰۰٬۰۰۰" },
  { name: "پشتیبانی اولویت‌دار", qty: "۱", unit: "۱۵۰٬۰۰۰", amount: "۱۵۰٬۰۰۰" },
] as const

const ACTIVITY = [
  { label: "پرداخت دریافت شد", date: PAID_DATE },
  { label: "فاکتور ارسال شد", date: ISSUE_DATE },
  { label: "پیش‌نویس ایجاد شد", date: ISSUE_DATE },
] as const

export default function InvoiceFancy() {
  const [copied, setCopied] = React.useState(false)

  function copyId() {
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>پرداخت‌شده</Badge>
            <Badge variant="outline" className="tracking-normal">
              فاکتور-۱۰۴۲
            </Badge>
            <Badge variant="secondary" className="tracking-normal">
              {formatJalaliCompact(ISSUE_DATE)}
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">فاکتور</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            سند فروش برای شرکت نوآوران
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={copyId}>
            {copied ? (
              <CheckIcon data-icon="inline-start" />
            ) : (
              <CopyIcon data-icon="inline-start" />
            )}
            {copied ? "کپی شد" : "کپی شماره"}
          </Button>
          <Button variant="outline" size="sm">
            <PrinterIcon data-icon="inline-start" />
            چاپ
          </Button>
          <Button size="sm">
            <DownloadIcon data-icon="inline-start" />
            PDF
          </Button>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Tabs defaultValue="document" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="document">سند</TabsTrigger>
            <TabsTrigger value="activity">فعالیت</TabsTrigger>
          </TabsList>

          <TabsContent value="document">
            <Card>
              <CardHeader className="flex-row flex-wrap justify-between gap-4 space-y-0 text-start">
                <div>
                  <CardTitle>فاکتور فروش</CardTitle>
                  <CardDescription className="tracking-normal">
                    صادرکننده: FarsiUI · شناسه ملی ۱۰۱۰۱۲۳۴۵۶۷
                  </CardDescription>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">خریدار</p>
                  <p className="font-medium">شرکت نوآوران</p>
                  <p className="text-xs text-muted-foreground">
                    <span dir="ltr" className="inline-block">
                      billing@novaran.example
                    </span>
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">تاریخ صدور</p>
                    <p className="mt-1 font-medium tracking-normal">
                      {formatJalali(ISSUE_DATE)}
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">سررسید</p>
                    <p className="mt-1 font-medium tracking-normal">
                      {formatJalali(DUE_DATE)}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full min-w-[28rem] text-sm">
                    <thead className="border-b bg-muted/40 text-muted-foreground">
                      <tr>
                        <th className="px-3 py-2 text-start font-medium">
                          شرح
                        </th>
                        <th className="px-3 py-2 text-start font-medium">
                          تعداد
                        </th>
                        <th className="px-3 py-2 text-start font-medium">
                          واحد
                        </th>
                        <th className="px-3 py-2 text-start font-medium">
                          مبلغ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {LINES.map((line) => (
                        <tr key={line.name} className="border-b last:border-0">
                          <td className="px-3 py-2.5">{line.name}</td>
                          <td className="px-3 py-2.5 tracking-normal">
                            {line.qty}
                          </td>
                          <td className="px-3 py-2.5 tracking-normal">
                            {line.unit}
                          </td>
                          <td className="px-3 py-2.5 font-medium tracking-normal">
                            {line.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="ms-auto max-w-xs space-y-2 text-sm tracking-normal">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">جمع جزء</span>
                    <span>۸۴۹٬۰۰۰</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">مالیات ۹٪</span>
                    <span>۷۶٬۴۱۰</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between gap-4 text-base font-semibold">
                    <span>جمع کل</span>
                    <span>۹۲۵٬۴۱۰ تومان</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-2">
            {ACTIVITY.map((a) => (
              <Card key={a.label}>
                <CardContent className="flex items-center justify-between gap-3 py-4 text-sm">
                  <span>{a.label}</span>
                  <span className="text-xs tracking-normal text-muted-foreground">
                    {formatJalaliCompact(a.date)}
                  </span>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">خلاصه پرداخت</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">وضعیت</span>
                <Badge variant="secondary">پرداخت‌شده</Badge>
              </div>
              <div className="flex justify-between gap-2 tracking-normal">
                <span className="text-muted-foreground">تاریخ پرداخت</span>
                <span>{formatJalaliCompact(PAID_DATE)}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-2 font-medium tracking-normal">
                <span>مبلغ</span>
                <span>۹۲۵٬۴۱۰ تومان</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 border-t">
              <Button className="w-full" variant="outline">
                <SendIcon data-icon="inline-start" />
                ارسال مجدد ایمیل
              </Button>
              <Button className="w-full" variant="outline">
                <DownloadIcon data-icon="inline-start" />
                دانلود PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
