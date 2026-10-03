"use client"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Textarea } from "@/registry/base-maia/ui/textarea"

export function ProfileFormSimple() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>ویرایش پروفایل</CardTitle>
        <CardDescription>
          نام نمایشی و خلاصهٔ کوتاهی از خودتان بنویسید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="pf-name">نام نمایشی</FieldLabel>
              <Input id="pf-name" defaultValue="سارا محمدی" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf-username">نام کاربری</FieldLabel>
              <Input
                id="pf-username"
                defaultValue="sara.m"
                dir="ltr"
                className="text-start"
                required
              />
              <FieldDescription>فقط حروف انگلیسی، عدد و نقطه</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="pf-bio">بیو</FieldLabel>
              <Textarea
                id="pf-bio"
                className="min-h-24"
                defaultValue="طراح محصول · علاقه‌مند به رابط‌های فارسی"
              />
            </Field>
            <Button type="submit" className="w-full">
              ذخیره پروفایل
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
