"use client"

import * as React from "react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/base-luma/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"
import { Switch } from "@/registry/base-luma/ui/switch"

const PLANS = [
  { id: "starter", name: "شروع", monthly: "۱۹۹٬۰۰۰", yearly: "۱٬۹۰۰٬۰۰۰" },
  { id: "pro", name: "حرفه‌ای", monthly: "۴۹۹٬۰۰۰", yearly: "۴٬۷۹۰٬۰۰۰" },
  { id: "team", name: "تیم", monthly: "۸۹۹٬۰۰۰", yearly: "۸٬۶۳۰٬۰۰۰" },
] as const

const SEAT_ITEMS = [
  { value: "۱", label: "۱" },
  { value: "۲", label: "۲" },
  { value: "۳", label: "۳" },
  { value: "۵", label: "۵" },
  { value: "۱۰", label: "۱۰" },
] as const

const START_ITEMS = [
  { value: "همین حالا", label: "همین حالا" },
  { value: "پایان دورهٔ جاری", label: "پایان دورهٔ جاری" },
] as const

type SeatValue = (typeof SEAT_ITEMS)[number]["value"]
type StartValue = (typeof START_ITEMS)[number]["value"]

export default function PlanSelectionConfigForm() {
  const [plan, setPlan] = React.useState("pro")
  const [yearly, setYearly] = React.useState(false)
  const [seats, setSeats] = React.useState<SeatValue>("۳")
  const [start, setStart] = React.useState<StartValue>("همین حالا")
  const selected = PLANS.find((p) => p.id === plan)!
  const price = yearly ? selected.yearly : selected.monthly

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge className="mb-2 w-fit">ارتقا · انتخاب طرح</Badge>
          <CardTitle>پیکربندی طرح</CardTitle>
          <CardDescription>
            طرح فعلی: شروع — طرح جدید را انتخاب کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-2 rounded-lg border px-3 py-2">
            <Label htmlFor="ps3-yearly">پرداخت سالانه</Label>
            <Switch
              id="ps3-yearly"
              checked={yearly}
              onCheckedChange={setYearly}
            />
          </div>

          <Field>
            <FieldLabel>طرح</FieldLabel>
            <RadioGroup value={plan} onValueChange={setPlan} className="gap-2">
              {PLANS.map((p) => (
                <Label
                  key={p.id}
                  htmlFor={`ps3-${p.id}`}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 py-3 ${
                    plan === p.id ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={p.id} id={`ps3-${p.id}`} />
                    <span className="font-medium">{p.name}</span>
                  </div>
                  <span className="text-sm tracking-normal">
                    {yearly ? p.yearly : p.monthly}
                  </span>
                </Label>
              ))}
            </RadioGroup>
          </Field>

          <Field>
            <FieldLabel>تعداد صندلی</FieldLabel>
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
            <FieldDescription>برای طرح تیم</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>شروع از</FieldLabel>
            <Select
              items={[...START_ITEMS]}
              value={start}
              onValueChange={(value) => {
                if (START_ITEMS.some((item) => item.value === value)) {
                  setStart(value as StartValue)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {START_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="ps3-email">ایمیل صورتحساب</FieldLabel>
            <Input
              id="ps3-email"
              type="email"
              placeholder="billing@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>

          <Separator />
          <div className="flex justify-between text-sm font-medium tracking-normal">
            <span>جمع انتخاب</span>
            <span>
              {price} تومان / {yearly ? "سال" : "ماه"}
            </span>
          </div>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button variant="outline" className="flex-1">
            انصراف
          </Button>
          <Button className="flex-1">تأیید و ادامه</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
