"use client"

import * as React from "react"
import { cn } from "cn"
import {
  CheckIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { Textarea } from "@/registry/bases/base/ui/textarea"

type Comment = {
  id: string
  name: string
  email: string
  text: string
  time: string
  status: "approved" | "pending" | "spam"
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
    status: "approved",
    initials: "سم",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    text: "کاش نمونهٔ فرم چندمرحله‌ای هم اضافه شود.",
    time: "۵ ساعت پیش",
    status: "pending",
    initials: "عر",
  },
  {
    id: "3",
    name: "اسپم‌بات",
    email: "spam@example.com",
    text: "خرید ارزان همین حالا!!!",
    time: "دیروز",
    status: "spam",
    initials: "اس",
  },
  {
    id: "4",
    name: "مینا کریمی",
    email: "mina@example.com",
    text: "مستندات نصب واضح بود.",
    time: "۲ روز پیش",
    status: "approved",
    initials: "مک",
  },
]

const NAV = [
  { id: "all", label: "همه" },
  { id: "pending", label: "در انتظار" },
  { id: "approved", label: "تأییدشده" },
  { id: "spam", label: "اسپم" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function CommentsHub() {
  const [items, setItems] = React.useState(INITIAL)
  const [tab, setTab] = React.useState<NavId>("all")
  const [sort, setSort] = React.useState("newest")
  const [query, setQuery] = React.useState("")

  const rows = items.filter((c) => {
    if (tab !== "all" && c.status !== tab) return false
    if (query && !`${c.name}${c.text}${c.email}`.includes(query)) return false
    return true
  })

  function setStatus(id: string, status: Comment["status"]) {
    setItems((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    )
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((c) => c.id !== id))
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
          <h2 className="text-3xl font-bold tracking-tight">مدیریت دیدگاه‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            تأیید، اسپم، اعلان ایمیل و منوهای RTL
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                setItems((prev) =>
                  prev.map((c) =>
                    c.status === "pending" ? { ...c, status: "approved" } : c
                  )
                )
              }
            >
              تأیید همهٔ در انتظار
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() =>
                setItems((prev) => prev.filter((c) => c.status !== "spam"))
              }
            >
              حذف همهٔ اسپم
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "newest")}
            >
              <SelectTrigger className="w-full lg:w-36" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="oldest">قدیمی‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-8 text-center text-sm text-muted-foreground">
                دیدگاهی نیست
              </p>
            ) : (
              (sort === "oldest" ? [...rows].reverse() : rows).map((c, i) => (
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
                            c.status === "spam"
                              ? "destructive"
                              : c.status === "pending"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {c.status === "spam"
                            ? "اسپم"
                            : c.status === "pending"
                              ? "در انتظار"
                              : "تأییدشده"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {c.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <bdi dir="ltr">{c.email}</bdi>
                      </p>
                      <p className="text-sm leading-relaxed">{c.text}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={<Button variant="ghost" size="icon-sm" />}
                      >
                        <MoreHorizontalIcon className="size-4" />
                        <span className="sr-only">عملیات</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent dir="rtl" lang="fa" align="start">
                        <DropdownMenuItem
                          onClick={() => setStatus(c.id, "approved")}
                        >
                          <CheckIcon className="size-4" />
                          تأیید
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setStatus(c.id, "pending")}
                        >
                          در انتظار
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setStatus(c.id, "spam")}
                        >
                          علامت اسپم
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => remove(c.id)}
                        >
                          <Trash2Icon className="size-4" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-2 rounded-lg border p-4">
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
