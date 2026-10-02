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

const METHOD_ITEMS = [
  { value: "پیامک", label: "پیامک" },
  { value: "ایمیل", label: "ایمیل" },
  { value: "اپلیکیشن احراز", label: "اپلیکیشن احراز" },
  { value: "غیرفعال", label: "غیرفعال" },
] as const

const TIMEOUT_ITEMS = [
  { value: "۱ روز", label: "۱ روز" },
  { value: "۷ روز", label: "۷ روز" },
  { value: "۳۰ روز", label: "۳۰ روز" },
  { value: "۹۰ روز", label: "۹۰ روز" },
] as const

export function SecuritySettingsMethods() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>روش‌های تأیید هویت</CardTitle>
          <CardDescription>
            کانال تأیید، بازیابی و هشدارهای امنیتی
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ss3-method">روش دو مرحله‌ای</FieldLabel>
              <Select items={[...METHOD_ITEMS]} defaultValue="پیامک">
                <SelectTrigger id="ss3-method" className="w-full" dir="rtl">
                  <SelectValue placeholder="روش را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {METHOD_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ss3-phone">شماره موبایل</FieldLabel>
              <Input
                id="ss3-phone"
                type="tel"
                inputMode="tel"
                defaultValue="۰۹۱۲۱۲۳۴۵۶۷"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                dir="ltr"
                className="text-left tracking-normal"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="ss3-email">ایمیل بازیابی</FieldLabel>
              <Input
                id="ss3-email"
                type="email"
                defaultValue="reza@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-left"
              />
              <FieldDescription>
                برای بازیابی حساب در صورت از دست رفتن موبایل
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="ss3-timeout">مهلت نشست</FieldLabel>
              <Select items={[...TIMEOUT_ITEMS]} defaultValue="۳۰ روز">
                <SelectTrigger id="ss3-timeout" className="w-full" dir="rtl">
                  <SelectValue placeholder="مدت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIMEOUT_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ss3-alert">هشدار ورود جدید</Label>
                <p className="text-sm text-muted-foreground">
                  اطلاع هنگام ورود از مکان ناآشنا
                </p>
              </div>
              <Switch id="ss3-alert" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ss3-lock">قفل پس از تلاش ناموفق</Label>
                <p className="text-sm text-muted-foreground tracking-normal">
                  بعد از ۵ تلاش اشتباه، حساب موقتاً قفل شود
                </p>
              </div>
              <Switch id="ss3-lock" defaultChecked />
            </div>
          </div>

          <Button type="button" className="w-full">
            اعمال تنظیمات
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
