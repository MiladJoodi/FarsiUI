"use client"

import * as React from "react"
import {
  KeyRoundIcon,
  LaptopIcon,
  MoreHorizontalIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
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

export function SecuritySettingsSessions() {
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
            <CardTitle>تغییر رمز عبور</CardTitle>
            <CardDescription>
              رمز انگلیسی چپ‌چین؛ برچسب فارسی راست‌چین
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
                    placeholder="••••••••"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ss4-new">رمز جدید</FieldLabel>
                  <Input
                    id="ss4-new"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    از رمز قبلی استفاده نکنید
                  </FieldDescription>
                </Field>
                <Button type="submit">به‌روزرسانی رمز</Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-start justify-between gap-4 text-start">
            <div>
              <CardTitle>نشست‌های امن</CardTitle>
              <CardDescription>
                دستگاه‌های متصل را مدیریت کنید
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
                          <DropdownMenuItem>اعتماد به دستگاه</DropdownMenuItem>
                          <DropdownMenuSeparator />
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
            <div className="flex items-center gap-2">
              <KeyRoundIcon className="size-4 text-muted-foreground" />
              <CardTitle>گزینه‌های پیشرفته</CardTitle>
            </div>
            <CardDescription>مهلت نشست و هشدارها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field>
              <FieldLabel htmlFor="ss4-timeout">مهلت نشست</FieldLabel>
              <Select defaultValue="30">
                <SelectTrigger id="ss4-timeout" className="w-full" dir="rtl">
                  <SelectValue placeholder="مدت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="1">۱ روز</SelectItem>
                  <SelectItem value="7">۷ روز</SelectItem>
                  <SelectItem value="30">۳۰ روز</SelectItem>
                  <SelectItem value="90">۹۰ روز</SelectItem>
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
            <Button className="w-full">ذخیره</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
