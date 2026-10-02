"use client"

import { useState } from "react"
import {
  BellIcon,
  CalendarIcon,
  ClockIcon,
  PlusIcon,
} from "lucide-react"

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

const TODAY = new Date()

function formatJalali(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatJalaliCompact(date: Date) {
  return date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
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

export function ScheduleFancy() {
  const [slots, setSlots] = useState(INITIAL)
  const [filter, setFilter] = useState("all")
  const [busy, setBusy] = useState(true)
  const [remind, setRemind] = useState(true)

  const visible =
    filter === "all" ? slots : slots.filter((s) => s.type === filter)

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
            <Badge variant="outline">
              <bdi dir="ltr">{formatJalaliCompact(TODAY)}</bdi>
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">برنامه زمانی</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {formatJalali(TODAY)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px]" dir="rtl" size="sm">
              <SelectValue placeholder="فیلتر" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه</SelectItem>
              <SelectItem value="جلسه">جلسه</SelectItem>
              <SelectItem value="طراحی">طراحی</SelectItem>
              <SelectItem value="مشتری">مشتری</SelectItem>
              <SelectItem value="اسپرینت">اسپرینت</SelectItem>
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
                <CardDescription>
                  <bdi dir="ltr">{visible.length}</bdi> مورد در برنامه
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-0">
                {HOURS.map((hour) => {
                  const atHour = visible.filter(
                    (s) => s.hour === hour || s.hour.startsWith(hour.slice(0, 3))
                  )
                  return (
                    <div
                      key={hour}
                      className="grid grid-cols-[4.5rem_1fr] gap-3 border-t py-3 first:border-t-0"
                    >
                      <bdi
                        dir="ltr"
                        className="pt-1 text-xs tabular-nums text-muted-foreground"
                      >
                        {hour}
                      </bdi>
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
                                <p className="text-xs text-muted-foreground">
                                  <bdi dir="ltr">{s.hour}</bdi>
                                  {" · "}
                                  {s.duration}
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
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{s.hour}</bdi> · {s.duration}
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
                <CardDescription>زمان به‌صورت LTR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="sch5-title">عنوان</FieldLabel>
                  <Input id="sch5-title" placeholder="عنوان برنامه" dir="rtl" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="sch5-start">شروع</FieldLabel>
                    <Input
                      id="sch5-start"
                      type="time"
                      defaultValue="13:00"
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="sch5-end">پایان</FieldLabel>
                    <Input
                      id="sch5-end"
                      type="time"
                      defaultValue="14:00"
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel>نوع</FieldLabel>
                  <Select defaultValue="meeting">
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="meeting">جلسه</SelectItem>
                      <SelectItem value="focus">تمرکز</SelectItem>
                      <SelectItem value="personal">شخصی</SelectItem>
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
                <bdi dir="ltr" className="font-medium tabular-nums">
                  {slots.length}
                </bdi>
              </div>
              <Separator />
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">اولین</span>
                <bdi dir="ltr">{slots[0]?.hour ?? "—"}</bdi>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">آخرین</span>
                <bdi dir="ltr">{slots[slots.length - 1]?.hour ?? "—"}</bdi>
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
                <Label htmlFor="sch5-remind" className="flex items-center gap-2">
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
