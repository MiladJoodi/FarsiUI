"use client"

import * as React from "react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

export default function ContactFormSimple() {
  const [sent, setSent] = React.useState(false)

  if (sent) {
    return (
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-center">
          <CardTitle>پیام ارسال شد</CardTitle>
          <CardDescription>معمولاً تا یک روز کاری پاسخ می‌دهیم</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setSent(false)}
          >
            ارسال پیام دیگر
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>تماس با ما</CardTitle>
        <CardDescription>
          سؤال یا پیشنهاد خود را بنویسید؛ در اسرع وقت پاسخ می‌دهیم
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
            <Field>
              <FieldLabel htmlFor="cf-name">نام</FieldLabel>
              <Input id="cf-name" placeholder="علی رضایی" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf-email">ایمیل</FieldLabel>
              <Input
                id="cf-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf-msg">پیام</FieldLabel>
              <Textarea id="cf-msg" className="min-h-28" required />
            </Field>
            <Button type="submit" className="w-full">
              ارسال پیام
            </Button>
            <FieldDescription className="text-center">
              یا با پشتیبانی در{" "}
              <bdi
                dir="ltr"
                className="inline-block tracking-normal [letter-spacing:0] whitespace-nowrap"
              >
                ۰۲۱-۹۱۰۰۰۰۰۰
              </bdi>{" "}
              تماس بگیرید
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
