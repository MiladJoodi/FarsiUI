"use client"

import * as React from "react"
import {
  ArchiveIcon,
  CheckIcon,
  MoreHorizontalIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
    initials: "سم",
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
    initials: "عر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: true,
    starred: false,
    initials: "مک",
  },
  {
    id: "4",
    name: "پشتیبانی",
    email: "support@example.com",
    preview: "تیکت شما به‌روزرسانی شد",
    time: "هفتهٔ پیش",
    unread: false,
    starred: false,
    initials: "پش",
  },
]

export function MessageListActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("newest")

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
      if (sort === "unread") return Number(b.unread) - Number(a.unread)
      if (sort === "starred") return Number(b.starred) - Number(a.starred)
      return 0
    })

  function markRead(id: string) {
    setItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m))
    )
  }

  function toggleStar(id: string) {
    setItems((prev) =>
      prev.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m))
    )
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((m) => m.id !== id))
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
            <CardTitle>فهرست پیام‌ها</CardTitle>
            <CardDescription>عملیات ردیف با منوی راست‌چین</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات گروهی</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  setItems((prev) => prev.map((m) => ({ ...m, unread: false })))
                }
              >
                <CheckIcon className="size-4" />
                همه خوانده
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onClick={() => setItems([])}
              >
                <Trash2Icon className="size-4" />
                پاک کردن همه
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در پیام‌ها…"
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
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
                <SelectItem value="starred">ستاره‌دار</SelectItem>
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
                        <Badge variant="secondary" className="h-5">
                          جدید
                        </Badge>
                      ) : null}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      <bdi dir="ltr">{m.email}</bdi>
                    </p>
                    <p className="truncate text-sm text-muted-foreground">
                      {m.preview}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    <bdi dir="ltr">{m.time}</bdi>
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem onClick={() => markRead(m.id)}>
                        <CheckIcon className="size-4" />
                        علامت خوانده
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleStar(m.id)}>
                        <StarIcon className="size-4" />
                        {m.starred ? "حذف ستاره" : "ستاره‌دار"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ArchiveIcon className="size-4" />
                        بایگانی
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() => remove(m.id)}
                      >
                        <Trash2Icon className="size-4" />
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
