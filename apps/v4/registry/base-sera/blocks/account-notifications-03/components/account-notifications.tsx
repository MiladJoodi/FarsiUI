"use client"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"
import { Switch } from "@/registry/base-sera/ui/switch"

export function AccountNotificationsSchedule() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>زمان‌بندی اعلان‌ها</CardTitle>
          <CardDescription>
            کانال ترجیحی، تواتر خلاصه و ساعات سکوت
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="an3-channel">کانال اصلی</FieldLabel>
              <Select defaultValue="email">
                <SelectTrigger id="an3-channel" className="w-full" dir="rtl">
                  <SelectValue placeholder="کانال را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="email">ایمیل</SelectItem>
                  <SelectItem value="sms">پیامک</SelectItem>
                  <SelectItem value="push">اعلان مرورگر</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="an3-freq">تواتر خلاصه</FieldLabel>
              <Select defaultValue="weekly">
                <SelectTrigger id="an3-freq" className="w-full" dir="rtl">
                  <SelectValue placeholder="تواتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="realtime">آنی</SelectItem>
                  <SelectItem value="daily">روزانه</SelectItem>
                  <SelectItem value="weekly">هفتگی</SelectItem>
                  <SelectItem value="off">خاموش</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="an3-email">آدرس ایمیل</FieldLabel>
              <Input
                id="an3-email"
                type="email"
                defaultValue="sara@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>
                خلاصه‌ها به این آدرس ارسال می‌شوند
              </FieldDescription>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="an3-from">شروع سکوت</FieldLabel>
                <Input
                  id="an3-from"
                  type="time"
                  defaultValue="22:00"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="an3-to">پایان سکوت</FieldLabel>
                <Input
                  id="an3-to"
                  type="time"
                  defaultValue="07:00"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="an3-note">یادداشت شخصی</FieldLabel>
              <Input
                id="an3-note"
                placeholder="مثلاً فقط اعلان‌های فوری…"
                dir="rtl"
              />
            </Field>
          </FieldGroup>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="an3-quiet">ساعات سکوت</Label>
                <p className="text-sm text-muted-foreground">
                  در این بازه فقط هشدار امنیتی برسد
                </p>
              </div>
              <Switch id="an3-quiet" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="an3-weekend">تعطیل آخر هفته</Label>
                <p className="text-sm text-muted-foreground">
                  جمعه و شنبه اعلان غیرضروری نیاید
                </p>
              </div>
              <Switch id="an3-weekend" />
            </div>
          </div>

          <Button className="w-full">اعمال زمان‌بندی</Button>
        </CardContent>
      </Card>
    </section>
  )
}
