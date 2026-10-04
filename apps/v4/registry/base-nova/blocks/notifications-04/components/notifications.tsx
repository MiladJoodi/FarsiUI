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

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Input } from "@/registry/base-nova/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"

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
    type: "سفارش",
    unread: true,
    icon: PackageIcon,
  },
  {
    id: "2",
    title: "ورود جدید",
    body: "مرورگر کروم · تهران",
    time: "۱ ساعت پیش",
    type: "امنیت",
    unread: true,
    icon: ShieldIcon,
  },
  {
    id: "3",
    title: "قابلیت جدید",
    body: "کامپوننت تقویم راست‌چین منتشر شد",
    time: "دیروز",
    type: "محصول",
    unread: false,
    icon: SparklesIcon,
  },
  {
    id: "4",
    title: "تخفیف ویژه",
    body: "تا ۲۰٪ روی طرح حرفه‌ای",
    time: "۲ روز پیش",
    type: "بازاریابی",
    unread: false,
    icon: BellIcon,
  },
]

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "سفارش", label: "سفارش" },
  { value: "امنیت", label: "امنیت" },
  { value: "محصول", label: "محصول" },
  { value: "بازاریابی", label: "بازاریابی" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function NotificationsActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState("همه")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items.filter((item) => {
    if (filter === "خوانده‌نشده" && !item.unread) return false
    if (filter !== "همه" && filter !== "خوانده‌نشده" && item.type !== filter) {
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
    setOpenId(null)
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((n) => n.id !== id))
    setOpenId(null)
  }

  function markAll() {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
    setHeaderOpen(false)
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
            <CardTitle className="flex items-center gap-2">
              اعلان‌ها
              {unread > 0 ? (
                <Badge variant="outline" className="border tracking-normal">
                  {toFa(unread)}
                </Badge>
              ) : null}
            </CardTitle>
            <CardDescription>عملیات ردیف با منوی راست‌چین</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" size="sm" variant="outline" onClick={markAll}>
              <CheckIcon className="size-3.5" />
              همه خوانده
            </Button>
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={<Button type="button" variant="outline" size="sm" />}
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
                  onClick={markAll}
                >
                  علامت‌گذاری همه
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
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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
                        <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm tracking-normal text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                    <Popover
                      open={openId === item.id}
                      onOpenChange={(open) => setOpenId(open ? item.id : null)}
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
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          مشاهده جزئیات
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
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
