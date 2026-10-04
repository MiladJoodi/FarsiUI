"use client"

import { HeartIcon, MessageCircleIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Textarea } from "@/registry/base-rhea/ui/textarea"

const THREAD = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    text: "این کامپوننت برای پروژه‌های راست‌چین عالیه.",
    time: "۳ ساعت پیش",
    likes: 12,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    replies: [
      {
        id: "1a",
        name: "علی رضایی",
        text: "موافقم، مخصوصاً آکوردئون.",
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
    likes: 4,
    initials: "م‌ک",
    replies: [],
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function CommentsThread() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <div className="flex items-center gap-2">
            <CardTitle>دیدگاه‌ها</CardTitle>
            <Badge variant="outline" className="border tracking-normal">
              {toFa(3)}
            </Badge>
          </div>
          <CardDescription>پرسش و پاسخ زیر مقاله</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0 py-4">
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
                      <span className="text-xs tracking-normal text-muted-foreground">
                        {c.time}
                      </span>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      <span dir="ltr" className="inline-block text-start">
                        {c.email}
                      </span>
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed">{c.text}</p>
                  <div className="flex gap-2">
                    <Button type="button" variant="ghost" size="sm">
                      <HeartIcon className="size-3.5" />
                      <span className="tracking-normal">{toFa(c.likes)}</span>
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
                              <span className="text-xs tracking-normal text-muted-foreground">
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
        <CardFooter className="flex-col gap-3 border-t py-4">
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
