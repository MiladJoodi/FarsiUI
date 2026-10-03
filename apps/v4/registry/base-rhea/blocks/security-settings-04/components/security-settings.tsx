"use client"

import * as React from "react"
import {
  KeyRoundIcon,
  LaptopIcon,
  MoreHorizontalIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-rhea/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"

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
    lastActive: "۳ ساعت پیش",
    kind: "phone",
  },
  {
    id: "3",
    device: "Edge روی ویندوز",
    place: "شیراز",
    lastActive: "۲ روز پیش",
    kind: "laptop",
  },
]

const TIMEOUT_ITEMS = [
  { value: "۱ روز", label: "۱ روز" },
  { value: "۷ روز", label: "۷ روز" },
  { value: "۳۰ روز", label: "۳۰ روز" },
  { value: "۹۰ روز", label: "۹۰ روز" },
] as const

export function SecuritySettingsSessions() {
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
            <CardTitle>تغییر رمز عبور</CardTitle>
            <CardDescription>
              فیلدهای رمز راست‌چین؛ برچسب فارسی راست‌چین
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ss4-label">برچسب یادآوری</FieldLabel>
                  <Input
                    id="ss4-label"
                    defaultValue="رمز اصلی حساب"
                    placeholder="مثلاً رمز کاری"
                    dir="rtl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ss4-current">رمز فعلی</FieldLabel>
                  <Input
                    id="ss4-current"
                    type="password"
                    placeholder="رمز عبور فعلی"
                    dir="rtl"
                    className="text-end"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ss4-new">رمز جدید</FieldLabel>
                  <Input
                    id="ss4-new"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    dir="rtl"
                    className="text-end tracking-normal"
                  />
                  <FieldDescription>از رمز قبلی استفاده نکنید</FieldDescription>
                </Field>
                <Button type="submit">به‌روزرسانی رمز</Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex-row items-start justify-between gap-4 text-start">
            <div>
              <CardTitle>نشست‌های امن</CardTitle>
              <CardDescription>دستگاه‌های متصل را مدیریت کنید</CardDescription>
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
                          className="w-44 space-y-1 p-2"
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
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            اعتماد به دستگاه
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
            <div className="flex items-center gap-2">
              <KeyRoundIcon className="size-4 text-muted-foreground" />
              <CardTitle>گزینه‌های پیشرفته</CardTitle>
            </div>
            <CardDescription>مهلت نشست و هشدارها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel htmlFor="ss4-timeout">مهلت نشست</FieldLabel>
              <Select items={[...TIMEOUT_ITEMS]} defaultValue="۳۰ روز">
                <SelectTrigger id="ss4-timeout" className="w-full" dir="rtl">
                  <SelectValue placeholder="مدت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TIMEOUT_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Separator />
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ss4-alert">هشدار ورود جدید</Label>
                <p className="text-sm text-muted-foreground">
                  ایمیل هنگام ورود از مکان ناآشنا
                </p>
              </div>
              <Switch id="ss4-alert" defaultChecked />
            </div>
            <Button type="button" className="w-full">
              ذخیره
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
