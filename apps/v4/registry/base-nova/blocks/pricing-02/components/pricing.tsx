"use client"

import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"

const PLANS = [
  {
    name: "پایه",
    price: "۱۹۹٬۰۰۰",
    desc: "برای شروع شخصی",
    features: ["۱ پروژه", "کامپوننت‌های پایه", "پشتیبانی ایمیلی"],
    cta: "شروع کنید",
    popular: false,
  },
  {
    name: "حرفه‌ای",
    price: "۴۹۹٬۰۰۰",
    desc: "برای تیم‌های کوچک",
    features: ["پروژه نامحدود", "همهٔ بلوک‌ها", "اولویت پشتیبانی", "تم سفارشی"],
    cta: "انتخاب حرفه‌ای",
    popular: true,
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    desc: "برای شرکت‌ها",
    features: ["SSO", "نقش‌های پیشرفته", "قرارداد و فاکتور", "مدیر موفقیت"],
    cta: "درخواست دمو",
    popular: false,
  },
] as const

export default function PricingCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center bg-background px-6 py-16 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          پلن مناسب خود را انتخاب کنید
        </h2>
        <p className="mt-2 text-muted-foreground">
          سه سطح قیمت با امکانات شفاف
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? "border-primary shadow-md" : undefined}
          >
            <CardHeader>
              {plan.popular ? (
                <Badge className="mb-2 w-fit">پیشنهادی</Badge>
              ) : null}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="mt-2 inline-block text-3xl font-bold tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground">
                  <bdi dir="ltr">{plan.price}</bdi>
                </span>
                {plan.price !== "تماس بگیرید" ? (
                  <span> تومان / ماه</span>
                ) : (
                  <span>{plan.desc}</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon className="size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
