"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Checkbox } from "@/registry/base-maia/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import { Textarea } from "@/registry/base-maia/ui/textarea"

const NAV = [
  { id: "general", label: "عمومی" },
  { id: "notify", label: "اعلان‌ها" },
  { id: "api", label: "کلید API" },
  { id: "webhooks", label: "وب‌هوک" },
] as const

const ENV_ITEMS = [
  { value: "تولید", label: "تولید" },
  { value: "پیش‌تولید", label: "پیش‌تولید" },
  { value: "توسعه", label: "توسعه" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function DashboardSettingsConsole() {
  const [section, setSection] = React.useState<NavId>("general")
  const [copied, setCopied] = React.useState(false)
  const apiKey = "fui_live_••••••••••••9a2f"

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <Badge variant="secondary" className="mb-3">
          کنسول تنظیمات
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          تنظیمات پیشرفته داشبورد
        </h2>
        <p className="mt-2 text-muted-foreground">
          ناوبری کناری، API، وب‌هوک و ترجیحات فضای کاری
        </p>
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
          {section === "general" ? (
            <div className="space-y-6">
              <Header title="عمومی" description="نام پروژه و منطقه زمانی" />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ds5-name">نام فضای کاری</FieldLabel>
                  <Input
                    id="ds5-name"
                    defaultValue="FarsiUI Product"
                    placeholder="نام پروژه"
                    dir="rtl"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ds5-slug">شناسه</FieldLabel>
                  <Input
                    id="ds5-slug"
                    defaultValue="farsiui-product"
                    placeholder="workspace-slug"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    در آدرس‌ها و وب‌هوک‌ها استفاده می‌شود
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="ds5-env">محیط</FieldLabel>
                  <Select items={[...ENV_ITEMS]} defaultValue="تولید">
                    <SelectTrigger id="ds5-env" className="w-full" dir="rtl">
                      <SelectValue placeholder="محیط را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {ENV_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
              <Button>ذخیره</Button>
            </div>
          ) : null}

          {section === "notify" ? (
            <div className="space-y-6">
              <Header
                title="اعلان‌ها"
                description="ایمیل خلاصه و کانال‌های هشدار"
              />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ds5-digest">
                    ایمیل خلاصه روزانه
                  </FieldLabel>
                  <Input
                    id="ds5-digest"
                    type="email"
                    defaultValue="ops@example.com"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
              </FieldGroup>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="ds5-billing">اعلان صورتحساب</Label>
                    <p className="text-sm text-muted-foreground">
                      قبل از تمدید اشتراک
                    </p>
                  </div>
                  <Switch id="ds5-billing" defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor="ds5-security">هشدار امنیتی</Label>
                    <p className="text-sm text-muted-foreground">
                      ورود مشکوک و تغییر نقش
                    </p>
                  </div>
                  <Switch id="ds5-security" defaultChecked />
                </div>
              </div>
              <Button>ذخیره اعلان‌ها</Button>
            </div>
          ) : null}

          {section === "api" ? (
            <div className="space-y-6">
              <Header
                title="کلید API"
                description="برای دسترسی برنامه‌ای به API"
              />
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base">کلید زنده</CardTitle>
                    <Badge variant="secondary">فعال</Badge>
                  </div>
                  <CardDescription>آخرین استفاده: ۲ ساعت پیش</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    readOnly
                    value={apiKey}
                    dir="ltr"
                    className="text-start font-mono text-sm"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setCopied(true)
                      window.setTimeout(() => setCopied(false), 1500)
                    }}
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    {copied ? "کپی شد" : "کپی"}
                  </Button>
                </CardContent>
              </Card>
              <div className="flex items-center justify-between gap-4 rounded-xl border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="ds5-rotate">چرخش خودکار ماهانه</Label>
                  <p className="text-sm text-muted-foreground">
                    کلید جدید ساخته و قبلی باطل می‌شود
                  </p>
                </div>
                <Switch id="ds5-rotate" />
              </div>
              <Button variant="destructive">باطل‌سازی کلید</Button>
            </div>
          ) : null}

          {section === "webhooks" ? (
            <div className="space-y-6">
              <Header
                title="وب‌هوک"
                description="رویدادها را به سرور خود بفرستید"
              />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ds5-hook">آدرس Endpoint</FieldLabel>
                  <Input
                    id="ds5-hook"
                    placeholder="https://api.example.com/hooks"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ds5-secret">رمز امضا</FieldLabel>
                  <Input
                    id="ds5-secret"
                    type="password"
                    defaultValue="whsec_demo"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ds5-note">یادداشت (اختیاری)</FieldLabel>
                  <Textarea
                    id="ds5-note"
                    placeholder="توضیح کوتاه برای تیم…"
                    dir="rtl"
                    rows={3}
                  />
                </Field>
              </FieldGroup>
              <div className="space-y-3">
                <p className="text-sm font-medium">رویدادها</p>
                {[
                  ["user.created", "ایجاد کاربر"],
                  ["invoice.paid", "پرداخت فاکتور"],
                  ["doc.verified", "تأیید مدرک"],
                ].map(([id, label]) => (
                  <div key={id} className="flex items-center gap-3">
                    <Checkbox
                      id={`ds5-ev-${id}`}
                      defaultChecked={id !== "doc.verified"}
                    />
                    <Label htmlFor={`ds5-ev-${id}`} className="font-normal">
                      <span className="font-medium">{label}</span>
                      <span dir="ltr" className="ms-2 text-muted-foreground">
                        {id}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
              <Button>ذخیره وب‌هوک</Button>
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
