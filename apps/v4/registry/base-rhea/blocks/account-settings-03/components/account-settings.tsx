"use client"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"

export function AccountSettingsAppearance() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>ظاهر و زبان</CardTitle>
          <CardDescription>
            زبان، منطقه زمانی و ترجیحات نمایش حساب
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="as3-lang">زبان رابط</FieldLabel>
              <Select defaultValue="fa">
                <SelectTrigger id="as3-lang" className="w-full" dir="rtl">
                  <SelectValue placeholder="زبان را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-theme">پوسته</FieldLabel>
              <Select defaultValue="system">
                <SelectTrigger id="as3-theme" className="w-full" dir="rtl">
                  <SelectValue placeholder="پوسته را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="system">سیستم</SelectItem>
                  <SelectItem value="light">روشن</SelectItem>
                  <SelectItem value="dark">تیره</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-tz">منطقه زمانی</FieldLabel>
              <Input
                id="as3-tz"
                defaultValue="Asia/Tehran"
                placeholder="Asia/Tehran"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>فرمت استاندارد IANA</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-city">شهر پیش‌فرض</FieldLabel>
              <Select defaultValue="tehran">
                <SelectTrigger id="as3-city" className="w-full" dir="rtl">
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
          </FieldGroup>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="as3-dark">حالت تیره خودکار</Label>
                <p className="text-sm text-muted-foreground">
                  بر اساس تنظیمات سیستم
                </p>
              </div>
              <Switch id="as3-dark" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="as3-rtl">قفل جهت راست‌چین</Label>
                <p className="text-sm text-muted-foreground">
                  حتی با زبان انگلیسی، چیدمان RTL بماند
                </p>
              </div>
              <Switch id="as3-rtl" defaultChecked />
            </div>
          </div>

          <Button className="w-full">اعمال تنظیمات</Button>
        </CardContent>
      </Card>
    </section>
  )
}
