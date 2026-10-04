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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
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

type Msg = {
  id: string
  text: string
  me: boolean
  time: string
}

const INITIAL: Msg[] = [
  {
    id: "1",
    text: "سلام، فایل طرح را فرستادم.",
    me: false,
    time: "۰۹:۴۰",
  },
  {
    id: "2",
    text: "دیدم، روی نسخهٔ دوم کار می‌کنم.",
    me: true,
    time: "۰۹:۴۲",
  },
  {
    id: "3",
    text: "اگر سوالی بود به design@example.com بفرستید.",
    me: false,
    time: "۰۹:۴۵",
  },
]

const STATUS_ITEMS = [
  { value: "باز", label: "باز" },
  { value: "در انتظار", label: "در انتظار" },
  { value: "بسته", label: "بسته" },
] as const

export default function ChatActions() {
  const [messages, setMessages] = React.useState(INITIAL)
  const [draft, setDraft] = React.useState("")
  const [status, setStatus] = React.useState("باز")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function send() {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        text,
        me: true,
        time: "الان",
      },
    ])
    setDraft("")
  }

  function remove(id: string) {
    setMessages((prev) => prev.filter((m) => m.id !== id))
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[580px] flex-col overflow-hidden bg-card">
        <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-3 space-y-0 border-b py-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
              alt="علی رضایی"
            />
            <AvatarFallback>ع‌ر</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">علی رضایی</p>
            <p className="truncate text-xs tracking-normal text-muted-foreground">
              آنلاین ·{" "}
              <span dir="ltr" className="inline-block text-start">
                ali@example.com
              </span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <Select
              items={[...STATUS_ITEMS]}
              value={status}
              onValueChange={(value) => {
                if (STATUS_ITEMS.some((item) => item.value === value)) {
                  setStatus(value as string)
                }
              }}
            >
              <SelectTrigger className="w-28" dir="rtl" size="sm">
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
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={<Button type="button" variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-48 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">گفتگو</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setHeaderOpen(false)}
                >
                  <SearchIcon className="size-4" />
                  جستجو در پیام‌ها
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setHeaderOpen(false)}
                >
                  پین کردن گفتگو
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setHeaderOpen(false)}
                >
                  بستن گفتگو
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={m.me ? "flex justify-start" : "flex justify-end"}
            >
              <div className="group flex max-w-[80%] items-start gap-1">
                {m.me ? (
                  <Popover
                    open={openId === m.id}
                    onOpenChange={(open) =>
                      setOpenId(open ? m.id : null)
                    }
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          className="opacity-0 group-hover:opacity-100"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-3.5" />
                      <span className="sr-only">عملیات پیام</span>
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
                        onClick={() => setOpenId(null)}
                      >
                        کپی متن
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        پاسخ
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => remove(m.id)}
                      >
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
                ) : null}
                <div className="space-y-1">
                  <div
                    className={
                      m.me
                        ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                        : "rounded-2xl bg-muted px-3 py-2 text-sm"
                    }
                  >
                    {m.text.includes("@") ? (
                      <>
                        اگر سوالی بود به{" "}
                        <span dir="ltr" className="inline-block text-start">
                          design@example.com
                        </span>{" "}
                        بفرستید.
                      </>
                    ) : (
                      m.text
                    )}
                  </div>
                  <p className="text-[10px] tracking-normal text-muted-foreground">
                    {m.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex-col gap-2 border-t p-3">
          <div className="flex w-full gap-2">
            <Button type="button" variant="outline" size="icon">
              <PaperclipIcon className="size-4" />
              <span className="sr-only">پیوست</span>
            </Button>
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  send()
                }
              }}
              placeholder="پیام بنویسید…"
              dir="rtl"
              className="flex-1"
            />
            <Button type="button" onClick={send}>
              <SendIcon className="size-4" />
              ارسال
            </Button>
          </div>
          <p className="w-full text-xs text-muted-foreground">
            وضعیت:{" "}
            <Badge variant="outline" className="align-middle border">
              {status}
            </Badge>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
