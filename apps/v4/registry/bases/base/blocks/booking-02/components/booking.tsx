"use client"

import * as React from "react"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const SERVICES = [
  { id: "consult", title: "مشاوره", duration: "۳۰ دقیقه", price: "۳۵۰٬۰۰۰" },
  { id: "checkup", title: "معاینه", duration: "۴۵ دقیقه", price: "۴۸۰٬۰۰۰" },
  { id: "follow", title: "پیگیری", duration: "۲۰ دقیقه", price: "۲۲۰٬۰۰۰" },
] as const

const SLOTS = [
  { label: "۰۹:۰۰", value: "09:00" },
  { label: "۱۰:۳۰", value: "10:30" },
  { label: "۱۴:۰۰", value: "14:00" },
  { label: "۱۵:۳۰", value: "15:30" },
  { label: "۱۷:۰۰", value: "17:00" },
] as const

export function BookingServiceCard() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [service, setService] = React.useState<(typeof SERVICES)[number]["id"]>(
    "consult"
  )
  const [slot, setSlot] = React.useState("10:30")
  const selected = SERVICES.find((s) => s.id === service)!

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            کلینیک نور
          </Badge>
          <CardTitle>رزرو نوبت</CardTitle>
          <CardDescription className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="size-3.5" />
              تهران · ولیعصر
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">خدمت</p>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.id)}
                className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-start text-sm transition-colors ${
                  service === s.id
                    ? "border-primary bg-primary/5"
                    : "hover:bg-muted/40"
                }`}
              >
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.duration}</p>
                </div>
                <span className="tabular-nums">
                  <bdi dir="ltr">{s.price}</bdi> تومان
                </span>
              </button>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm font-medium">تاریخ</p>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  />
                }
              >
                <CalendarIcon data-icon="inline-start" />
                {date ? formatJalali(date) : "انتخاب تاریخ"}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-1 text-sm font-medium">
              <ClockIcon className="size-3.5" />
              ساعت
            </p>
            <div className="flex flex-wrap gap-2">
              {SLOTS.map((s) => (
                <Button
                  key={s.value}
                  variant={slot === s.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSlot(s.value)}
                >
                  <bdi dir="ltr">{s.label}</bdi>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{selected.title}</span>
            <span className="font-medium">
              <bdi dir="ltr">{selected.price}</bdi> تومان
            </span>
          </div>
          <Button>ادامه رزرو</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
