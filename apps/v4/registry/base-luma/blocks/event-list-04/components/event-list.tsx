"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { MoreHorizontalIcon, XIcon } from "lucide-react"

import { cn } from "@/registry/base-luma/lib/utils"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import { Separator } from "@/registry/base-luma/ui/separator"

function formatJalaliDay(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
  })
}

function formatJalaliMonth(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    month: "short",
  })
}

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
  })
  return `${weekday}، ${rest}`
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

type EventItem = {
  id: string
  title: string
  time: string
  date: Date
  kind: string
  status: "upcoming" | "done" | "cancelled"
}

const SORT_OPTIONS = [
  { value: "تاریخ", label: "تاریخ" },
  { value: "نام", label: "نام" },
  { value: "نوع", label: "نوع" },
]

function buildEvents(): EventItem[] {
  const today = new Date()
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: today,
      kind: "جلسه",
      status: "upcoming",
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(today, 1),
      kind: "طراحی",
      status: "upcoming",
    },
    {
      id: "3",
      title: "مصاحبهٔ کاربری",
      time: "۱۱:۰۰",
      date: addDays(today, 2),
      kind: "تحقیق",
      status: "done",
    },
    {
      id: "4",
      title: "تحویل نسخهٔ بتا",
      time: "۱۶:۰۰",
      date: addDays(today, 5),
      kind: "ددلاین",
      status: "upcoming",
    },
    {
      id: "5",
      title: "هماهنگ با فروش",
      time: "۰۹:۳۰",
      date: addDays(today, 7),
      kind: "جلسه",
      status: "cancelled",
    },
  ]
}

export default function EventListActions() {
  const [events, setEvents] = React.useState(buildEvents)
  const [chips, setChips] = React.useState(["جلسه", "پیش‌رو"])
  const [sort, setSort] = React.useState("تاریخ")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function remove(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id))
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">فهرست رویدادها</h2>
            <p className="text-sm tracking-normal text-muted-foreground">
              {toFa(events.length)} مورد · تاریخ شمسی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">رویداد جدید</Button>
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={<Button type="button" variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-44 p-1"
              >
                <p className="px-2 py-1.5 text-xs text-muted-foreground">
                  مرتب‌سازی
                </p>
                {SORT_OPTIONS.map((opt) => (
                  <Button
                    key={opt.value}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start",
                      sort === opt.value && "bg-muted"
                    )}
                    onClick={() => {
                      setSort(opt.value)
                      setHeaderOpen(false)
                    }}
                  >
                    {opt.label}
                  </Button>
                ))}
                <Separator className="my-1" />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setChips([])
                    setHeaderOpen(false)
                  }}
                >
                  پاک کردن فیلترها
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {chips.length > 0 ? (
          <div className="flex flex-wrap gap-2 border-b px-4 py-3">
            {chips.map((c) => (
              <Badge key={c} variant="secondary" className="gap-1 pe-1">
                {c}
                <button
                  type="button"
                  className="rounded-sm p-0.5 hover:bg-muted"
                  onClick={() =>
                    setChips((prev) => prev.filter((x) => x !== c))
                  }
                  aria-label={`حذف ${c}`}
                >
                  <XIcon className="size-3" />
                </button>
              </Badge>
            ))}
          </div>
        ) : null}

        {events.length === 0 ? (
          <p className="p-10 text-center text-sm text-muted-foreground">
            رویدادی نیست
          </p>
        ) : (
          <ul>
            {events.map((ev, i) => (
              <li key={ev.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg border bg-muted/40 text-center">
                    <span className="text-sm leading-none font-semibold tracking-normal">
                      {formatJalaliDay(ev.date)}
                    </span>
                    <span className="mt-0.5 text-[0.65rem] text-muted-foreground">
                      {formatJalaliMonth(ev.date)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium">{ev.title}</p>
                      <Badge variant="outline">{ev.kind}</Badge>
                      <Badge
                        variant={
                          ev.status === "upcoming"
                            ? "secondary"
                            : ev.status === "cancelled"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {ev.status === "upcoming"
                          ? "پیش‌رو"
                          : ev.status === "cancelled"
                            ? "لغو شده"
                            : "انجام‌شده"}
                      </Badge>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {formatJalali(ev.date)} · ساعت {ev.time}
                    </p>
                  </div>
                  <Popover
                    open={openId === ev.id}
                    onOpenChange={(open) => setOpenId(open ? ev.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button type="button" variant="ghost" size="icon-sm" />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="start"
                      className="w-40 p-1"
                    >
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        مشاهده
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        ویرایش
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        به تعویق انداختن
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => remove(ev.id)}
                      >
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
