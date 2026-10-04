"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Calendar } from "@/registry/base-rhea/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-rhea/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Switch } from "@/registry/base-rhea/ui/switch"
import { Textarea } from "@/registry/base-rhea/ui/textarea"

const SERVICE_ITEMS = [
  { value: "مشاوره", label: "مشاوره" },
  { value: "معاینه", label: "معاینه" },
  { value: "پیگیری", label: "پیگیری" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۰:۳۰", label: "۱۰:۳۰" },
  { value: "۱۱:۳۰", label: "۱۱:۳۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۵:۳۰", label: "۱۵:۳۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۷:۰۰", label: "۱۷:۰۰" },
] as const

type ServiceValue = (typeof SERVICE_ITEMS)[number]["value"]
type TimeValue = (typeof TIME_ITEMS)[number]["value"]

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

export default function BookingForm() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [service, setService] = React.useState<ServiceValue>("مشاوره")
  const [time, setTime] = React.useState<TimeValue>("۱۰:۳۰")
  const [remind, setRemind] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge className="mb-2 w-fit">فرم رزرو</Badge>
          <CardTitle>جزئیات نوبت</CardTitle>
          <CardDescription>تاریخ شمسی و ساعت فارسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="bk3-name">نام و نام خانوادگی</FieldLabel>
            <Input id="bk3-name" placeholder="مثلاً مریم رضایی" dir="rtl" />
          </Field>

          <Field>
            <FieldLabel htmlFor="bk3-email">ایمیل</FieldLabel>
            <Input
              id="bk3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="bk3-phone">موبایل</FieldLabel>
            <Input
              id="bk3-phone"
              type="tel"
              placeholder="۰۹۱۲xxxxxxx"
              dir="rtl"
              className="text-start tracking-normal"
            />
            <FieldDescription>برای ارسال پیامک تأیید</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>خدمت</FieldLabel>
            <Select
              items={[...SERVICE_ITEMS]}
              value={service}
              onValueChange={(value) => {
                if (SERVICE_ITEMS.some((item) => item.value === value)) {
                  setService(value as ServiceValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SERVICE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="bk3-date">تاریخ</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    id="bk3-date"
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
            {date ? (
              <FieldDescription className="tracking-normal">
                {formatJalaliCompact(date)}
              </FieldDescription>
            ) : null}
          </Field>

          <Field>
            <FieldLabel>ساعت</FieldLabel>
            <Select
              items={[...TIME_ITEMS]}
              value={time}
              onValueChange={(value) => {
                if (TIME_ITEMS.some((item) => item.value === value)) {
                  setTime(value as TimeValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="ساعت" />
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
            <FieldLabel htmlFor="bk3-notes">توضیحات</FieldLabel>
            <Textarea
              id="bk3-notes"
              placeholder="در صورت نیاز بنویسید…"
              dir="rtl"
              rows={3}
            />
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="bk3-remind">یادآوری پیامکی</Label>
            <Switch
              id="bk3-remind"
              checked={remind}
              onCheckedChange={setRemind}
            />
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">ثبت رزرو</Button>
          <Button variant="outline" className="flex-1">
            انصراف
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
