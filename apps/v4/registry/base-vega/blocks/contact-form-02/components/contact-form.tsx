"use client"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Textarea } from "@/registry/base-vega/ui/textarea"

export default function ContactFormFeedback() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>ارسال بازخورد</CardTitle>
        <CardDescription>
          نظر یا پیشنهاد خود دربارهٔ محصول را با ما در میان بگذارید
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
            </Field>
            <Field>
              <FieldLabel htmlFor="cf2-type">نوع بازخورد</FieldLabel>
              <Select
                items={[
                  { value: "idea", label: "پیشنهاد" },
                  { value: "bug", label: "گزارش باگ" },
                  { value: "praise", label: "تشکر" },
                  { value: "other", label: "سایر" },
                ]}
                defaultValue="idea"
              >
                <SelectTrigger id="cf2-type" className="w-full">
                  <SelectValue placeholder="انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="idea">پیشنهاد</SelectItem>
                    <SelectItem value="bug">گزارش باگ</SelectItem>
                    <SelectItem value="praise">تشکر</SelectItem>
                    <SelectItem value="other">سایر</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="cf2-msg">متن بازخورد</FieldLabel>
              <Textarea id="cf2-msg" className="min-h-28" required />
              <FieldDescription>
                جزئیات بیشتر به ما کمک می‌کند بهتر پاسخ دهیم
              </FieldDescription>
            </Field>
            <Button type="submit" className="w-full">
              ارسال بازخورد
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
