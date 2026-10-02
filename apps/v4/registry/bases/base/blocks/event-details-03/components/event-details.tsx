"use client"

import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const EVENT_DATE = new Date()

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
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

export function EventDetailsForm() {
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
          <CardDescription>
            تاریخ شمسی و دعوت با ایمیل LTR
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />
              <span className="font-medium">{formatJalali(EVENT_DATE)}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              <bdi dir="ltr">{formatJalaliCompact(EVENT_DATE)}</bdi>
              {" · "}
              ساعت <bdi dir="ltr">۱۰:۰۰ – ۱۱:۳۰</bdi>
            </p>
          </div>

          <Field>
            <FieldLabel htmlFor="ed3-title">عنوان</FieldLabel>
            <Input
              id="ed3-title"
              defaultValue="جلسهٔ تیم محصول"
              dir="rtl"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel>نوع</FieldLabel>
              <Select defaultValue="meeting">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="meeting">جلسه</SelectItem>
                  <SelectItem value="deadline">ددلاین</SelectItem>
                  <SelectItem value="personal">شخصی</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ed3-place">مکان</FieldLabel>
              <Input id="ed3-place" defaultValue="اتاق آبی" dir="rtl" />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="ed3-start">شروع</FieldLabel>
              <Input
                id="ed3-start"
                type="time"
                defaultValue="10:00"
                dir="ltr"
                className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="ed3-end">پایان</FieldLabel>
              <Input
                id="ed3-end"
                type="time"
                defaultValue="11:30"
                dir="ltr"
                className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
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
            <FieldDescription>می‌توانید چند نفر را جداگانه دعوت کنید</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="ed3-online">جلسه آنلاین</Label>
            <Switch id="ed3-online" />
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              <bdi dir="ltr">۹۰ دقیقه</bdi>
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
