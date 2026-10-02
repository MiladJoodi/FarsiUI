"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-nova/ui/dropdown-menu"
import { Input } from "@/registry/base-nova/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"

const ITEMS = [
  {
    id: "1",
    actor: "سارا محمدی",
    title: "کامنت روی «جدول داده‌ها»",
    email: "sara@example.com",
    channel: "محصول",
    time: "۵ دقیقه پیش",
    unread: true,
    initials: "سم",
  },
  {
    id: "2",
    actor: "علی رضایی",
    title: "طراحی صفحهٔ ورود را آپلود کرد",
    email: "ali@example.com",
    channel: "طراحی",
    time: "۴۵ دقیقه پیش",
    unread: true,
    initials: "عر",
  },
  {
    id: "3",
    actor: "سیستم",
    title: "هشدار امنیتی: ورود از IP جدید",
    email: "security@farsiui.dev",
    channel: "امنیت",
    time: "۲ ساعت پیش",
    unread: false,
    initials: "س",
  },
  {
    id: "4",
    actor: "مینا کریمی",
    title: "تیکت #۴۲۱ را بست",
    email: "mina@example.com",
    channel: "پشتیبانی",
    time: "دیروز",
    unread: false,
    initials: "مک",
  },
  {
    id: "5",
    actor: "رضا نوری",
    title: "فاکتور ماهانه را پرداخت کرد",
    email: "reza@example.com",
    channel: "مالی",
    time: "۲ روز پیش",
    unread: false,
    initials: "رن",
  },
  {
    id: "6",
    actor: "نگار احمدی",
    title: "عضو جدید تیم مهندسی شد",
    email: "negar@example.com",
    channel: "تیم",
    time: "۳ روز پیش",
    unread: true,
    initials: "نا",
  },
] as const

type SortKey = "newest" | "unread" | "actor"

const SORT_LABELS: Record<SortKey, string> = {
  newest: "جدیدترین",
  unread: "خوانده‌نشده اول",
  actor: "نام بازیگر",
}

export function ActivityHub() {
  const [query, setQuery] = React.useState("")
  const [channel, setChannel] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("newest")
  const [readIds, setReadIds] = React.useState<string[]>([])
  const [hiddenIds, setHiddenIds] = React.useState<string[]>([])

  const filtered = React.useMemo(() => {
    let list = ITEMS.filter((item) => {
      if (hiddenIds.includes(item.id)) return false
      const matchChannel = channel === "all" || item.channel === channel
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        item.title.includes(query) ||
        item.actor.includes(query) ||
        item.email.toLowerCase().includes(q) ||
        item.channel.includes(query)
      return matchChannel && matchQuery
    })

    list = [...list].sort((a, b) => {
      if (sort === "unread") {
        const aUnread = a.unread && !readIds.includes(a.id) ? 1 : 0
        const bUnread = b.unread && !readIds.includes(b.id) ? 1 : 0
        return bUnread - aUnread
      }
      if (sort === "actor") {
        return a.actor.localeCompare(b.actor, "fa")
      }
      return 0
    })
    return list
  }, [query, channel, sort, readIds, hiddenIds])

  const unreadCount = filtered.filter(
    (item) => item.unread && !readIds.includes(item.id)
  ).length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Badge variant="secondary" className="mb-3">
              مرکز فعالیت
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">تمام رویدادها</h2>
            <p className="mt-2 text-muted-foreground">
              جستجو، فیلتر کانال، مرتب‌سازی و منوی عملیات
            </p>
          </div>
          {unreadCount > 0 && (
            <Badge>
              <bdi dir="ltr">{unreadCount}</bdi> خوانده‌نشده
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام، عنوان یا ایمیل…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            value={channel}
            onValueChange={(value) => setChannel((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="کانال" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه کانال‌ها</SelectItem>
              <SelectItem value="محصول">محصول</SelectItem>
              <SelectItem value="طراحی">طراحی</SelectItem>
              <SelectItem value="امنیت">امنیت</SelectItem>
              <SelectItem value="پشتیبانی">پشتیبانی</SelectItem>
              <SelectItem value="مالی">مالی</SelectItem>
              <SelectItem value="تیم">تیم</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "newest")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="px-0"
            onClick={() =>
              setReadIds((prev) =>
                Array.from(
                  new Set([
                    ...prev,
                    ...filtered.filter((i) => i.unread).map((i) => i.id),
                  ])
                )
              )
            }
          >
            همه را خوانده‌شده کن
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          رویدادی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="divide-y rounded-xl border">
          {filtered.map((item) => {
            const isUnread = item.unread && !readIds.includes(item.id)
            return (
              <div key={item.id} className="flex items-start gap-3 p-4">
                <Avatar className="size-9">
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p
                      className={`text-sm ${isUnread ? "font-semibold" : "font-medium"}`}
                    >
                      {item.actor}
                    </p>
                    <Badge variant="outline">{item.channel}</Badge>
                    {isUnread && <Badge>جدید</Badge>}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.title}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span dir="ltr" className="inline-block text-start">
                      {item.email}
                    </span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 shrink-0"
                      />
                    }
                  >
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">منوی عملیات</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    dir="rtl"
                    lang="fa"
                    align="end"
                    className="w-44"
                  >
                    <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        setReadIds((prev) =>
                          prev.includes(item.id) ? prev : [...prev, item.id]
                        )
                      }
                    >
                      علامت خوانده‌شده
                    </DropdownMenuItem>
                    <DropdownMenuItem>مشاهده جزئیات</DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() => setHiddenIds((prev) => [...prev, item.id])}
                    >
                      حذف از فید
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )
          })}
        </div>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">خلاصه روزانه با ایمیل</CardTitle>
          <CardDescription>
            نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام دریافت‌کننده"
              dir="rtl"
              className="sm:flex-1"
            />
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-start sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              فعال‌سازی
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
