"use client"

import * as React from "react"
import { cn } from "cn"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"

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

export function ConversationHub() {
  const [active, setActive] = React.useState("1")
  const [status, setStatus] = React.useState("open")
  const [filter, setFilter] = React.useState("all")
  const [query, setQuery] = React.useState("")

  const list = THREADS.filter((t) => {
    if (filter === "open" && t.status !== "باز") return false
    if (filter === "unread" && !t.unread) return false
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
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>مکالمهٔ جدید</DropdownMenuItem>
            <DropdownMenuItem>خروجی CSV</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>تنظیمات اعلان</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              value={filter}
              onValueChange={(v) => setFilter((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="open">باز</SelectItem>
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
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
          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Avatar className="size-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="سارا"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">پیگیری سفارش</p>
              <p className="truncate text-xs text-muted-foreground">
                سارا محمدی · <bdi dir="ltr">sara@example.com</bdi>
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
                <DropdownMenuItem>ادغام</DropdownMenuItem>
                <DropdownMenuItem>انتقال</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">بستن</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex-1 space-y-3 overflow-auto p-4">
            <Bubble who="سارا محمدی" time="۰۹:۱۲">
              سلام، وضعیت ارسال سفارش چطوره؟
            </Bubble>
            <Bubble who="شما" time="۰۹:۱۵" me>
              بسته امروز تحویل پست شده.
            </Bubble>
            <Bubble who="سارا محمدی" time="۰۹:۱۶">
              رسید را به <bdi dir="ltr">sara@example.com</bdi> بفرستید.
            </Bubble>
          </div>

          <div className="space-y-2 border-t p-3">
            <Textarea
              placeholder="پاسخ به مشتری…"
              dir="rtl"
              className="min-h-20 resize-none"
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
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
                value={status}
                onValueChange={(v) => setStatus((v as string) ?? "open")}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="وضعیت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="open">باز</SelectItem>
                  <SelectItem value="pending">در انتظار</SelectItem>
                  <SelectItem value="closed">بسته</SelectItem>
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
            <Button type="button" variant="outline" size="sm" className="mt-2 w-full">
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
        <p className="text-[10px] text-muted-foreground">
          <bdi dir="ltr" className="tabular-nums">
            {time}
          </bdi>
        </p>
      </div>
    </div>
  )
}
