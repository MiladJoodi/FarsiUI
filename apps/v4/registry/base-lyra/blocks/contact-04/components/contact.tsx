"use client"

import * as React from "react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Textarea } from "@/registry/base-lyra/ui/textarea"

export default function ContactSelect() {
  const [topic, setTopic] = React.useState("support")

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-xl">
        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <Badge variant="outline" className="mb-2 w-fit">
              پشتیبانی
            </Badge>
            <CardTitle>درخواست تماس</CardTitle>
            <CardDescription>
              موضوع را انتخاب کنید تا پیام به تیم درست برسد
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="c4-topic">موضوع</FieldLabel>
                  <Select
                    value={topic}
                    onValueChange={(value) =>
                      setTopic((value as string) ?? "support")
                    }
                  >
                    <SelectTrigger id="c4-topic" className="w-full" dir="rtl">
                      <SelectValue placeholder="انتخاب موضوع" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="support">پشتیبانی فنی</SelectItem>
                      <SelectItem value="sales">فروش و قیمت</SelectItem>
                      <SelectItem value="billing">صورتحساب</SelectItem>
                      <SelectItem value="partnership">همکاری</SelectItem>
                      <SelectItem value="other">سایر</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="c4-name">نام</FieldLabel>
                    <Input
                      id="c4-name"
                      placeholder="نام شما"
                      dir="rtl"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="c4-phone">تلفن</FieldLabel>
                    <Input
                      id="c4-phone"
                      type="tel"
                      placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                </Field>
                <Field>
                  <FieldLabel htmlFor="c4-email">ایمیل</FieldLabel>
                  <Input
                    id="c4-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="c4-msg">توضیحات</FieldLabel>
                  <Textarea
                    id="c4-msg"
                    placeholder="جزئیات درخواست را بنویسید…"
                    dir="rtl"
                    className="min-h-28"
                    required
                  />
                </Field>
                <Button type="submit" className="w-full">
                  ثبت درخواست
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
