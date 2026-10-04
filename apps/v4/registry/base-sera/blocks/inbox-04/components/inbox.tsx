"use client"

import * as React from "react"
import {
  ArchiveIcon,
  CheckIcon,
  MoreHorizontalIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-sera/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"

type Msg = {
  id: string
  name: string
  email: string
  preview: string
  time: string
  unread: boolean
  starred: boolean
  initials: string
  avatar?: string
}

const INITIAL: Msg[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "سلام، وضعیت سفارش چطوره؟",
    time: "۱۰:۲۴",
    unread: true,
    starred: false,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    preview: "فاکتور را فرستادم",
    time: "دیروز",
    unread: false,
    starred: true,
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: true,
    starred: false,
    initials: "م‌ک",
  },
  {
    id: "4",
    name: "پشتیبانی",
    email: "support@example.com",
    preview: "تیکت شما به‌روزرسانی شد",
    time: "هفتهٔ پیش",
    unread: false,
    starred: false,
    initials: "پ‌ش",
  },
]

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "ستاره‌دار", label: "ستاره‌دار" },
] as const

export default function InboxActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("جدیدترین")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items
    .filter(
      (m) =>
        !query ||
        `${m.name}${m.email}${m.preview}`
          .toLowerCase()
          .includes(query.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      if (sort === "خوانده‌نشده") return Number(b.unread) - Number(a.unread)
      if (sort === "ستاره‌دار") return Number(b.starred) - Number(a.starred)
      return 0
    })

  function markRead(id: string) {
    setItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m))
    )
    setOpenId(null)
  }

  function toggleStar(id: string) {
    setItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m))
    )
    setOpenId(null)
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((m) => m.id !== id))
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>صندوق پیام‌ها</CardTitle>
            <CardDescription>عملیات ردیف با منوی راست‌چین</CardDescription>
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
              className="w-48 space-y-1 p-2"
            >
              <p className="px-2 py-1.5 text-sm font-medium">عملیات گروهی</p>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => {
                  setItems((prev) => prev.map((m) => ({ ...m, unread: false })))
                  setHeaderOpen(false)
                }}
              >
                <CheckIcon className="size-4" />
                همه خوانده
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start text-destructive hover:text-destructive"
                onClick={() => {
                  setItems([])
                  setHeaderOpen(false)
                }}
              >
                <Trash2Icon className="size-4" />
                پاک کردن همه
              </Button>
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در صندوق…"
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

          <div className="overflow-hidden rounded-lg border">
            {rows.map((m, i) => (
              <div key={m.id}>
                {i > 0 && <Separator />}
                <div
                  className={
                    m.unread
                      ? "flex items-center gap-3 bg-muted/40 px-4 py-3"
                      : "flex items-center gap-3 px-4 py-3"
                  }
                >
                  <Avatar className="size-9">
                    {m.avatar ? (
                      <AvatarImage src={m.avatar} alt={m.name} />
                    ) : null}
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium">{m.name}</p>
                      {m.starred ? (
                        <StarIcon className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
                      ) : null}
                      {m.unread ? (
                        <Badge variant="outline" className="h-5 border">
                          جدید
                        </Badge>
                      ) : null}
                    </div>
                    <p className="truncate text-xs tracking-normal text-muted-foreground">
                      <span dir="ltr" className="inline-block text-start">
                        {m.email}
                      </span>
                    </p>
                    <p className="truncate text-sm text-muted-foreground">
                      {m.preview}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                    {m.time}
                  </span>
                  <Popover
                    open={openId === m.id}
                    onOpenChange={(open) => setOpenId(open ? m.id : null)}
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
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => markRead(m.id)}
                      >
                        <CheckIcon className="size-4" />
                        علامت خوانده
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => toggleStar(m.id)}
                      >
                        <StarIcon className="size-4" />
                        {m.starred ? "حذف ستاره" : "ستاره‌دار"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        <ArchiveIcon className="size-4" />
                        بایگانی
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => remove(m.id)}
                      >
                        <Trash2Icon className="size-4" />
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
