"use client"

import * as React from "react"
import {
  FlagIcon,
  HeartIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"

type Comment = {
  id: string
  name: string
  email: string
  text: string
  time: string
  likes: number
  initials: string
  avatar?: string
}

const INITIAL: Comment[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    text: "طراحی خیلی تمیزه؛ برای داشبورد فارسی عالیه.",
    time: "۱ ساعت پیش",
    likes: 8,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    text: "کاش نمونهٔ فرم چندمرحله‌ای هم اضافه شود.",
    time: "۵ ساعت پیش",
    likes: 3,
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    text: "مستندات نصب رو خوندم؛ واضح بود.",
    time: "دیروز",
    likes: 5,
    initials: "م‌ک",
  },
]

export function CommentsActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [sort, setSort] = React.useState("newest")
  const [query, setQuery] = React.useState("")

  const rows = items
    .filter(
      (c) =>
        !query ||
        `${c.name}${c.text}${c.email}`.includes(query)
    )
    .slice()
    .sort((a, b) => {
      if (sort === "likes") return b.likes - a.likes
      return 0
    })

  function remove(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id))
  }

  function like(id: string) {
    setItems((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>دیدگاه‌ها</CardTitle>
            <CardDescription>منوی عملیات راست‌چین برای هر دیدگاه</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>مدیریت</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>بستن دیدگاه‌ها</DropdownMenuItem>
              <DropdownMenuItem>خروجی CSV</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در دیدگاه‌ها…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "newest")}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="likes">بیشترین پسند</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0 rounded-lg border">
            {rows.map((c, i) => (
              <div key={c.id}>
                {i > 0 && <Separator />}
                <div className="flex gap-3 px-4 py-3">
                  <Avatar className="size-9">
                    {c.avatar ? (
                      <AvatarImage src={c.avatar} alt={c.name} />
                    ) : null}
                    <AvatarFallback>{c.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{c.name}</p>
                        <p className="text-xs text-muted-foreground">
                          <bdi dir="ltr">{c.email}</bdi> · {c.time}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuItem>پاسخ</DropdownMenuItem>
                          <DropdownMenuItem>کپی لینک</DropdownMenuItem>
                          <DropdownMenuItem>
                            <FlagIcon className="size-4" />
                            گزارش
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => remove(c.id)}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <p className="text-sm leading-relaxed">{c.text}</p>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => like(c.id)}
                    >
                      <HeartIcon className="size-3.5" />
                      <bdi dir="ltr">{c.likes}</bdi>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 border-t">
          <Textarea
            placeholder="دیدگاه خود را بنویسید…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <Input
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="max-w-xs text-start"
              aria-label="ایمیل (اختیاری)"
            />
            <Button type="button">ارسال</Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
