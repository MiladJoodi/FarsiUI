"use client"

import { Button } from "@/registry/base-lyra/ui/button"
import { Card, CardContent } from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

export function ProfileFormSplit() {
  return (
    <Card dir="rtl" lang="fa" className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <form className="p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <div className="space-y-2 text-center md:text-start">
              <h1 className="text-2xl font-bold">تکمیل پروفایل</h1>
              <p className="text-muted-foreground">
                اطلاعات کوتاهی برای معرفی در FarsiUI
              </p>
            </div>
            <Field>
              <FieldLabel htmlFor="pf4-name">نام کامل</FieldLabel>
              <Input id="pf4-name" placeholder="مریم حسینی" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf4-title">عنوان شغلی</FieldLabel>
              <Input id="pf4-title" placeholder="طراح رابط کاربری" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf4-about">درباره من</FieldLabel>
              <Textarea id="pf4-about" className="min-h-24" />
            </Field>
            <Button type="submit" className="w-full">
              ادامه
            </Button>
            <FieldDescription className="text-center md:text-start">
              بعداً می‌توانید این اطلاعات را ویرایش کنید
            </FieldDescription>
          </FieldGroup>
        </form>
        <div className="relative hidden bg-muted md:block">
          <img
            src="/farsiui/parsian.jpg"
            alt="Parsian"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}
