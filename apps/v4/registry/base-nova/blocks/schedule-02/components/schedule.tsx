"use client"

import { ClockIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"

const TODAY = new Date()

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
  })
  return `${weekday}، ${rest}`
}

const SLOTS = [
  {
    time: "۰۹:۰۰ – ۰۹:۳۰",
    title: "جلسه صبحگاهی",
    place: "اتاق آبی",
    type: "جلسه",
  },
  {
    time: "۱۱:۰۰ – ۱۲:۰۰",
    title: "بازبینی طراحی",
    place: "آنلاین",
    type: "طراحی",
  },
  {
    time: "۱۴:۳۰ – ۱۵:۱۵",
    title: "تماس با مشتری",
    place: "تلفن",
    type: "مشتری",
  },
  {
    time: "۱۶:۰۰ – ۱۷:۰۰",
    title: "برنامه‌ریزی اسپرینت",
    place: "اتاق سبز",
    type: "اسپرینت",
  },
] as const

export function ScheduleDayCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">برنامه زمانی</h1>
          <p className="mt-1 text-sm tracking-normal text-muted-foreground">
            {formatJalali(TODAY)}
          </p>
        </div>
        <Button size="sm">افزودن</Button>
      </div>
      <div className="space-y-3">
        {SLOTS.map((slot) => (
          <Card key={slot.time}>
            <CardHeader className="pb-2 text-start">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{slot.type}</Badge>
              </div>
              <CardTitle className="text-base">{slot.title}</CardTitle>
              <CardDescription className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 tracking-normal">
                  <ClockIcon className="size-3.5" />
                  {slot.time}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPinIcon className="size-3.5" />
                  {slot.place}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                جزئیات
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
