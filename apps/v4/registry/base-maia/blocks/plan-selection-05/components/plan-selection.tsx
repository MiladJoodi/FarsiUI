"use client"

import * as React from "react"
import { ArrowLeftIcon, CheckIcon, UsersIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Field, FieldLabel } from "@/registry/base-maia/ui/field"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-maia/ui/tabs"

const SEAT_ITEMS = [
  { value: "۱", label: "۱" },
  { value: "۲", label: "۲" },
  { value: "۳", label: "۳" },
  { value: "۵", label: "۵" },
  { value: "۱۰", label: "۱۰" },
  { value: "۲۰", label: "۲۰" },
] as const

type SeatValue = (typeof SEAT_ITEMS)[number]["value"]

const PLAN_SEATS: Record<string, SeatValue> = {
  starter: "۱",
  pro: "۳",
  team: "۵",
}

const PLANS = [
  {
    id: "starter",
    name: "شروع",
    monthly: "۱۹۹٬۰۰۰",
    yearly: "۱٬۹۰۰٬۰۰۰",
    features: ["۱ پروژه", "پشتیبانی ایمیلی"],
  },
  {
    id: "pro",
    name: "حرفه‌ای",
    monthly: "۴۹۹٬۰۰۰",
    yearly: "۴٬۷۹۰٬۰۰۰",
    features: ["پروژه نامحدود", "اولویت پشتیبانی", "تم سفارشی"],
  },
  {
    id: "team",
    name: "تیم",
    monthly: "۸۹۹٬۰۰۰",
    yearly: "۸٬۶۳۰٬۰۰۰",
    features: ["۵ عضو پایه", "نقش‌ها", "گزارش استفاده", "SSO"],
  },
] as const

export default function PlanSelectionFancy() {
  const [plan, setPlan] = React.useState("pro")
  const [yearly, setYearly] = React.useState(true)
  const [seats, setSeats] = React.useState<SeatValue>("۳")
  const [done, setDone] = React.useState(false)
  const selected = PLANS.find((p) => p.id === plan)!
  const price = yearly ? selected.yearly : selected.monthly

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
            <CardTitle>طرح انتخاب شد</CardTitle>
            <CardDescription className="tracking-normal">
              {selected.name} · {price} تومان
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            مرحله بعد: پرداخت
          </CardContent>
          <CardFooter className="gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setDone(false)}
            >
              تغییر طرح
            </Button>
            <Button className="flex-1">برو به پرداخت</Button>
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
            <Badge variant="secondary">فلو راه‌اندازی</Badge>
            <Badge variant="outline" className="tracking-normal">
              مرحله ۲ / ۳
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">انتخاب طرح</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            مرحلهٔ راه‌اندازی حساب · انتخاب طرح و ادامه به پرداخت
          </p>
        </div>
        <Button variant="ghost" size="sm">
          <ArrowLeftIcon data-icon="inline-start" />
          قبلی
        </Button>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="plans" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="plans">طرح‌ها</TabsTrigger>
            <TabsTrigger value="team">تیم</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-3">
            <div className="mb-2 flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
              <Label htmlFor="ps5-yearly">صورتحساب سالانه (−۲۰٪)</Label>
              <Switch
                id="ps5-yearly"
                checked={yearly}
                onCheckedChange={setYearly}
              />
            </div>
            {PLANS.map((p) => {
              const active = plan === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setPlan(p.id)
                    setSeats(PLAN_SEATS[p.id] ?? "۳")
                  }}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-start ${
                    active
                      ? "border-primary bg-primary/5 ring-1 ring-primary/25"
                      : "hover:bg-muted/30"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {active ? <CheckIcon className="size-3" /> : null}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-semibold">{p.name}</p>
                      <p className="tracking-normal">
                        {yearly ? p.yearly : p.monthly}
                      </p>
                    </div>
                    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-normal text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              )
            })}
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2 text-base">
                  <UsersIcon className="size-4" />
                  اندازه تیم
                </CardTitle>
                <CardDescription>
                  صندلی‌های بیشتر روی طرح تیم اعمال می‌شود
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>تعداد عضو</FieldLabel>
                  <Select
                    items={[...SEAT_ITEMS]}
                    value={seats}
                    onValueChange={(value) => {
                      if (SEAT_ITEMS.some((item) => item.value === value)) {
                        setSeats(value as SeatValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue placeholder="تعداد" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {SEAT_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <p className="text-sm text-muted-foreground">
                  طرح انتخاب‌شده:{" "}
                  <span className="font-medium text-foreground">
                    {selected.name}
                  </span>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="h-fit lg:sticky lg:top-6">
          <CardHeader className="text-start">
            <CardTitle className="text-base">آماده ادامه؟</CardTitle>
            <CardDescription>خلاصه قبل از پرداخت</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">طرح</span>
              <span className="font-medium">{selected.name}</span>
            </div>
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">اعضا</span>
              <span>{seats}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">دوره</span>
              <span>{yearly ? "سالانه" : "ماهانه"}</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 text-base font-semibold tracking-normal">
              <span>مبلغ</span>
              <span>{price} تومان</span>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button className="w-full" onClick={() => setDone(true)}>
              تأیید طرح و ادامه
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
