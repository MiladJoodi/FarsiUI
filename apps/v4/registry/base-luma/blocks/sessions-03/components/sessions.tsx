"use client"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
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
import { Separator } from "@/registry/base-luma/ui/separator"
import { Switch } from "@/registry/base-luma/ui/switch"

export function SessionsPreferences() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>ترجیحات نشست</CardTitle>
          <CardDescription>
            مهلت، اعتماد به دستگاه و ایمیل هشدار
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="se3-timeout">مهلت نشست</FieldLabel>
              <Select defaultValue="30">
                <SelectTrigger id="se3-timeout" className="w-full" dir="rtl">
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
            <Field>
              <FieldLabel htmlFor="se3-city">شهر پیش‌فرض</FieldLabel>
              <Select defaultValue="tehran">
                <SelectTrigger id="se3-city" className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب شهر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="tehran">تهران</SelectItem>
                  <SelectItem value="isfahan">اصفهان</SelectItem>
                  <SelectItem value="shiraz">شیراز</SelectItem>
                  <SelectItem value="mashhad">مشهد</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="se3-email">ایمیل هشدار</FieldLabel>
              <Input
                id="se3-email"
                type="email"
                defaultValue="reza@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>برای ورود از مکان ناآشنا</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="se3-name">نام دستگاه قابل اعتماد</FieldLabel>
              <Input id="se3-name" placeholder="مثلاً لپ‌تاپ کاری" dir="rtl" />
            </Field>
          </FieldGroup>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="se3-remember">به‌خاطر سپردن دستگاه</Label>
                <p className="text-sm text-muted-foreground">
                  تا پایان مهلت بدون ورود مجدد
                </p>
              </div>
              <Switch id="se3-remember" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="se3-alert">هشدار ورود جدید</Label>
                <p className="text-sm text-muted-foreground">
                  ایمیل هنگام نشست تازه
                </p>
              </div>
              <Switch id="se3-alert" defaultChecked />
            </div>
          </div>

          <Button className="w-full">ذخیره ترجیحات</Button>
        </CardContent>
      </Card>
    </section>
  )
}
