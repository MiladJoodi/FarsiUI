"use client"

import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import { Label } from "@/registry/base-nova/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"
import { Switch } from "@/registry/base-nova/ui/switch"

export function SecuritySettingsMethods() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
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
              <Select defaultValue="sms">
                <SelectTrigger id="ss3-method" className="w-full" dir="rtl">
                  <SelectValue placeholder="روش را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="sms">پیامک</SelectItem>
                  <SelectItem value="email">ایمیل</SelectItem>
                  <SelectItem value="app">اپلیکیشن احراز</SelectItem>
                  <SelectItem value="off">غیرفعال</SelectItem>
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
                className="text-start"
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
                className="text-start"
              />
              <FieldDescription>
                برای بازیابی حساب در صورت از دست رفتن موبایل
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="ss3-timeout">مهلت نشست</FieldLabel>
              <Select defaultValue="30">
                <SelectTrigger id="ss3-timeout" className="w-full" dir="rtl">
                  <SelectValue placeholder="مدت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="1">۱ روز</SelectItem>
                  <SelectItem value="7">۷ روز</SelectItem>
                  <SelectItem value="30">۳۰ روز</SelectItem>
                  <SelectItem value="90">۹۰ روز</SelectItem>
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
                <p className="text-sm text-muted-foreground">
                  بعد از ۵ تلاش اشتباه، حساب موقتاً قفل شود
                </p>
              </div>
              <Switch id="ss3-lock" defaultChecked />
            </div>
          </div>

          <Button className="w-full">اعمال تنظیمات</Button>
        </CardContent>
      </Card>
    </section>
  )
}
