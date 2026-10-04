"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { cn } from "@/registry/base-lyra/lib/utils"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
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

const NAV = [
  { id: "channels", label: "کانال‌ها" },
  { id: "types", label: "انواع پیام" },
  { id: "schedule", label: "زمان‌بندی" },
  { id: "digest", label: "خلاصه" },
] as const

type NavId = (typeof NAV)[number]["id"]

const TYPES = [
  {
    id: "product",
    title: "محصول و به‌روزرسانی",
    email: true,
    sms: false,
    push: true,
  },
  {
    id: "security",
    title: "هشدار امنیتی",
    email: true,
    sms: true,
    push: true,
  },
  {
    id: "billing",
    title: "صورتحساب",
    email: true,
    sms: false,
    push: false,
  },
  {
    id: "marketing",
    title: "پیشنهادها",
    email: false,
    sms: false,
    push: false,
  },
] as const

const FREQ_ITEMS = [
  { value: "آنی", label: "آنی" },
  { value: "ساعتی", label: "ساعتی" },
  { value: "روزانه", label: "روزانه" },
  { value: "هفتگی", label: "هفتگی" },
] as const

const TIME_ITEMS = [
  { value: "۲۲:۰۰", label: "۲۲:۰۰" },
  { value: "۲۳:۰۰", label: "۲۳:۰۰" },
  { value: "۰۰:۰۰", label: "۰۰:۰۰" },
  { value: "۰۶:۰۰", label: "۰۶:۰۰" },
  { value: "۰۷:۰۰", label: "۰۷:۰۰" },
  { value: "۰۸:۰۰", label: "۰۸:۰۰" },
] as const

const DIGEST_FREQ_ITEMS = [
  { value: "روزانه", label: "روزانه" },
  { value: "هفتگی", label: "هفتگی" },
  { value: "ماهانه", label: "ماهانه" },
  { value: "خاموش", label: "خاموش" },
] as const

const DAY_ITEMS = [
  { value: "شنبه", label: "شنبه" },
  { value: "یکشنبه", label: "یکشنبه" },
  { value: "دوشنبه", label: "دوشنبه" },
  { value: "جمعه", label: "جمعه" },
] as const

export default function AccountNotificationsHub() {
  const [section, setSection] = React.useState<NavId>("channels")
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
            مرکز اعلان‌ها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">اعلان‌های حساب</h2>
          <p className="mt-2 text-muted-foreground">
            کانال‌ها، انواع پیام، ساعات سکوت و خلاصهٔ ایمیلی
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
            className="w-48 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">میان‌برها</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("types")
                setMoreOpen(false)
              }}
            >
              انواع پیام
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("schedule")
                setMoreOpen(false)
              }}
            >
              ساعات سکوت
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              خاموش کردن همهٔ اعلان‌ها
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
                  section === item.id && "bg-muted font-medium text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="p-5 md:p-6">
          {section === "channels" ? (
            <div className="space-y-6">
              <Header
                title="کانال‌ها"
                description="ایمیل، پیامک و اعلان مرورگر"
              />
              <div className="space-y-0 rounded-lg border">
                <ChannelRow
                  id="an5-email"
                  title="ایمیل"
                  desc="خلاصه و پیام‌های مهم"
                  defaultChecked
                />
                <Separator />
                <ChannelRow
                  id="an5-sms"
                  title="پیامک"
                  desc="کد تأیید و هشدار فوری"
                  defaultChecked
                />
                <Separator />
                <ChannelRow
                  id="an5-push"
                  title="اعلان مرورگر"
                  desc="اطلاع‌رسانی آنی"
                />
              </div>
              <Field>
                <FieldLabel htmlFor="an5-email-addr">آدرس ایمیل</FieldLabel>
                <Input
                  id="an5-email-addr"
                  type="email"
                  defaultValue="sara@example.com"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>
                  اعلان‌های ایمیلی به این آدرس می‌روند
                </FieldDescription>
              </Field>
              <Button type="button">ذخیره کانال‌ها</Button>
            </div>
          ) : null}

          {section === "types" ? (
            <div className="space-y-6">
              <Header
                title="انواع پیام"
                description="برای هر نوع، کانال‌های مجاز را مشخص کنید"
              />
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full min-w-[28rem] text-sm">
                  <thead>
                    <tr className="border-b bg-muted/40 text-muted-foreground">
                      <th className="px-3 py-2 text-start font-medium">نوع</th>
                      <th className="px-3 py-2 text-center font-medium">
                        ایمیل
                      </th>
                      <th className="px-3 py-2 text-center font-medium">
                        پیامک
                      </th>
                      <th className="px-3 py-2 text-center font-medium">
                        مرورگر
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TYPES.map((row) => (
                      <tr key={row.id} className="border-b last:border-0">
                        <td className="px-3 py-3 font-medium">{row.title}</td>
                        <td className="px-3 py-3 text-center">
                          <Switch
                            defaultChecked={row.email}
                            aria-label="ایمیل"
                          />
                        </td>
                        <td className="px-3 py-3 text-center">
                          <Switch defaultChecked={row.sms} aria-label="پیامک" />
                        </td>
                        <td className="px-3 py-3 text-center">
                          <Switch
                            defaultChecked={row.push}
                            aria-label="مرورگر"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button type="button">ذخیره انواع</Button>
            </div>
          ) : null}

          {section === "schedule" ? (
            <div className="space-y-6">
              <Header title="زمان‌بندی" description="ساعات سکوت و تواتر" />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="an5-freq">تواتر پیش‌فرض</FieldLabel>
                  <Select items={[...FREQ_ITEMS]} defaultValue="آنی">
                    <SelectTrigger
                      id="an5-freq"
                      className="w-full sm:max-w-xs"
                      dir="rtl"
                    >
                      <SelectValue placeholder="تواتر" />
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="an5-from">شروع سکوت</FieldLabel>
                    <Select items={[...TIME_ITEMS]} defaultValue="۲۲:۰۰">
                      <SelectTrigger id="an5-from" className="w-full" dir="rtl">
                        <SelectValue placeholder="ساعت" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        {TIME_ITEMS.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="an5-to">پایان سکوت</FieldLabel>
                    <Select items={[...TIME_ITEMS]} defaultValue="۰۷:۰۰">
                      <SelectTrigger id="an5-to" className="w-full" dir="rtl">
                        <SelectValue placeholder="ساعت" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        {TIME_ITEMS.map((item) => (
                          <SelectItem
                            key={`to-${item.value}`}
                            value={item.value}
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="an5-note">یادداشت</FieldLabel>
                  <Input
                    id="an5-note"
                    placeholder="مثلاً در سفر اعلان کمتر…"
                    dir="rtl"
                  />
                </Field>
              </FieldGroup>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="an5-quiet">فعال‌سازی ساعات سکوت</Label>
                  <p className="text-sm text-muted-foreground">
                    فقط هشدار امنیتی عبور کند
                  </p>
                </div>
                <Switch id="an5-quiet" defaultChecked />
              </div>
              <Button type="button">ذخیره زمان‌بندی</Button>
            </div>
          ) : null}

          {section === "digest" ? (
            <div className="space-y-6">
              <Header
                title="خلاصهٔ ایمیلی"
                description="خلاصهٔ دوره‌ای فعالیت‌ها"
              />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="an5-digest-freq">تواتر خلاصه</FieldLabel>
                  <Select items={[...DIGEST_FREQ_ITEMS]} defaultValue="هفتگی">
                    <SelectTrigger
                      id="an5-digest-freq"
                      className="w-full sm:max-w-xs"
                      dir="rtl"
                    >
                      <SelectValue placeholder="تواتر" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {DIGEST_FREQ_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="an5-digest-email">
                    ایمیل خلاصه
                  </FieldLabel>
                  <Input
                    id="an5-digest-email"
                    type="email"
                    defaultValue="sara@example.com"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="an5-digest-day">روز ارسال</FieldLabel>
                  <Select items={[...DAY_ITEMS]} defaultValue="شنبه">
                    <SelectTrigger
                      id="an5-digest-day"
                      className="w-full sm:max-w-xs"
                      dir="rtl"
                    >
                      <SelectValue placeholder="روز" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {DAY_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="an5-digest-on">دریافت خلاصه</Label>
                <Switch id="an5-digest-on" defaultChecked />
              </div>
              <Button type="button">ذخیره خلاصه</Button>
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

function ChannelRow({
  id,
  title,
  desc,
  defaultChecked,
}: {
  id: string
  title: string
  desc: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{title}</Label>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
