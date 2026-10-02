"use client"

import { HeartIcon, MessageCircleIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const THREAD = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    text: "این کامپوننت برای پروژه‌های RTL عالیه.",
    time: "۳ ساعت پیش",
    likes: "۱۲",
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    replies: [
      {
        id: "1a",
        name: "علی رضایی",
        text: "موافقم، مخصوصاً Accordion.",
        time: "۲ ساعت پیش",
        initials: "ع‌ر",
      },
    ],
  },
  {
    id: "2",
    name: "مینا کریمی",
    email: "mina@example.com",
    text: "آیا راهنمای نصب فارسی هم دارید؟",
    time: "دیروز",
    likes: "۴",
    initials: "م‌ک",
    replies: [],
  },
] as const

export function CommentsThread() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="flex items-center gap-2">
            <CardTitle>دیدگاه‌ها</CardTitle>
            <Badge variant="secondary">
              <bdi dir="ltr">۳</bdi>
            </Badge>
          </div>
          <CardDescription>پرسش و پاسخ زیر مقاله</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          {THREAD.map((c, i) => (
            <div key={c.id}>
              {i > 0 && <Separator className="my-4" />}
              <div className="flex gap-3">
                <Avatar className="size-10">
                  {"avatar" in c && c.avatar ? (
                    <AvatarImage src={c.avatar} alt={c.name} />
                  ) : null}
                  <AvatarFallback>{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1 space-y-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{c.name}</p>
                      <span className="text-xs text-muted-foreground">
                        {c.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{c.email}</bdi>
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">{c.text}</p>
                  <div className="flex gap-2">
                    <Button type="button" variant="ghost" size="sm">
                      <HeartIcon className="size-3.5" />
                      <bdi dir="ltr">{c.likes}</bdi>
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <MessageCircleIcon className="size-3.5" />
                      پاسخ
                    </Button>
                  </div>
                  {c.replies.length > 0 ? (
                    <div className="ms-2 space-y-3 border-s ps-4">
                      {c.replies.map((r) => (
                        <div key={r.id} className="flex gap-2">
                          <Avatar className="size-8">
                            <AvatarFallback>{r.initials}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-medium">{r.name}</p>
                              <span className="text-xs text-muted-foreground">
                                {r.time}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {r.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex-col gap-2 border-t">
          <Textarea
            placeholder="دیدگاه یا پاسخ بنویسید…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <Button type="button" className="w-full sm:w-auto sm:self-end">
            ارسال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
