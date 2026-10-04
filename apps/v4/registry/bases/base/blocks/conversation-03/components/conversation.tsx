"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const STATUS_ITEMS = [
  { value: "باز", label: "باز" },
  { value: "در انتظار مشتری", label: "در انتظار مشتری" },
  { value: "بسته", label: "بسته" },
] as const

export default function ConversationStatus() {
  const [status, setStatus] = React.useState("باز")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 overflow-hidden bg-card py-0">
        <CardHeader className="space-y-3 border-b py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">مکالمه پشتیبانی</p>
              <p className="text-xs text-muted-foreground">موضوع: مشکل ورود</p>
            </div>
            <Badge variant="outline" className="border">
              {status}
            </Badge>
          </div>
          <Field>
            <FieldLabel>وضعیت مکالمه</FieldLabel>
            <Select
              items={[...STATUS_ITEMS]}
              value={status}
              onValueChange={(value) => {
                if (STATUS_ITEMS.some((item) => item.value === value)) {
                  setStatus(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="وضعیت را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {STATUS_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <div className="flex gap-2">
            <Avatar className="size-8">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="سارا"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div className="max-w-[80%] space-y-1">
              <p className="text-xs text-muted-foreground">سارا محمدی</p>
              <div className="rounded-2xl bg-muted px-3 py-2 text-sm">
                نمی‌توانم وارد حساب شوم. کد به ایمیل نمی‌رسد.
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <Avatar className="size-8">
              <AvatarFallback>پ‌ش</AvatarFallback>
            </Avatar>
            <div className="max-w-[80%] space-y-1 text-start">
              <p className="text-xs text-muted-foreground">پشتیبانی</p>
              <div className="rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground">
                آدرس ایمیل حساب را تأیید کنید تا لینک بازیابی بفرستیم.
              </div>
            </div>
          </div>
          <Separator />
          <Field>
            <FieldLabel htmlFor="cv3-email">ایمیل دعوت به مکالمه</FieldLabel>
            <Input
              id="cv3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>
              همکار را با ایمیل به این مکالمه اضافه کنید
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="cv3-note">یادداشت داخلی</FieldLabel>
            <Input
              id="cv3-note"
              placeholder="مثلاً منتظر تأیید ایمیل…"
              dir="rtl"
            />
          </Field>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 border-t px-4 py-3">
          <Textarea
            placeholder="پاسخ عمومی برای مشتری…"
            dir="rtl"
            className="min-h-20 w-full resize-none"
          />
          <Button type="button" className="w-full shrink-0">
            ارسال پاسخ
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
