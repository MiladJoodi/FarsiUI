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
} from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import { Calendar } from "@/registry/base-nova/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Field, FieldLabel } from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import { Label } from "@/registry/base-nova/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-nova/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-nova/ui/select"
import { Separator } from "@/registry/base-nova/ui/separator"
import { Switch } from "@/registry/base-nova/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-nova/ui/tabs"
import { Textarea } from "@/registry/base-nova/ui/textarea"

const SERVICES = [
  { id: "مشاوره", title: "مشاوره", price: "۳۵۰٬۰۰۰", duration: "۳۰ دقیقه" },
  { id: "معاینه", title: "معاینه", price: "۴۸۰٬۰۰۰", duration: "۴۵ دقیقه" },
  { id: "پیگیری", title: "پیگیری", price: "۲۲۰٬۰۰۰", duration: "۲۰ دقیقه" },
] as const

const SLOTS = ["۰۹:۰۰", "۱۰:۳۰", "۱۴:۰۰", "۱۶:۰۰"] as const

const PLACE_ITEMS = [
  { value: "حضوری · کلینیک", label: "حضوری · کلینیک" },
  { value: "آنلاین", label: "آنلاین" },
] as const

type ServiceId = (typeof SERVICES)[number]["id"]
type SlotValue = (typeof SLOTS)[number]
type PlaceValue = (typeof PLACE_ITEMS)[number]["value"]

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

export function BookingFancy() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [service, setService] = React.useState<ServiceId>("مشاوره")
  const [slot, setSlot] = React.useState<SlotValue>("۱۰:۳۰")
  const [place, setPlace] = React.useState<PlaceValue>("حضوری · کلینیک")
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
            <CardDescription className="tracking-normal">
              {date ? formatJalali(date) : ""} · {slot}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-center text-sm text-muted-foreground">
            <p>{selected.title}</p>
            <p className="tracking-normal">کد پیگیری: ب‌ک-۴۸۲۹۱</p>
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
            تاریخ شمسی · ساعت فارسی
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
                  <p className="mt-2 text-xs tracking-normal text-muted-foreground">
                    {formatJalaliCompact(date)}
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
                    key={s}
                    variant={slot === s ? "default" : "outline"}
                    size="sm"
                    className="tracking-normal"
                    onClick={() => setSlot(s)}
                  >
                    {s}
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
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {s.duration}
                      </p>
                    </div>
                    <span className="tracking-normal">{s.price} تومان</span>
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
                    placeholder="۰۹۱۲xxxxxxx"
                    dir="rtl"
                    className="text-start tracking-normal"
                  />
                </Field>
                <Field>
                  <FieldLabel>محل</FieldLabel>
                  <Select
                    items={[...PLACE_ITEMS]}
                    value={place}
                    onValueChange={(value) => {
                      if (PLACE_ITEMS.some((item) => item.value === value)) {
                        setPlace(value as PlaceValue)
                        setOnline(value === "آنلاین")
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {PLACE_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
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
                <span className="tracking-normal">{selected.duration}</span>
              </div>
              <Separator />
              <p className="tracking-normal">
                {date ? formatJalali(date) : "—"}
              </p>
              <p className="tracking-normal">ساعت {slot}</p>
              <Separator />
              <div className="flex justify-between gap-2 font-medium">
                <span>مبلغ</span>
                <span className="tracking-normal">{selected.price} تومان</span>
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
                  onCheckedChange={(checked) => {
                    setOnline(checked)
                    setPlace(checked ? "آنلاین" : "حضوری · کلینیک")
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
