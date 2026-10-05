"use client"

import * as React from "react"
import { MoreHorizontalIcon, ShieldAlertIcon, Trash2Icon } from "lucide-react"

import { cn } from "@/registry/base-rhea/lib/utils"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
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

const NAV = [
  { id: "general", label: "عمومی" },
  { id: "security", label: "امنیت" },
  { id: "notify", label: "اعلان‌ها" },
  { id: "danger", label: "منطقه خطر" },
] as const

type NavId = (typeof NAV)[number]["id"]

const LANG_ITEMS = [
  { value: "فارسی", label: "فارسی" },
  { value: "انگلیسی", label: "انگلیسی" },
] as const

const TZ_ITEMS = [
  { value: "تهران", label: "تهران (ایران)" },
  { value: "دبی", label: "دبی" },
  { value: "استانبول", label: "استانبول" },
] as const

const SESSION_ITEMS = [
  { value: "۱ روز", label: "۱ روز" },
  { value: "۷ روز", label: "۷ روز" },
  { value: "۳۰ روز", label: "۳۰ روز" },
  { value: "۹۰ روز", label: "۹۰ روز" },
] as const

const CHANNEL_ITEMS = [
  { value: "ایمیل", label: "ایمیل" },
  { value: "پیامک", label: "پیامک" },
  { value: "اعلان مرورگر", label: "اعلان مرورگر" },
] as const

export default function AccountSettingsHub() {
  const [section, setSection] = React.useState<NavId>("general")
  const [moreOpen, setMoreOpen] = React.useState(false)

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
        <Popover open={moreOpen} onOpenChange={setMoreOpen}>
          <PopoverTrigger
            render={<Button type="button" variant="outline" size="sm" />}
          >
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            lang="fa"
            align="start"
            className="w-52 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">عملیات حساب</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              دانلود داده‌ها
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              خروج از همهٔ دستگاه‌ها
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {
                setSection("danger")
                setMoreOpen(false)
              }}
            >
              حذف حساب
            </Button>
          </PopoverContent>
        </Popover>
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
                      <Select items={[...LANG_ITEMS]} defaultValue="فارسی">
                        <SelectTrigger
                          id="as5-lang"
                          className="w-full"
                          dir="rtl"
                        >
                          <SelectValue placeholder="زبان" />
                        </SelectTrigger>
                        <SelectContent dir="rtl" lang="fa">
                          {LANG_ITEMS.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="as5-tz">منطقه زمانی</FieldLabel>
                      <Select items={[...TZ_ITEMS]} defaultValue="تهران">
                        <SelectTrigger id="as5-tz" className="w-full" dir="rtl">
                          <SelectValue placeholder="منطقه زمانی" />
                        </SelectTrigger>
                        <SelectContent dir="rtl" lang="fa">
                          {TZ_ITEMS.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                    placeholder="رمز عبور فعلی"
                    dir="rtl"
                    className="text-end"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="as5-new">رمز عبور جدید</FieldLabel>
                  <Input
                    id="as5-new"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    dir="rtl"
                    className="text-end tracking-normal"
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
                <Select items={[...SESSION_ITEMS]} defaultValue="۳۰ روز">
                  <SelectTrigger
                    id="as5-session"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="مدت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {SESSION_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Button type="button">ذخیره امنیت</Button>
            </div>
          ) : null}

          {section === "notify" ? (
            <div className="space-y-6">
              <Header title="اعلان‌ها" description="کانال‌ها و نوع پیام‌ها" />
              <Field>
                <FieldLabel htmlFor="as5-channel">کانال ترجیحی</FieldLabel>
                <Select items={[...CHANNEL_ITEMS]} defaultValue="ایمیل">
                  <SelectTrigger
                    id="as5-channel"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="کانال" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {CHANNEL_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
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
              <Button type="button">ذخیره اعلان‌ها</Button>
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
                  <Button type="button" variant="destructive">
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
