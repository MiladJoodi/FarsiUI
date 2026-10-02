"use client"

import * as React from "react"
import { cn } from "cn"
import {
  CopyIcon,
  KeyRoundIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-sera/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"
import { Switch } from "@/registry/base-sera/ui/switch"

const NAV = [
  { id: "password", label: "رمز عبور" },
  { id: "2fa", label: "دو مرحله‌ای" },
  { id: "recovery", label: "بازیابی" },
  { id: "activity", label: "فعالیت ورود" },
] as const

type NavId = (typeof NAV)[number]["id"]

const RECOVERY_CODES = [
  "FUIA-7K2M",
  "FUIB-9X4P",
  "FUIC-3N8Q",
  "FUID-5R1T",
  "FUIE-6W0Y",
  "FUIF-2H7Z",
] as const

const LOGIN_LOG = [
  {
    id: "1",
    place: "تهران · Chrome",
    time: "امروز، ۱۴:۳۲",
    status: "موفق",
    ok: true,
  },
  {
    id: "2",
    place: "اصفهان · Safari",
    time: "دیروز، ۰۹:۱۰",
    status: "موفق",
    ok: true,
  },
  {
    id: "3",
    place: "تهران · Firefox",
    time: "۳ روز پیش",
    status: "ناموفق",
    ok: false,
  },
] as const

export function SecuritySettingsHub() {
  const [section, setSection] = React.useState<NavId>("password")
  const [copied, setCopied] = React.useState(false)

  function copyCodes() {
    void navigator.clipboard?.writeText(RECOVERY_CODES.join("\n"))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرکز امنیت
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">تنظیمات امنیتی</h2>
          <p className="mt-2 text-muted-foreground">
            رمز، دو مرحله‌ای، کدهای بازیابی و تاریخچهٔ ورود
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات امنیتی</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSection("activity")}>
              مشاهدهٔ ورودها
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSection("recovery")}>
              کدهای بازیابی
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              خروج از همهٔ دستگاه‌ها
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[12rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            بخش‌ها
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSection(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  section === item.id && "bg-muted font-medium text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="p-5 md:p-6">
          {section === "password" ? (
            <div className="space-y-6">
              <Header
                title="رمز عبور"
                description="رمز فعلی را وارد و رمز جدید تنظیم کنید"
              />
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="ss5-current">رمز فعلی</FieldLabel>
                    <Input
                      id="ss5-current"
                      type="password"
                      placeholder="••••••••"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ss5-new">رمز جدید</FieldLabel>
                    <Input
                      id="ss5-new"
                      type="password"
                      placeholder="حداقل ۸ کاراکتر"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ss5-confirm">
                      تکرار رمز جدید
                    </FieldLabel>
                    <Input
                      id="ss5-confirm"
                      type="password"
                      placeholder="تکرار رمز جدید"
                      dir="rtl"
                    />
                  </Field>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button type="button" variant="outline">
                      انصراف
                    </Button>
                    <Button type="submit">ذخیره رمز</Button>
                  </div>
                </FieldGroup>
              </form>
            </div>
          ) : null}

          {section === "2fa" ? (
            <div className="space-y-6">
              <Header
                title="ورود دو مرحله‌ای"
                description="روش تأیید و شمارهٔ تماس"
              />
              <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="mt-0.5 size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">وضعیت: فعال</p>
                    <p className="text-sm text-muted-foreground">
                      پیامک پس از رمز عبور
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ss5-method">روش تأیید</FieldLabel>
                  <Select defaultValue="sms">
                    <SelectTrigger id="ss5-method" className="w-full" dir="rtl">
                      <SelectValue placeholder="روش" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="sms">پیامک</SelectItem>
                      <SelectItem value="email">ایمیل</SelectItem>
                      <SelectItem value="app">اپلیکیشن احراز</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="ss5-phone">شماره موبایل</FieldLabel>
                  <Input
                    id="ss5-phone"
                    type="tel"
                    inputMode="tel"
                    defaultValue="۰۹۱۲۱۲۳۴۵۶۷"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ss5-backup">ایمیل پشتیبان</FieldLabel>
                  <Input
                    id="ss5-backup"
                    type="email"
                    defaultValue="reza@example.com"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
              </FieldGroup>
              <Button>ذخیره دو مرحله‌ای</Button>
            </div>
          ) : null}

          {section === "recovery" ? (
            <div className="space-y-6">
              <Header
                title="کدهای بازیابی"
                description="در صورت از دست رفتن دستگاه، از این کدها استفاده کنید"
              />
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <KeyRoundIcon className="size-4" />
                    کدهای یک‌بارمصرف
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={copyCodes}
                    >
                      <CopyIcon className="size-3.5" />
                      {copied ? "کپی شد" : "کپی همه"}
                    </Button>
                    <Button type="button" size="sm" variant="outline">
                      <RefreshCwIcon className="size-3.5" />
                      تولید مجدد
                    </Button>
                  </div>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {RECOVERY_CODES.map((code) => (
                    <li
                      key={code}
                      className="rounded-md border bg-background px-3 py-2 font-mono text-sm"
                    >
                      <bdi dir="ltr">{code}</bdi>
                    </li>
                  ))}
                </ul>
              </div>
              <Field>
                <FieldLabel htmlFor="ss5-recovery-email">
                  ایمیل بازیابی
                </FieldLabel>
                <Input
                  id="ss5-recovery-email"
                  type="email"
                  defaultValue="reza@example.com"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>
                  کدهای پشتیبان به این آدرس هم ارسال می‌شوند
                </FieldDescription>
              </Field>
            </div>
          ) : null}

          {section === "activity" ? (
            <div className="space-y-6">
              <Header
                title="فعالیت ورود"
                description="آخرین تلاش‌های ورود به حساب"
              />
              <Field>
                <FieldLabel htmlFor="ss5-filter">فیلتر وضعیت</FieldLabel>
                <Select defaultValue="all">
                  <SelectTrigger
                    id="ss5-filter"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="all">همه</SelectItem>
                    <SelectItem value="ok">موفق</SelectItem>
                    <SelectItem value="fail">ناموفق</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <ul className="space-y-0 rounded-lg border">
                {LOGIN_LOG.map((item, i) => (
                  <li key={item.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <div>
                        <p className="text-sm font-medium">{item.place}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={item.ok ? "secondary" : "destructive"}>
                          {item.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={<Button variant="ghost" size="icon-sm" />}
                          >
                            <MoreHorizontalIcon className="size-4" />
                            <span className="sr-only">عملیات</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            dir="rtl"
                            lang="fa"
                            align="start"
                          >
                            <DropdownMenuItem>جزئیات</DropdownMenuItem>
                            <DropdownMenuItem>
                              این دستگاه نیست؟ گزارش
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ss5-alert">هشدار ورود جدید</Label>
                  <p className="text-sm text-muted-foreground">
                    ایمیل هنگام ورود از مکان ناآشنا
                  </p>
                </div>
                <Switch id="ss5-alert" defaultChecked />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function Header({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
