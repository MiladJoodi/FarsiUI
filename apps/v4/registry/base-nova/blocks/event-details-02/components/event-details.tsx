"use client"

import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Separator } from "@/registry/base-nova/ui/separator"

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

const GUESTS = [
  {
    name: "مریم رضایی",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    fallback: "عل",
  },
  {
    name: "سارا کریمی",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
    fallback: "سا",
  },
] as const

export default function EventDetailsCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge variant="secondary">جلسه</Badge>
            <Badge variant="outline">آنلاین / حضوری</Badge>
          </div>
          <CardTitle>جلسهٔ تیم محصول</CardTitle>
          <CardDescription>
            هماهنگی اسپرینت بعدی و اولویت‌های انتشار
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 text-sm">
            <CalendarIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div>
              <p className="font-medium tracking-normal">
                {formatJalali(EVENT_DATE)}
              </p>
              <p className="text-xs text-muted-foreground">تقویم شمسی</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <ClockIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <p className="tracking-normal">ساعت ۱۰:۰۰ – ۱۱:۳۰</p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <p>اتاق آبی · طبقه ۳</p>
          </div>
          <Separator />
          <div>
            <p className="mb-2 text-sm font-medium">مهمان‌ها</p>
            <div className="flex -space-x-2 space-x-reverse">
              {GUESTS.map((g) => (
                <Avatar
                  key={g.name}
                  className="size-9 border-2 border-background"
                >
                  <AvatarImage src={g.src} alt={g.name} />
                  <AvatarFallback>{g.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">پذیرش</Button>
          <Button variant="outline" className="flex-1">
            رد
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
