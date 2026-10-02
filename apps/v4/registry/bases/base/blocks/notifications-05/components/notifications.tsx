"use client"

import * as React from "react"
import { cn } from "cn"
import {
  BellIcon,
  CheckIcon,
  MoreHorizontalIcon,
  PackageIcon,
  ShieldIcon,
  SparklesIcon,
  Trash2Icon,
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

type Notice = {
  id: string
  title: string
  body: string
  time: string
  type: string
  unread: boolean
  icon: typeof BellIcon
}

const INITIAL: Notice[] = [
  {
    id: "1",
    title: "سفارش ارسال شد",
    body: "کد پیگیری: ۱۲۳۴۵۶",
    time: "۵ دقیقه پیش",
    type: "order",
    unread: true,
    icon: PackageIcon,
  },
  {
    id: "2",
    title: "ورود جدید",
    body: "Chrome · تهران",
    time: "۱ ساعت پیش",
    type: "security",
    unread: true,
    icon: ShieldIcon,
  },
  {
    id: "3",
    title: "قابلیت جدید",
    body: "کامپوننت Calendar RTL منتشر شد",
    time: "دیروز",
    type: "product",
    unread: false,
    icon: SparklesIcon,
  },
  {
    id: "4",
    title: "تخفیف ویژه",
    body: "تا ۲۰٪ روی طرح حرفه‌ای",
    time: "۲ روز پیش",
    type: "marketing",
    unread: false,
    icon: BellIcon,
  },
  {
    id: "5",
    title: "خلاصهٔ هفتگی",
    body: "۳ به‌روزرسانی آماده است",
    time: "شنبه",
    type: "product",
    unread: false,
    icon: BellIcon,
  },
]

const NAV = [
  { id: "all", label: "همه" },
  { id: "order", label: "سفارش" },
  { id: "security", label: "امنیت" },
  { id: "product", label: "محصول" },
  { id: "marketing", label: "بازاریابی" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function NotificationsHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [tab, setTab] = React.useState<NavId>("all")
  const [status, setStatus] = React.useState("all")
  const [query, setQuery] = React.useState("")

  const rows = items.filter((item) => {
    if (tab !== "all" && item.type !== tab) return false
    if (status === "unread" && !item.unread) return false
    if (status === "read" && item.unread) return false
    if (query && !`${item.title}${item.body}`.includes(query)) return false
    return true
  })

  const unread = items.filter((i) => i.unread).length

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
          <h2 className="text-3xl font-bold tracking-tight">اعلان‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            {unread > 0 ? (
              <>
                <bdi dir="ltr">{unread}</bdi> خوانده‌نشده · فیلتر و ترجیحات
              </>
            ) : (
              "همه خوانده شده‌اند"
            )}
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
            <DropdownMenuItem
              onClick={() =>
                setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
              }
            >
              همه خوانده
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setItems([])}
            >
              پاک کردن همه
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[11rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            دسته
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  tab === item.id && "bg-muted font-medium"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Separator className="my-3" />
          <div className="space-y-3 px-1">
            <Field>
              <FieldLabel htmlFor="nt5-email">ایمیل خلاصه</FieldLabel>
              <Input
                id="nt5-email"
                type="email"
                defaultValue="sara@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>خلاصهٔ روزانه به این آدرس</FieldDescription>
            </Field>
            <Field>
              <FieldLabel>تواتر خلاصه</FieldLabel>
              <Select defaultValue="daily">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="تواتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="realtime">آنی</SelectItem>
                  <SelectItem value="daily">روزانه</SelectItem>
                  <SelectItem value="weekly">هفتگی</SelectItem>
                  <SelectItem value="off">خاموش</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="nt5-push" className="text-sm">
                اعلان مرورگر
              </Label>
              <Switch id="nt5-push" />
            </div>
          </div>
        </aside>

        <div className="space-y-4 p-4 md:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو عنوان یا متن…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              value={status}
              onValueChange={(v) => setStatus((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full lg:w-36" dir="rtl">
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
                <SelectItem value="read">خوانده‌شده</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
              }
            >
              <CheckIcon className="size-4" />
              همه خوانده
            </Button>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-12 text-muted-foreground">
                <BellIcon className="size-8 opacity-50" />
                <p className="text-sm">اعلانی نیست</p>
              </div>
            ) : (
              rows.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.id}>
                    {i > 0 && <Separator />}
                    <div
                      className={cn(
                        "flex items-start gap-3 px-4 py-3",
                        item.unread && "bg-muted/40"
                      )}
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{item.title}</p>
                          {item.unread ? (
                            <Badge variant="secondary" className="h-5">
                              جدید
                            </Badge>
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.body}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuItem
                            onClick={() =>
                              setItems((prev) =>
                                prev.map((n) =>
                                  n.id === item.id
                                    ? { ...n, unread: false }
                                    : n
                                )
                              )
                            }
                          >
                            <CheckIcon className="size-4" />
                            علامت خوانده
                          </DropdownMenuItem>
                          <DropdownMenuItem>مشاهده</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() =>
                              setItems((prev) =>
                                prev.filter((n) => n.id !== item.id)
                              )
                            }
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
