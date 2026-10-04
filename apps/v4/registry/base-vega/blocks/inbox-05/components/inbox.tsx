"use client"

import * as React from "react"
import {
  ArchiveIcon,
  CheckIcon,
  MoreHorizontalIcon,
  SearchIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import { cn } from "@/registry/base-vega/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import { Checkbox } from "@/registry/base-vega/ui/checkbox"
import { Field, FieldLabel } from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-vega/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"

type Msg = {
  id: string
  name: string
  email: string
  preview: string
  time: string
  unread: boolean
  starred: boolean
  folder: string
  initials: string
  avatar?: string
}

const INITIAL: Msg[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "سلام، وضعیت سفارش چطوره؟",
    time: "۱۰:۲۴",
    unread: true,
    starred: false,
    folder: "صندوق ورودی",
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    preview: "فاکتور را فرستادم",
    time: "دیروز",
    unread: false,
    starred: true,
    folder: "صندوق ورودی",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: true,
    starred: false,
    folder: "ستاره‌دار",
    initials: "م‌ک",
  },
  {
    id: "4",
    name: "پشتیبانی",
    email: "support@example.com",
    preview: "تیکت شما به‌روزرسانی شد",
    time: "هفتهٔ پیش",
    unread: false,
    starred: false,
    folder: "بایگانی",
    initials: "پ‌ش",
  },
  {
    id: "5",
    name: "رضا کریمی",
    email: "reza@example.com",
    preview: "لینک جلسه را بفرستید",
    time: "۲ هفته پیش",
    unread: false,
    starred: false,
    folder: "صندوق ورودی",
    initials: "ر‌ک",
  },
]

const FOLDERS = [
  { id: "صندوق ورودی", label: "صندوق ورودی" },
  { id: "ستاره‌دار", label: "ستاره‌دار" },
  { id: "بایگانی", label: "بایگانی" },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "خوانده‌شده", label: "خوانده‌شده" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function InboxHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [folder, setFolder] = React.useState("صندوق ورودی")
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")
  const [selected, setSelected] = React.useState<string[]>([])
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = items.filter((m) => {
    if (folder === "ستاره‌دار") {
      if (!m.starred) return false
    } else if (m.folder !== folder) {
      return false
    }
    if (status === "خوانده‌نشده" && !m.unread) return false
    if (status === "خوانده‌شده" && m.unread) return false
    if (
      query &&
      !`${m.name}${m.email}${m.preview}`
        .toLowerCase()
        .includes(query.toLowerCase())
    ) {
      return false
    }
    return true
  })

  const allSelected =
    rows.length > 0 && rows.every((r) => selected.includes(r.id))

  function toggleAll(checked: boolean) {
    setSelected(checked ? rows.map((r) => r.id) : [])
  }

  function toggleOne(id: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

  function markSelectedRead() {
    setItems((prev) =>
      prev.map((m) => (selected.includes(m.id) ? { ...m, unread: false } : m))
    )
    setSelected([])
    setMoreOpen(false)
  }

  function deleteSelected() {
    setItems((prev) => prev.filter((m) => !selected.includes(m.id)))
    setSelected([])
    setMoreOpen(false)
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
            مرکز صندوق
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">صندوق پیام‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            پوشه‌ها، انتخاب گروهی و منوهای راست‌چین
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
            className="w-48 space-y-1 p-2"
          >
            <p className="px-2 py-1.5 text-sm font-medium">میان‌برها</p>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start"
              onClick={markSelectedRead}
            >
              خواندن انتخاب‌شده‌ها
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-8 w-full justify-start text-destructive hover:text-destructive"
              onClick={deleteSelected}
            >
              حذف انتخاب‌شده‌ها
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[11rem_1fr]">
        <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            پوشه‌ها
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {FOLDERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFolder(f.id)}
                className={cn(
                  "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                  folder === f.id && "bg-muted font-medium"
                )}
              >
                {f.label}
              </button>
            ))}
          </nav>
          <Separator className="my-3" />
          <Field>
            <FieldLabel htmlFor="inbox5-fwd">فوروارد به</FieldLabel>
            <Input
              id="inbox5-fwd"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو نام یا متن پیام…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...STATUS_ITEMS]}
              value={status}
              onValueChange={(value) => {
                if (STATUS_ITEMS.some((item) => item.value === value)) {
                  setStatus(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full lg:w-36" dir="rtl">
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {STATUS_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selected.length > 0 ? (
            <div className="mb-3 flex flex-wrap items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
              <span className="text-sm tracking-normal">
                {toFa(selected.length)} انتخاب‌شده
              </span>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={markSelectedRead}
              >
                <CheckIcon className="size-3.5" />
                خوانده
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={deleteSelected}
              >
                <Trash2Icon className="size-3.5" />
                حذف
              </Button>
            </div>
          ) : null}

          <div className="overflow-hidden rounded-lg border">
            <div className="flex items-center gap-3 border-b bg-muted/30 px-4 py-2">
              <Checkbox
                checked={allSelected}
                onCheckedChange={(v) => toggleAll(Boolean(v))}
                aria-label="انتخاب همه"
              />
              <span className="text-xs tracking-normal text-muted-foreground">
                {toFa(rows.length)} پیام
              </span>
            </div>
            {rows.map((m, i) => (
              <div key={m.id}>
                {i > 0 && <Separator />}
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-3",
                    m.unread && "bg-muted/40"
                  )}
                >
                  <Checkbox
                    checked={selected.includes(m.id)}
                    onCheckedChange={(v) => toggleOne(m.id, Boolean(v))}
                    aria-label={`انتخاب ${m.name}`}
                  />
                  <Avatar className="size-9">
                    {m.avatar ? (
                      <AvatarImage src={m.avatar} alt={m.name} />
                    ) : null}
                    <AvatarFallback>{m.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium">{m.name}</p>
                      {m.starred ? (
                        <StarIcon className="size-3.5 fill-amber-400 text-amber-400" />
                      ) : null}
                      {m.unread ? (
                        <Badge variant="outline" className="h-5 border">
                          جدید
                        </Badge>
                      ) : null}
                    </div>
                    <p className="truncate text-xs tracking-normal text-muted-foreground">
                      <span dir="ltr" className="inline-block text-start">
                        {m.email}
                      </span>
                    </p>
                    <p className="truncate text-sm text-muted-foreground">
                      {m.preview}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                    {m.time}
                  </span>
                  <Popover
                    open={openId === m.id}
                    onOpenChange={(open) => setOpenId(open ? m.id : null)}
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
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => {
                          setItems((prev) =>
                            prev.map((x) =>
                              x.id === m.id ? { ...x, unread: false } : x
                            )
                          )
                          setOpenId(null)
                        }}
                      >
                        <CheckIcon className="size-4" />
                        علامت خوانده
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => {
                          setItems((prev) =>
                            prev.map((x) =>
                              x.id === m.id ? { ...x, starred: !x.starred } : x
                            )
                          )
                          setOpenId(null)
                        }}
                      >
                        <StarIcon className="size-4" />
                        ستاره
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        <ArchiveIcon className="size-4" />
                        بایگانی
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setItems((prev) => prev.filter((x) => x.id !== m.id))
                          setOpenId(null)
                        }}
                      >
                        <Trash2Icon className="size-4" />
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
