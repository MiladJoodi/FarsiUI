"use client"

import * as React from "react"
import { cn } from "cn"
import { MoreHorizontalIcon, ShieldAlertIcon, Trash2Icon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-lyra/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

const NAV = [
  { id: "general", label: "عمومی" },
  { id: "security", label: "امنیت" },
  { id: "notify", label: "اعلان‌ها" },
  { id: "danger", label: "منطقه خطر" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function AccountSettingsHub() {
  const [section, setSection] = React.useState<NavId>("general")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرکز تنظیمات حساب
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">تنظیمات حساب</h2>
          <p className="mt-2 text-muted-foreground">
            عمومی، امنیت، اعلان‌ها و حذف حساب
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات حساب</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>دانلود داده‌ها</DropdownMenuItem>
            <DropdownMenuItem>خروج از همهٔ دستگاه‌ها</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setSection("danger")}
            >
              حذف حساب
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
                  section === item.id && "bg-muted font-medium text-foreground",
                  item.id === "danger" &&
                    section !== "danger" &&
                    "text-destructive"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="p-5 md:p-6">
          {section === "general" ? (
            <div className="space-y-6">
              <Header title="عمومی" description="نام، ایمیل و ترجیحات محلی" />
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="as5-name">نام نمایشی</FieldLabel>
                    <Input
                      id="as5-name"
                      defaultValue="رضا کریمی"
                      placeholder="نام و نام خانوادگی"
                      dir="rtl"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="as5-email">ایمیل</FieldLabel>
                    <Input
                      id="as5-email"
                      type="email"
                      defaultValue="reza@example.com"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="as5-username">نام کاربری</FieldLabel>
                    <Input
                      id="as5-username"
                      defaultValue="reza.k"
                      placeholder="username"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="as5-lang">زبان</FieldLabel>
                      <Select defaultValue="fa">
                        <SelectTrigger
                          id="as5-lang"
                          className="w-full"
                          dir="rtl"
                        >
                          <SelectValue placeholder="زبان" />
                        </SelectTrigger>
                        <SelectContent dir="rtl" lang="fa">
                          <SelectItem value="fa">فارسی</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="as5-tz">منطقه زمانی</FieldLabel>
                      <Input
                        id="as5-tz"
                        defaultValue="Asia/Tehran"
                        placeholder="Asia/Tehran"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button type="button" variant="outline">
                      انصراف
                    </Button>
                    <Button type="submit">ذخیره</Button>
                  </div>
                </FieldGroup>
              </form>
            </div>
          ) : null}

          {section === "security" ? (
            <div className="space-y-6">
              <Header
                title="امنیت"
                description="رمز عبور، تأیید دو مرحله‌ای و نشست‌ها"
              />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="as5-pass">رمز عبور فعلی</FieldLabel>
                  <Input
                    id="as5-pass"
                    type="password"
                    placeholder="••••••••"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="as5-new">رمز عبور جدید</FieldLabel>
                  <Input
                    id="as5-new"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    ترکیبی از حروف، عدد و نماد پیشنهاد می‌شود
                  </FieldDescription>
                </Field>
              </FieldGroup>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="as5-2fa">ورود دو مرحله‌ای</Label>
                    <p className="text-sm text-muted-foreground">
                      کد پیامکی پس از رمز عبور
                    </p>
                  </div>
                  <Switch id="as5-2fa" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="as5-login">هشدار ورود جدید</Label>
                    <p className="text-sm text-muted-foreground">
                      ایمیل هنگام ورود از دستگاه ناشناس
                    </p>
                  </div>
                  <Switch id="as5-login" defaultChecked />
                </div>
              </div>
              <Field>
                <FieldLabel htmlFor="as5-session">مدت نشست</FieldLabel>
                <Select defaultValue="30">
                  <SelectTrigger
                    id="as5-session"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
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
              <Button>ذخیره امنیت</Button>
            </div>
          ) : null}

          {section === "notify" ? (
            <div className="space-y-6">
              <Header title="اعلان‌ها" description="کانال‌ها و نوع پیام‌ها" />
              <Field>
                <FieldLabel htmlFor="as5-channel">کانال ترجیحی</FieldLabel>
                <Select defaultValue="email">
                  <SelectTrigger
                    id="as5-channel"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="کانال" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="email">ایمیل</SelectItem>
                    <SelectItem value="sms">پیامک</SelectItem>
                    <SelectItem value="push">اعلان مرورگر</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Separator />
              <div className="space-y-4">
                <NotifyRow
                  id="as5-n-product"
                  title="محصول و به‌روزرسانی"
                  defaultChecked
                />
                <NotifyRow
                  id="as5-n-security"
                  title="هشدار امنیتی"
                  defaultChecked
                />
                <NotifyRow
                  id="as5-n-billing"
                  title="صورتحساب و پرداخت"
                  defaultChecked
                />
                <NotifyRow id="as5-n-marketing" title="پیشنهادها و تخفیف" />
              </div>
              <Button>ذخیره اعلان‌ها</Button>
            </div>
          ) : null}

          {section === "danger" ? (
            <div className="space-y-6">
              <Header
                title="منطقه خطر"
                description="اقدامات برگشت‌ناپذیر روی حساب"
              />
              <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                <div className="flex gap-3">
                  <ShieldAlertIcon className="mt-0.5 size-5 shrink-0 text-destructive" />
                  <div className="space-y-1">
                    <p className="font-medium">حذف دائمی حساب</p>
                    <p className="text-sm text-muted-foreground">
                      همهٔ داده‌ها، سفارش‌ها و نشست‌ها پاک می‌شوند و قابل
                      بازیابی نیستند.
                    </p>
                  </div>
                </div>
                <Field className="mt-4">
                  <FieldLabel htmlFor="as5-confirm">
                    برای تأیید، عبارت «حذف حساب» را بنویسید
                  </FieldLabel>
                  <Input id="as5-confirm" placeholder="حذف حساب" dir="rtl" />
                </Field>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="destructive">
                    <Trash2Icon className="size-4" />
                    حذف حساب
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSection("general")}
                  >
                    انصراف
                  </Button>
                </div>
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

function NotifyRow({
  id,
  title,
  defaultChecked,
}: {
  id: string
  title: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Label htmlFor={id}>{title}</Label>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
