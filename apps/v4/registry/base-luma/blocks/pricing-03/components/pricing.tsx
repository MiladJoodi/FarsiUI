"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

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
import { Label } from "@/registry/base-luma/ui/label"
import { Switch } from "@/registry/base-luma/ui/switch"

const PLANS = [
  {
    name: "پایه",
    monthly: "۱۹۹٬۰۰۰",
    yearly: "۱٬۹۰۰٬۰۰۰",
    features: ["۱ پروژه", "پشتیبانی ایمیلی", "به‌روزرسانی‌ها"],
  },
  {
    name: "حرفه‌ای",
    monthly: "۴۹۹٬۰۰۰",
    yearly: "۴٬۷۹۰٬۰۰۰",
    features: ["پروژه نامحدود", "همهٔ بلوک‌ها", "اولویت پشتیبانی"],
    popular: true,
  },
  {
    name: "تیم",
    monthly: "۸۹۹٬۰۰۰",
    yearly: "۸٬۶۳۰٬۰۰۰",
    features: ["۵ عضو", "نقش‌ها", "گزارش استفاده"],
  },
] as const

export function PricingToggle() {
  const [yearly, setYearly] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center bg-background px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">ماهانه یا سالانه</h2>
        <p className="mt-2 text-muted-foreground">
          با پرداخت سالانه حدود دو ماه رایگان می‌گیرید
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Label
            htmlFor="billing"
            className={!yearly ? "font-medium" : "text-muted-foreground"}
          >
            ماهانه
          </Label>
          <Switch id="billing" checked={yearly} onCheckedChange={setYearly} />
          <Label
            htmlFor="billing"
            className={yearly ? "font-medium" : "text-muted-foreground"}
          >
            سالانه
          </Label>
          {yearly ? <Badge variant="secondary">۲۰٪ صرفه‌جویی</Badge> : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={
              "popular" in plan && plan.popular ? "border-primary" : undefined
            }
          >
            <CardHeader>
              {"popular" in plan && plan.popular ? (
                <Badge className="mb-2 w-fit">پیشنهادی</Badge>
              ) : null}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="mt-2 inline-block text-3xl font-bold tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground">
                  <bdi dir="ltr">{yearly ? plan.yearly : plan.monthly}</bdi>
                </span>
                <span>تومان / {yearly ? "سال" : "ماه"}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent">
              <Button
                className="w-full"
                variant={
                  "popular" in plan && plan.popular ? "default" : "outline"
                }
              >
                انتخاب پلن
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
