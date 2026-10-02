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

export function ConversationStatus() {
  const [status, setStatus] = React.useState("open")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="overflow-hidden">
        <CardHeader className="space-y-3 border-b py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">مکالمه پشتیبانی</p>
              <p className="text-xs text-muted-foreground">موضوع: مشکل ورود</p>
            </div>
            <Badge variant="secondary">
              {status === "open"
                ? "باز"
                : status === "pending"
                  ? "در انتظار"
                  : "بسته"}
            </Badge>
          </div>
          <Field>
            <FieldLabel>وضعیت مکالمه</FieldLabel>
            <Select
              value={status}
              onValueChange={(v) => setStatus((v as string) ?? "open")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="وضعیت را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="open">باز</SelectItem>
                <SelectItem value="pending">در انتظار مشتری</SelectItem>
                <SelectItem value="closed">بسته</SelectItem>
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
              <AvatarFallback>سم</AvatarFallback>
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
              <AvatarFallback>پش</AvatarFallback>
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
        <CardFooter className="flex-col gap-2 border-t p-3">
          <Textarea
            placeholder="پاسخ عمومی برای مشتری…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <Button type="button" className="w-full">
            ارسال پاسخ
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
