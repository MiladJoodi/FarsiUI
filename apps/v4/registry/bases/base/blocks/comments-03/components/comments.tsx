"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const COMMENTS = [
  {
    id: "1",
    name: "سارا محمدی",
    text: "عالی بود، مخصوصاً بخش RTL.",
    time: "۳ ساعت پیش",
    status: "approved",
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    text: "منتظر نسخهٔ بعدی هستم.",
    time: "دیروز",
    status: "pending",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    text: "لینک مستندات را هم اضافه کنید.",
    time: "۲ روز پیش",
    status: "approved",
    initials: "م‌ک",
  },
] as const

export function CommentsFilter() {
  const [sort, setSort] = React.useState("newest")
  const [status, setStatus] = React.useState("all")

  const rows = COMMENTS.filter(
    (c) => status === "all" || c.status === status
  ).slice()
  if (sort === "oldest") rows.reverse()

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>دیدگاه‌ها</CardTitle>
          <CardDescription>
            مرتب‌سازی و فیلتر با Select راست‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel>مرتب‌سازی</FieldLabel>
              <Select
                value={sort}
                onValueChange={(v) => setSort((v as string) ?? "newest")}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="newest">جدیدترین</SelectItem>
                  <SelectItem value="oldest">قدیمی‌ترین</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>وضعیت</FieldLabel>
              <Select
                value={status}
                onValueChange={(v) => setStatus((v as string) ?? "all")}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="وضعیت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="all">همه</SelectItem>
                  <SelectItem value="approved">تأییدشده</SelectItem>
                  <SelectItem value="pending">در انتظار</SelectItem>
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
                          c.status === "pending" ? "outline" : "secondary"
                        }
                      >
                        {c.status === "pending" ? "در انتظار" : "تأییدشده"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
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
        <CardFooter className="flex-col gap-2 border-t">
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
