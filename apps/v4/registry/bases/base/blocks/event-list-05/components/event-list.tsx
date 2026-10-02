"use client"

import * as React from "react"
import { addDays, isSameDay, startOfDay } from "date-fns"
import {
  MoreHorizontalIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
    year: "numeric",
    month: "long",
    day: "numeric",
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
  place: string
}

const KIND_FA = {
  meeting: "جلسه",
  deadline: "ددلاین",
  personal: "شخصی",
} as const

function buildEvents(): EventItem[] {
  const today = startOfDay(new Date())
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: today,
      kind: "meeting",
      place: "اتاق آبی",
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(today, 1),
      kind: "meeting",
      place: "آنلاین",
    },
    {
      id: "3",
      title: "ددلاین نسخهٔ بتا",
      time: "۱۸:۰۰",
      date: addDays(today, 2),
      kind: "deadline",
      place: "—",
    },
    {
      id: "4",
      title: "ویزیت پزشک",
      time: "۰۹:۱۵",
      date: addDays(today, 4),
      kind: "personal",
      place: "کلینیک نور",
    },
    {
      id: "5",
      title: "هماهنگ با فروش",
      time: "۱۱:۳۰",
      date: addDays(today, 5),
      kind: "meeting",
      place: "اتاق سبز",
    },
  ]
}

const GROUPS = [
  { id: "all", label: "همه", count: "۵" },
  { id: "today", label: "امروز", count: "۱" },
  { id: "week", label: "این هفته", count: "۵" },
  { id: "meeting", label: "جلسات", count: "۳" },
] as const

export function EventListHub() {
  const [events] = React.useState(buildEvents)
  const [group, setGroup] = React.useState("all")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("date")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["پیش‌رو"])

  const today = startOfDay(new Date())

  const rows = events.filter((ev) => {
    if (group === "today" && !isSameDay(ev.date, today)) return false
    if (group === "meeting" && ev.kind !== "meeting") return false
    if (query && !ev.title.includes(query)) return false
    return true
  })

  function toggle(id: string, on: boolean) {
    setSelected((prev) =>
      on ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            رویدادها · شمسی
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">فهرست رویدادها</h2>
          <p className="mt-2 text-muted-foreground">
            {formatJalali(today)} ·{" "}
            <bdi dir="ltr">{formatJalaliCompact(today)}</bdi>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">رویداد جدید</Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
              <MoreHorizontalIcon className="size-4" />
              بیشتر
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>صدور تقویم</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelected([])}>
                لغو انتخاب
              </DropdownMenuItem>
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

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[13rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">گروه</p>
          <nav className="space-y-1">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGroup(g.id)}
                className={
                  group === g.id
                    ? "flex w-full items-center justify-between rounded-md bg-background px-2 py-1.5 text-sm shadow-sm"
                    : "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                }
              >
                <span>{g.label}</span>
                <span className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{g.count}</bdi>
                </span>
              </button>
            ))}
          </nav>

          <Separator />

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "date")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="date">تاریخ</SelectItem>
                <SelectItem value="name">نام</SelectItem>
                <SelectItem value="kind">نوع</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full" />}
            >
              میانبر مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-40">
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort(v ?? "date")}
              >
                <DropdownMenuRadioItem value="date">تاریخ</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kind">نوع</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Field>
            <FieldLabel htmlFor="el5-time">ساعت یادآوری</FieldLabel>
            <Input
              id="el5-time"
              type="time"
              defaultValue="09:00"
              dir="ltr"
              className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
            <FieldDescription>زمان LTR</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="el5-email">دعوت ایمیل</FieldLabel>
            <Input
              id="el5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="el5-past">نمایش گذشته</Label>
            <Switch id="el5-past" />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در رویدادها…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه انواع</SelectItem>
                <SelectItem value="meeting">جلسه</SelectItem>
                <SelectItem value="deadline">ددلاین</SelectItem>
                <SelectItem value="personal">شخصی</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                رویدادی با این فیلتر نیست
              </p>
            ) : (
              rows.map((ev, i) => (
                <div key={ev.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-start gap-3 px-3 py-3">
                    <Checkbox
                      className="mt-1"
                      checked={selected.includes(ev.id)}
                      onCheckedChange={(v) => toggle(ev.id, Boolean(v))}
                      aria-label={`انتخاب ${ev.title}`}
                    />
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
                        <p className="truncate text-sm font-medium">
                          {ev.title}
                        </p>
                        <Badge variant="secondary">{KIND_FA[ev.kind]}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatJalali(ev.date)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ساعت <bdi dir="ltr">{ev.time}</bdi> · {ev.place}
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
                        <DropdownMenuItem>دعوت</DropdownMenuItem>
                        <DropdownMenuItem>حذف</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
