"use client"

import * as React from "react"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Switch } from "@/registry/base-luma/ui/switch"
import { Textarea } from "@/registry/base-luma/ui/textarea"

const EVENT_DATE = new Date()

const TYPE_ITEMS = [
  { value: "جلسه", label: "جلسه" },
  { value: "ددلاین", label: "ددلاین" },
  { value: "شخصی", label: "شخصی" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۰:۳۰", label: "۱۰:۳۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۱:۳۰", label: "۱۱:۳۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

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

export default function EventDetailsForm() {
  const [type, setType] = React.useState("جلسه")
  const [start, setStart] = React.useState("۱۰:۰۰")
  const [end, setEnd] = React.useState("۱۱:۳۰")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            ویرایش
          </Badge>
          <CardTitle>جزئیات رویداد</CardTitle>
          <CardDescription>تاریخ شمسی و دعوت با ایمیل LTR</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />
              <span className="font-medium tracking-normal">
                {formatJalali(EVENT_DATE)}
              </span>
            </div>
            <p className="mt-1 text-xs tracking-normal text-muted-foreground">
              {formatJalaliCompact(EVENT_DATE)}
              {" · "}
              ساعت {start} – {end}
            </p>
          </div>

          <Field>
            <FieldLabel htmlFor="ed3-title">عنوان</FieldLabel>
            <Input id="ed3-title" defaultValue="جلسهٔ تیم محصول" dir="rtl" />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
            <Field>
              <FieldLabel>نوع</FieldLabel>
              <Select
                items={[...TYPE_ITEMS]}
                value={type}
                onValueChange={(value) => {
                  if (TYPE_ITEMS.some((item) => item.value === value)) {
                    setType(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TYPE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ed3-place">مکان</FieldLabel>
              <Input id="ed3-place" defaultValue="اتاق آبی" dir="rtl" />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
            <Field>
              <FieldLabel>شروع</FieldLabel>
              <Select
                items={[...TIME_ITEMS]}
                value={start}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setStart(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="شروع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIME_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>پایان</FieldLabel>
              <Select
                items={[...TIME_ITEMS]}
                value={end}
                onValueChange={(value) => {
                  if (TIME_ITEMS.some((item) => item.value === value)) {
                    setEnd(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="پایان" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIME_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="ed3-notes">توضیحات</FieldLabel>
            <Textarea
              id="ed3-notes"
              defaultValue="هماهنگی اسپرینت بعدی و اولویت‌های انتشار."
              dir="rtl"
              rows={3}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="ed3-email">دعوت ایمیل</FieldLabel>
            <Input
              id="ed3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>
              می‌توانید چند نفر را جداگانه دعوت کنید
            </FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="ed3-online">جلسه آنلاین</Label>
            <Switch id="ed3-online" />
          </div>

          <div className="flex flex-wrap gap-3 text-xs tracking-normal text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              ۹۰ دقیقه
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="size-3.5" />
              تهران
            </span>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">ذخیره</Button>
          <Button variant="outline" className="flex-1">
            لغو
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
