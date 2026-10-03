"use client"

import * as React from "react"
import { LaptopIcon, MoreHorizontalIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-lyra/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"

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
    ip: "۱۸۵.۱۲.۳۴.۵۶",
    lastActive: "الان",
    current: true,
    kind: "laptop",
  },
  {
    id: "2",
    device: "Safari روی آیفون",
    place: "تهران",
    ip: "۱۸۵.۱۲.۳۴.۹۰",
    lastActive: "۳ ساعت پیش",
    kind: "phone",
  },
  {
    id: "3",
    device: "Firefox روی مک",
    place: "اصفهان",
    ip: "۹۱.۹۸.۱۲.۳",
    lastActive: "دیروز",
    kind: "laptop",
  },
  {
    id: "4",
    device: "Edge روی ویندوز",
    place: "شیراز",
    ip: "۷۸.۳۸.۵۰.۱",
    lastActive: "۵ روز پیش",
    kind: "laptop",
  },
]

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "همین دستگاه", label: "همین دستگاه" },
  { value: "سایر", label: "سایر" },
] as const

export function SessionsList() {
  const [sessions, setSessions] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [filter, setFilter] = React.useState("همه")
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filtered = sessions.filter((s) => {
    if (filter === "همین دستگاه" && !s.current) return false
    if (filter === "سایر" && s.current) return false
    if (query && !`${s.device}${s.place}`.includes(query)) return false
    return true
  })

  function revoke(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id))
    setOpenId(null)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>نشست‌های فعال</CardTitle>
            <CardDescription>
              جستجوی فارسی راست‌چین؛ آدرس آی‌پی چپ‌چین
            </CardDescription>
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
              items={[...FILTER_ITEMS]}
              value={filter}
              onValueChange={(value) => {
                if (FILTER_ITEMS.some((item) => item.value === value)) {
                  setFilter(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="فیلتر" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FILTER_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
                          <Badge variant="outline" className="border">
                            همین دستگاه
                          </Badge>
                        ) : null}
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {s.place} · {s.lastActive} ·{" "}
                        <span dir="ltr" className="inline-block text-start">
                          {s.ip}
                        </span>
                      </p>
                    </div>
                    {!s.current ? (
                      <Popover
                        open={openId === s.id}
                        onOpenChange={(open) => setOpenId(open ? s.id : null)}
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
                          className="w-44 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            جزئیات نشست
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            اعتماد به دستگاه
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => revoke(s.id)}
                          >
                            پایان نشست
                          </Button>
                        </PopoverContent>
                      </Popover>
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
