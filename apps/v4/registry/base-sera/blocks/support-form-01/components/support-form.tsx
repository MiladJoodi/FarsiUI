"use client"

import * as React from "react"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Textarea } from "@/registry/base-sera/ui/textarea"

export function SupportRequestForm() {
  const [sent, setSent] = React.useState(false)

  if (sent) {
    return (
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-center">
          <CardTitle>درخواست ثبت شد</CardTitle>
          <CardDescription>
            شماره پیگیری:{" "}
            <bdi
              dir="ltr"
              className="inline-block font-medium tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground"
            >
              SP-۱۴۰۵-۰۰۸۴۲
            </bdi>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setSent(false)}
          >
            ثبت درخواست جدید
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>درخواست پشتیبانی</CardTitle>
        <CardDescription>
          موضوع را انتخاب کنید تا سریع‌تر به تیم مربوط برسیم
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="sp1-name">نام</FieldLabel>
                <Input id="sp1-name" placeholder="مریم حسینی" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="sp1-phone">موبایل</FieldLabel>
                <Input
                  id="sp1-phone"
                  type="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="sp1-subject">موضوع</FieldLabel>
              <Select
                items={[
                  { value: "billing", label: "صورتحساب" },
                  { value: "tech", label: "مشکل فنی" },
                  { value: "account", label: "حساب کاربری" },
                  { value: "other", label: "سایر" },
                ]}
                defaultValue="tech"
              >
                <SelectTrigger id="sp1-subject" className="w-full">
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
              <FieldLabel htmlFor="sp1-email">ایمیل</FieldLabel>
              <Input
                id="sp1-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sp1-msg">توضیحات</FieldLabel>
              <Textarea id="sp1-msg" className="min-h-28" required />
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
