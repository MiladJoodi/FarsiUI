"use client"

import { useState } from "react"
import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  CopyIcon,
  LinkIcon,
  MapPinIcon,
  MoreHorizontalIcon,
  ShareIcon,
  UsersIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const EVENT_DATE = new Date()

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

const ATTENDEES = [
  {
    name: "مریم رضایی",
    email: "maryam@example.com",
    status: "پذیرفته",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    email: "ali@example.com",
    status: "پذیرفته",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    fallback: "عل",
  },
  {
    name: "سارا کریمی",
    email: "sara@example.com",
    status: "در انتظار",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80",
    fallback: "سا",
  },
] as const

const FILES = [
  { name: "agenda.pdf", size: "۲۴۰ کیلوبایت" },
  { name: "notes.md", size: "۱۲ کیلوبایت" },
] as const

export function EventDetailsFancy() {
  const [remind, setRemind] = useState(true)
  const [online, setOnline] = useState(true)
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center overflow-hidden px-6 py-16 md:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 to-transparent"
      />

      <div className="relative mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge>جلسه محصول</Badge>
            <Badge variant="secondary">تأیید شده</Badge>
            <Badge variant="outline">
              <bdi dir="ltr">{formatJalaliCompact(EVENT_DATE)}</bdi>
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            جلسهٔ تیم محصول
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            هماهنگی اسپرینت بعدی و اولویت‌های انتشار — همهٔ تاریخ‌ها شمسی
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
            {copied ? "کپی شد" : "کپی لینک"}
          </Button>
          <Button size="sm">
            <ShareIcon data-icon="inline-start" />
            اشتراک‌گذاری
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="icon-sm" aria-label="بیشتر" />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" dir="rtl" lang="fa">
              <DropdownMenuItem>افزودن به تقویم</DropdownMenuItem>
              <DropdownMenuItem>تکرار رویداد</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">حذف رویداد</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="overview" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">نمای کلی</TabsTrigger>
            <TabsTrigger value="edit">ویرایش</TabsTrigger>
            <TabsTrigger value="files">پیوست‌ها</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardContent className="grid gap-4 pt-6 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border p-3">
                  <CalendarIcon className="mt-0.5 size-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">تاریخ</p>
                    <p className="text-sm font-medium">{formatJalali(EVENT_DATE)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border p-3">
                  <ClockIcon className="mt-0.5 size-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">ساعت</p>
                    <p className="text-sm font-medium">
                      <bdi dir="ltr">۱۰:۰۰ – ۱۱:۳۰</bdi>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border p-3">
                  <MapPinIcon className="mt-0.5 size-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">مکان</p>
                    <p className="text-sm font-medium">اتاق آبی</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-start">
                <CardTitle>توضیحات</CardTitle>
                <CardDescription>جزئیات جلسه برای شرکت‌کنندگان</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  در این جلسه وضعیت اسپرینت جاری را مرور می‌کنیم، بک‌لاگ را
                  اولویت‌بندی می‌کنیم و زمان انتشار بعدی را قطعی می‌کنیم.
                </p>
                <div className="flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-foreground">
                  <LinkIcon className="size-4 shrink-0 text-muted-foreground" />
                  <bdi dir="ltr" className="truncate text-xs sm:text-sm">
                    meet.example.com/product-sync
                  </bdi>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>ویرایش رویداد</CardTitle>
                <CardDescription>
                  ایمیل و زمان به‌صورت LTR
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="ed5-title">عنوان</FieldLabel>
                  <Input
                    id="ed5-title"
                    defaultValue="جلسهٔ تیم محصول"
                    dir="rtl"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel>نوع</FieldLabel>
                    <Select defaultValue="meeting">
                      <SelectTrigger className="w-full" dir="rtl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        <SelectItem value="meeting">جلسه</SelectItem>
                        <SelectItem value="deadline">ددلاین</SelectItem>
                        <SelectItem value="personal">شخصی</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ed5-place">مکان</FieldLabel>
                    <Input id="ed5-place" defaultValue="اتاق آبی" dir="rtl" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="ed5-start">شروع</FieldLabel>
                    <Input
                      id="ed5-start"
                      type="time"
                      defaultValue="10:00"
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="ed5-end">پایان</FieldLabel>
                    <Input
                      id="ed5-end"
                      type="time"
                      defaultValue="11:30"
                      dir="ltr"
                      className="text-start appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="ed5-notes">توضیحات</FieldLabel>
                  <Textarea
                    id="ed5-notes"
                    rows={3}
                    dir="rtl"
                    defaultValue="هماهنگی اسپرینت بعدی و اولویت‌های انتشار."
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ed5-invite">دعوت ایمیل</FieldLabel>
                  <Input
                    id="ed5-invite"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                  <FieldDescription>یک آدرس در هر بار</FieldDescription>
                </Field>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="ed5-online" className="flex items-center gap-2">
                    <LinkIcon className="size-4 text-muted-foreground" />
                    جلسه آنلاین
                  </Label>
                  <Switch
                    id="ed5-online"
                    checked={online}
                    onCheckedChange={setOnline}
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="ed5-remind" className="flex items-center gap-2">
                    <BellIcon className="size-4 text-muted-foreground" />
                    یادآوری ۱۵ دقیقه قبل
                  </Label>
                  <Switch
                    id="ed5-remind"
                    checked={remind}
                    onCheckedChange={setRemind}
                  />
                </div>
              </CardContent>
              <CardFooter className="gap-2 border-t">
                <Button className="flex-1">ذخیره تغییرات</Button>
                <Button variant="outline" className="flex-1">
                  لغو
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="files">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>پیوست‌ها</CardTitle>
                <CardDescription>فایل‌های مرتبط با این رویداد</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {FILES.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm"
                  >
                    <bdi dir="ltr" className="font-medium">
                      {f.name}
                    </bdi>
                    <span className="text-xs text-muted-foreground">{f.size}</span>
                  </div>
                ))}
                <Button variant="outline" className="mt-2 w-full" size="sm">
                  افزودن فایل
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardHeader className="text-start">
              <CardTitle className="flex items-center gap-2 text-base">
                <UsersIcon className="size-4" />
                شرکت‌کنندگان
              </CardTitle>
              <CardDescription>
                <bdi dir="ltr">{ATTENDEES.length}</bdi> نفر دعوت‌شده
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {ATTENDEES.map((a) => (
                <div key={a.email} className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarImage src={a.src} alt={a.name} />
                    <AvatarFallback>{a.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{a.name}</p>
                    <bdi
                      dir="ltr"
                      className="block truncate text-xs text-muted-foreground"
                    >
                      {a.email}
                    </bdi>
                  </div>
                  <Badge
                    variant={a.status === "پذیرفته" ? "secondary" : "outline"}
                    className="shrink-0 text-[10px]"
                  >
                    {a.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline" className="w-full" size="sm">
                دعوت بیشتر
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-start">
              <CardTitle className="text-base">پاسخ شما</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2">
              <Button size="sm">پذیرش</Button>
              <Button size="sm" variant="outline">
                شاید
              </Button>
              <Button size="sm" variant="destructive">
                رد
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
