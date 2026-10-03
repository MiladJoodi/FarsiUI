"use client"

import * as React from "react"
import { MoreHorizontalIcon, PaperclipIcon, SendIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-nova/ui/card"
import { Input } from "@/registry/base-nova/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"

type Reply = {
  id: string
  who: string
  text: string
  time: string
  me: boolean
  internal?: boolean
  invoice?: boolean
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
    text: "شماره: فاکتور-۱۴۰۵-۰۷-۱۲ — ایمیل صورتحساب sara@example.com",
    time: "۱۱:۰۸",
    me: false,
    invoice: true,
  },
]

const PRIORITY_ITEMS = [
  { value: "کم", label: "کم" },
  { value: "عادی", label: "عادی" },
  { value: "بالا", label: "بالا" },
] as const

export function ConversationActions() {
  const [replies, setReplies] = React.useState(INITIAL)
  const [draft, setDraft] = React.useState("")
  const [priority, setPriority] = React.useState("عادی")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

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
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[600px] flex-col gap-0 overflow-hidden bg-card py-0">
        <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-3 space-y-0 border-b py-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
              alt="سارا محمدی"
            />
            <AvatarFallback>س‌م</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">سارا محمدی</p>
            <p className="truncate text-xs tracking-normal text-muted-foreground">
              اصلاح فاکتور ·{" "}
              <span dir="ltr" className="inline-block text-start">
                sara@example.com
              </span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <Select
              items={[...PRIORITY_ITEMS]}
              value={priority}
              onValueChange={(value) => {
                if (PRIORITY_ITEMS.some((item) => item.value === value)) {
                  setPriority(value as string)
                }
              }}
            >
              <SelectTrigger className="w-28" dir="rtl" size="sm">
                <SelectValue placeholder="اولویت" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {PRIORITY_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={
                  <Button type="button" variant="outline" size="icon-sm" />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">عملیات مکالمه</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-48 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setHeaderOpen(false)}
                >
                  اختصاص به همکار
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={() => setHeaderOpen(false)}
                >
                  ادغام با تیکت دیگر
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start text-destructive hover:text-destructive"
                  onClick={() => setHeaderOpen(false)}
                >
                  بستن مکالمه
                </Button>
              </PopoverContent>
            </Popover>
          </div>
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
                <AvatarFallback>{r.me ? "من" : "س‌م"}</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-muted-foreground">
                    {r.who}
                  </p>
                  {r.internal ? (
                    <Badge variant="outline" className="h-5 border text-[10px]">
                      داخلی
                    </Badge>
                  ) : null}
                </div>
                <div
                  className={
                    r.internal
                      ? "rounded-2xl border border-dashed bg-muted/50 px-3 py-2 text-sm tracking-normal"
                      : r.me
                        ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                        : "rounded-2xl bg-muted px-3 py-2 text-sm tracking-normal"
                  }
                >
                  {r.invoice ? (
                    <>
                      شماره: فاکتور-۱۴۰۵-۰۷-۱۲ — ایمیل صورتحساب{" "}
                      <span dir="ltr" className="inline-block text-start">
                        sara@example.com
                      </span>
                    </>
                  ) : (
                    r.text
                  )}
                </div>
                <p className="text-[10px] tracking-normal text-muted-foreground">
                  {r.time}
                </p>
              </div>
              {r.me ? (
                <Popover
                  open={openId === r.id}
                  onOpenChange={(open) => setOpenId(open ? r.id : null)}
                >
                  <PopoverTrigger
                    render={
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="shrink-0 self-center text-muted-foreground"
                      />
                    }
                  >
                    <MoreHorizontalIcon className="size-3.5" />
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
                      onClick={() => setOpenId(null)}
                    >
                      کپی
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-8 w-full justify-start"
                      onClick={() => setOpenId(null)}
                    >
                      ویرایش
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-8 w-full justify-start text-destructive hover:text-destructive"
                      onClick={() => remove(r.id)}
                    >
                      حذف
                    </Button>
                  </PopoverContent>
                </Popover>
              ) : null}
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex items-center gap-3 border-t px-4 py-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="shrink-0"
          >
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
          <Button type="button" onClick={send} className="shrink-0">
            <SendIcon className="size-4" />
            ارسال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
