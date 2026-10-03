"use client"

import * as React from "react"
import { CalendarIcon, CreditCardIcon, DownloadIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Field, FieldLabel } from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"
import { Label } from "@/registry/base-lyra/ui/label"
import { Progress } from "@/registry/base-lyra/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-lyra/ui/select"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-lyra/ui/tabs"

const CYCLE_ITEMS = [
  { value: "ماهانه", label: "ماهانه" },
  { value: "سالانه", label: "سالانه" },
] as const

type CycleValue = (typeof CYCLE_ITEMS)[number]["value"]

const PERIOD_START = new Date()
PERIOD_START.setDate(PERIOD_START.getDate() - 18)
const PERIOD_END = new Date()
PERIOD_END.setDate(PERIOD_END.getDate() + 12)

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

const CHARGES = [
  { label: "طرح حرفه‌ای", amount: "۴۹۹٬۰۰۰" },
  { label: "صندلی اضافی ×۲", amount: "۲۰۰٬۰۰۰" },
  { label: "مصرف API", amount: "۸۰٬۰۰۰" },
  { label: "اعتبار تخفیف", amount: "−۲۰۰٬۰۰۰" },
] as const

const USAGE = [
  { label: "API", value: 72, detail: "۷۲٬۰۰۰ / ۱۰۰٬۰۰۰" },
  { label: "فضا", value: 45, detail: "۹ / ۲۰ گیگابایت" },
] as const

export function BillingFancy() {
  const [autoPay, setAutoPay] = React.useState(true)
  const [cycle, setCycle] = React.useState<CycleValue>("ماهانه")

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
            <Badge>صورتحساب دوره</Badge>
            <Badge variant="outline" className="tracking-normal">
              {formatJalaliCompact(PERIOD_START)} –{" "}
              {formatJalaliCompact(PERIOD_END)}
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">صورتحساب</h1>
          <p className="mt-2 text-sm tracking-normal text-muted-foreground">
            هزینه و مصرف دوره جاری · سررسید {formatJalali(PERIOD_END)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            خروجی CSV
          </Button>
          <Button size="sm">پرداخت اکنون</Button>
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="charges" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="charges">هزینه‌ها</TabsTrigger>
            <TabsTrigger value="usage">مصرف</TabsTrigger>
            <TabsTrigger value="settings">دوره</TabsTrigger>
          </TabsList>

          <TabsContent value="charges">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>ریز دوره</CardTitle>
                <CardDescription>قبل از صدور فاکتور رسمی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {CHARGES.map((c) => (
                  <div
                    key={c.label}
                    className="flex justify-between gap-3 tracking-normal"
                  >
                    <span className="text-muted-foreground">{c.label}</span>
                    <span className="font-medium">{c.amount}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between gap-3 text-base font-semibold tracking-normal">
                  <span>جمع</span>
                  <span>۵۷۹٬۰۰۰ تومان</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-4">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>مصرف در دوره</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {USAGE.map((u) => (
                  <div key={u.label} className="space-y-2">
                    <div className="flex justify-between text-sm tracking-normal">
                      <span>{u.label}</span>
                      <span className="text-muted-foreground">{u.detail}</span>
                    </div>
                    <Progress value={u.value} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>تنظیمات دوره</CardTitle>
                <CardDescription>چرخه و رسید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>چرخه</FieldLabel>
                  <Select
                    items={[...CYCLE_ITEMS]}
                    value={cycle}
                    onValueChange={(value) => {
                      if (CYCLE_ITEMS.some((item) => item.value === value)) {
                        setCycle(value as CycleValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {CYCLE_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="bill5-email">ایمیل</FieldLabel>
                  <Input
                    id="bill5-email"
                    type="email"
                    placeholder="billing@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="bill5-auto">پرداخت خودکار</Label>
                  <Switch
                    id="bill5-auto"
                    checked={autoPay}
                    onCheckedChange={setAutoPay}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full">ذخیره تنظیمات</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">پرداخت بعدی</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2 tracking-normal">
              <CalendarIcon className="size-4 text-muted-foreground" />
              {formatJalali(PERIOD_END)}
            </p>
            <p className="flex items-center gap-2 tracking-normal">
              <CreditCardIcon className="size-4 text-muted-foreground" />
              **** ۴۲۱۸
            </p>
            <Separator />
            <div className="flex justify-between gap-2 font-semibold tracking-normal">
              <span>مبلغ</span>
              <span>۵۷۹٬۰۰۰ تومان</span>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button className="w-full">پرداخت اکنون</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
