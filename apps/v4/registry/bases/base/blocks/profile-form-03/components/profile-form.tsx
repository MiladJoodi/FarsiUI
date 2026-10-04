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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function ProfileFormVisibility() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>پروفایل و حریم خصوصی</CardTitle>
        <CardDescription>
          لینک‌های اجتماعی و میزان نمایش پروفایل را تنظیم کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="pf3-site">وب‌سایت</FieldLabel>
              <Input
                id="pf3-site"
                type="url"
                placeholder="https://example.com"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf3-x">ایکس (توییتر)</FieldLabel>
              <Input
                id="pf3-x"
                placeholder="@username"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf3-gh">گیت‌هاب</FieldLabel>
              <Input
                id="pf3-gh"
                placeholder="username"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>بدون آدرس کامل؛ فقط نام کاربری</FieldDescription>
            </Field>
          </FieldGroup>
        </form>
        <Separator />
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="pf3-public">پروفایل عمومی</Label>
              <p className="text-sm text-muted-foreground">
                دیگران بتوانند صفحهٔ شما را ببینند
              </p>
            </div>
            <Switch id="pf3-public" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="pf3-email">نمایش ایمیل</Label>
              <p className="text-sm text-muted-foreground">
                ایمیل در پروفایل عمومی دیده شود
              </p>
            </div>
            <Switch id="pf3-email" />
          </div>
        </div>
        <Button className="w-full">ذخیره تغییرات</Button>
      </CardContent>
    </Card>
  )
}
