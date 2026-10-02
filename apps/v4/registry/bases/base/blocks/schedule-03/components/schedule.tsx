"use client"

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

const TODAY = new Date()

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

export function ScheduleSlotForm() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>افزودن به برنامه</CardTitle>
          <CardDescription>
            {formatJalali(TODAY)} ·{" "}
            <bdi dir="ltr">{formatJalaliCompact(TODAY)}</bdi>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="sch3-title">عنوان</FieldLabel>
            <Input
              id="sch3-title"
              placeholder="مثلاً جلسه تیم"
              dir="rtl"
            />
          </Field>

          <Field>
            <FieldLabel>نوع</FieldLabel>
            <Select defaultValue="meeting">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="meeting">جلسه</SelectItem>
                <SelectItem value="focus">تمرکز</SelectItem>
                <SelectItem value="personal">شخصی</SelectItem>
                <SelectItem value="break">استراحت</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="sch3-start">شروع</FieldLabel>
              <Input
                id="sch3-start"
                type="time"
                defaultValue="10:00"
                dir="ltr"
                className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sch3-end">پایان</FieldLabel>
              <Input
                id="sch3-end"
                type="time"
                defaultValue="11:00"
                dir="ltr"
                className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="sch3-place">مکان</FieldLabel>
            <Input id="sch3-place" placeholder="اتاق یا لینک" dir="rtl" />
            <FieldDescription>
              لینک جلسه را با <bdi dir="ltr">LTR</bdi> وارد کنید
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="sch3-link">لینک آنلاین</FieldLabel>
            <Input
              id="sch3-link"
              placeholder="meet.example.com/room"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="sch3-notes">یادداشت</FieldLabel>
            <Textarea
              id="sch3-notes"
              placeholder="توضیح کوتاه…"
              dir="rtl"
              rows={3}
            />
          </Field>

          <Separator />

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="sch3-remind">یادآوری ۱۰ دقیقه قبل</Label>
            <Switch id="sch3-remind" defaultChecked />
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
