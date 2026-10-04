"use client"

import * as React from "react"
import { BellIcon, CalendarIcon, ClockIcon, PlusIcon } from "lucide-react"

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
import { Field, FieldLabel } from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-rhea/ui/tabs"

const TODAY = new Date()

const FILTER_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "جلسه", label: "جلسه" },
  { value: "طراحی", label: "طراحی" },
  { value: "مشتری", label: "مشتری" },
  { value: "اسپرینت", label: "اسپرینت" },
] as const

const TYPE_ITEMS = [
  { value: "جلسه", label: "جلسه" },
  { value: "تمرکز", label: "تمرکز" },
  { value: "شخصی", label: "شخصی" },
] as const

const TIME_ITEMS = [
  { value: "۰۹:۰۰", label: "۰۹:۰۰" },
  { value: "۱۰:۰۰", label: "۱۰:۰۰" },
  { value: "۱۱:۰۰", label: "۱۱:۰۰" },
  { value: "۱۳:۰۰", label: "۱۳:۰۰" },
  { value: "۱۴:۰۰", label: "۱۴:۰۰" },
  { value: "۱۵:۰۰", label: "۱۵:۰۰" },
  { value: "۱۶:۰۰", label: "۱۶:۰۰" },
  { value: "۱۸:۰۰", label: "۱۸:۰۰" },
] as const

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `${weekday}، ${rest}`
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

const HOURS = [
  "۰۸:۰۰",
  "۰۹:۰۰",
  "۱۰:۰۰",
  "۱۱:۰۰",
  "۱۲:۰۰",
  "۱۳:۰۰",
  "۱۴:۰۰",
  "۱۵:۰۰",
  "۱۶:۰۰",
  "۱۷:۰۰",
] as const

type Slot = {
  id: string
  hour: string
  title: string
  type: string
  duration: string
}

const INITIAL: Slot[] = [
  {
    id: "1",
    hour: "۰۹:۰۰",
    title: "جلسه صبحگاهی",
    type: "جلسه",
    duration: "۳۰ دقیقه",
  },
  {
    id: "2",
    hour: "۱۱:۰۰",
    title: "بازبینی طراحی",
    type: "طراحی",
    duration: "۶۰ دقیقه",
  },
  {
    id: "3",
    hour: "۱۴:۳۰",
    title: "تماس با مشتری",
    type: "مشتری",
    duration: "۴۵ دقیقه",
  },
  {
    id: "4",
    hour: "۱۶:۰۰",
    title: "برنامه‌ریزی اسپرینت",
    type: "اسپرینت",
    duration: "۶۰ دقیقه",
  },
]

export default function ScheduleFancy() {
  const [slots, setSlots] = React.useState(INITIAL)
  const [filter, setFilter] = React.useState("همه")
  const [busy, setBusy] = React.useState(true)
  const [remind, setRemind] = React.useState(true)
  const [type, setType] = React.useState("جلسه")
  const [start, setStart] = React.useState("۱۳:۰۰")
  const [end, setEnd] = React.useState("۱۴:۰۰")

  const visible =
    filter === "همه" ? slots : slots.filter((s) => s.type === filter)

  function removeSlot(id: string) {
    setSlots((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge>امروز</Badge>
            <Badge variant="outline" className="tracking-normal">
              {formatJalaliCompact(TODAY)}
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            برنامه زمانی
          </h1>
          <p className="mt-2 text-sm tracking-normal text-muted-foreground">
            {formatJalali(TODAY)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select
            items={[...FILTER_ITEMS]}
            value={filter}
            onValueChange={(value) => {
              if (FILTER_ITEMS.some((item) => item.value === value)) {
                setFilter(value as string)
              }
            }}
          >
            <SelectTrigger className="w-[140px]" dir="rtl" size="sm">
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
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            اسلات جدید
          </Button>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Tabs defaultValue="timeline" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="timeline">جدول زمانی</TabsTrigger>
            <TabsTrigger value="list">فهرست</TabsTrigger>
            <TabsTrigger value="add">افزودن</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2 text-base">
                  <ClockIcon className="size-4" />
                  محور روز
                </CardTitle>
                <CardDescription className="tracking-normal">
                  {toFa(visible.length)} مورد در برنامه
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-0">
                {HOURS.map((hour) => {
                  const atHour = visible.filter(
                    (s) =>
                      s.hour === hour || s.hour.startsWith(hour.slice(0, 3))
                  )
                  return (
                    <div
                      key={hour}
                      className="grid grid-cols-[4.5rem_1fr] gap-3 border-t py-3 first:border-t-0"
                    >
                      <span className="pt-1 text-xs tracking-normal text-muted-foreground">
                        {hour}
                      </span>
                      <div className="min-h-8">
                        {atHour.length === 0 ? (
                          <div className="h-8 rounded-md border border-dashed bg-muted/20" />
                        ) : (
                          atHour.map((s) => (
                            <div
                              key={s.id}
                              className="mb-1 flex items-center justify-between gap-2 rounded-md border bg-primary/5 px-3 py-2 text-sm last:mb-0"
                            >
                              <div>
                                <p className="font-medium">{s.title}</p>
                                <p className="text-xs tracking-normal text-muted-foreground">
                                  {s.hour} · {s.duration}
                                </p>
                              </div>
                              <Badge variant="secondary">{s.type}</Badge>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="space-y-2">
            {visible.map((s) => (
              <Card key={s.id}>
                <CardContent className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-medium">{s.title}</p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {s.hour} · {s.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{s.type}</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSlot(s.id)}
                    >
                      حذف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {visible.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                موردی با این فیلتر نیست
              </p>
            ) : null}
          </TabsContent>

          <TabsContent value="add">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>افزودن اسلات</CardTitle>
                <CardDescription>ساعت و نوع فارسی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="sch5-title">عنوان</FieldLabel>
                  <Input id="sch5-title" placeholder="عنوان برنامه" dir="rtl" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
                  <Field>
                    <FieldLabel>شروع</FieldLabel>
                    <Select
                      items={[...TIME_ITEMS]}
                      value={start}
                      onValueChange={(value) => {
                        if (TIME_ITEMS.some((item) => item.value === value)) {
                          setStart(value as string)
                        }
                      }}
                    >
                      <SelectTrigger className="w-full" dir="rtl">
                        <SelectValue placeholder="شروع" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        {TIME_ITEMS.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel>پایان</FieldLabel>
                    <Select
                      items={[...TIME_ITEMS]}
                      value={end}
                      onValueChange={(value) => {
                        if (TIME_ITEMS.some((item) => item.value === value)) {
                          setEnd(value as string)
                        }
                      }}
                    >
                      <SelectTrigger className="w-full" dir="rtl">
                        <SelectValue placeholder="پایان" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        {TIME_ITEMS.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel>نوع</FieldLabel>
                  <Select
                    items={[...TYPE_ITEMS]}
                    value={type}
                    onValueChange={(value) => {
                      if (TYPE_ITEMS.some((item) => item.value === value)) {
                        setType(value as string)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
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
                </Field>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full">افزودن به برنامه</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarIcon className="size-4" />
                خلاصه روز
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">تعداد اسلات</span>
                <span className="font-medium tracking-normal">
                  {toFa(slots.length)}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">اولین</span>
                <span className="tracking-normal">{slots[0]?.hour ?? "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">آخرین</span>
                <span className="tracking-normal">
                  {slots[slots.length - 1]?.hour ?? "—"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">تنظیمات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="sch5-busy" className="flex items-center gap-2">
                  <ClockIcon className="size-4 text-muted-foreground" />
                  نمایش مشغول بودن
                </Label>
                <Switch
                  id="sch5-busy"
                  checked={busy}
                  onCheckedChange={setBusy}
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label
                  htmlFor="sch5-remind"
                  className="flex items-center gap-2"
                >
                  <BellIcon className="size-4 text-muted-foreground" />
                  یادآوری پیش‌فرض
                </Label>
                <Switch
                  id="sch5-remind"
                  checked={remind}
                  onCheckedChange={setRemind}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
