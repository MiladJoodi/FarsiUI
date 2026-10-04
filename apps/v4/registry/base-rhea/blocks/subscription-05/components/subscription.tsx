"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  CalendarIcon,
  CheckIcon,
  CreditCardIcon,
} from "lucide-react"

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
import { Label } from "@/registry/base-rhea/ui/label"
import { Progress } from "@/registry/base-rhea/ui/progress"
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
import { Textarea } from "@/registry/base-rhea/ui/textarea"

const PLAN_ITEMS = [
  { value: "شروع", label: "شروع" },
  { value: "حرفه‌ای", label: "حرفه‌ای" },
  { value: "تیم", label: "تیم" },
] as const

const PERIOD_ITEMS = [
  { value: "ماهانه", label: "ماهانه" },
  { value: "سالانه", label: "سالانه" },
] as const

type PlanValue = (typeof PLAN_ITEMS)[number]["value"]
type PeriodValue = (typeof PERIOD_ITEMS)[number]["value"]

const NEXT_BILLING = new Date()
NEXT_BILLING.setDate(NEXT_BILLING.getDate() + 18)

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

export default function SubscriptionFancy() {
  const [autoRenew, setAutoRenew] = React.useState(true)
  const [cancelled, setCancelled] = React.useState(false)
  const [plan, setPlan] = React.useState<PlanValue>("تیم")
  const [period, setPeriod] = React.useState<PeriodValue>("ماهانه")

  if (cancelled) {
    return (
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16"
      >
        <Card>
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
              <CheckIcon className="size-6" />
            </div>
            <CardTitle>لغو زمان‌بندی شد</CardTitle>
            <CardDescription className="tracking-normal">
              تا {formatJalali(NEXT_BILLING)} دسترسی دارید
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" onClick={() => setCancelled(false)}>
              بازگردانی اشتراک
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
            <Badge>اشتراک فعال</Badge>
            <Badge variant="outline" className="tracking-normal">
              تمدید {formatJalaliCompact(NEXT_BILLING)}
            </Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">اشتراک</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            مدیریت طرح فعلی، مصرف دوره و لغو اشتراک
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="sub5-renew" className="text-sm">
            تمدید خودکار
          </Label>
          <Switch
            id="sub5-renew"
            checked={autoRenew}
            onCheckedChange={setAutoRenew}
          />
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Tabs defaultValue="overview" className="gap-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">وضعیت</TabsTrigger>
            <TabsTrigger value="change">تغییر طرح</TabsTrigger>
            <TabsTrigger value="cancel">لغو</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>طرح حرفه‌ای</CardTitle>
                <CardDescription className="tracking-normal">
                  ۴۹۹٬۰۰۰ تومان / ماه
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm tracking-normal">
                    <span>پروژه‌ها</span>
                    <span className="text-muted-foreground">۷ / ۱۰</span>
                  </div>
                  <Progress value={70} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm tracking-normal">
                    <span>فضا</span>
                    <span className="text-muted-foreground">
                      ۱۲ / ۲۰ گیگابایت
                    </span>
                  </div>
                  <Progress value={60} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-wrap items-center justify-between gap-3 py-4 text-sm">
                <span className="flex items-center gap-2 tracking-normal">
                  <CalendarIcon className="size-4 text-muted-foreground" />
                  {formatJalali(NEXT_BILLING)}
                </span>
                <span className="flex items-center gap-2 tracking-normal">
                  <CreditCardIcon className="size-4 text-muted-foreground" />
                  **** ۴۲۱۸
                </span>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="change">
            <Card>
              <CardHeader className="text-start">
                <CardTitle>تغییر طرح</CardTitle>
                <CardDescription>
                  ارتقا یا کاهش در پایان دوره اعمال می‌شود
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>طرح جدید</FieldLabel>
                  <Select
                    items={[...PLAN_ITEMS]}
                    value={plan}
                    onValueChange={(value) => {
                      if (PLAN_ITEMS.some((item) => item.value === value)) {
                        setPlan(value as PlanValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {PLAN_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    مابه‌التفاوت در دوره بعد محاسبه می‌شود
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel>دوره</FieldLabel>
                  <Select
                    items={[...PERIOD_ITEMS]}
                    value={period}
                    onValueChange={(value) => {
                      if (PERIOD_ITEMS.some((item) => item.value === value)) {
                        setPeriod(value as PeriodValue)
                      }
                    }}
                  >
                    <SelectTrigger className="w-full" dir="rtl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {PERIOD_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="sub5-email">ایمیل تأیید</FieldLabel>
                  <Input
                    id="sub5-email"
                    type="email"
                    placeholder="name@example.com"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
              </CardContent>
              <CardFooter className="border-t">
                <Button className="w-full">درخواست تغییر</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cancel">
            <Card>
              <CardHeader className="text-start">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangleIcon className="size-4 text-destructive" />
                  لغو اشتراک
                </CardTitle>
                <CardDescription>
                  تا پایان دورهٔ جاری دسترسی حفظ می‌شود
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="sub5-reason">دلیل</FieldLabel>
                  <Textarea
                    id="sub5-reason"
                    dir="rtl"
                    rows={3}
                    placeholder="اختیاری…"
                  />
                </Field>
              </CardContent>
              <CardFooter className="border-t">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => setCancelled(true)}
                >
                  تأیید لغو در پایان دوره
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="h-fit">
          <CardHeader className="text-start">
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">طرح</span>
              <span className="font-medium">حرفه‌ای</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">وضعیت</span>
              <Badge variant="secondary">فعال</Badge>
            </div>
            <Separator />
            <div className="flex justify-between gap-2 tracking-normal">
              <span className="text-muted-foreground">مبلغ</span>
              <span>۴۹۹٬۰۰۰ تومان</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">تمدید خودکار</span>
              <span>{autoRenew ? "روشن" : "خاموش"}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
