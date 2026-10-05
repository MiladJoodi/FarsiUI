"use client"

import * as React from "react"
import {
  CalendarIcon,
  ClockIcon,
  LinkIcon,
  MapPinIcon,
  MoreHorizontalIcon,
  UsersIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-vega/ui/popover"
import { Separator } from "@/registry/base-vega/ui/separator"

const EVENT_DATE = new Date()

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

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

function formatJalaliMonth(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    month: "short",
  })
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

const ATTENDEES = [
  {
    name: "مریم رضایی",
    role: "میزبان",
    status: "پذیرفته",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    role: "مهمان",
    status: "پذیرفته",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    fallback: "عل",
  },
  {
    name: "سارا کریمی",
    role: "مهمان",
    status: "در انتظار",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
    fallback: "سا",
  },
  {
    name: "رضا حسینی",
    role: "مهمان",
    status: "رد شده",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=80",
    fallback: "رض",
  },
] as const

const AGENDA = [
  { time: "۱۰:۰۰", title: "مرور وضعیت اسپرینت" },
  { time: "۱۰:۲۵", title: "اولویت‌های انتشار" },
  { time: "۱۱:۰۰", title: "سؤالات باز و جمع‌بندی" },
] as const

export default function EventDetailsDashboard() {
  const [moreOpen, setMoreOpen] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>جلسه</Badge>
            <Badge variant="secondary">تأیید شده</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            جلسهٔ تیم محصول
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            جزئیات کامل رویداد در تقویم شمسی
          </p>
        </div>
        <div className="flex gap-2">
          <Button>ویرایش</Button>
          <Popover open={moreOpen} onOpenChange={setMoreOpen}>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="بیشتر"
                />
              }
            >
              <MoreHorizontalIcon />
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 p-1"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setMoreOpen(false)}
              >
                کپی لینک
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setMoreOpen(false)}
              >
                افزودن به تقویم
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start text-destructive"
                onClick={() => setMoreOpen(false)}
              >
                حذف
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle>اطلاعات اصلی</CardTitle>
              <CardDescription>زمان، مکان و لینک جلسه</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex gap-4">
                <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg border bg-muted/40">
                  <span className="text-xs text-muted-foreground">
                    {formatJalaliMonth(EVENT_DATE)}
                  </span>
                  <span className="text-2xl font-semibold tracking-normal">
                    {formatJalaliDay(EVENT_DATE)}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 font-medium tracking-normal">
                    <CalendarIcon className="size-4 text-muted-foreground" />
                    {formatJalali(EVENT_DATE)}
                  </p>
                  <p className="flex items-center gap-2 tracking-normal">
                    <ClockIcon className="size-4 text-muted-foreground" />
                    ۱۰:۰۰ – ۱۱:۳۰
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPinIcon className="size-4 text-muted-foreground" />
                    اتاق آبی · طبقه ۳
                  </p>
                  <p className="flex items-center gap-2">
                    <LinkIcon className="size-4 text-muted-foreground" />
                    <bdi dir="ltr" className="text-xs">
                      meet.example.com/product
                    </bdi>
                  </p>
                </div>
              </div>
              <Separator />
              <p className="leading-relaxed text-muted-foreground">
                هماهنگی اسپرینت بعدی، مرور بک‌لاگ و تعیین اولویت‌های انتشار.
                لطفاً قبل از جلسه نکات خود را در کانال محصول بنویسید.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle>دستور جلسه</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {AGENDA.map((item) => (
                <div
                  key={item.time}
                  className="flex items-start gap-3 rounded-lg border px-3 py-2 text-sm"
                >
                  <span className="shrink-0 font-medium tracking-normal text-muted-foreground">
                    {item.time}
                  </span>
                  <span>{item.title}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="flex items-center gap-2 text-base">
              <UsersIcon className="size-4" />
              شرکت‌کنندگان
            </CardTitle>
            <CardDescription className="tracking-normal">
              {toFa(ATTENDEES.length)} نفر
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {ATTENDEES.map((a) => (
              <div key={a.name} className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarImage src={a.src} alt={a.name} />
                  <AvatarFallback>{a.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.role}</p>
                </div>
                <Badge
                  variant={
                    a.status === "پذیرفته"
                      ? "secondary"
                      : a.status === "رد شده"
                        ? "destructive"
                        : "outline"
                  }
                  className="shrink-0 text-[10px]"
                >
                  {a.status}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full" size="sm">
              دعوت بیشتر
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
