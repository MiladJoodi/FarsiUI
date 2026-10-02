"use client"

import * as React from "react"
import { addDays, isSameDay } from "date-fns"
import {
  MoreHorizontalIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

type EventItem = {
  id: string
  title: string
  time: string
  date: Date
  kind: "meeting" | "deadline" | "personal"
}

function buildEvents(): EventItem[] {
  const base = new Date()
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: base,
      kind: "meeting",
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(base, 1),
      kind: "meeting",
    },
    {
      id: "3",
      title: "ددلاین نسخهٔ بتا",
      time: "۱۸:۰۰",
      date: addDays(base, 2),
      kind: "deadline",
    },
    {
      id: "4",
      title: "ویزیت پزشک",
      time: "۰۹:۱۵",
      date: addDays(base, 4),
      kind: "personal",
    },
    {
      id: "5",
      title: "هماهنگ با فروش",
      time: "۱۱:۳۰",
      date: addDays(base, 5),
      kind: "meeting",
    },
  ]
}

const KIND_LABEL = {
  meeting: "جلسه",
  deadline: "ددلاین",
  personal: "شخصی",
} as const

export function CalendarBlockHub() {
  const [events] = React.useState(buildEvents)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [month, setMonth] = React.useState<Date>(new Date())
  const [view, setView] = React.useState("month")
  const [kind, setKind] = React.useState("all")
  const [chips, setChips] = React.useState(["جلسات"])

  const booked = events.map((e) => e.date)
  const dayEvents = events.filter((e) => {
    if (!date || !isSameDay(e.date, date)) return false
    if (kind !== "all" && e.kind !== kind) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            تقویم شمسی
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">تقویم</h2>
          <p className="mt-2 text-muted-foreground">
            {date ? formatJalali(date) : "روزی انتخاب نشده"}
            {" · "}
            <bdi dir="ltr">{formatJalaliCompact(date ?? new Date())}</bdi>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const today = new Date()
              setDate(today)
              setMonth(today)
            }}
          >
            امروز
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
              <MoreHorizontalIcon className="size-4" />
              بیشتر
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>نمایش</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={view}
                onValueChange={(v) => setView(v ?? "month")}
              >
                <DropdownMenuRadioItem value="month">ماه</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="week">هفته</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="day">روز</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>رویداد جدید</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setChips([])}>
                پاک کردن فیلترها
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {chips.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Badge key={c} variant="secondary" className="gap-1 pe-1">
              {c}
              <button
                type="button"
                className="rounded-sm p-0.5 hover:bg-muted"
                onClick={() => setChips((prev) => prev.filter((x) => x !== c))}
                aria-label={`حذف ${c}`}
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[1fr_16rem]">
        <div className="p-4 md:p-5">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            modifiers={{ booked }}
            modifiersClassNames={{
              booked: "[&>button]:font-bold",
            }}
            className="mx-auto w-full max-w-md [--cell-size:--spacing(10)]"
          />

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium">رویدادهای این روز</p>
              <Badge variant="outline">
                <bdi dir="ltr">{dayEvents.length}</bdi>
              </Badge>
            </div>
            {dayEvents.length === 0 ? (
              <p className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
                رویدادی ثبت نشده
              </p>
            ) : (
              <ul className="overflow-hidden rounded-lg border">
                {dayEvents.map((ev, i) => (
                  <li key={ev.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-3 py-2.5">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="truncate text-sm font-medium">
                            {ev.title}
                          </p>
                          <Badge variant="secondary">
                            {KIND_LABEL[ev.kind]}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          ساعت <bdi dir="ltr">{ev.time}</bdi>
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
                          <DropdownMenuItem>ویرایش</DropdownMenuItem>
                          <DropdownMenuItem>اشتراک</DropdownMenuItem>
                          <DropdownMenuItem>حذف</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="space-y-4 border-t bg-muted/30 p-4 md:border-t-0 md:border-r">
          <p className="text-sm font-medium">تنظیمات</p>

          <Field>
            <FieldLabel>نوع رویداد</FieldLabel>
            <Select
              value={kind}
              onValueChange={(v) => setKind((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="meeting">جلسه</SelectItem>
                <SelectItem value="deadline">ددلاین</SelectItem>
                <SelectItem value="personal">شخصی</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>نمای تقویم</FieldLabel>
            <Select
              value={view}
              onValueChange={(v) => setView((v as string) ?? "month")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نما" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="month">ماه</SelectItem>
                <SelectItem value="week">هفته</SelectItem>
                <SelectItem value="day">روز</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="cal5-time">ساعت یادآوری</FieldLabel>
            <Input
              id="cal5-time"
              type="time"
              defaultValue="09:00"
              dir="ltr"
              className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
            <FieldDescription>زمان به‌صورت LTR</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="cal5-email">ایمیل دعوت</FieldLabel>
            <Input
              id="cal5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="cal5-weekend">پنهان‌کردن جمعه</Label>
            <Switch id="cal5-weekend" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="cal5-holidays">تعطیلات رسمی</Label>
            <Switch id="cal5-holidays" defaultChecked />
          </div>

          <Button className="w-full">رویداد جدید</Button>
        </aside>
      </div>
    </section>
  )
}
