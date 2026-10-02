"use client"

import * as React from "react"
import {
  BellIcon,
  CheckIcon,
  MoreHorizontalIcon,
  PackageIcon,
  ShieldIcon,
  SparklesIcon,
  Trash2Icon,
} from "lucide-react"

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

type Notice = {
  id: string
  title: string
  body: string
  time: string
  type: string
  unread: boolean
  icon: typeof BellIcon
}

const INITIAL: Notice[] = [
  {
    id: "1",
    title: "سفارش ارسال شد",
    body: "کد پیگیری: ۱۲۳۴۵۶",
    time: "۵ دقیقه پیش",
    type: "order",
    unread: true,
    icon: PackageIcon,
  },
  {
    id: "2",
    title: "ورود جدید",
    body: "Chrome · تهران",
    time: "۱ ساعت پیش",
    type: "security",
    unread: true,
    icon: ShieldIcon,
  },
  {
    id: "3",
    title: "قابلیت جدید",
    body: "کامپوننت Calendar RTL منتشر شد",
    time: "دیروز",
    type: "product",
    unread: false,
    icon: SparklesIcon,
  },
  {
    id: "4",
    title: "تخفیف ویژه",
    body: "تا ۲۰٪ روی طرح حرفه‌ای",
    time: "۲ روز پیش",
    type: "marketing",
    unread: false,
    icon: BellIcon,
  },
]

export function NotificationsActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState("all")

  const rows = items.filter((item) => {
    if (filter === "unread" && !item.unread) return false
    if (filter !== "all" && filter !== "unread" && item.type !== filter) {
      return false
    }
    if (query && !`${item.title}${item.body}`.includes(query)) return false
    return true
  })

  const unread = items.filter((i) => i.unread).length

  function markRead(id: string) {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    )
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((n) => n.id !== id))
  }

  function markAll() {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
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
            <CardTitle className="flex items-center gap-2">
              اعلان‌ها
              {unread > 0 ? (
                <Badge variant="secondary">
                  <bdi dir="ltr">{unread}</bdi>
                </Badge>
              ) : null}
            </CardTitle>
            <CardDescription>عملیات ردیف با منوی راست‌چین</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={markAll}>
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
                <DropdownMenuItem onClick={markAll}>
                  علامت‌گذاری همه
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
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="unread">خوانده‌نشده</SelectItem>
                <SelectItem value="order">سفارش</SelectItem>
                <SelectItem value="security">امنیت</SelectItem>
                <SelectItem value="product">محصول</SelectItem>
                <SelectItem value="marketing">بازاریابی</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.id}>
                  {i > 0 && <Separator />}
                  <div
                    className={
                      item.unread
                        ? "flex items-start gap-3 bg-muted/40 px-4 py-3"
                        : "flex items-start gap-3 px-4 py-3"
                    }
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium">{item.title}</p>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.body}
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
                        <DropdownMenuItem>مشاهده جزئیات</DropdownMenuItem>
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
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
