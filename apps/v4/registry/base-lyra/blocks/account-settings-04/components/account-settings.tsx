"use client"

import * as React from "react"
import { LaptopIcon, MoreHorizontalIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
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
import { Label } from "@/registry/base-lyra/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

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

const FREQ_ITEMS = [
  { value: "روزانه", label: "روزانه" },
  { value: "هفتگی", label: "هفتگی" },
  { value: "ماهانه", label: "ماهانه" },
  { value: "خاموش", label: "خاموش" },
] as const

export default function AccountSettingsSessions() {
  const [sessions, setSessions] = React.useState(INITIAL)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function revoke(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id))
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card className="bg-card">
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
                <Select items={[...FREQ_ITEMS]} defaultValue="هفتگی">
                  <SelectTrigger id="as4-freq" className="w-full" dir="rtl">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {FREQ_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <Card className="bg-card">
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
                          <Badge variant="outline" className="border">
                            همین دستگاه
                          </Badge>
                        ) : null}
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {session.place} · {session.lastActive}
                      </p>
                    </div>
                    {!session.current ? (
                      <Popover
                        open={openId === session.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? session.id : null)
                        }
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            جزئیات نشست
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => revoke(session.id)}
                          >
                            پایان نشست
                          </Button>
                        </PopoverContent>
                      </Popover>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="bg-card">
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
            <Button type="button" className="w-full">
              ذخیره تنظیمات
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
