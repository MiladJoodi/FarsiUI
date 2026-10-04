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
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { cn } from "@/registry/bases/base/lib/utils"

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
  place: string
}

const SORT_ITEMS = [
  { value: "تاریخ", label: "تاریخ" },
  { value: "نام", label: "نام" },
  { value: "نوع", label: "نوع" },
] as const

const TYPE_ITEMS = [
  { value: "همه انواع", label: "همه انواع" },
  { value: "جلسه", label: "جلسه" },
  { value: "ددلاین", label: "ددلاین" },
  { value: "شخصی", label: "شخصی" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۲:۰۰", label: "۱۲:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

const GROUPS = [
  { id: "همه", label: "همه", count: "۵" },
  { id: "امروز", label: "امروز", count: "۱" },
  { id: "این هفته", label: "این هفته", count: "۵" },
  { id: "جلسات", label: "جلسات", count: "۳" },
] as const

function buildEvents(): EventItem[] {
  const today = startOfDay(new Date())
  return [
    {
      id: "1",
      title: "جلسهٔ تیم محصول",
      time: "۱۰:۰۰",
      date: today,
      kind: "جلسه",
      place: "اتاق آبی",
    },
    {
      id: "2",
      title: "بازبینی طراحی",
      time: "۱۴:۳۰",
      date: addDays(today, 1),
      kind: "جلسه",
      place: "آنلاین",
    },
    {
      id: "3",
      title: "ددلاین نسخهٔ بتا",
      time: "۱۸:۰۰",
      date: addDays(today, 2),
      kind: "ددلاین",
      place: "—",
    },
    {
      id: "4",
      title: "ویزیت پزشک",
      time: "۰۹:۱۵",
      date: addDays(today, 4),
      kind: "شخصی",
      place: "کلینیک نور",
    },
    {
      id: "5",
      title: "هماهنگ با فروش",
      time: "۱۱:۳۰",
      date: addDays(today, 5),
      kind: "جلسه",
      place: "اتاق سبز",
    },
  ]
}

export default function EventListHub() {
  const [events] = React.useState(buildEvents)
  const [group, setGroup] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("تاریخ")
  const [type, setType] = React.useState("همه انواع")
  const [remindAt, setRemindAt] = React.useState("۰۹:۰۰")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["پیش‌رو"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const today = startOfDay(new Date())

  const rows = events.filter((ev) => {
    if (group === "امروز" && !isSameDay(ev.date, today)) return false
    if (group === "جلسات" && ev.kind !== "جلسه") return false
    if (type !== "همه انواع" && ev.kind !== type) return false
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            {formatJalali(today)} · {formatJalaliCompact(today)}
            {" · "}
            {toFa(rows.length)} رویداد · {toFa(selected.length)} انتخاب‌شده
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">رویداد جدید</Button>
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
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                صدور تقویم
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => {
                  setSelected([])
                  setHeaderOpen(false)
                }}
              >
                لغو انتخاب
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
                <span className="text-xs tracking-normal text-muted-foreground">
                  {g.count}
                </span>
              </button>
            ))}
          </nav>

          <Separator />

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SORT_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Popover open={sortOpen} onOpenChange={setSortOpen}>
            <PopoverTrigger
              render={
                <Button type="button" variant="outline" className="w-full" />
              }
            >
              میانبر مرتب‌سازی
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-40 p-1"
            >
              {SORT_ITEMS.map((opt) => (
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
                    setSortOpen(false)
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </PopoverContent>
          </Popover>

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
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
                      <span className="text-sm font-semibold leading-none tracking-normal">
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
                        <Badge variant="secondary">{ev.kind}</Badge>
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {formatJalali(ev.date)}
                      </p>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        ساعت {ev.time} · {ev.place}
                      </p>
                    </div>
                    <Popover
                      open={openId === ev.id}
                      onOpenChange={(open) =>
                        setOpenId(open ? ev.id : null)
                      }
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
                          دعوت
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
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
