"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
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

const CHANNEL_ITEMS = [
  { value: "ایمیل", label: "ایمیل" },
  { value: "پیامک", label: "پیامک" },
  { value: "اعلان مرورگر", label: "اعلان مرورگر" },
] as const

const FREQ_ITEMS = [
  { value: "آنی", label: "آنی" },
  { value: "روزانه", label: "روزانه" },
  { value: "هفتگی", label: "هفتگی" },
  { value: "خاموش", label: "خاموش" },
] as const

const TIME_ITEMS = [
  { value: "۲۲:۰۰", label: "۲۲:۰۰" },
  { value: "۲۳:۰۰", label: "۲۳:۰۰" },
  { value: "۰۰:۰۰", label: "۰۰:۰۰" },
  { value: "۰۶:۰۰", label: "۰۶:۰۰" },
  { value: "۰۷:۰۰", label: "۰۷:۰۰" },
  { value: "۰۸:۰۰", label: "۰۸:۰۰" },
] as const

export function AccountNotificationsSchedule() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
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
              <Select items={[...CHANNEL_ITEMS]} defaultValue="ایمیل">
                <SelectTrigger id="an3-channel" className="w-full" dir="rtl">
                  <SelectValue placeholder="کانال را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {CHANNEL_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="an3-freq">تواتر خلاصه</FieldLabel>
              <Select items={[...FREQ_ITEMS]} defaultValue="هفتگی">
                <SelectTrigger id="an3-freq" className="w-full" dir="rtl">
                  <SelectValue placeholder="تواتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {FREQ_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
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
                className="text-left"
              />
              <FieldDescription>
                خلاصه‌ها به این آدرس ارسال می‌شوند
              </FieldDescription>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="an3-from">شروع سکوت</FieldLabel>
                <Select items={[...TIME_ITEMS]} defaultValue="۲۲:۰۰">
                  <SelectTrigger id="an3-from" className="w-full" dir="rtl">
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
                <FieldLabel htmlFor="an3-to">پایان سکوت</FieldLabel>
                <Select items={[...TIME_ITEMS]} defaultValue="۰۷:۰۰">
                  <SelectTrigger id="an3-to" className="w-full" dir="rtl">
                    <SelectValue placeholder="ساعت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {TIME_ITEMS.map((item) => (
                      <SelectItem key={`to-${item.value}`} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

          <Button type="button" className="w-full">
            اعمال زمان‌بندی
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
