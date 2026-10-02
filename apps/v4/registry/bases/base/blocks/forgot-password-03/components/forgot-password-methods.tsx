"use client"

import * as React from "react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/bases/base/ui/tabs"

export function ForgotPasswordMethods() {
  const [done, setDone] = React.useState(false)

  if (done) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>درخواست ثبت شد</CardTitle>
          <CardDescription>
            دستورالعمل بازیابی تا چند دقیقه دیگر برایتان ارسال می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full" variant="outline" onClick={() => setDone(false)}>
            بازگشت
          </Button>
          <FieldDescription className="text-center">
            <a href="#">ورود به حساب</a>
          </FieldDescription>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>بازیابی رمز عبور</CardTitle>
        <CardDescription>
          روش موردنظر خود را برای دریافت لینک یا کد بازیابی انتخاب کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">ایمیل</TabsTrigger>
            <TabsTrigger value="mobile">موبایل</TabsTrigger>
          </TabsList>
          <TabsContent value="email" className="mt-5">
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setDone(true)
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="method-email">ایمیل حساب</FieldLabel>
                  <Input
                    id="method-email"
                    type="email"
                    placeholder="reza.karimi@example.com"
                    dir="ltr"
                    className="text-start"
                    required
                  />
                </Field>
                <Button type="submit" className="w-full">
                  ارسال لینک به ایمیل
                </Button>
              </FieldGroup>
            </form>
          </TabsContent>
          <TabsContent value="mobile" className="mt-5">
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setDone(true)
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="method-mobile">شماره موبایل</FieldLabel>
                  <Input
                    id="method-mobile"
                    type="tel"
                    placeholder="۰۹۱۹۸۷۶۵۴۳۲"
                    dir="ltr"
                    className="text-start"
                    required
                  />
                </Field>
                <Button type="submit" className="w-full">
                  ارسال کد به موبایل
                </Button>
              </FieldGroup>
            </form>
          </TabsContent>
        </Tabs>
        <FieldDescription className="mt-5 text-center">
          رمز را به یاد آوردید؟ <a href="#">ورود</a>
        </FieldDescription>
      </CardContent>
    </Card>
  )
}
