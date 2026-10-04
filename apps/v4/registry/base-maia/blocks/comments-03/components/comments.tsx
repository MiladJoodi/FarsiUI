"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import { Textarea } from "@/registry/base-maia/ui/textarea"

const COMMENTS = [
  {
    id: "1",
    name: "سارا محمدی",
    text: "عالی بود، مخصوصاً بخش راست‌چین.",
    time: "۳ ساعت پیش",
    status: "تأییدشده",
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    text: "منتظر نسخهٔ بعدی هستم.",
    time: "دیروز",
    status: "در انتظار",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    text: "لینک مستندات را هم اضافه کنید.",
    time: "۲ روز پیش",
    status: "تأییدشده",
    initials: "م‌ک",
  },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "قدیمی‌ترین", label: "قدیمی‌ترین" },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "تأییدشده", label: "تأییدشده" },
  { value: "در انتظار", label: "در انتظار" },
] as const

export default function CommentsFilter() {
  const [sort, setSort] = React.useState("جدیدترین")
  const [status, setStatus] = React.useState("همه")

  const rows = COMMENTS.filter(
    (c) => status === "همه" || c.status === status
  ).slice()
  if (sort === "قدیمی‌ترین") rows.reverse()

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>دیدگاه‌ها</CardTitle>
          <CardDescription>
            مرتب‌سازی و فیلتر با انتخابگر راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel>مرتب‌سازی</FieldLabel>
              <Select
                items={[...SORT_ITEMS]}
                value={sort}
                onValueChange={(value) => {
                  if (SORT_ITEMS.some((item) => item.value === value)) {
                    setSort(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {SORT_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>وضعیت</FieldLabel>
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
                  <SelectValue placeholder="وضعیت" />
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
          </div>

          <div className="space-y-0 rounded-lg border">
            {rows.map((c, i) => (
              <div key={c.id}>
                {i > 0 && <Separator />}
                <div className="flex gap-3 px-4 py-3">
                  <Avatar className="size-9">
                    <AvatarFallback>{c.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{c.name}</p>
                      <Badge
                        variant={
                          c.status === "در انتظار" ? "outline" : "secondary"
                        }
                        className={
                          c.status === "در انتظار" ? "border" : undefined
                        }
                      >
                        {c.status}
                      </Badge>
                      <span className="text-xs tracking-normal text-muted-foreground">
                        {c.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <Field>
            <FieldLabel htmlFor="cm3-email">ایمیل اعلان پاسخ</FieldLabel>
            <Input
              id="cm3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>
              وقتی به دیدگاه‌تان پاسخ داده شد خبر می‌دهیم
            </FieldDescription>
          </Field>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="cm3-notify">اعلان ایمیل</Label>
            <Switch id="cm3-notify" defaultChecked />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-3 border-t py-4">
          <Textarea
            placeholder="دیدگاه خود را بنویسید…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <Button type="button" className="w-full sm:w-auto sm:self-end">
            ارسال دیدگاه
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
