"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

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
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

export function BookingForm() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
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
          <CardDescription>
            ایمیل و ساعت LTR · تاریخ شمسی
          </CardDescription>
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
              placeholder="0912xxxxxxx"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>برای ارسال پیامک تأیید</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>خدمت</FieldLabel>
            <Select defaultValue="consult">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="consult">مشاوره</SelectItem>
                <SelectItem value="checkup">معاینه</SelectItem>
                <SelectItem value="follow">پیگیری</SelectItem>
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
              <FieldDescription>
                <bdi dir="ltr">{formatJalaliCompact(date)}</bdi>
              </FieldDescription>
            ) : null}
          </Field>

          <Field>
            <FieldLabel htmlFor="bk3-time">ساعت</FieldLabel>
            <Input
              id="bk3-time"
              type="time"
              defaultValue="10:30"
              dir="ltr"
              className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
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
