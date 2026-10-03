"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const MESSAGES = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "سلام، وضعیت سفارش چطوره؟",
    time: "۱۰:۲۴",
    folder: "صندوق",
    unread: true,
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
    folder: "صندوق",
    unread: false,
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    folder: "ستاره‌دار",
    unread: true,
    initials: "م‌ک",
  },
  {
    id: "4",
    name: "پشتیبانی",
    email: "support@example.com",
    preview: "تیکت شما بسته شد",
    time: "هفتهٔ پیش",
    folder: "بایگانی",
    unread: false,
    initials: "پ‌ش",
  },
] as const

const FOLDER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "خوانده‌نشده", label: "خوانده‌نشده" },
  { value: "صندوق", label: "صندوق" },
  { value: "ستاره‌دار", label: "ستاره‌دار" },
  { value: "بایگانی", label: "بایگانی" },
] as const

export function MessageListFilter() {
  const [query, setQuery] = React.useState("")
  const [folder, setFolder] = React.useState("همه")

  const rows = MESSAGES.filter((m) => {
    if (folder === "خوانده‌نشده" && !m.unread) return false
    if (folder !== "همه" && folder !== "خوانده‌نشده" && m.folder !== folder) {
      return false
    }
    if (
      query &&
      !`${m.name}${m.email}${m.preview}`.toLowerCase().includes(query.toLowerCase())
    ) {
      return false
    }
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>فهرست پیام‌ها</CardTitle>
          <CardDescription>
            جستجوی فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو نام، ایمیل یا متن…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={[...FOLDER_ITEMS]}
              value={folder}
              onValueChange={(value) => {
                if (FOLDER_ITEMS.some((item) => item.value === value)) {
                  setFolder(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="پوشه" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FOLDER_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                پیامی پیدا نشد
              </p>
            ) : (
              rows.map((m, i) => (
                <div key={m.id}>
                  {i > 0 && <Separator />}
                  <div
                    className={
                      m.unread
                        ? "flex items-center gap-3 bg-muted/40 px-4 py-3"
                        : "flex items-center gap-3 px-4 py-3"
                    }
                  >
                    <Avatar className="size-9">
                      {"avatar" in m && m.avatar ? (
                        <AvatarImage src={m.avatar} alt={m.name} />
                      ) : null}
                      <AvatarFallback>{m.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">{m.name}</p>
                        <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                          {m.time}
                        </span>
                      </div>
                      <p className="truncate text-xs tracking-normal text-muted-foreground">
                        <span dir="ltr" className="inline-block text-start">
                          {m.email}
                        </span>
                      </p>
                      <div className="mt-0.5 flex items-center gap-2">
                        <p className="truncate text-sm text-muted-foreground">
                          {m.preview}
                        </p>
                        {m.unread ? (
                          <Badge variant="outline" className="shrink-0 border">
                            جدید
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
