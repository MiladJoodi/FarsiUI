"use client"

import * as React from "react"
import { MoreHorizontalIcon, PinIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

const ITEMS = [
  {
    id: "1",
    title: "بلاک ورود",
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
          موارد سنجاق‌شده بالا؛ منوی کشویی راست‌چین
        </p>
      </div>

      <ul className="divide-y rounded-xl border">
        {visible.map((item) => {
          const isPinned = pinned.has(item.id)
          return (
            <li key={item.id} className="flex items-center gap-3 p-4">
              {isPinned && (
                <PinIcon className="size-3.5 shrink-0 text-primary" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{item.title}</p>
                  {isPinned && <Badge variant="secondary">سنجاق‌شده</Badge>}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  <span dir="ltr" className="inline-block text-start font-mono">
                    {item.path}
                  </span>
                  {" · "}
                  {item.opened}
                </p>
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
                  className="w-40"
                >
                  <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() =>
                      setPinned((prev) => {
                        const next = new Set(prev)
                        if (next.has(item.id)) next.delete(item.id)
                        else next.add(item.id)
                        return next
                      })
                    }
                  >
                    {isPinned ? "برداشتن سنجاق" : "سنجاق کردن"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>باز کردن</DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() =>
                      setHidden((prev) => [...prev, item.id])
                    }
                  >
                    حذف از اخیر
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
