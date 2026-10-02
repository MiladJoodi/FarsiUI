"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

const PLANS = [
  {
    name: "شروع",
    price: "۰",
    period: "رایگان برای همیشه",
    cta: "شروع کنید",
    variant: "secondary" as const,
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
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
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
                <span className="inline-block whitespace-nowrap text-3xl font-bold tracking-normal text-foreground [letter-spacing:0]">
                  <bdi dir="ltr">{plan.price}</bdi>
                </span>
                <span>{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardFooter>
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
