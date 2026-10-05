"use client"

import * as React from "react"
import { addDays, isSameDay } from "date-fns"
import { MoreHorizontalIcon, XIcon } from "lucide-react"

import { cn } from "@/registry/base-luma/lib/utils"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import { Calendar } from "@/registry/base-luma/ui/calendar"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"
import { Switch } from "@/registry/base-luma/ui/switch"

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `${weekday}، ${rest}`
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

type Kind = "جلسه" | "ددلاین" | "شخصی"

type EventItem = {
  id: string
  title: string
  time: string
  date: Date
  kind: Kind
}

const KIND_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "جلسه", label: "جلسه" },
  { value: "ددلاین", label: "ددلاین" },
  { value: "شخصی", label: "شخصی" },
] as const

const VIEW_ITEMS = [
  { value: "ماه", label: "ماه" },
  { value: "هفته", label: "هفته" },
  { value: "روز", label: "روز" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

function buildEvents(): EventItem[] {
  const base = new Date()
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: base,
      kind: "جلسه",
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(base, 1),
      kind: "جلسه",
    },
    {
      id: "3",
      title: "ددلاین نسخهٔ بتا",
      time: "۱۸:۰۰",
      date: addDays(base, 2),
      kind: "ددلاین",
    },
    {
      id: "4",
      title: "ویزیت پزشک",
      time: "۰۹:۱۵",
      date: addDays(base, 4),
      kind: "شخصی",
    },
    {
      id: "5",
      title: "هماهنگ با فروش",
      time: "۱۱:۳۰",
      date: addDays(base, 5),
      kind: "جلسه",
    },
  ]
}

export default function CalendarBlockHub() {
  const [events] = React.useState(buildEvents)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [month, setMonth] = React.useState<Date>(new Date())
  const [view, setView] = React.useState("ماه")
  const [kind, setKind] = React.useState("همه")
  const [remindAt, setRemindAt] = React.useState("۰۹:۰۰")
  const [chips, setChips] = React.useState(["جلسات"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const booked = events.map((e) => e.date)
  const dayEvents = events.filter((e) => {
    if (!date || !isSameDay(e.date, date)) return false
    if (kind !== "همه" && e.kind !== kind) return false
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            {date ? formatJalali(date) : "روزی انتخاب نشده"}
            {" · "}
            {formatJalaliCompact(date ?? new Date())}
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
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={<Button type="button" variant="outline" size="sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              بیشتر
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 p-1"
            >
              <p className="px-2 py-1.5 text-xs text-muted-foreground">نمایش</p>
              {VIEW_ITEMS.map((opt) => (
                <Button
                  key={opt.value}
                  type="button"
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    view === opt.value && "bg-muted"
                  )}
                  onClick={() => {
                    setView(opt.value)
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
                onClick={() => setHeaderOpen(false)}
              >
                رویداد جدید
              </Button>
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
              <Badge variant="outline" className="tracking-normal">
                {toFa(dayEvents.length)}
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
                          <Badge variant="secondary">{ev.kind}</Badge>
                        </div>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          ساعت {ev.time}
                        </p>
                      </div>
                      <Popover
                        open={openId === ev.id}
                        onOpenChange={(open) => setOpenId(open ? ev.id : null)}
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
                          className="w-36 p-1"
                        >
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
                            اشتراک
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => setOpenId(null)}
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
        </div>

        <aside className="space-y-4 border-t bg-muted/30 p-4 md:border-t-0 md:border-r">
          <p className="text-sm font-medium">تنظیمات</p>

          <Field>
            <FieldLabel>نوع رویداد</FieldLabel>
            <Select
              items={[...KIND_ITEMS]}
              value={kind}
              onValueChange={(value) => {
                if (KIND_ITEMS.some((item) => item.value === value)) {
                  setKind(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {KIND_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>نمای تقویم</FieldLabel>
            <Select
              items={[...VIEW_ITEMS]}
              value={view}
              onValueChange={(value) => {
                if (VIEW_ITEMS.some((item) => item.value === value)) {
                  setView(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="نما" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {VIEW_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>ساعت یادآوری</FieldLabel>
            <Select
              items={[...TIME_ITEMS]}
              value={remindAt}
              onValueChange={(value) => {
                if (TIME_ITEMS.some((item) => item.value === value)) {
                  setRemindAt(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="ساعت" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TIME_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription>زمان یادآوری روزانه</FieldDescription>
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
