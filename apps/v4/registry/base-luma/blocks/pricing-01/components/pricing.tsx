"use client"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"

const PLANS = [
  {
    name: "شروع",
    price: "۰",
    period: "رایگان برای همیشه",
    cta: "شروع کنید",
    variant: "outline" as const,
  },
  {
    name: "حرفه‌ای",
    price: "۲۹۰٬۰۰۰",
    period: "تومان / ماه",
    cta: "انتخاب پلن",
    variant: "default" as const,
  },
] as const

export function PricingSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center bg-background px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">قیمت‌گذاری ساده</h2>
        <p className="mt-2 text-muted-foreground">دو پلن؛ بدون پیچیدگی</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription className="space-y-1">
                <span className="inline-block text-3xl font-bold tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground">
                  <bdi dir="ltr">{plan.price}</bdi>
                </span>
                <span>{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t-0 bg-transparent">
              <Button className="w-full" variant={plan.variant}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
