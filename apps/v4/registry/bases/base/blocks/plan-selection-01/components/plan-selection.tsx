"use client"

import * as React from "react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"
import { Separator } from "@/registry/bases/base/ui/separator"

const PLANS = [
  { id: "starter", name: "شروع", price: "۱۹۹٬۰۰۰" },
  { id: "pro", name: "حرفه‌ای", price: "۴۹۹٬۰۰۰" },
  { id: "team", name: "تیم", price: "۸۹۹٬۰۰۰" },
] as const

export function PlanSelectionSimple() {
  const [plan, setPlan] = React.useState("pro")
  const selected = PLANS.find((p) => p.id === plan)!

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <p className="text-xs text-muted-foreground">
            مرحله <bdi dir="ltr">۲</bdi> از <bdi dir="ltr">۳</bdi>
          </p>
          <CardTitle>انتخاب طرح</CardTitle>
          <CardDescription>
            یک طرح را انتخاب کنید و ادامه دهید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <RadioGroup value={plan} onValueChange={setPlan} className="gap-2">
            {PLANS.map((p) => (
              <Label
                key={p.id}
                htmlFor={`ps1-${p.id}`}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 py-3 ${
                  plan === p.id ? "border-primary bg-primary/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value={p.id} id={`ps1-${p.id}`} />
                  <span className="font-medium">{p.name}</span>
                </div>
                <span className="text-sm tabular-nums">
                  <bdi dir="ltr">{p.price}</bdi>
                </span>
              </Label>
            ))}
          </RadioGroup>
          <Separator />
          <p className="text-sm text-muted-foreground">
            انتخاب‌شده: {selected.name} ·{" "}
            <bdi dir="ltr">{selected.price}</bdi> تومان / ماه
          </p>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button variant="outline" className="flex-1">
            قبلی
          </Button>
          <Button className="flex-1">ادامه</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
