"use client"

import * as React from "react"
import { cn } from "cn"
import {
  LaptopIcon,
  MoreHorizontalIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
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

const NAV = [
  { id: "active", label: "فعال" },
  { id: "trusted", label: "معتبر" },
  { id: "settings", label: "تنظیمات" },
  { id: "history", label: "تاریخچه" },
] as const

type NavId = (typeof NAV)[number]["id"]

const HISTORY = [
  { place: "تهران · Chrome", time: "امروز ۱۴:۲۰", ok: true },
  { place: "اصفهان · Safari", time: "دیروز ۰۹:۰۵", ok: true },
  { place: "تهران · Firefox", time: "۳ روز پیش", ok: false },
] as const

export function SessionsHub() {
  const [section, setSection] = React.useState<NavId>("active")

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
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSection("history")}>
              تاریخچه ورود
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSection("settings")}>
              تنظیمات نشست
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
          {section === "active" ? (
            <div className="space-y-4">
              <Header title="نشست‌های فعال" description="دستگاه‌های متصل الان" />
              {[
                {
                  device: "Chrome روی ویندوز",
                  meta: "تهران · الان",
                  current: true,
                  kind: "laptop" as const,
                },
                {
                  device: "Safari روی آیفون",
                  meta: "تهران · ۲ ساعت پیش",
                  kind: "phone" as const,
                },
              ].map((s, i) => {
                const Icon = s.kind === "phone" ? SmartphoneIcon : LaptopIcon
                return (
                  <div key={s.device}>
                    {i > 0 && <Separator className="my-2" />}
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{s.device}</p>
                          {s.current ? (
                            <Badge variant="secondary">همین دستگاه</Badge>
                          ) : null}
                        </div>
                        <p className="text-xs text-muted-foreground">{s.meta}</p>
                      </div>
                      {!s.current ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={<Button variant="ghost" size="icon-sm" />}
                          >
                            <MoreHorizontalIcon className="size-4" />
                            <span className="sr-only">عملیات</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent dir="rtl" lang="fa" align="start">
                            <DropdownMenuItem>جزئیات</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                              پایان نشست
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : null}
                    </div>
                  </div>
                )
              })}
              <Button variant="outline" className="w-full sm:w-auto">
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
              <Button>افزودن دستگاه معتبر</Button>
            </div>
          ) : null}

          {section === "settings" ? (
            <div className="space-y-6">
              <Header title="تنظیمات" description="مهلت و هشدارها" />
              <Field>
                <FieldLabel htmlFor="se5-timeout">مهلت نشست</FieldLabel>
                <Select defaultValue="30">
                  <SelectTrigger
                    id="se5-timeout"
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
              <Button>ذخیره تنظیمات</Button>
            </div>
          ) : null}

          {section === "history" ? (
            <div className="space-y-6">
              <Header title="تاریخچه ورود" description="آخرین تلاش‌ها" />
              <Field>
                <FieldLabel htmlFor="se5-filter">وضعیت</FieldLabel>
                <Select defaultValue="all">
                  <SelectTrigger
                    id="se5-filter"
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
                {HISTORY.map((h, i) => (
                  <li key={h.place + h.time}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <div>
                        <p className="text-sm font-medium">{h.place}</p>
                        <p className="text-xs text-muted-foreground">{h.time}</p>
                      </div>
                      <Badge variant={h.ok ? "secondary" : "destructive"}>
                        {h.ok ? "موفق" : "ناموفق"}
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
