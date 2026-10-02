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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export function ContactFormSubject() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>درخواست پشتیبانی</CardTitle>
        <CardDescription>
          موضوع را انتخاب کنید تا سریع‌تر به تیم مربوط برسیم
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="cf2-name">نام</FieldLabel>
                <Input id="cf2-name" placeholder="مریم حسینی" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="cf2-phone">موبایل</FieldLabel>
                <Input
                  id="cf2-phone"
                  type="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="cf2-subject">موضوع</FieldLabel>
              <Select
                items={[
                  { value: "billing", label: "صورتحساب" },
                  { value: "tech", label: "مشکل فنی" },
                  { value: "account", label: "حساب کاربری" },
                  { value: "other", label: "سایر" },
                ]}
                defaultValue="tech"
              >
                <SelectTrigger id="cf2-subject" className="w-full">
                  <SelectValue placeholder="انتخاب موضوع" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="billing">صورتحساب</SelectItem>
                    <SelectItem value="tech">مشکل فنی</SelectItem>
                    <SelectItem value="account">حساب کاربری</SelectItem>
                    <SelectItem value="other">سایر</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="cf2-email">ایمیل</FieldLabel>
              <Input
                id="cf2-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf2-msg">توضیحات</FieldLabel>
              <Textarea id="cf2-msg" className="min-h-28" required />
            </Field>
            <Button type="submit" className="w-full">
              ثبت درخواست
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
