"use client"

import * as React from "react"
import { addDays } from "date-fns"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"

const KIND_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "جلسه", label: "جلسه" },
  { value: "طراحی", label: "طراحی" },
  { value: "تحقیق", label: "تحقیق" },
  { value: "ددلاین", label: "ددلاین" },
] as const

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "short",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
  })
  return `${weekday}، ${rest}`
}

const today = new Date()
const EVENTS = [
  {
    title: "جلسهٔ تیم محصول",
    time: "۱۰:۰۰",
    date: today,
    kind: "جلسه",
  },
  {
    title: "بازبینی طراحی",
    time: "۱۴:۳۰",
    date: addDays(today, 1),
    kind: "طراحی",
  },
  {
    title: "مصاحبهٔ کاربری",
    time: "۱۱:۰۰",
    date: addDays(today, 2),
    kind: "تحقیق",
  },
  {
    title: "تحویل نسخهٔ بتا",
    time: "۱۶:۰۰",
    date: addDays(today, 5),
    kind: "ددلاین",
  },
] as const

export default function EventListFilter() {
  const [query, setQuery] = React.useState("")
  const [kind, setKind] = React.useState("همه")

  const rows = EVENTS.filter((ev) => {
    if (kind !== "همه" && ev.kind !== kind) return false
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
            <CardDescription>فیلتر نوع و دعوت با ایمیل LTR</CardDescription>
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
              items={[...KIND_ITEMS]}
              value={kind}
              onValueChange={(value) => {
                if (KIND_ITEMS.some((item) => item.value === value)) {
                  setKind(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {KIND_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
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
                        <Badge variant="outline">{ev.kind}</Badge>
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {formatJalali(ev.date)} · ساعت {ev.time}
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
