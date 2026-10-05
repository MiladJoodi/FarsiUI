"use client"

import * as React from "react"
import { CheckIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react"

import { cn } from "@/registry/base-mira/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-mira/ui/avatar"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-mira/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"
import { Textarea } from "@/registry/base-mira/ui/textarea"

type Comment = {
  id: string
  name: string
  email: string
  text: string
  time: string
  status: "تأییدشده" | "در انتظار" | "اسپم"
  initials: string
  avatar?: string
}

const INITIAL: Comment[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    text: "طراحی خیلی تمیزه؛ برای داشبورد فارسی عالیه.",
    time: "۱ ساعت پیش",
    status: "تأییدشده",
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    text: "کاش نمونهٔ فرم چندمرحله‌ای هم اضافه شود.",
    time: "۵ ساعت پیش",
    status: "در انتظار",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "اسپم‌بات",
    email: "spam@example.com",
    text: "خرید ارزان همین حالا!!!",
    time: "دیروز",
    status: "اسپم",
    initials: "ا‌س",
  },
  {
    id: "4",
    name: "مینا کریمی",
    email: "mina@example.com",
    text: "مستندات نصب واضح بود.",
    time: "۲ روز پیش",
    status: "تأییدشده",
    initials: "م‌ک",
  },
]

const NAV = [
  { id: "همه", label: "همه" },
  { id: "در انتظار", label: "در انتظار" },
  { id: "تأییدشده", label: "تأییدشده" },
  { id: "اسپم", label: "اسپم" },
] as const

type NavId = (typeof NAV)[number]["id"]

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "قدیمی‌ترین", label: "قدیمی‌ترین" },
] as const

export default function CommentsHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [tab, setTab] = React.useState<NavId>("همه")
  const [sort, setSort] = React.useState("جدیدترین")
  const [query, setQuery] = React.useState("")
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items.filter((c) => {
    if (tab !== "همه" && c.status !== tab) return false
    if (query && !`${c.name}${c.text}${c.email}`.includes(query)) return false
    return true
  })

  function setStatus(id: string, status: Comment["status"]) {
    setItems((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)))
    setOpenId(null)
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id))
    setOpenId(null)
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
            مرکز دیدگاه‌ها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مدیریت دیدگاه‌ها
          </h2>
          <p className="mt-2 text-muted-foreground">
            تأیید، اسپم، اعلان ایمیل و منوهای راست‌چین
          </p>
        </div>
        <Popover open={moreOpen} onOpenChange={setMoreOpen}>
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
            className="w-52 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={() => {
                setItems((prev) =>
                  prev.map((c) =>
                    c.status === "در انتظار" ? { ...c, status: "تأییدشده" } : c
                  )
                )
                setMoreOpen(false)
              }}
            >
              تأیید همهٔ در انتظار
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {
                setItems((prev) => prev.filter((c) => c.status !== "اسپم"))
                setMoreOpen(false)
              }}
            >
              حذف همهٔ اسپم
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[11rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            وضعیت
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  tab === item.id && "bg-muted font-medium"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Separator className="my-3" />
          <div className="space-y-3 px-1">
            <Field>
              <FieldLabel htmlFor="cm5-email">ایمیل مدیر</FieldLabel>
              <Input
                id="cm5-email"
                type="email"
                defaultValue="mod@example.com"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>اعلان دیدگاه جدید</FieldDescription>
            </Field>
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="cm5-mod" className="text-sm">
                تأیید دستی
              </Label>
              <Switch id="cm5-mod" defaultChecked />
            </div>
          </div>
        </aside>

        <div className="space-y-4 p-4 md:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام یا متن دیدگاه…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full lg:w-36" dir="rtl">
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

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-8 text-center text-sm text-muted-foreground">
                دیدگاهی نیست
              </p>
            ) : (
              (sort === "قدیمی‌ترین" ? [...rows].reverse() : rows).map(
                (c, i) => (
                  <div key={c.id}>
                    {i > 0 && <Separator />}
                    <div className="flex gap-3 px-4 py-3">
                      <Avatar className="size-9">
                        {c.avatar ? (
                          <AvatarImage src={c.avatar} alt={c.name} />
                        ) : null}
                        <AvatarFallback>{c.initials}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{c.name}</p>
                          <Badge
                            variant={
                              c.status === "اسپم"
                                ? "destructive"
                                : c.status === "در انتظار"
                                  ? "outline"
                                  : "secondary"
                            }
                            className={
                              c.status === "در انتظار" ? "border" : undefined
                            }
                          >
                            {c.status}
                          </Badge>
                          <span className="text-xs tracking-normal text-muted-foreground">
                            {c.time}
                          </span>
                        </div>
                        <p className="text-xs tracking-normal text-muted-foreground">
                          <span dir="ltr" className="inline-block text-start">
                            {c.email}
                          </span>
                        </p>
                        <p className="text-sm leading-relaxed">{c.text}</p>
                      </div>
                      <Popover
                        open={openId === c.id}
                        onOpenChange={(open) => setOpenId(open ? c.id : null)}
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="shrink-0"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          عملیات
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setStatus(c.id, "تأییدشده")}
                          >
                            <CheckIcon className="size-4" />
                            تأیید
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setStatus(c.id, "در انتظار")}
                          >
                            در انتظار
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setStatus(c.id, "اسپم")}
                          >
                            علامت اسپم
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => remove(c.id)}
                          >
                            <Trash2Icon className="size-4" />
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                )
              )
            )}
          </div>

          <div className="space-y-3 rounded-lg border p-4">
            <p className="text-sm font-medium">پاسخ سریع مدیر</p>
            <Textarea
              placeholder="پاسخ عمومی بنویسید…"
              dir="rtl"
              className="min-h-20 resize-none"
            />
            <div className="flex justify-end">
              <Button type="button" size="sm">
                ارسال پاسخ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
