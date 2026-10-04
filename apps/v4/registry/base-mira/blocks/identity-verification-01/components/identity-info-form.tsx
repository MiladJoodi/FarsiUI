"use client"

import NationalIdInput from "@/registry/base-mira/blocks/identity-verification-01/components/national-id-input"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"

export default function IdentityInfoForm() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>فرم اطلاعات هویتی</CardTitle>
        <CardDescription>
          مشخصات را دقیقاً مطابق کارت ملی وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="first-name">نام</FieldLabel>
                <Input id="first-name" placeholder="سارا" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="last-name">نام خانوادگی</FieldLabel>
                <Input id="last-name" placeholder="محمدی" required />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="national-id">کد ملی</FieldLabel>
              <NationalIdInput id="national-id" name="nationalId" />
            </Field>
            <Field>
              <FieldLabel htmlFor="birthdate">تاریخ تولد</FieldLabel>
              <Input
                id="birthdate"
                inputMode="numeric"
                placeholder="۱۳۷۲/۰۶/۱۵"
                dir="ltr"
                className="text-start"
                required
              />
              <FieldDescription>به صورت شمسی، مطابق کارت ملی</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="mobile">شماره موبایل</FieldLabel>
              <Input
                id="mobile"
                type="tel"
                inputMode="tel"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <Button type="submit" className="w-full">
                ادامه احراز هویت
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
