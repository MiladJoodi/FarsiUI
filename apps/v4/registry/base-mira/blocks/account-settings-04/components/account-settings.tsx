"use client"

import * as React from "react"
import { LaptopIcon, MoreHorizontalIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-mira/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

type Session = {
  id: string
  device: string
  place: string
  lastActive: string
  current?: boolean
  kind: "laptop" | "phone"
}

const INITIAL: Session[] = [
  {
    id: "1",
    device: "Chrome روی ویندوز",
    place: "تهران",
    lastActive: "الان",
    current: true,
    kind: "laptop",
  },
  {
    id: "2",
    device: "Safari روی آیفون",
    place: "تهران",
    lastActive: "۲ ساعت پیش",
    kind: "phone",
  },
  {
    id: "3",
    device: "Firefox روی مک",
    place: "اصفهان",
    lastActive: "دیروز",
    kind: "laptop",
  },
]

export function AccountSettingsSessions() {
  const [sessions, setSessions] = React.useState(INITIAL)

  function revoke(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader className="text-start">
            <CardTitle>ایمیل بازیابی</CardTitle>
            <CardDescription>
              ایمیل انگلیسی چپ‌چین؛ نام نمایشی فارسی راست‌چین
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="as4-label">برچسب</FieldLabel>
                <Input
                  id="as4-label"
                  defaultValue="ایمیل شخصی"
                  placeholder="مثلاً ایمیل کاری"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="as4-email">آدرس ایمیل</FieldLabel>
                <Input
                  id="as4-email"
                  type="email"
                  defaultValue="reza@example.com"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>
                  کدهای امنیتی به این آدرس ارسال می‌شوند
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="as4-freq">تواتر خلاصه</FieldLabel>
                <Select defaultValue="weekly">
                  <SelectTrigger id="as4-freq" className="w-full" dir="rtl">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="daily">روزانه</SelectItem>
                    <SelectItem value="weekly">هفتگی</SelectItem>
                    <SelectItem value="monthly">ماهانه</SelectItem>
                    <SelectItem value="off">خاموش</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-start justify-between gap-4 text-start">
            <div>
              <CardTitle>نشست‌های فعال</CardTitle>
              <CardDescription>
                دستگاه‌هایی که الان به حساب شما وصل‌اند
              </CardDescription>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                setSessions((prev) => prev.filter((s) => s.current))
              }
            >
              خروج از بقیه
            </Button>
          </CardHeader>
          <CardContent className="space-y-0">
            {sessions.map((session, i) => {
              const Icon =
                session.kind === "phone" ? SmartphoneIcon : LaptopIcon
              return (
                <div key={session.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-center gap-3 py-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {session.device}
                        </p>
                        {session.current ? (
                          <Badge variant="secondary">همین دستگاه</Badge>
                        ) : null}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {session.place} · {session.lastActive}
                      </p>
                    </div>
                    {!session.current ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>جزئیات نشست</DropdownMenuItem>
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => revoke(session.id)}
                          >
                            پایان نشست
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-start">
            <CardTitle>امنیت سریع</CardTitle>
            <CardDescription>هشدارها و تأیید ورود</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="as4-alert">هشدار ورود جدید</Label>
                <p className="text-sm text-muted-foreground">
                  ایمیل هنگام ورود از مکان ناآشنا
                </p>
              </div>
              <Switch id="as4-alert" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="as4-remember">به‌خاطر سپردن دستگاه</Label>
                <p className="text-sm text-muted-foreground">
                  تا ۳۰ روز بدون ورود مجدد
                </p>
              </div>
              <Switch id="as4-remember" defaultChecked />
            </div>
            <Button className="w-full">ذخیره تنظیمات</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
