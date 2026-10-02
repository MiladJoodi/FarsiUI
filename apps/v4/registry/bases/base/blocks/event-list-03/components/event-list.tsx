"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "short",
    month: "long",
    day: "numeric",
  })
}

const today = new Date()
const EVENTS = [
  {
    title: "جلسهٔ تیم محصول",
    time: "۱۰:۰۰",
    date: today,
    kind: "meeting",
    kindFa: "جلسه",
  },
  {
    title: "بازبینی طراحی",
    time: "۱۴:۳۰",
    date: addDays(today, 1),
    kind: "design",
    kindFa: "طراحی",
  },
  {
    title: "مصاحبهٔ کاربری",
    time: "۱۱:۰۰",
    date: addDays(today, 2),
    kind: "research",
    kindFa: "تحقیق",
  },
  {
    title: "تحویل نسخهٔ بتا",
    time: "۱۶:۰۰",
    date: addDays(today, 5),
    kind: "deadline",
    kindFa: "ددلاین",
  },
] as const

export function EventListFilter() {
  const [query, setQuery] = React.useState("")
  const [kind, setKind] = React.useState("all")

  const rows = EVENTS.filter((ev) => {
    if (kind !== "all" && ev.kind !== kind) return false
    if (query && !ev.title.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="space-y-3 text-start">
          <div>
            <CardTitle>فهرست رویدادها</CardTitle>
            <CardDescription>
              فیلتر نوع و دعوت با ایمیل LTR
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
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
              value={kind}
              onValueChange={(v) => setKind((v as string) ?? "all")}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="meeting">جلسه</SelectItem>
                <SelectItem value="design">طراحی</SelectItem>
                <SelectItem value="research">تحقیق</SelectItem>
                <SelectItem value="deadline">ددلاین</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <li className="p-8 text-center text-sm text-muted-foreground">
                رویدادی پیدا نشد
              </li>
            ) : (
              rows.map((ev, i) => (
                <li key={ev.title}>
                  {i > 0 && <Separator />}
                  <div className="flex items-center gap-3 px-3 py-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {ev.title}
                        </p>
                        <Badge variant="outline">{ev.kindFa}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatJalali(ev.date)} · ساعت{" "}
                        <bdi dir="ltr">{ev.time}</bdi>
                      </p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>

          <Field>
            <FieldLabel htmlFor="el3-email">دعوت با ایمیل</FieldLabel>
            <Input
              id="el3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>لینک رویداد ارسال می‌شود</FieldDescription>
          </Field>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">رویداد جدید</Button>
          <Button variant="outline" className="flex-1">
            ارسال دعوت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
