"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const NAV = [
  { id: "general", label: "عمومی" },
  { id: "api", label: "کلید API" },
  { id: "webhooks", label: "وب‌هوک" },
  { id: "advanced", label: "پیشرفته" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function SettingsConsole() {
  const [section, setSection] = React.useState<NavId>("general")
  const [copied, setCopied] = React.useState(false)
  const apiKey = "fui_live_••••••••••••9a2f"

  return (
    <div
      dir="rtl"
      lang="fa"
      className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[12rem_1fr]"
    >
      <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
        <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
          تنظیمات پیشرفته
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
            <Header
              title="عمومی"
              description="نام پروژه و شناسهٔ عمومی فضای کاری"
            />
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="ws-name">نام فضای کاری</FieldLabel>
                <Input id="ws-name" defaultValue="FarsiUI Product" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ws-slug">شناسه</FieldLabel>
                <Input
                  id="ws-slug"
                  defaultValue="farsiui-product"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>
                  در آدرس‌ها و وب‌هوک‌ها استفاده می‌شود
                </FieldDescription>
              </Field>
            </FieldGroup>
            <Button>ذخیره</Button>
          </div>
        ) : null}

        {section === "api" ? (
          <div className="space-y-6">
            <Header
              title="کلید API"
              description="برای دسترسی برنامه‌ای به API استفاده کنید"
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
                <Label htmlFor="api-rotate">چرخش خودکار ماهانه</Label>
                <p className="text-sm text-muted-foreground">
                  کلید جدید ساخته و قبلی باطل می‌شود
                </p>
              </div>
              <Switch id="api-rotate" />
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
                <FieldLabel htmlFor="hook-url">آدرس Endpoint</FieldLabel>
                <Input
                  id="hook-url"
                  placeholder="https://api.example.com/hooks"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="hook-secret">رمز امضا</FieldLabel>
                <Input
                  id="hook-secret"
                  type="password"
                  defaultValue="whsec_demo"
                  dir="ltr"
                  className="text-start"
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
                  <Checkbox id={`ev-${id}`} defaultChecked={id !== "doc.verified"} />
                  <Label htmlFor={`ev-${id}`} className="font-normal">
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

        {section === "advanced" ? (
          <div className="space-y-6">
            <Header
              title="پیشرفته"
              description="تنظیمات حساس؛ فقط برای مدیران"
            />
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="adv-audit">گزارش ممیزی</Label>
                  <p className="text-sm text-muted-foreground">
                    ثبت همهٔ تغییرات تنظیمات
                  </p>
                </div>
                <Switch id="adv-audit" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="adv-ip">محدودیت IP</Label>
                  <p className="text-sm text-muted-foreground">
                    فقط از شبکهٔ شرکت
                  </p>
                </div>
                <Switch id="adv-ip" />
              </div>
            </div>
            <Field>
              <FieldLabel htmlFor="adv-ips">لیست IP مجاز</FieldLabel>
              <Textarea
                id="adv-ips"
                dir="ltr"
                className="min-h-24 text-start font-mono text-sm"
                placeholder={"185.1.2.3\n10.0.0.0/8"}
              />
            </Field>
            <Button>اعمال تنظیمات پیشرفته</Button>
          </div>
        ) : null}
      </div>
    </div>
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
    <div className="space-y-1">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
