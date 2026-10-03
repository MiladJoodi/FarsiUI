"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"

const REPLIES = [
  {
    who: "سارا محمدی",
    text: "سلام، می‌خواستم وضعیت ارسال را بدونم.",
    time: "۰۹:۱۲",
    me: false,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    who: "شما",
    text: "سلام سارا، بسته امروز تحویل پست شده.",
    time: "۰۹:۱۵",
    me: true,
    initials: "م‌ن",
  },
  {
    who: "سارا محمدی",
    text: "عالی. رسید را به sara@example.com بفرستید.",
    time: "۰۹:۱۶",
    me: false,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
] as const

export function ConversationThread() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[540px] flex-col gap-0 overflow-hidden bg-card py-0">
        <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-3 space-y-0 border-b py-3">
          <div className="flex -space-x-2 space-x-reverse">
            <Avatar className="size-9 border-2 border-background">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="سارا"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <Avatar className="size-9 border-2 border-background">
              <AvatarFallback>پ‌ش</AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">پیگیری سفارش #۴۵۲۱</p>
            <p className="truncate text-xs tracking-normal text-muted-foreground">
              سارا محمدی · آنلاین
            </p>
          </div>
          <Badge variant="outline" className="shrink-0 border">
            باز
          </Badge>
        </CardHeader>
        <CardContent className="flex-1 space-y-4 overflow-auto py-4">
          {REPLIES.map((r, i) => (
            <div
              key={i}
              className={r.me ? "flex flex-row-reverse gap-2" : "flex gap-2"}
            >
              <Avatar className="size-8">
                {"avatar" in r && r.avatar ? (
                  <AvatarImage src={r.avatar} alt={r.who} />
                ) : null}
                <AvatarFallback>{r.initials}</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  {r.who}
                </p>
                <div
                  className={
                    r.me
                      ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "rounded-2xl bg-muted px-3 py-2 text-sm"
                  }
                >
                  {r.text.includes("@") ? (
                    <>
                      عالی. رسید را به{" "}
                      <span dir="ltr" className="inline-block text-start">
                        sara@example.com
                      </span>{" "}
                      بفرستید.
                    </>
                  ) : (
                    r.text
                  )}
                </div>
                <p className="text-[10px] tracking-normal text-muted-foreground">
                  {r.time}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex items-center gap-3 border-t px-4 py-3">
          <Input placeholder="پاسخ بنویسید…" dir="rtl" className="flex-1" />
          <Button type="button" className="shrink-0">
            ارسال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
