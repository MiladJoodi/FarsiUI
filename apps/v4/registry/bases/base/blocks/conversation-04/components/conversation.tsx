"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  PaperclipIcon,
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

type Reply = {
  id: string
  who: string
  text: string
  time: string
  me: boolean
  internal?: boolean
}

const INITIAL: Reply[] = [
  {
    id: "1",
    who: "سارا محمدی",
    text: "فاکتور اشتباه صادر شده.",
    time: "۱۱:۰۲",
    me: false,
  },
  {
    id: "2",
    who: "شما",
    text: "در حال بررسی هستم؛ شماره فاکتور را بفرستید.",
    time: "۱۱:۰۵",
    me: true,
  },
  {
    id: "3",
    who: "شما",
    text: "یادداشت داخلی: احتمالاً تخفیف اعمال نشده.",
    time: "۱۱:۰۶",
    me: true,
    internal: true,
  },
  {
    id: "4",
    who: "سارا محمدی",
    text: "شماره: INV-1404-07-12 — ایمیل billing@example.com",
    time: "۱۱:۰۸",
    me: false,
  },
]

export function ConversationActions() {
  const [replies, setReplies] = React.useState(INITIAL)
  const [draft, setDraft] = React.useState("")
  const [priority, setPriority] = React.useState("normal")

  function send() {
    const text = draft.trim()
    if (!text) return
    setReplies((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        who: "شما",
        text,
        time: "الان",
        me: true,
      },
    ])
    setDraft("")
  }

  function remove(id: string) {
    setReplies((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[600px] flex-col overflow-hidden">
        <CardHeader className="flex-row items-center gap-3 space-y-0 border-b py-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">
              مکالمه · اصلاح فاکتور
            </p>
            <p className="text-xs text-muted-foreground">
              <bdi dir="ltr">sara@example.com</bdi>
            </p>
          </div>
          <Select
            value={priority}
            onValueChange={(v) => setPriority((v as string) ?? "normal")}
          >
            <SelectTrigger className="w-28" dir="rtl">
              <SelectValue placeholder="اولویت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="low">کم</SelectItem>
              <SelectItem value="normal">عادی</SelectItem>
              <SelectItem value="high">بالا</SelectItem>
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
              <DropdownMenuLabel>مکالمه</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>اختصاص به همکار</DropdownMenuItem>
              <DropdownMenuItem>ادغام با تیکت دیگر</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                بستن مکالمه
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>

        <CardContent className="flex-1 space-y-4 overflow-auto py-4">
          {replies.map((r) => (
            <div
              key={r.id}
              className={r.me ? "flex flex-row-reverse gap-2" : "flex gap-2"}
            >
              <Avatar className="size-8">
                {!r.me ? (
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                    alt={r.who}
                  />
                ) : null}
                <AvatarFallback>{r.me ? "من" : "سم"}</AvatarFallback>
              </Avatar>
              <div className="group max-w-[75%] space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-muted-foreground">
                    {r.who}
                  </p>
                  {r.internal ? (
                    <Badge variant="outline" className="h-5 text-[10px]">
                      داخلی
                    </Badge>
                  ) : null}
                </div>
                <div className="flex items-start gap-1">
                  {r.me ? (
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
                        <span className="sr-only">عملیات</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent dir="rtl" lang="fa" align="start">
                        <DropdownMenuItem>کپی</DropdownMenuItem>
                        <DropdownMenuItem>ویرایش</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => remove(r.id)}
                        >
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : null}
                  <div
                    className={
                      r.internal
                        ? "rounded-2xl border border-dashed bg-muted/50 px-3 py-2 text-sm"
                        : r.me
                          ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                          : "rounded-2xl bg-muted px-3 py-2 text-sm"
                    }
                  >
                    {r.text.includes("@") ? (
                      <>
                        شماره: <bdi dir="ltr">INV-1404-07-12</bdi> — ایمیل{" "}
                        <bdi dir="ltr">billing@example.com</bdi>
                      </>
                    ) : (
                      r.text
                    )}
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  <bdi dir="ltr" className="tabular-nums">
                    {r.time}
                  </bdi>
                </p>
              </div>
            </div>
          ))}
        </CardContent>

        <CardFooter className="gap-2 border-t p-3">
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
            placeholder="پاسخ بنویسید…"
            dir="rtl"
            className="flex-1"
          />
          <Button type="button" onClick={send}>
            <SendIcon className="size-4" />
            ارسال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
