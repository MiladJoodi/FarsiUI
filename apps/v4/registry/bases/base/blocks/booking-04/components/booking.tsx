"use client"

import * as React from "react"
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  UserIcon,
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"

const STAFF = [
  {
    id: "۱",
    name: "دکتر مریم رضایی",
    role: "مشاور",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&auto=format&fit=crop&q=80",
    fallback: "مر",
  },
  {
    id: "۲",
    name: "دکتر علی محمدی",
    role: "متخصص",
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&auto=format&fit=crop&q=80",
    fallback: "عل",
  },
] as const

const SLOTS = [
  { label: "۰۹:۰۰", free: true },
  { label: "۱۰:۰۰", free: false },
  { label: "۱۱:۳۰", free: true },
  { label: "۱۴:۰۰", free: true },
  { label: "۱۵:۳۰", free: true },
  { label: "۱۷:۰۰", free: false },
] as const

const STEPS = ["متخصص", "زمان", "تأیید"] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

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

export default function BookingDashboard() {
  const [step, setStep] = React.useState(0)
  const [staffId, setStaffId] = React.useState<(typeof STAFF)[number]["id"]>("۱")
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [slot, setSlot] = React.useState("۱۱:۳۰")
  const staff = STAFF.find((s) => s.id === staffId)!

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">رزرو نوبت</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          انتخاب متخصص و زمان شمسی
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {STEPS.map((label, i) => (
          <Badge
            key={label}
            variant={i === step ? "default" : i < step ? "secondary" : "outline"}
            className="gap-1 tracking-normal"
          >
            {i < step ? <CheckIcon className="size-3" /> : null}
            {toFa(i + 1)}. {label}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Card>
          {step === 0 ? (
            <>
              <CardHeader className="text-start">
                <CardTitle>انتخاب متخصص</CardTitle>
                <CardDescription>یک نفر را انتخاب کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {STAFF.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStaffId(s.id)}
                    className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-start transition-colors ${
                      staffId === s.id
                        ? "border-primary bg-primary/5"
                        : "hover:bg-muted/40"
                    }`}
                  >
                    <Avatar className="size-11">
                      <AvatarImage src={s.src} alt={s.name} />
                      <AvatarFallback>{s.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role}</p>
                    </div>
                  </button>
                ))}
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full" onClick={() => setStep(1)}>
                  ادامه
                </Button>
              </CardFooter>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <CardHeader className="text-start">
                <CardTitle>تاریخ و ساعت</CardTitle>
                <CardDescription>تقویم شمسی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {SLOTS.map((s) => (
                    <Button
                      key={s.label}
                      variant={slot === s.label ? "default" : "outline"}
                      size="sm"
                      disabled={!s.free}
                      className="tracking-normal"
                      onClick={() => setSlot(s.label)}
                    >
                      {s.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 border-t">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(0)}
                >
                  قبلی
                </Button>
                <Button className="flex-1" onClick={() => setStep(2)}>
                  ادامه
                </Button>
              </CardFooter>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <CardHeader className="text-start">
                <CardTitle>تأیید رزرو</CardTitle>
                <CardDescription>خلاصه نوبت را بررسی کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <UserIcon className="size-4 text-muted-foreground" />
                  <span>{staff.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarIcon className="size-4 text-muted-foreground" />
                  <span className="tracking-normal">
                    {date ? formatJalali(date) : "—"}
                  </span>
                </div>
                <div className="flex items-center gap-3 tracking-normal">
                  <ClockIcon className="size-4 text-muted-foreground" />
                  <span>{slot}</span>
                </div>
              </CardContent>
              <CardFooter className="gap-2 border-t">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  قبلی
                </Button>
                <Button className="flex-1">ثبت نهایی</Button>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarImage src={staff.src} alt={staff.name} />
                <AvatarFallback>{staff.fallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{staff.name}</p>
                <p className="text-xs text-muted-foreground">{staff.role}</p>
              </div>
            </div>
            <Separator />
            <p className="tracking-normal">
              {date ? formatJalali(date) : "تاریخ انتخاب نشده"}
            </p>
            {date ? (
              <p className="text-xs text-muted-foreground tracking-normal">
                {formatJalaliCompact(date)}
              </p>
            ) : null}
            <p className="tracking-normal">ساعت {slot}</p>
            <p className="font-medium tracking-normal">۳۵۰٬۰۰۰ تومان</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
