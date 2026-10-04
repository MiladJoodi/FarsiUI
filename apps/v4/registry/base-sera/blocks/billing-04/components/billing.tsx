"use client"

import { CalendarIcon, CreditCardIcon, ReceiptIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Progress } from "@/registry/base-sera/ui/progress"
import { Separator } from "@/registry/base-sera/ui/separator"

const PERIOD_START = new Date()
PERIOD_START.setDate(PERIOD_START.getDate() - 18)
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

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

const CHARGES = [
  { label: "طرح حرفه‌ای", amount: "۴۹۹٬۰۰۰" },
  { label: "صندلی اضافی ×۲", amount: "۲۰۰٬۰۰۰" },
  { label: "مصرف API", amount: "۸۰٬۰۰۰" },
  { label: "اعتبار تخفیف", amount: "−۲۰۰٬۰۰۰" },
] as const

const RECENT = [
  { id: "فاکتور-۱۰۴۱", amount: "۴۹۹٬۰۰۰", status: "پرداخت‌شده" },
  { id: "فاکتور-۱۰۳۸", amount: "۴۹۹٬۰۰۰", status: "پرداخت‌شده" },
] as const

export default function BillingDashboard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>دوره جاری</Badge>
            <Badge variant="outline" className="tracking-normal">
              {formatJalaliCompact(PERIOD_START)} –{" "}
              {formatJalaliCompact(PERIOD_END)}
            </Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">صورتحساب</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            هزینه و سررسید دوره جاری
          </p>
        </div>
        <Button className="tracking-normal">پرداخت ۵۷۹٬۰۰۰ تومان</Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader className="text-start">
            <CardTitle>ریز هزینه‌ها</CardTitle>
            <CardDescription className="tracking-normal">
              تا {formatJalali(PERIOD_END)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm tracking-normal">
                <span>پیشرفت دوره</span>
                <span className="text-muted-foreground">۶۰٪</span>
              </div>
              <Progress value={60} />
            </div>
            <Separator />
            {CHARGES.map((c) => (
              <div
                key={c.label}
                className="flex justify-between gap-3 text-sm tracking-normal"
              >
                <span className="text-muted-foreground">{c.label}</span>
                <span className="font-medium">{c.amount}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between gap-3 font-semibold tracking-normal">
              <span>جمع قابل پرداخت</span>
              <span>۵۷۹٬۰۰۰ تومان</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">پرداخت بعدی</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="flex items-center gap-2 tracking-normal">
                <CalendarIcon className="size-4 text-muted-foreground" />
                {formatJalali(PERIOD_END)}
              </p>
              <p className="flex items-center gap-2 tracking-normal">
                <CreditCardIcon className="size-4 text-muted-foreground" />
                **** ۴۲۱۸
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle className="flex items-center gap-2 text-base">
                <ReceiptIcon className="size-4" />
                فاکتورهای اخیر
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {RECENT.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between gap-2 tracking-normal"
                >
                  <span>{r.id}</span>
                  <span>{r.amount}</span>
                </div>
              ))}
              <Button variant="outline" size="sm" className="mt-2 w-full">
                همه فاکتورها
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
