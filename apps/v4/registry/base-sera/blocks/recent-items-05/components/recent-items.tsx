"use client"

import * as React from "react"
import { MoreHorizontalIcon, PinIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-sera/ui/dropdown-menu"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"

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

type SortKey = "recent" | "title" | "type"

const SORT_LABELS: Record<SortKey, string> = {
  recent: "اخیراً بازشده",
  title: "عنوان",
  type: "نوع",
}

export function RecentItemsHub() {
  const [query, setQuery] = React.useState("")
  const [type, setType] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("recent")
  const [pinned, setPinned] = React.useState(() => new Set(["1", "4"]))
  const [hidden, setHidden] = React.useState<string[]>([])

  const filtered = React.useMemo(() => {
    let list = ITEMS.filter((item) => {
      if (hidden.includes(item.id)) return false
      const matchType = type === "all" || item.type === type
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
      if (sort === "title") return a.title.localeCompare(b.title, "fa")
      if (sort === "type") return a.type.localeCompare(b.type, "fa")
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
            value={type}
            onValueChange={(value) => setType((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="نوع" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه انواع</SelectItem>
              <SelectItem value="صفحه">صفحه</SelectItem>
              <SelectItem value="فایل">فایل</SelectItem>
              <SelectItem value="مستندات">مستندات</SelectItem>
              <SelectItem value="پروژه">پروژه</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "recent")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          موردی با این فیلتر پیدا نشد.
        </p>
      ) : (
        <ul className="divide-y rounded-xl border">
          {filtered.map((item) => {
            const isPinned = pinned.has(item.id)
            return (
              <li key={item.id} className="flex items-start gap-3 p-4">
                {isPinned ? (
                  <PinIcon className="mt-1 size-3.5 shrink-0 text-primary" />
                ) : (
                  <span className="mt-1 size-3.5 shrink-0" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{item.title}</p>
                    <Badge variant="outline">{item.type}</Badge>
                    {isPinned && <Badge variant="secondary">سنجاق‌شده</Badge>}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    <span
                      dir="ltr"
                      className="inline-block text-start font-mono"
                    >
                      {item.path}
                    </span>
                    {" · "}
                    {item.openedLabel}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.owner} ·{" "}
                    <span dir="ltr" className="inline-block text-start">
                      {item.email}
                    </span>
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
                    className="w-44"
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
                      onClick={() => setHidden((prev) => [...prev, item.id])}
                    >
                      حذف از اخیر
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            )
          })}
        </ul>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
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
              className="text-start sm:flex-1"
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
