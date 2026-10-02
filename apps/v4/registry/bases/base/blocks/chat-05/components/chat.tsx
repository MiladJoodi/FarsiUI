"use client"

import * as React from "react"
import { cn } from "cn"
import {
  MoreHorizontalIcon,
  PaperclipIcon,
  SearchIcon,
  SendIcon,
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
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const CONTACTS = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "مرسی، عالی شد.",
    time: "۱۰:۲۷",
    unread: 2,
    online: true,
    initials: "سم",
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
    initials: "عر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: 1,
    online: true,
    initials: "مک",
  },
] as const

export function ChatHub() {
  const [active, setActive] = React.useState("1")
  const [filter, setFilter] = React.useState("all")
  const [query, setQuery] = React.useState("")
  const [draft, setDraft] = React.useState("")

  const contact = CONTACTS.find((c) => c.id === active) ?? CONTACTS[0]

  const list = CONTACTS.filter((c) => {
    if (filter === "unread" && c.unread === 0) return false
    if (filter === "online" && !c.online) return false
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
          فهرست مخاطبین، فیلتر RTL و ارسال پیام
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
              value={filter}
              onValueChange={(v) => setFilter((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
                <SelectItem value="online">آنلاین</SelectItem>
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
                      <span className="shrink-0 text-[10px] text-muted-foreground">
                        <bdi dir="ltr">{c.time}</bdi>
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-muted-foreground">
                        {c.preview}
                      </p>
                      {c.unread > 0 ? (
                        <Badge
                          variant="secondary"
                          className="h-5 min-w-5 px-1.5"
                        >
                          <bdi dir="ltr">{c.unread}</bdi>
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
          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Avatar className="size-10">
              {"avatar" in contact && contact.avatar ? (
                <AvatarImage src={contact.avatar} alt={contact.name} />
              ) : null}
              <AvatarFallback>{contact.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{contact.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                <bdi dir="ltr">{contact.email}</bdi>
                {contact.online ? " · آنلاین" : " · آفلاین"}
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>عملیات گفتگو</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>مشاهده پروفایل</DropdownMenuItem>
                <DropdownMenuItem>کپی ایمیل</DropdownMenuItem>
                <DropdownMenuItem>بی‌صدا کردن</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  حذف گفتگو
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <bdi dir="ltr">{contact.email}</bdi> هم بفرستید.
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
                <Select defaultValue="enter">
                  <SelectTrigger className="w-36" dir="rtl">
                    <SelectValue placeholder="ارسال با" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectItem value="enter">Enter برای ارسال</SelectItem>
                    <SelectItem value="ctrl">Ctrl+Enter</SelectItem>
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
        <p className="text-[10px] text-muted-foreground">
          <bdi dir="ltr" className="tabular-nums">
            {time}
          </bdi>
        </p>
      </div>
    </div>
  )
}
