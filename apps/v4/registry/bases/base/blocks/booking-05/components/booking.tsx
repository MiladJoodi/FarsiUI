"use client"

import * as React from "react"
import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
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
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"

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

const SERVICES = [
  { id: "consult", title: "مشاوره", price: "۳۵۰٬۰۰۰", duration: "۳۰ دقیقه" },
  { id: "checkup", title: "معاینه", price: "۴۸۰٬۰۰۰", duration: "۴۵ دقیقه" },
  { id: "follow", title: "پیگیری", price: "۲۲۰٬۰۰۰", duration: "۲۰ دقیقه" },
] as const

const SLOTS = [
  { label: "۰۹:۰۰", value: "09:00" },
  { label: "۱۰:۳۰", value: "10:30" },
  { label: "۱۴:۰۰", value: "14:00" },
  { label: "۱۶:۰۰", value: "16:00" },
] as const

export function BookingFancy() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [service, setService] = React.useState("consult")
  const [slot, setSlot] = React.useState("10:30")
  const [remind, setRemind] = React.useState(true)
  const [online, setOnline] = React.useState(false)
  const [done, setDone] = React.useState(false)
  const selected = SERVICES.find((s) => s.id === service)!

  if (done) {
    return (
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16"
      >
        <Card>
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckIcon className="size-6" />
            </div>
            <CardTitle>رزرو ثبت شد</CardTitle>
            <CardDescription>
              {date ? formatJalali(date) : ""} ·{" "}
              <bdi dir="ltr">{slot}</bdi>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-center text-sm text-muted-foreground">
            <p>{selected.title}</p>
            <p>
              کد پیگیری: <bdi dir="ltr">BK-48291</bdi>
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => setDone(false)}>
              رزرو جدید
            </Button>
          </CardFooter>
        </Card>
      </section>
    )
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
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>کلینیک نور</Badge>
            <Badge variant="outline">
              <MapPinIcon className="size-3" />
              تهران
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">رزرو نوبت</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            تاریخ شمسی · ایمیل و ساعت LTR
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&auto=format&fit=crop&q=80"
              alt="دکتر مریم رضایی"
            />
            <AvatarFallback>م‌ر</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">دکتر مریم رضایی</p>
            <p className="text-muted-foreground">مشاور</p>
          </div>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="when" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="when">زمان</TabsTrigger>
            <TabsTrigger value="service">خدمت</TabsTrigger>
            <TabsTrigger value="info">اطلاعات</TabsTrigger>
          </TabsList>

          <TabsContent value="when" className="space-y-4">
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CalendarIcon className="size-4" />
                  تاریخ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        className="w-full justify-start font-normal"
                      />
                    }
                  >
                    <CalendarIcon data-icon="inline-start" />
                    {date ? formatJalali(date) : "انتخاب تاریخ"}
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => {
                        setDate(d)
                        setOpen(false)
                      }}
                    />
                  </PopoverContent>
                </Popover>
                {date ? (
                  <p className="mt-2 text-xs text-muted-foreground">
                    <bdi dir="ltr">{formatJalaliCompact(date)}</bdi>
                  </p>
                ) : null}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2 text-base">
                  <ClockIcon className="size-4" />
                  ساعت‌های آزاد
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {SLOTS.map((s) => (
                  <Button
                    key={s.value}
                    variant={slot === s.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSlot(s.value)}
                  >
                    <bdi dir="ltr">{s.label}</bdi>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="service">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>انتخاب خدمت</CardTitle>
                <CardDescription>قیمت به تومان</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={`flex w-full items-center justify-between rounded-lg border px-3 py-3 text-start text-sm ${
                      service === s.id
                        ? "border-primary bg-primary/5"
                        : "hover:bg-muted/40"
                    }`}
                  >
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {s.duration}
                      </p>
                    </div>
                    <span>
                      <bdi dir="ltr">{s.price}</bdi> تومان
                    </span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>اطلاعات تماس</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="bk5-name">نام</FieldLabel>
                  <Input id="bk5-name" placeholder="نام کامل" dir="rtl" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="bk5-email">ایمیل</FieldLabel>
                  <Input
                    id="bk5-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="bk5-phone">موبایل</FieldLabel>
                  <Input
                    id="bk5-phone"
                    type="tel"
                    placeholder="0912xxxxxxx"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>
                    مسیر تأیید: <bdi dir="ltr">/booking/confirm</bdi>
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel>محل</FieldLabel>
                  <Select
                    value={online ? "online" : "clinic"}
                    onValueChange={(v) => setOnline(v === "online")}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="clinic">حضوری · کلینیک</SelectItem>
                      <SelectItem value="online">آنلاین</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="bk5-notes">یادداشت</FieldLabel>
                  <Textarea
                    id="bk5-notes"
                    rows={2}
                    dir="rtl"
                    placeholder="اختیاری…"
                  />
                </Field>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">خلاصه رزرو</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">خدمت</span>
                <span className="font-medium">{selected.title}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">مدت</span>
                <span>{selected.duration}</span>
              </div>
              <Separator />
              <p>{date ? formatJalali(date) : "—"}</p>
              <p>
                ساعت <bdi dir="ltr">{slot}</bdi>
              </p>
              <Separator />
              <div className="flex justify-between gap-2 font-medium">
                <span>مبلغ</span>
                <span>
                  <bdi dir="ltr">{selected.price}</bdi> تومان
                </span>
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button className="w-full" onClick={() => setDone(true)}>
                تأیید و رزرو
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="bk5-remind" className="flex items-center gap-2">
                  <BellIcon className="size-4 text-muted-foreground" />
                  یادآوری پیامکی
                </Label>
                <Switch
                  id="bk5-remind"
                  checked={remind}
                  onCheckedChange={setRemind}
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="bk5-online">جلسه آنلاین</Label>
                <Switch
                  id="bk5-online"
                  checked={online}
                  onCheckedChange={setOnline}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
