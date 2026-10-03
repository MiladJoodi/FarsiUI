"use client"

import * as React from "react"
import {
  LaptopIcon,
  MoreHorizontalIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { cn } from "@/registry/bases/base/lib/utils"

const NAV = [
  { id: "active", label: "فعال" },
  { id: "trusted", label: "معتبر" },
  { id: "settings", label: "تنظیمات" },
  { id: "history", label: "تاریخچه" },
] as const

type NavId = (typeof NAV)[number]["id"]

const HISTORY = [
  { place: "تهران · Chrome", time: "امروز ۱۴:۲۰", ok: true, status: "موفق" },
  { place: "اصفهان · Safari", time: "دیروز ۰۹:۰۵", ok: true, status: "موفق" },
  {
    place: "تهران · Firefox",
    time: "۳ روز پیش",
    ok: false,
    status: "ناموفق",
  },
] as const

const TIMEOUT_ITEMS = [
  { value: "۱ روز", label: "۱ روز" },
  { value: "۷ روز", label: "۷ روز" },
  { value: "۳۰ روز", label: "۳۰ روز" },
  { value: "۹۰ روز", label: "۹۰ روز" },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "موفق", label: "موفق" },
  { value: "ناموفق", label: "ناموفق" },
] as const

export function SessionsHub() {
  const [section, setSection] = React.useState<NavId>("active")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)
  const [status, setStatus] = React.useState("همه")

  const filteredHistory = HISTORY.filter(
    (h) => status === "همه" || h.status === status
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
            مرکز نشست‌ها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">نشست‌های حساب</h2>
          <p className="mt-2 text-muted-foreground">
            دستگاه‌های فعال، معتبر، تنظیمات و تاریخچه ورود
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
            <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("history")
                setMoreOpen(false)
              }}
            >
              تاریخچه ورود
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setSection("settings")
                setMoreOpen(false)
              }}
            >
              تنظیمات نشست
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
          {section === "active" ? (
            <div className="space-y-4">
              <Header title="نشست‌های فعال" description="دستگاه‌های متصل الان" />
              {[
                {
                  id: "1",
                  device: "Chrome روی ویندوز",
                  meta: "تهران · الان",
                  current: true,
                  kind: "laptop" as const,
                },
                {
                  id: "2",
                  device: "Safari روی آیفون",
                  meta: "تهران · ۲ ساعت پیش",
                  kind: "phone" as const,
                },
              ].map((s, i) => {
                const Icon = s.kind === "phone" ? SmartphoneIcon : LaptopIcon
                return (
                  <div key={s.id}>
                    {i > 0 && <Separator className="my-2" />}
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{s.device}</p>
                          {s.current ? (
                            <Badge variant="outline" className="border">
                              همین دستگاه
                            </Badge>
                          ) : null}
                        </div>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          {s.meta}
                        </p>
                      </div>
                      {!s.current ? (
                        <Popover
                          open={openId === s.id}
                          onOpenChange={(open) =>
                            setOpenId(open ? s.id : null)
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
                              جزئیات
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              className="h-8 w-full justify-start text-destructive hover:text-destructive"
                              onClick={() => setOpenId(null)}
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
              <Button type="button" variant="outline" className="w-full sm:w-auto">
                خروج از بقیه
              </Button>
            </div>
          ) : null}

          {section === "trusted" ? (
            <div className="space-y-6">
              <Header
                title="دستگاه‌های معتبر"
                description="بدون تأیید دوباره تا مهلت نشست"
              />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="se5-name">نام دستگاه</FieldLabel>
                  <Input
                    id="se5-name"
                    placeholder="مثلاً لپ‌تاپ منزل"
                    dir="rtl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="se5-email">ایمیل تأیید</FieldLabel>
                  <Input
                    id="se5-email"
                    type="email"
                    defaultValue="reza@example.com"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    لینک تأیید اعتماد به این آدرس می‌رود
                  </FieldDescription>
                </Field>
              </FieldGroup>
              <Button type="button">افزودن دستگاه معتبر</Button>
            </div>
          ) : null}

          {section === "settings" ? (
            <div className="space-y-6">
              <Header title="تنظیمات" description="مهلت و هشدارها" />
              <Field>
                <FieldLabel htmlFor="se5-timeout">مهلت نشست</FieldLabel>
                <Select items={[...TIMEOUT_ITEMS]} defaultValue="۳۰ روز">
                  <SelectTrigger
                    id="se5-timeout"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
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
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="se5-remember">به‌خاطر سپردن دستگاه</Label>
                    <p className="text-sm text-muted-foreground">
                      تا پایان مهلت
                    </p>
                  </div>
                  <Switch id="se5-remember" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="se5-alert">هشدار ورود جدید</Label>
                    <p className="text-sm text-muted-foreground">
                      ایمیل هنگام نشست تازه
                    </p>
                  </div>
                  <Switch id="se5-alert" defaultChecked />
                </div>
              </div>
              <Button type="button">ذخیره تنظیمات</Button>
            </div>
          ) : null}

          {section === "history" ? (
            <div className="space-y-6">
              <Header title="تاریخچه ورود" description="آخرین تلاش‌ها" />
              <Field>
                <FieldLabel htmlFor="se5-filter">وضعیت</FieldLabel>
                <Select
                  items={[...STATUS_ITEMS]}
                  value={status}
                  onValueChange={(value) => {
                    if (STATUS_ITEMS.some((item) => item.value === value)) {
                      setStatus(value as string)
                    }
                  }}
                >
                  <SelectTrigger
                    id="se5-filter"
                    className="w-full sm:max-w-xs"
                    dir="rtl"
                  >
                    <SelectValue placeholder="وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {STATUS_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <ul className="space-y-0 rounded-lg border">
                {filteredHistory.map((h, i) => (
                  <li key={h.place + h.time}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <div>
                        <p className="text-sm font-medium">{h.place}</p>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          {h.time}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          h.ok
                            ? "border"
                            : "border-destructive text-destructive"
                        }
                      >
                        {h.status}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
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
