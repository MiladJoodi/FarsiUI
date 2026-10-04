"use client"

import * as React from "react"
import {
  BellIcon,
  CheckIcon,
  MoreHorizontalIcon,
  PackageIcon,
  ShieldIcon,
  SparklesIcon,
  Trash2Icon,
} from "lucide-react"

import { cn } from "@/registry/base-mira/lib/utils"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-mira/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

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
    type: "سفارش",
    unread: true,
    icon: PackageIcon,
  },
  {
    id: "2",
    title: "ورود جدید",
    body: "مرورگر کروم · تهران",
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
    title: "تخفیف ویژه",
    body: "تا ۲۰٪ روی طرح حرفه‌ای",
    time: "۲ روز پیش",
    type: "بازاریابی",
    unread: false,
    icon: BellIcon,
  },
  {
    id: "5",
    title: "خلاصهٔ هفتگی",
    body: "۳ به‌روزرسانی آماده است",
    time: "شنبه",
    type: "محصول",
    unread: false,
    icon: BellIcon,
  },
]

const NAV = [
  { id: "همه", label: "همه" },
  { id: "سفارش", label: "سفارش" },
  { id: "امنیت", label: "امنیت" },
  { id: "محصول", label: "محصول" },
  { id: "بازاریابی", label: "بازاریابی" },
] as const

type NavId = (typeof NAV)[number]["id"]

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "خوانده‌شده", label: "خوانده‌شده" },
] as const

const DIGEST_ITEMS = [
  { value: "آنی", label: "آنی" },
  { value: "روزانه", label: "روزانه" },
  { value: "هفتگی", label: "هفتگی" },
  { value: "خاموش", label: "خاموش" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function NotificationsHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [tab, setTab] = React.useState<NavId>("همه")
  const [status, setStatus] = React.useState("همه")
  const [digest, setDigest] = React.useState("روزانه")
  const [query, setQuery] = React.useState("")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items.filter((item) => {
    if (tab !== "همه" && item.type !== tab) return false
    if (status === "خوانده‌نشده" && !item.unread) return false
    if (status === "خوانده‌شده" && item.unread) return false
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            {unread > 0
              ? `${toFa(unread)} خوانده‌نشده · فیلتر و ترجیحات`
              : "همه خوانده شده‌اند"}
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
            className="w-44 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
                setMoreOpen(false)
              }}
            >
              همه خوانده
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {
                setItems([])
                setMoreOpen(false)
              }}
            >
              پاک کردن همه
            </Button>
          </PopoverContent>
        </Popover>
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
              <Select
                items={[...DIGEST_ITEMS]}
                value={digest}
                onValueChange={(value) => {
                  if (DIGEST_ITEMS.some((item) => item.value === value)) {
                    setDigest(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="تواتر" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {DIGEST_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
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
              items={[...STATUS_ITEMS]}
              value={status}
              onValueChange={(value) => {
                if (STATUS_ITEMS.some((item) => item.value === value)) {
                  setStatus(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full lg:w-36" dir="rtl">
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
                            <Badge variant="outline" className="h-5 border">
                              جدید
                            </Badge>
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-sm tracking-normal text-muted-foreground">
                          {item.body}
                        </p>
                        <p className="mt-1 text-xs tracking-normal text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
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
                              variant="outline"
                              size="sm"
                              className="shrink-0"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          عملیات
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-44 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => {
                              setItems((prev) =>
                                prev.map((n) =>
                                  n.id === item.id ? { ...n, unread: false } : n
                                )
                              )
                              setOpenId(null)
                            }}
                          >
                            <CheckIcon className="size-4" />
                            علامت خوانده
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            مشاهده
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => {
                              setItems((prev) =>
                                prev.filter((n) => n.id !== item.id)
                              )
                              setOpenId(null)
                            }}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
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
