"use client"

import {
  AccessibilityIcon,
  Code2Icon,
  ComponentIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"

const FEATURES = [
  {
    icon: ComponentIcon,
    title: "کامپوننت‌های پایه",
    desc: "دکمه، فرم، دیالوگ و بقیهٔ اجزای روزمره با ظاهر یکدست.",
  },
  {
    icon: Code2Icon,
    title: "کپی و استفاده",
    desc: "کد را از رجیستری بگیرید و مستقیم در پروژهٔ Next بگذارید.",
  },
  {
    icon: ShieldCheckIcon,
    title: "الگوهای امنیتی",
    desc: "ورود، بازیابی رمز و احراز هویت با جریان‌های آشنا.",
  },
  {
    icon: AccessibilityIcon,
    title: "دسترسی‌پذیر",
    desc: "فوکوس، برچسب و کیبورد از همان ابتدا در نظر گرفته شده.",
  },
] as const

export function FeaturesCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight">
            ویژگی‌های کاربردی
          </h2>
          <p className="mt-2 text-muted-foreground">
            هر کارت یک قابلیت واقعی برای تیم محصول شماست
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-fit">
          مشاهدهٔ همه
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-muted">
                <item.icon className="size-5" />
              </div>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" size="sm" className="px-0">
                جزئیات بیشتر
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
