"use client"

import * as React from "react"
import {
  CopyIcon,
  KeyRoundIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { cn } from "@/registry/base-maia/lib/utils"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-maia/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

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

const METHOD_ITEMS = [
  { value: "پیامک", label: "پیامک" },
  { value: "ایمیل", label: "ایمیل" },
  { value: "اپلیکیشن احراز", label: "اپلیکیشن احراز" },
] as const

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "موفق", label: "موفق" },
  { value: "ناموفق", label: "ناموفق" },
] as const

export default function SecuritySettingsHub() {
  const [section, setSection] = React.useState<NavId>("password")
  const [copied, setCopied] = React.useState(false)
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)
  const [filter, setFilter] = React.useState("همه")

  function copyCodes() {
    void navigator.clipboard?.writeText(RECOVERY_CODES.join("\n"))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const filteredLog = LOGIN_LOG.filter(
    (item) => filter === "همه" || item.status === filter
  )

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
            <p className="px-2 py-1.5 text-sm font-medium">عملیات امنیتی</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("activity")
                setMoreOpen(false)
              }}
            >
              مشاهدهٔ ورودها
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("recovery")
                setMoreOpen(false)
              }}
            >
              کدهای بازیابی
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={() => setMoreOpen(false)}
            >
              خروج از همهٔ دستگاه‌ها
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
                      placeholder="رمز عبور فعلی"
                      dir="rtl"
                      className="text-end"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ss5-new">رمز جدید</FieldLabel>
                    <Input
                      id="ss5-new"
                      type="password"
                      placeholder="حداقل ۸ کاراکتر"
                      dir="rtl"
                      className="text-end tracking-normal"
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
                      className="text-end"
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
                  <Select items={[...METHOD_ITEMS]} defaultValue="پیامک">
                    <SelectTrigger id="ss5-method" className="w-full" dir="rtl">
                      <SelectValue placeholder="روش" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {METHOD_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
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
                    className="text-start tracking-normal"
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
              <Button type="button">ذخیره دو مرحله‌ای</Button>
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
                      className="rounded-md border bg-background px-3 py-2 text-sm tracking-normal"
                    >
                      <span dir="ltr" className="inline-block text-start">
                        {code}
                      </span>
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
                <Select
                  items={[...FILTER_ITEMS]}
                  value={filter}
                  onValueChange={(value) => {
                    if (FILTER_ITEMS.some((item) => item.value === value)) {
                      setFilter(value as string)
                    }
                  }}
                >
                  <SelectTrigger
                    id="ss5-filter"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {FILTER_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <ul className="space-y-0 rounded-lg border">
                {filteredLog.map((item, i) => (
                  <li key={item.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <div>
                        <p className="text-sm font-medium">{item.place}</p>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            item.ok
                              ? "border"
                              : "border-destructive text-destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                        <Popover
                          open={openId === item.id}
                          onOpenChange={(open) =>
                            setOpenId(open ? item.id : null)
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
                            className="w-48 space-y-1 p-2"
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
                              جزئیات
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              className="h-8 w-full justify-start"
                              onClick={() => setOpenId(null)}
                            >
                              این دستگاه نیست؟ گزارش
                            </Button>
                          </PopoverContent>
                        </Popover>
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
