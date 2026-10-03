"use client"

import * as React from "react"
import {
  BellIcon,
  CheckIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"

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

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "امنیت", label: "امنیت" },
  { value: "سفارش", label: "سفارش" },
  { value: "محصول", label: "محصول" },
  { value: "بازاریابی", label: "بازاریابی" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function AccountNotificationsInbox() {
  const [items, setItems] = React.useState(INITIAL)
  const [filter, setFilter] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filtered = items.filter((item) => {
    if (filter === "خوانده‌نشده" && !item.unread) return false
    if (
      filter !== "همه" &&
      filter !== "خوانده‌نشده" &&
      item.category !== filter
    ) {
      return false
    }
    if (query && !`${item.title}${item.body}`.includes(query)) return false
    return true
  })

  function markRead(id: string) {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    )
    setOpenId(null)
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((n) => n.id !== id))
    setOpenId(null)
  }

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
    setHeaderOpen(false)
  }

  const unreadCount = items.filter((n) => n.unread).length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>صندوق اعلان‌ها</CardTitle>
              {unreadCount > 0 ? (
                <Badge variant="outline" className="border tracking-normal">
                  {toFa(unreadCount)} خوانده‌نشده
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
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={
                  <Button type="button" variant="outline" size="icon-sm" />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-56 space-y-1 p-2"
              >
                <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-full justify-start"
                  onClick={markAllRead}
                >
                  علامت‌گذاری همه به‌عنوان خوانده
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
                  پاک کردن همه
                </Button>
              </PopoverContent>
            </Popover>
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
              items={[...FILTER_ITEMS]}
              value={filter}
              onValueChange={(value) => {
                if (FILTER_ITEMS.some((item) => item.value === value)) {
                  setFilter(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FILTER_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
                          <Badge variant="outline" className="border">
                            {item.category}
                          </Badge>
                          {item.unread ? (
                            <span className="size-1.5 rounded-full bg-primary" />
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.body}
                        </p>
                        <p className="mt-1 text-xs tracking-normal text-muted-foreground">
                          {item.time}
                        </p>
                      </div>
                      <Popover
                        open={openId === item.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? item.id : null)
                        }
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
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
                            onClick={() => markRead(item.id)}
                          >
                            <CheckIcon className="size-4" />
                            علامت خوانده
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => remove(item.id)}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
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
