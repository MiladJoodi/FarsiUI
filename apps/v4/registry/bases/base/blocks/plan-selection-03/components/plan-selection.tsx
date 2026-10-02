"use client"

import * as React from "react"

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
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const PLANS = [
  { id: "starter", name: "شروع", monthly: "۱۹۹٬۰۰۰", yearly: "۱٬۹۰۰٬۰۰۰" },
  { id: "pro", name: "حرفه‌ای", monthly: "۴۹۹٬۰۰۰", yearly: "۴٬۷۹۰٬۰۰۰" },
  { id: "team", name: "تیم", monthly: "۸۹۹٬۰۰۰", yearly: "۸٬۶۳۰٬۰۰۰" },
] as const

export function PlanSelectionConfigForm() {
  const [plan, setPlan] = React.useState("pro")
  const [yearly, setYearly] = React.useState(false)
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
                  <bdi dir="ltr" className="text-sm tabular-nums">
                    {yearly ? p.yearly : p.monthly}
                  </bdi>
                </Label>
              ))}
            </RadioGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="ps3-seats">تعداد صندلی</FieldLabel>
            <Input
              id="ps3-seats"
              type="number"
              min={1}
              defaultValue={3}
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>برای طرح تیم</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>شروع از</FieldLabel>
            <Select defaultValue="now">
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="now">همین حالا</SelectItem>
                <SelectItem value="period">پایان دورهٔ جاری</SelectItem>
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
          <div className="flex justify-between text-sm font-medium">
            <span>جمع انتخاب</span>
            <span>
              <bdi dir="ltr">{price}</bdi> تومان /{" "}
              {yearly ? "سال" : "ماه"}
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
