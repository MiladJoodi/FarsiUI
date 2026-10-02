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
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

export function SettingsAppearance() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>ظاهر و زبان</CardTitle>
        <CardDescription>
          ترجیحات نمایش رابط کاربری را تنظیم کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="sa-lang">زبان</FieldLabel>
            <Select
              items={[
                { value: "fa", label: "فارسی" },
                { value: "en", label: "English" },
              ]}
              defaultValue="fa"
            >
              <SelectTrigger id="sa-lang" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  <SelectItem value="fa">فارسی</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="sa-tz">منطقه زمانی</FieldLabel>
            <Input
              id="sa-tz"
              defaultValue="Asia/Tehran"
              dir="ltr"
              className="text-start"
            />
          </Field>
        </FieldGroup>
        <Separator />
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="sa-dark">حالت تیره خودکار</Label>
              <p className="text-sm text-muted-foreground">
                بر اساس تنظیمات سیستم
              </p>
            </div>
            <Switch id="sa-dark" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="sa-compact">چیدمان فشرده</Label>
              <p className="text-sm text-muted-foreground">
                فاصله‌ها کمتر برای صفحات شلوغ
              </p>
            </div>
            <Switch id="sa-compact" />
          </div>
        </div>
        <Button className="w-full">اعمال تنظیمات</Button>
      </CardContent>
    </Card>
  )
}
