"use client"

import * as React from "react"
import {
  FlagIcon,
  HeartIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-vega/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"
import { Textarea } from "@/registry/base-vega/ui/textarea"

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

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "بیشترین پسند", label: "بیشترین پسند" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function CommentsActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [sort, setSort] = React.useState("جدیدترین")
  const [query, setQuery] = React.useState("")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items
    .filter((c) => !query || `${c.name}${c.text}${c.email}`.includes(query))
    .slice()
    .sort((a, b) => {
      if (sort === "بیشترین پسند") return b.likes - a.likes
      return 0
    })

  function remove(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id))
    setOpenId(null)
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
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 border-b py-4 text-start">
          <div>
            <CardTitle>دیدگاه‌ها</CardTitle>
            <CardDescription>
              منوی عملیات راست‌چین برای هر دیدگاه
            </CardDescription>
          </div>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                />
              }
            >
              <MoreHorizontalIcon className="size-4" />
              عملیات
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 space-y-1 p-2"
            >
              <p className="px-2 py-1.5 text-sm font-medium">مدیریت</p>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                بستن دیدگاه‌ها
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                خروجی جدول
              </Button>
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-4 py-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در دیدگاه‌ها…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SORT_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
                        <p className="text-xs tracking-normal text-muted-foreground">
                          <span dir="ltr" className="inline-block text-start">
                            {c.email}
                          </span>
                          {" · "}
                          {c.time}
                        </p>
                      </div>
                      <Popover
                        open={openId === c.id}
                        onOpenChange={(open) => setOpenId(open ? c.id : null)}
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="shrink-0"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          عملیات
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
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
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            کپی لینک
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            <FlagIcon className="size-4" />
                            گزارش
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => remove(c.id)}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <p className="text-sm leading-relaxed">{c.text}</p>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => like(c.id)}
                    >
                      <HeartIcon className="size-3.5" />
                      <span className="tracking-normal">{toFa(c.likes)}</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-3 border-t py-4">
          <Textarea
            placeholder="دیدگاه خود را بنویسید…"
            dir="rtl"
            className="min-h-20 resize-none"
          />
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
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
