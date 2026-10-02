"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"

const GROUPS = [
  {
    day: "امروز",
    items: [
      {
        id: "a1",
        title: "سارا محمدی پروژه را منتشر کرد",
        email: "sara@example.com",
        time: "۱۰:۲۴",
        unread: true,
        initials: "سم",
      },
      {
        id: "a2",
        title: "یادآوری: بررسی PR داشبورد",
        email: "bot@farsiui.dev",
        time: "۰۹:۰۵",
        unread: true,
        initials: "ب",
      },
    ],
  },
  {
    day: "دیروز",
    items: [
      {
        id: "a3",
        title: "علی رضایی فایل mockup را به‌روز کرد",
        email: "ali@example.com",
        time: "۱۸:۴۰",
        unread: false,
        initials: "عر",
      },
      {
        id: "a4",
        title: "پرداخت اشتراک ماهانه انجام شد",
        email: "billing@example.com",
        time: "۱۲:۱۲",
        unread: false,
        initials: "پ",
      },
    ],
  },
  {
    day: "این هفته",
    items: [
      {
        id: "a5",
        title: "مینا کریمی عضو تیم طراحی شد",
        email: "mina@example.com",
        time: "دوشنبه",
        unread: false,
        initials: "مک",
      },
    ],
  },
] as const

export function ActivityGrouped() {
  const [hidden, setHidden] = React.useState<string[]>([])
  const [read, setRead] = React.useState<string[]>([])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          فعالیت‌های گروه‌بندی‌شده
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          بر اساس روز؛ منوی عملیات راست‌چین
        </p>
      </div>

      <div className="space-y-8">
        {GROUPS.map((group) => {
          const visible = group.items.filter(
            (item) => !hidden.includes(item.id)
          )
          if (visible.length === 0) return null
          return (
            <div key={group.day}>
              <h3 className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {group.day}
              </h3>
              <div className="divide-y rounded-xl border">
                {visible.map((item) => {
                  const isUnread = item.unread && !read.includes(item.id)
                  return (
                    <div key={item.id} className="flex items-start gap-3 p-4">
                      <Avatar className="size-9">
                        <AvatarFallback>{item.initials}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p
                            className={`text-sm ${isUnread ? "font-semibold" : "font-medium"}`}
                          >
                            {item.title}
                          </p>
                          {isUnread && (
                            <Badge variant="default" className="shrink-0">
                              خوانده‌نشده
                            </Badge>
                          )}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                          <span dir="ltr" className="inline-block text-start">
                            {item.email}
                          </span>
                          <bdi dir="ltr">{item.time}</bdi>
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
                          className="w-40"
                        >
                          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() =>
                              setRead((prev) =>
                                prev.includes(item.id)
                                  ? prev
                                  : [...prev, item.id]
                              )
                            }
                          >
                            علامت خوانده‌شده
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              setHidden((prev) => [...prev, item.id])
                            }
                            variant="destructive"
                          >
                            پنهان کردن
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
