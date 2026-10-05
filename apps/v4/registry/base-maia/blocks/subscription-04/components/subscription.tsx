"use client"

import { CalendarIcon, CreditCardIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import { Progress } from "@/registry/base-maia/ui/progress"
import { Separator } from "@/registry/base-maia/ui/separator"

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

const USAGE = [
  { label: "پروژه‌ها", value: 70, detail: "۷ از ۱۰" },
  { label: "اعضا", value: 40, detail: "۲ از ۵" },
  { label: "API", value: 85, detail: "۸۵٬۰۰۰ از ۱۰۰٬۰۰۰" },
] as const

export default function SubscriptionDashboard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>فعال</Badge>
            <Badge variant="secondary">حرفه‌ای</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">اشتراک من</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            وضعیت، مصرف و تمدید اشتراک فعلی
          </p>
        </div>
        <div className="flex gap-2">
          <Button>ارتقا</Button>
          <Popover>
            <PopoverTrigger
              render={
                <Button variant="outline" size="icon" aria-label="بیشتر" />
              }
            >
              <MoreHorizontalIcon />
            </PopoverTrigger>
            <PopoverContent align="start" className="w-44 p-1" dir="rtl">
              <button
                type="button"
                className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                تغییر دوره
              </button>
              <button
                type="button"
                className="flex w-full rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                دانلود فاکتور
              </button>
              <button
                type="button"
                className="flex w-full rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-muted"
              >
                لغو اشتراک
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader className="text-start">
            <CardTitle>مصرف دوره</CardTitle>
            <CardDescription>تا تمدید بعدی</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {USAGE.map((u) => (
              <div key={u.label} className="space-y-2">
                <div className="flex justify-between text-sm tracking-normal">
                  <span>{u.label}</span>
                  <span className="text-muted-foreground">{u.detail}</span>
                </div>
                <Progress value={u.value} />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">صورت‌حساب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <CalendarIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <span>
                  تمدید بعدی
                  <br />
                  <span className="font-medium tracking-normal">
                    {formatJalali(NEXT_BILLING)}
                  </span>
                </span>
              </p>
              <Separator />
              <div className="flex justify-between gap-2 tracking-normal">
                <span className="text-muted-foreground">مبلغ</span>
                <span className="font-medium">۴۹۹٬۰۰۰ تومان</span>
              </div>
              <p className="flex items-center gap-2 tracking-normal">
                <CreditCardIcon className="size-4 text-muted-foreground" />
                **** ۴۲۱۸
              </p>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full">
            مشاهده صورتحساب کامل
          </Button>
        </div>
      </div>
    </section>
  )
}
