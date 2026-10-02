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
import { Separator } from "@/registry/bases/base/ui/separator"

export function SettingsPassword() {
  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>تغییر رمز عبور</CardTitle>
          <CardDescription>
            برای امنیت بیشتر، رمز قوی و منحصربه‌فرد انتخاب کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sp-current">رمز فعلی</FieldLabel>
                <Input id="sp-current" type="password" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="sp-new">رمز جدید</FieldLabel>
                <Input id="sp-new" type="password" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="sp-confirm">تکرار رمز جدید</FieldLabel>
                <Input id="sp-confirm" type="password" required />
                <FieldDescription>حداقل ۸ کاراکتر</FieldDescription>
              </Field>
              <Button type="submit" className="w-full">
                به‌روزرسانی رمز
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <Card className="border-destructive/40">
        <CardHeader>
          <CardTitle className="text-destructive">منطقه خطر</CardTitle>
          <CardDescription>
            حذف حساب غیرقابل بازگشت است و همه داده‌ها پاک می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator />
          <Button variant="destructive" className="w-full">
            حذف حساب کاربری
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
