"use client"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-vega/ui/field"
import { Label } from "@/registry/base-vega/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"
import { Switch } from "@/registry/base-vega/ui/switch"

const LANG_ITEMS = [
  { value: "فارسی", label: "فارسی" },
  { value: "انگلیسی", label: "انگلیسی" },
] as const

const THEME_ITEMS = [
  { value: "سیستم", label: "سیستم" },
  { value: "روشن", label: "روشن" },
  { value: "تیره", label: "تیره" },
] as const

const TZ_ITEMS = [
  { value: "تهران", label: "تهران (ایران)" },
  { value: "دبی", label: "دبی" },
  { value: "استانبول", label: "استانبول" },
] as const

const CITY_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "شیراز", label: "شیراز" },
  { value: "مشهد", label: "مشهد" },
] as const

export function AccountSettingsAppearance() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
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
              <Select items={[...LANG_ITEMS]} defaultValue="فارسی">
                <SelectTrigger id="as3-lang" className="w-full" dir="rtl">
                  <SelectValue placeholder="زبان را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {LANG_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-theme">پوسته</FieldLabel>
              <Select items={[...THEME_ITEMS]} defaultValue="سیستم">
                <SelectTrigger id="as3-theme" className="w-full" dir="rtl">
                  <SelectValue placeholder="پوسته را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {THEME_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-tz">منطقه زمانی</FieldLabel>
              <Select items={[...TZ_ITEMS]} defaultValue="تهران">
                <SelectTrigger id="as3-tz" className="w-full" dir="rtl">
                  <SelectValue placeholder="منطقه زمانی" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TZ_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>بر اساس شهر نمایش داده می‌شود</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="as3-city">شهر پیش‌فرض</FieldLabel>
              <Select items={[...CITY_ITEMS]} defaultValue="تهران">
                <SelectTrigger id="as3-city" className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب شهر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {CITY_ITEMS.map((item) => (
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

          <Button type="button" className="w-full">
            اعمال تنظیمات
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
