"use client"

import * as React from "react"
import { MoreHorizontalIcon, PinIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
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

const ITEMS = [
  {
    id: "1",
    title: "داشبورد فروش",
    path: "/blocks/dashboard",
    type: "صفحه",
    owner: "سارا محمدی",
    email: "sara@example.com",
    openedAt: 5,
    openedLabel: "۵ دقیقه پیش",
  },
  {
    id: "2",
    title: "جدول کاربران",
    path: "/blocks/data-table-block",
    type: "صفحه",
    owner: "علی رضایی",
    email: "ali@example.com",
    openedAt: 40,
    openedLabel: "۴۰ دقیقه پیش",
  },
  {
    id: "3",
    title: "فاکتور مهر",
    path: "/files/invoice-mehr.pdf",
    type: "فایل",
    owner: "مینا کریمی",
    email: "mina@example.com",
    openedAt: 120,
    openedLabel: "۲ ساعت پیش",
  },
  {
    id: "4",
    title: "کامپوننت Dialog",
    path: "/docs/components/dialog",
    type: "مستندات",
    owner: "رضا نوری",
    email: "reza@example.com",
    openedAt: 1440,
    openedLabel: "دیروز",
  },
  {
    id: "5",
    title: "پروژه فروشگاه",
    path: "/projects/shop",
    type: "پروژه",
    owner: "نگار احمدی",
    email: "negar@example.com",
    openedAt: 2880,
    openedLabel: "۲ روز پیش",
  },
  {
    id: "6",
    title: "تحلیل و نمودار",
    path: "/blocks/analytics",
    type: "صفحه",
    owner: "حسین کاظمی",
    email: "hossein@example.com",
    openedAt: 5000,
    openedLabel: "هفتهٔ پیش",
  },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه انواع" },
  { value: "صفحه", label: "صفحه" },
  { value: "فایل", label: "فایل" },
  { value: "مستندات", label: "مستندات" },
  { value: "پروژه", label: "پروژه" },
] as const

const SORT_ITEMS = [
  { value: "اخیر", label: "اخیراً بازشده" },
  { value: "عنوان", label: "عنوان" },
  { value: "نوع", label: "نوع" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export function RecentItemsHub() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("اخیر")
  const [pinned, setPinned] = React.useState(() => new Set(["1", "4"]))
  const [hidden, setHidden] = React.useState<string[]>([])
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filtered = React.useMemo(() => {
    let list = ITEMS.filter((item) => {
      if (hidden.includes(item.id)) return false
      const matchType = type === "همه" || item.type === type
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        item.title.includes(query) ||
        item.path.toLowerCase().includes(q) ||
        item.owner.includes(query) ||
        item.email.toLowerCase().includes(q) ||
        item.type.includes(query)
      return matchType && matchQuery
    })

    list = [...list].sort((a, b) => {
      const pinDiff = Number(pinned.has(b.id)) - Number(pinned.has(a.id))
      if (pinDiff !== 0) return pinDiff
      if (sort === "عنوان") return a.title.localeCompare(b.title, "fa")
      if (sort === "نوع") return a.type.localeCompare(b.type, "fa")
      return a.openedAt - b.openedAt
    })
    return list
  }, [query, type, sort, pinned, hidden])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            دسترسی سریع
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">مرکز موارد اخیر</h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر، سنجاق و اشتراک‌گذاری با ایمیل
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو عنوان، مسیر یا مالک…"
              className="ps-9"
              dir="rtl"
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
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {TYPE_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (SORT_ITEMS.some((item) => item.value === value)) {
                setSort(value as SortKey)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
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
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          موردی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <ul className="divide-y overflow-hidden rounded-xl border bg-card">
          {filtered.map((item) => {
            const isPinned = pinned.has(item.id)
            return (
              <li key={item.id} className="flex items-start gap-3 p-4">
                {isPinned ? (
                  <PinIcon className="mt-1 size-3.5 shrink-0 text-primary" />
                ) : (
                  <span className="mt-1 size-3.5 shrink-0" />
                )}
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <p className="text-sm font-medium leading-snug">
                        {item.title}
                      </p>
                      <Badge variant="outline" className="border">
                        {item.type}
                      </Badge>
                      {isPinned && (
                        <Badge variant="outline" className="border">
                          سنجاق‌شده
                        </Badge>
                      )}
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {item.openedLabel}
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
                  <p className="text-xs text-muted-foreground">
                    {item.owner} ·{" "}
                    <span dir="ltr" className="inline-block text-left tracking-normal">
                      {item.email}
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
                    className="w-44 space-y-1 p-2"
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
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa" className="bg-card">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">اشتراک لیست اخیر</CardTitle>
          <CardDescription>
            نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="text"
              placeholder="نام همکار"
              dir="rtl"
              className="sm:flex-1"
            />
            <Input
              type="email"
              required
              placeholder="name@example.com"
              dir="ltr"
              className="text-left sm:flex-1"
            />
            <Button type="submit" className="sm:shrink-0">
              ارسال لینک
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
