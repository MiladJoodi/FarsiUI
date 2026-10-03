"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  PaperclipIcon,
  SearchIcon,
  SendIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Input } from "@/registry/bases/base/ui/input"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { cn } from "@/registry/bases/base/lib/utils"

const CONTACTS = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "مرسی، عالی شد.",
    time: "۱۰:۲۷",
    unread: 2,
    online: true,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    preview: "فایل طرح را فرستادم",
    time: "دیروز",
    unread: 0,
    online: false,
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: 1,
    online: true,
    initials: "م‌ک",
  },
] as const

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "آنلاین", label: "آنلاین" },
] as const

const SEND_ITEMS = [
  { value: "اینتر برای ارسال", label: "اینتر برای ارسال" },
  { value: "کنترل+اینتر", label: "کنترل+اینتر" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function ChatHub() {
  const [active, setActive] = React.useState("1")
  const [filter, setFilter] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [draft, setDraft] = React.useState("")
  const [moreOpen, setMoreOpen] = React.useState(false)

  const contact = CONTACTS.find((c) => c.id === active) ?? CONTACTS[0]

  const list = CONTACTS.filter((c) => {
    if (filter === "خوانده‌نشده" && c.unread === 0) return false
    if (filter === "آنلاین" && !c.online) return false
    if (query && !`${c.name}${c.email}`.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <Badge variant="secondary" className="mb-3">
          مرکز گفتگو
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">گفتگوها</h2>
        <p className="mt-2 text-muted-foreground">
          فهرست مخاطبین، فیلتر راست‌چین و ارسال پیام
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:h-[620px] md:grid-cols-[16rem_1fr]">
        <aside className="flex flex-col border-b bg-muted/20 md:border-b-0 md:border-l">
          <div className="space-y-2 border-b p-3">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی نام یا ایمیل…"
                className="ps-9"
                dir="rtl"
              />
            </div>
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
            {list.map((c, i) => (
              <div key={c.id}>
                {i > 0 && <Separator />}
                <button
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2.5 text-start transition-colors hover:bg-muted/60",
                    active === c.id && "bg-muted"
                  )}
                >
                  <div className="relative">
                    <Avatar className="size-9">
                      {"avatar" in c && c.avatar ? (
                        <AvatarImage src={c.avatar} alt={c.name} />
                      ) : null}
                      <AvatarFallback>{c.initials}</AvatarFallback>
                    </Avatar>
                    {c.online ? (
                      <span className="absolute end-0 bottom-0 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{c.name}</p>
                      <span className="shrink-0 text-[10px] tracking-normal text-muted-foreground">
                        {c.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-muted-foreground">
                        {c.preview}
                      </p>
                      {c.unread > 0 ? (
                        <Badge
                          variant="outline"
                          className="h-5 min-w-5 border px-1.5 tracking-normal"
                        >
                          {toFa(c.unread)}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex min-h-[400px] flex-col">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b px-4 py-3">
            <div className="relative">
              <Avatar className="size-10">
                {"avatar" in contact && contact.avatar ? (
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                ) : null}
                <AvatarFallback>{contact.initials}</AvatarFallback>
              </Avatar>
              {contact.online ? (
                <span className="absolute end-0 bottom-0 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
              ) : null}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold">{contact.name}</p>
              <p className="truncate text-xs tracking-normal text-muted-foreground">
                {contact.online ? "آنلاین" : "آفلاین"} ·{" "}
                <span dir="ltr" className="inline-block text-start">
                  {contact.email}
                </span>
              </p>
            </div>
            <Popover open={moreOpen} onOpenChange={setMoreOpen}>
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
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-44 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات گفتگو</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMoreOpen(false)}
                >
                  مشاهده پروفایل
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMoreOpen(false)}
                >
                  کپی ایمیل
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setMoreOpen(false)}
                >
                  بی‌صدا کردن
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setMoreOpen(false)}
                >
                  حذف گفتگو
                </Button>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 space-y-3 overflow-auto p-4">
            <Bubble me={false} time="۱۰:۲۴">
              سلام، وضعیت تیکت پشتیبانی چطوره؟
            </Bubble>
            <Bubble me time="۱۰:۲۶">
              سلام! امروز پاسخ می‌دهیم.
            </Bubble>
            <Bubble me={false} time="۱۰:۲۷">
              ممنون. اگر لازم شد به{" "}
              <span dir="ltr" className="inline-block text-start">
                {contact.email}
              </span>{" "}
              هم بفرستید.
            </Bubble>
          </div>

          <div className="space-y-2 border-t p-3">
            <Textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="پیام خود را بنویسید…"
              dir="rtl"
              className="min-h-20 resize-none"
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="sm">
                  <PaperclipIcon className="size-4" />
                  پیوست
                </Button>
                <Select items={[...SEND_ITEMS]} defaultValue="اینتر برای ارسال">
                  <SelectTrigger className="w-40" dir="rtl">
                    <SelectValue placeholder="ارسال با" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {SEND_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="button"
                onClick={() => setDraft("")}
                disabled={!draft.trim()}
              >
                <SendIcon className="size-4" />
                ارسال
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({
  children,
  me,
  time,
}: {
  children: React.ReactNode
  me?: boolean
  time: string
}) {
  return (
    <div className={me ? "flex justify-start" : "flex justify-end"}>
      <div className="max-w-[75%] space-y-1">
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
