"use client"

import * as React from "react"
import { LaptopIcon, MoreHorizontalIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-mira/ui/dropdown-menu"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

type Session = {
  id: string
  device: string
  place: string
  ip: string
  lastActive: string
  current?: boolean
  kind: "laptop" | "phone"
}

const INITIAL: Session[] = [
  {
    id: "1",
    device: "Chrome روی ویندوز",
    place: "تهران",
    ip: "185.12.34.56",
    lastActive: "الان",
    current: true,
    kind: "laptop",
  },
  {
    id: "2",
    device: "Safari روی آیفون",
    place: "تهران",
    ip: "185.12.34.90",
    lastActive: "۳ ساعت پیش",
    kind: "phone",
  },
  {
    id: "3",
    device: "Firefox روی مک",
    place: "اصفهان",
    ip: "91.98.12.3",
    lastActive: "دیروز",
    kind: "laptop",
  },
  {
    id: "4",
    device: "Edge روی ویندوز",
    place: "شیراز",
    ip: "78.38.50.1",
    lastActive: "۵ روز پیش",
    kind: "laptop",
  },
]

export function SessionsList() {
  const [sessions, setSessions] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState("all")

  const filtered = sessions.filter((s) => {
    if (filter === "current" && !s.current) return false
    if (filter === "other" && s.current) return false
    if (query && !`${s.device}${s.place}`.includes(query)) return false
    return true
  })

  function revoke(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>نشست‌های فعال</CardTitle>
            <CardDescription>جستجوی فارسی RTL · IP انگلیسی LTR</CardDescription>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSessions((prev) => prev.filter((s) => s.current))}
          >
            خروج از بقیه
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو دستگاه یا شهر…"
              dir="rtl"
              className="flex-1"
            />
            <Select
              value={filter}
              onValueChange={(v) => setFilter((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="current">همین دستگاه</SelectItem>
                <SelectItem value="other">سایر</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ul className="space-y-0 rounded-lg border">
            {filtered.map((s, i) => {
              const Icon = s.kind === "phone" ? SmartphoneIcon : LaptopIcon
              return (
                <li key={s.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {s.device}
                        </p>
                        {s.current ? (
                          <Badge variant="secondary">همین دستگاه</Badge>
                        ) : null}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {s.place} · {s.lastActive} · <bdi dir="ltr">{s.ip}</bdi>
                      </p>
                    </div>
                    {!s.current ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="ghost" size="icon-sm" />}
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">عملیات</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent dir="rtl" lang="fa" align="start">
                          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>جزئیات نشست</DropdownMenuItem>
                          <DropdownMenuItem>اعتماد به دستگاه</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() => revoke(s.id)}
                          >
                            پایان نشست
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
