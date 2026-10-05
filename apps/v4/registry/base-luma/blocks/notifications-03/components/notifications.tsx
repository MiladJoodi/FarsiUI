"use client"

import * as React from "react"
import {
  BellIcon,
  PackageIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const ITEMS = [
  {
    id: "1",
    title: "سفارش ارسال شد",
    body: "کد پیگیری: ۱۲۳۴۵۶",
    time: "۵ دقیقه پیش",
    type: "سفارش",
    unread: true,
    icon: PackageIcon,
  },
  {
    id: "2",
    title: "ورود جدید",
    body: "مرورگر کروم · تهران — هشدار به security@example.com",
    time: "۱ ساعت پیش",
    type: "امنیت",
    unread: true,
    icon: ShieldIcon,
  },
  {
    id: "3",
    title: "قابلیت جدید",
    body: "کامپوننت تقویم راست‌چین منتشر شد",
    time: "دیروز",
    type: "محصول",
    unread: false,
    icon: SparklesIcon,
  },
  {
    id: "4",
    title: "خلاصهٔ هفتگی",
    body: "۳ به‌روزرسانی آماده است",
    time: "شنبه",
    type: "محصول",
    unread: false,
    icon: BellIcon,
  },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "سفارش", label: "سفارش" },
  { value: "امنیت", label: "امنیت" },
  { value: "محصول", label: "محصول" },
] as const

export default function NotificationsFilter() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState("همه")

  const rows = ITEMS.filter((item) => {
    if (type === "خوانده‌نشده" && !item.unread) return false
    if (type !== "همه" && type !== "خوانده‌نشده" && item.type !== type) {
      return false
    }
    if (query && !`${item.title}${item.body}`.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>اعلان‌ها</CardTitle>
          <CardDescription>فیلتر راست‌چین؛ ایمیل هشدار چپ‌چین</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در اعلان‌ها…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Field>
            <FieldLabel htmlFor="nt3-email">ایمیل هشدار امنیتی</FieldLabel>
            <Input
              id="nt3-email"
              type="email"
              defaultValue="security@example.com"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>
              ورودهای مشکوک به این آدرس اطلاع داده می‌شود
            </FieldDescription>
          </Field>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                اعلانی پیدا نشد
              </p>
            ) : (
              rows.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.id}>
                    {i > 0 && <Separator />}
                    <div
                      className={
                        item.unread
                          ? "flex gap-3 bg-muted/40 px-4 py-3"
                          : "flex gap-3 px-4 py-3"
                      }
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium">{item.title}</p>
                          <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                            {item.time}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm tracking-normal text-muted-foreground">
                          {item.body.includes("@") ? (
                            <>
                              مرورگر کروم · تهران — هشدار به{" "}
                              <span
                                dir="ltr"
                                className="inline-block text-start"
                              >
                                security@example.com
                              </span>
                            </>
                          ) : (
                            item.body
                          )}
                        </p>
                        {item.unread ? (
                          <Badge variant="outline" className="mt-1.5 border">
                            جدید
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
