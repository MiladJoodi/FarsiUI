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

export function ChatActions() {
  const [messages, setMessages] = React.useState(INITIAL)
  const [draft, setDraft] = React.useState("")
  const [status, setStatus] = React.useState("open")

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
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[580px] flex-col overflow-hidden">
        <CardHeader className="flex-row items-center gap-3 space-y-0 border-b py-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
              alt="علی رضایی"
            />
            <AvatarFallback>عر</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">علی رضایی</p>
            <p className="text-xs text-muted-foreground">
              <bdi dir="ltr">ali@example.com</bdi>
            </p>
          </div>
          <Select
            value={status}
            onValueChange={(v) => setStatus((v as string) ?? "open")}
          >
            <SelectTrigger className="w-28" dir="rtl" size="sm">
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="open">باز</SelectItem>
              <SelectItem value="pending">در انتظار</SelectItem>
              <SelectItem value="closed">بسته</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>گفتگو</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SearchIcon className="size-4" />
                جستجو در پیام‌ها
              </DropdownMenuItem>
              <DropdownMenuItem>پین کردن گفتگو</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                بستن گفتگو
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>

        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={m.me ? "flex justify-start" : "flex justify-end"}
            >
              <div className="group flex max-w-[80%] items-start gap-1">
                {m.me ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="opacity-0 group-hover:opacity-100"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-3.5" />
                      <span className="sr-only">عملیات پیام</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>کپی متن</DropdownMenuItem>
                      <DropdownMenuItem>پاسخ</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() => remove(m.id)}
                      >
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                        <bdi dir="ltr">design@example.com</bdi> بفرستید.
                      </>
                    ) : (
                      m.text
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    <bdi dir="ltr" className="tabular-nums">
                      {m.time}
                    </bdi>
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
            <Badge variant="outline" className="align-middle">
              {status === "open"
                ? "باز"
                : status === "pending"
                  ? "در انتظار"
                  : "بسته"}
            </Badge>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
