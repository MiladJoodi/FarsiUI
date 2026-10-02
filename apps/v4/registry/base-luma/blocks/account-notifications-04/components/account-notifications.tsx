"use client"

import * as React from "react"
import {
  BellIcon,
  CheckIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

type Notice = {
  id: string
  title: string
  body: string
  time: string
  unread: boolean
  category: string
}

const INITIAL: Notice[] = [
  {
    id: "1",
    title: "ورود جدید به حساب",
    body: "Chrome روی ویندوز · تهران",
    time: "۵ دقیقه پیش",
    unread: true,
    category: "امنیت",
  },
  {
    id: "2",
    title: "سفارش شما ارسال شد",
    body: "کد پیگیری: ۱۲۳۴۵۶",
    time: "۱ ساعت پیش",
    unread: true,
    category: "سفارش",
  },
  {
    id: "3",
    title: "خلاصهٔ هفتگی آماده است",
    body: "۳ به‌روزرسانی و ۲ نظر جدید",
    time: "دیروز",
    unread: false,
    category: "محصول",
  },
  {
    id: "4",
    title: "تخفیف ویژه اعضا",
    body: "تا ۲۰٪ روی طرح حرفه‌ای",
    time: "۲ روز پیش",
    unread: false,
    category: "بازاریابی",
  },
]

export function AccountNotificationsInbox() {
  const [items, setItems] = React.useState(INITIAL)
  const [filter, setFilter] = React.useState("all")
  const [query, setQuery] = React.useState("")

  const filtered = items.filter((item) => {
    if (filter === "unread" && !item.unread) return false
    if (filter !== "all" && filter !== "unread" && item.category !== filter) {
      return false
    }
    if (query && !`${item.title}${item.body}`.includes(query)) return false
    return true
  })

  function markRead(id: string) {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    )
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((n) => n.id !== id))
  }

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  const unreadCount = items.filter((n) => n.unread).length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>صندوق اعلان‌ها</CardTitle>
              {unreadCount > 0 ? (
                <Badge variant="secondary">
                  <bdi dir="ltr">{unreadCount}</bdi> خوانده‌نشده
                </Badge>
              ) : null}
            </div>
            <CardDescription>
              فیلتر راست‌چین؛ جستجو با متن فارسی
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={markAllRead}
            >
              <CheckIcon className="size-3.5" />
              همه خوانده
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={markAllRead}>
                  علامت‌گذاری همه به‌عنوان خوانده
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => setItems([])}
                >
                  پاک کردن همه
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو در اعلان‌ها…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              value={filter}
              onValueChange={(v) => setFilter((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
                <SelectItem value="امنیت">امنیت</SelectItem>
                <SelectItem value="سفارش">سفارش</SelectItem>
                <SelectItem value="محصول">محصول</SelectItem>
                <SelectItem value="بازاریابی">بازاریابی</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-12 text-center text-muted-foreground">
              <BellIcon className="size-8 opacity-50" />
              <p className="text-sm">اعلانی پیدا نشد</p>
            </div>
          ) : (
            <ul className="space-y-0 rounded-lg border">
              {filtered.map((item, i) => (
                <li key={item.id}>
                  {i > 0 && <Separator />}
                  <div
                    className={
                      item.unread ? "bg-muted/40 px-4 py-3" : "px-4 py-3"
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{item.title}</p>
                          <Badge variant="outline">{item.category}</Badge>
                          {item.unread ? (
                            <span className="size-1.5 rounded-full bg-primary" />
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.body}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.time}
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
                          <DropdownMenuItem onClick={() => markRead(item.id)}>
                            <CheckIcon className="size-4" />
                            علامت خوانده
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => remove(item.id)}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
