"use client"

import * as React from "react"
import { MoreHorizontalIcon, PinIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

const ITEMS = [
  {
    id: "1",
    title: "بلوک ورود",
    path: "/blocks/login",
    opened: "همین الان",
    pinned: true,
  },
  {
    id: "2",
    title: "فرم تماس",
    path: "/blocks/contact",
    opened: "۲۰ دقیقه پیش",
    pinned: false,
  },
  {
    id: "3",
    title: "مقایسه قابلیت‌ها",
    path: "/blocks/comparison",
    opened: "۱ ساعت پیش",
    pinned: false,
  },
  {
    id: "4",
    title: "مرکز آمار",
    path: "/blocks/dashboard-stats",
    opened: "دیروز",
    pinned: true,
  },
  {
    id: "5",
    title: "فهرست وبلاگ",
    path: "/blocks/blog-grid",
    opened: "۳ روز پیش",
    pinned: false,
  },
] as const

export function RecentItemsPinned() {
  const [pinned, setPinned] = React.useState(
    () => new Set(ITEMS.filter((i) => i.pinned).map((i) => i.id))
  )
  const [hidden, setHidden] = React.useState<string[]>([])
  const [openId, setOpenId] = React.useState<string | null>(null)

  const visible = ITEMS.filter((item) => !hidden.includes(item.id)).sort(
    (a, b) => Number(pinned.has(b.id)) - Number(pinned.has(a.id))
  )

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">پین و منوی عملیات</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          موارد سنجاق‌شده بالا؛ منوی عملیات راست‌چین
        </p>
      </div>

      <ul className="divide-y overflow-hidden rounded-xl border bg-card">
        {visible.map((item) => {
          const isPinned = pinned.has(item.id)
          return (
            <li key={item.id} className="flex items-center gap-3 p-4">
              {isPinned ? (
                <PinIcon className="size-3.5 shrink-0 text-primary" />
              ) : (
                <span className="size-3.5 shrink-0" />
              )}
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <p className="text-sm font-medium leading-snug">
                      {item.title}
                    </p>
                    {isPinned && (
                      <Badge variant="outline" className="border">
                        سنجاق‌شده
                      </Badge>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.opened}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  <span
                    dir="ltr"
                    className="inline-block text-left font-mono tracking-normal"
                  >
                    {item.path}
                  </span>
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
                      variant="ghost"
                      size="icon"
                      className="size-8 shrink-0"
                    />
                  }
                >
                  <MoreHorizontalIcon className="size-4" />
                  <span className="sr-only">منوی عملیات</span>
                </PopoverTrigger>
                <PopoverContent
                  dir="rtl"
                  lang="fa"
                  align="end"
                  className="w-40 space-y-1 p-2"
                >
                  <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start"
                    onClick={() => {
                      setPinned((prev) => {
                        const next = new Set(prev)
                        if (next.has(item.id)) next.delete(item.id)
                        else next.add(item.id)
                        return next
                      })
                      setOpenId(null)
                    }}
                  >
                    {isPinned ? "برداشتن سنجاق" : "سنجاق کردن"}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start"
                    onClick={() => setOpenId(null)}
                  >
                    باز کردن
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start text-destructive hover:text-destructive"
                    onClick={() => {
                      setHidden((prev) => [...prev, item.id])
                      setOpenId(null)
                    }}
                  >
                    حذف از اخیر
                  </Button>
                </PopoverContent>
              </Popover>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
