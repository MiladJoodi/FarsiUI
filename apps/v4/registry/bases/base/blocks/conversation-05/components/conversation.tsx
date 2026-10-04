"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  PaperclipIcon,
  SendIcon,
  UserPlusIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { cn } from "@/registry/bases/base/lib/utils"

const THREADS = [
  {
    id: "1",
    title: "پیگیری سفارش",
    customer: "سارا محمدی",
    status: "باز",
    unread: true,
  },
  {
    id: "2",
    title: "اصلاح فاکتور",
    customer: "علی رضایی",
    status: "در انتظار",
    unread: false,
  },
  {
    id: "3",
    title: "مشکل ورود",
    customer: "مینا کریمی",
    status: "بسته",
    unread: false,
  },
] as const

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "باز", label: "باز" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
] as const

const STATUS_ITEMS = [
  { value: "باز", label: "باز" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "بسته", label: "بسته" },
] as const

export default function ConversationHub() {
  const [active, setActive] = React.useState("1")
  const [status, setStatus] = React.useState("باز")
  const [filter, setFilter] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [threadOpen, setThreadOpen] = React.useState(false)

  const list = THREADS.filter((t) => {
    if (filter === "باز" && t.status !== "باز") return false
    if (filter === "خوانده‌نشده" && !t.unread) return false
    if (query && !`${t.title}${t.customer}`.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرکز مکالمات
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">مکالمه‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            تیکت‌ها، وضعیت، دعوت همکار و پاسخ مشتری
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
              onClick={() => setMoreOpen(false)}
            >
              مکالمهٔ جدید
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              خروجی CSV
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => setMoreOpen(false)}
            >
              تنظیمات اعلان
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm lg:grid lg:h-[640px] lg:grid-cols-[14rem_1fr_13rem]">
        <aside className="flex flex-col border-b bg-muted/20 lg:border-b-0 lg:border-l">
          <div className="space-y-2 border-b p-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی موضوع یا مشتری…"
              dir="rtl"
            />
            <Select
              items={[...FILTER_ITEMS]}
              value={filter}
              onValueChange={(value) => {
                if (FILTER_ITEMS.some((item) => item.value === value)) {
                  setFilter(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FILTER_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 overflow-auto">
            {list.map((t, i) => (
              <div key={t.id}>
                {i > 0 && <Separator />}
                <button
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "flex w-full flex-col gap-1 px-3 py-2.5 text-start hover:bg-muted/60",
                    active === t.id && "bg-muted"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{t.title}</p>
                    {t.unread ? (
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    ) : null}
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {t.customer} · {t.status}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex min-h-[360px] flex-col border-b lg:border-b-0 lg:border-l">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b px-4 py-3">
            <Avatar className="size-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="سارا"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate font-semibold">سارا محمدی</p>
              <p className="truncate text-xs tracking-normal text-muted-foreground">
                پیگیری سفارش · آنلاین ·{" "}
                <span dir="ltr" className="inline-block text-start">
                  sara@example.com
                </span>
              </p>
            </div>
            <Popover open={threadOpen} onOpenChange={setThreadOpen}>
              <PopoverTrigger
                render={
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="shrink-0"
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
                className="w-36 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setThreadOpen(false)}
                >
                  ادغام
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setThreadOpen(false)}
                >
                  انتقال
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setThreadOpen(false)}
                >
                  بستن
                </Button>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 space-y-3 overflow-auto p-4">
            <Bubble who="سارا محمدی" time="۰۹:۱۲">
              سلام، وضعیت ارسال سفارش چطوره؟
            </Bubble>
            <Bubble who="شما" time="۰۹:۱۵" me>
              بسته امروز تحویل پست شده.
            </Bubble>
            <Bubble who="سارا محمدی" time="۰۹:۱۶">
              رسید را به{" "}
              <span dir="ltr" className="inline-block text-start">
                sara@example.com
              </span>{" "}
              بفرستید.
            </Bubble>
          </div>

          <div className="space-y-3 border-t px-4 py-3">
            <Textarea
              placeholder="پاسخ به مشتری…"
              dir="rtl"
              className="min-h-20 resize-none"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Button type="button" variant="outline" size="sm">
                <PaperclipIcon className="size-4" />
                پیوست
              </Button>
              <Button type="button" size="sm">
                <SendIcon className="size-4" />
                ارسال
              </Button>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-4 overflow-auto p-4">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              جزئیات
            </p>
            <Field>
              <FieldLabel>وضعیت</FieldLabel>
              <Select
                items={[...STATUS_ITEMS]}
                value={status}
                onValueChange={(value) => {
                  if (STATUS_ITEMS.some((item) => item.value === value)) {
                    setStatus(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
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
          </div>
          <Separator />
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              دعوت همکار
            </p>
            <Field>
              <FieldLabel htmlFor="cv5-invite">ایمیل</FieldLabel>
              <Input
                id="cv5-invite"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>دسترسی فقط به این مکالمه</FieldDescription>
            </Field>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3 w-full"
            >
              <UserPlusIcon className="size-4" />
              دعوت
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <Label htmlFor="cv5-public">پاسخ عمومی</Label>
              <p className="text-xs text-muted-foreground">
                مشتری پاسخ را ببیند
              </p>
            </div>
            <Switch id="cv5-public" defaultChecked />
          </div>
          <Field>
            <FieldLabel htmlFor="cv5-tag">برچسب</FieldLabel>
            <Input
              id="cv5-tag"
              placeholder="مثلاً ارسال، فاکتور…"
              dir="rtl"
            />
          </Field>
        </aside>
      </div>
    </section>
  )
}

function Bubble({
  who,
  time,
  children,
  me,
}: {
  who: string
  time: string
  children: React.ReactNode
  me?: boolean
}) {
  return (
    <div className={me ? "flex flex-row-reverse gap-2" : "flex gap-2"}>
      <Avatar className="size-8">
        <AvatarFallback>{me ? "من" : who[0]}</AvatarFallback>
      </Avatar>
      <div className="max-w-[80%] space-y-1">
        <p className="text-xs text-muted-foreground">{who}</p>
        <div
          className={
            me
              ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
              : "rounded-2xl bg-muted px-3 py-2 text-sm"
          }
        >
          {children}
        </div>
        <p className="text-[10px] tracking-normal text-muted-foreground">
          {time}
        </p>
      </div>
    </div>
  )
}
