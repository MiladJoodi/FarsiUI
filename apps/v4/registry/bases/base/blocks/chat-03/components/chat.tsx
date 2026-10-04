"use client"

import * as React from "react"
import { SearchIcon, SendIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const THREADS = [
  {
    id: "1",
    name: "سارا محمدی",
    preview: "مرسی، عالی شد.",
    time: "۱۰:۲۷",
    unread: 2,
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    preview: "فاکتور رو فرستادم",
    time: "دیروز",
    unread: 0,
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: 1,
    initials: "م‌ک",
  },
] as const

const MESSAGES = [
  { text: "سلام، وضعیت تیکت پشتیبانی چطوره؟", me: false, time: "۱۰:۲۴" },
  {
    text: "سلام! امروز پاسخ می‌دهیم.",
    me: true,
    time: "۱۰:۲۶",
  },
  { text: "مرسی، عالی شد.", me: false, time: "۱۰:۲۷" },
] as const

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function ChatSplit() {
  const [filter, setFilter] = React.useState("همه")
  const [query, setQuery] = React.useState("")

  const threads = THREADS.filter((t) => {
    if (filter === "خوانده‌نشده" && t.unread === 0) return false
    if (query && !t.name.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="overflow-hidden bg-card p-0 md:grid md:h-[560px] md:grid-cols-[14rem_1fr]">
        <aside className="flex flex-col border-b md:border-b-0 md:border-l">
          <div className="space-y-2 border-b p-3">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی گفتگو…"
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
            {threads.map((t, i) => (
              <div key={t.id}>
                {i > 0 && <Separator />}
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-2.5 text-start hover:bg-muted/60"
                >
                  <Avatar className="size-9">
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{t.name}</p>
                      <span className="shrink-0 text-[10px] tracking-normal text-muted-foreground">
                        {t.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-xs text-muted-foreground">
                        {t.preview}
                      </p>
                      {t.unread > 0 ? (
                        <Badge
                          variant="outline"
                          className="h-5 min-w-5 border px-1.5 tracking-normal"
                        >
                          {toFa(t.unread)}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex min-h-[360px] flex-col">
          <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-3 space-y-0 border-b py-3">
            <Avatar className="size-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="سارا محمدی"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">سارا محمدی</p>
              <p className="truncate text-xs text-muted-foreground">آنلاین</p>
            </div>
            <Button type="button" variant="ghost" size="icon-sm" className="shrink-0">
              <SearchIcon className="size-4" />
              <span className="sr-only">جستجو</span>
            </Button>
          </CardHeader>
          <CardContent className="flex-1 space-y-3 overflow-auto py-4">
            {MESSAGES.map((m, i) => (
              <div
                key={i}
                className={m.me ? "flex justify-start" : "flex justify-end"}
              >
                <div className="max-w-[75%] space-y-1">
                  <div
                    className={
                      m.me
                        ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                        : "rounded-2xl bg-muted px-3 py-2 text-sm"
                    }
                  >
                    {m.text}
                  </div>
                  <p className="text-[10px] tracking-normal text-muted-foreground">
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="gap-2 border-t p-3">
            <Input placeholder="پیام بنویسید…" dir="rtl" className="flex-1" />
            <Button type="button" size="icon">
              <SendIcon className="size-4" />
              <span className="sr-only">ارسال</span>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </section>
  )
}
