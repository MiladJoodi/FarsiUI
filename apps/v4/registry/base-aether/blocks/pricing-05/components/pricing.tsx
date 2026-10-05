"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-aether/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-aether/ui/avatar"
import { Badge } from "@/registry/base-aether/ui/badge"
import { Button } from "@/registry/base-aether/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-aether/ui/card"
import { Label } from "@/registry/base-aether/ui/label"
import { Switch } from "@/registry/base-aether/ui/switch"

const PLANS = [
  {
    name: "پایه",
    monthly: "۱۹۹٬۰۰۰",
    yearly: "۱٬۹۰۰٬۰۰۰",
    desc: "برای آزمایش و پروژه‌های شخصی",
    features: ["۱ پروژه", "کامپوننت‌های پایه", "پشتیبانی جامعه"],
  },
  {
    name: "حرفه‌ای",
    monthly: "۴۹۹٬۰۰۰",
    yearly: "۴٬۷۹۰٬۰۰۰",
    desc: "رایج‌ترین انتخاب تیم‌ها",
    features: ["پروژه نامحدود", "همهٔ بلوک‌ها", "اولویت پشتیبانی", "تم سفارشی"],
    popular: true,
  },
  {
    name: "سازمانی",
    monthly: "سفارشی",
    yearly: "سفارشی",
    desc: "امنیت و مقیاس سازمانی",
    features: ["SSO و نقش‌ها", "قرارداد رسمی", "مدیر موفقیت", "آموزش تیم"],
  },
] as const

const FAQ = [
  {
    q: "می‌توانم بعداً پلن را عوض کنم؟",
    a: "بله؛ هر زمان می‌توانید ارتقا دهید یا به پلن پایین‌تر بروید. مابه‌التفاوت به‌صورت روزشمار محاسبه می‌شود.",
  },
  {
    q: "آیا فاکتور رسمی صادر می‌شود؟",
    a: "در پلن سازمانی فاکتور و قرارداد رسمی دارید. در پلن‌های دیگر رسید دیجیتال ارسال می‌شود.",
  },
  {
    q: "آزمایش رایگان دارید؟",
    a: "پلن پایه رایگان است. برای حرفه‌ای ۱۴ روز آزمایش بدون کارت بانکی دارید.",
  },
] as const

export default function PricingShowcase() {
  const [yearly, setYearly] = React.useState(true)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-14 bg-background px-6 py-16 md:px-10"
    >
      <div className="text-center">
        <Badge className="mb-3">قیمت‌گذاری</Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          شفاف، قابل‌پیش‌بینی، فارسی
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          پلن را انتخاب کنید، ماهانه یا سالانه بپردازید، و هر وقت لازم بود عوض
          کنید
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Label
            htmlFor="bill-full"
            className={!yearly ? "font-medium" : "text-muted-foreground"}
          >
            ماهانه
          </Label>
          <Switch id="bill-full" checked={yearly} onCheckedChange={setYearly} />
          <Label
            htmlFor="bill-full"
            className={yearly ? "font-medium" : "text-muted-foreground"}
          >
            سالانه
          </Label>
          {yearly ? <Badge variant="secondary">۲ ماه هدیه</Badge> : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={
              "popular" in plan && plan.popular
                ? "border-primary shadow-md"
                : undefined
            }
          >
            <CardHeader>
              {"popular" in plan && plan.popular ? (
                <Badge className="mb-2 w-fit">پیشنهادی</Badge>
              ) : null}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.desc}</CardDescription>
              <p className="pt-2 text-3xl font-bold">
                <span className="inline-block tracking-normal [letter-spacing:0] whitespace-nowrap">
                  <bdi dir="ltr">{yearly ? plan.yearly : plan.monthly}</bdi>
                </span>
                {plan.monthly !== "سفارشی" ? (
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    تومان/{yearly ? "سال" : "ماه"}
                  </span>
                ) : null}
              </p>
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
                {plan.monthly === "سفارشی" ? "گفتگو با فروش" : "شروع کنید"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 rounded-2xl border bg-muted/40 px-6 py-8 text-center">
        <div className="flex -space-x-2 space-x-reverse">
          {["01", "02", "03", "04"].map((id) => (
            <Avatar key={id} className="size-9 border-2 border-background">
              <AvatarImage src={`/avatars/${id}.png`} alt="" />
              <AvatarFallback>{id}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          بیش از{" "}
          <span className="inline-block font-medium tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground">
            <bdi dir="ltr">۱٬۲۰۰</bdi>
          </span>{" "}
          تیم پلن حرفه‌ای را انتخاب کرده‌اند
        </p>
      </div>

      <div dir="rtl" lang="fa">
        <h3 className="mb-4 text-center text-xl font-semibold">سؤالات رایج</h3>
        <Accordion className="w-full text-start">
          {FAQ.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger className="text-start">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
