"use client"

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

const MESSAGES = [
  {
    who: "سارا محمدی",
    text: "سلام، وضعیت تیکت پشتیبانی چطوره؟",
    time: "۱۰:۲۴",
    me: false,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    initials: "سم",
  },
  {
    who: "شما",
    text: "سلام سارا! در صف بررسی است و امروز پاسخ می‌دهیم.",
    time: "۱۰:۲۶",
    me: true,
    initials: "من",
  },
  {
    who: "سارا محمدی",
    text: "ممنون. ایمیل من sara@example.com است.",
    time: "۱۰:۲۷",
    me: false,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    initials: "سم",
  },
] as const

export function ChatThread() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[520px] flex-col overflow-hidden">
        <CardHeader className="flex-row items-center gap-3 space-y-0 border-b py-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
              alt="سارا محمدی"
            />
            <AvatarFallback>سم</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">سارا محمدی</p>
            <p className="text-xs text-muted-foreground">
              <bdi dir="ltr">sara@example.com</bdi>
            </p>
          </div>
          <Badge variant="secondary">آنلاین</Badge>
        </CardHeader>
        <CardContent className="flex-1 space-y-4 overflow-auto py-4">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={m.me ? "flex flex-row-reverse gap-2" : "flex gap-2"}
            >
              <Avatar className="size-8">
                {"avatar" in m && m.avatar ? (
                  <AvatarImage src={m.avatar} alt={m.who} />
                ) : null}
                <AvatarFallback>{m.initials}</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] space-y-1">
                <div
                  className={
                    m.me
                      ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "rounded-2xl bg-muted px-3 py-2 text-sm"
                  }
                >
                  {m.text.includes("@") ? (
                    <>
                      ممنون. ایمیل من{" "}
                      <bdi dir="ltr">sara@example.com</bdi> است.
                    </>
                  ) : (
                    m.text
                  )}
                </div>
                <p
                  className={
                    m.me
                      ? "text-start text-[10px] text-muted-foreground"
                      : "text-end text-[10px] text-muted-foreground"
                  }
                >
                  <bdi dir="ltr" className="tabular-nums">
                    {m.time}
                  </bdi>
                </p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="gap-2 border-t p-3">
          <Input placeholder="پیام بنویسید…" dir="rtl" className="flex-1" />
          <Button type="button">ارسال</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
