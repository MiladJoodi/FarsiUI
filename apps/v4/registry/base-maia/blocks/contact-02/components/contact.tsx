"use client"

import * as React from "react"

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
import { Textarea } from "@/registry/base-maia/ui/textarea"

export function ContactCard() {
  const [sent, setSent] = React.useState(false)

  if (sent) {
    return (
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16"
      >
        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <CardTitle>پیام دریافت شد</CardTitle>
            <CardDescription>
              معمولاً تا یک روز کاری پاسخ می‌دهیم
            </CardDescription>
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
      </section>
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16"
    >
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle>پیام بفرستید</CardTitle>
          <CardDescription>سؤال یا پیشنهاد خود را بنویسید</CardDescription>
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
                <FieldLabel htmlFor="c2-name">نام</FieldLabel>
                <Input
                  id="c2-name"
                  placeholder="علی رضایی"
                  dir="rtl"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c2-email">ایمیل</FieldLabel>
                <Input
                  id="c2-email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="c2-msg">پیام</FieldLabel>
                <Textarea
                  id="c2-msg"
                  placeholder="پیام خود را بنویسید…"
                  dir="rtl"
                  className="min-h-28"
                  required
                />
              </Field>
              <Button type="submit" className="w-full">
                ارسال پیام
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
