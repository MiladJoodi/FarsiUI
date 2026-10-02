"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"

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
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

type EventItem = {
  id: string
  title: string
  time: string
  date: Date
  kind: string
  status: "upcoming" | "done" | "cancelled"
}

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

export function EventListActions() {
  const [events, setEvents] = React.useState(buildEvents)
  const [chips, setChips] = React.useState(["جلسه", "پیش‌رو"])
  const [sort, setSort] = React.useState("date")

  function remove(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id))
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
            <p className="text-sm text-muted-foreground">
              <bdi dir="ltr">{events.length}</bdi> مورد · تاریخ شمسی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">رویداد جدید</Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => setSort(v ?? "date")}
                >
                  <DropdownMenuRadioItem value="date">
                    تاریخ
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="kind">نوع</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setChips([])}>
                  پاک کردن فیلترها
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <span className="text-sm font-semibold leading-none">
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
                    <p className="text-xs text-muted-foreground">
                      {formatJalali(ev.date)} · ساعت{" "}
                      <bdi dir="ltr">{ev.time}</bdi>
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
                      <DropdownMenuItem>مشاهده</DropdownMenuItem>
                      <DropdownMenuItem>ویرایش</DropdownMenuItem>
                      <DropdownMenuItem>به تعویق انداختن</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => remove(ev.id)}>
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
