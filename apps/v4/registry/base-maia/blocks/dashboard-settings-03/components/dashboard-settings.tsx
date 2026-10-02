"use client"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

export function DashboardSettingsAppearance() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>ظاهر و زبان</CardTitle>
          <CardDescription>ترجیحات نمایش داشبورد را تنظیم کنید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="ds3-lang">زبان رابط</FieldLabel>
              <Select defaultValue="fa">
                <SelectTrigger id="ds3-lang" className="w-full" dir="rtl">
                  <SelectValue placeholder="زبان را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ds3-density">تراکم چیدمان</FieldLabel>
              <Select defaultValue="comfortable">
                <SelectTrigger id="ds3-density" className="w-full" dir="rtl">
                  <SelectValue placeholder="تراکم" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="comfortable">راحت</SelectItem>
                  <SelectItem value="compact">فشرده</SelectItem>
                  <SelectItem value="spacious">باز</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="ds3-tz">منطقه زمانی</FieldLabel>
              <Input
                id="ds3-tz"
                defaultValue="Asia/Tehran"
                placeholder="Asia/Tehran"
                dir="ltr"
                className="text-start"
              />
            </Field>
          </FieldGroup>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ds3-dark">حالت تیره خودکار</Label>
                <p className="text-sm text-muted-foreground">
                  بر اساس تنظیمات سیستم
                </p>
              </div>
              <Switch id="ds3-dark" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ds3-rtl">قفل جهت راست‌چین</Label>
                <p className="text-sm text-muted-foreground">
                  حتی با زبان انگلیسی، چیدمان RTL بماند
                </p>
              </div>
              <Switch id="ds3-rtl" defaultChecked />
            </div>
          </div>

          <Button className="w-full">اعمال تنظیمات</Button>
        </CardContent>
      </Card>
    </section>
  )
}
