"use client"

import * as React from "react"
import {
  BellIcon,
  FormInputIcon,
  IdCardIcon,
  LayoutDashboardIcon,
  Settings2Icon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"

const TABS = [
  {
    value: "product",
    label: "محصول",
    items: [
      {
        icon: LayoutDashboardIcon,
        title: "داشبورد آماده",
        desc: "نمودار، کارت و ناوبری برای پنل مدیریت فارسی.",
      },
      {
        icon: FormInputIcon,
        title: "فرم‌های روزمره",
        desc: "تماس، پشتیبانی، پروفایل و تنظیمات با الگوی یکسان.",
      },
      {
        icon: Settings2Icon,
        title: "تنظیمات آشنا",
        desc: "اعلان، ظاهر، حریم خصوصی و نشست‌های فعال.",
      },
    ],
  },
  {
    value: "auth",
    label: "هویت",
    items: [
      {
        icon: IdCardIcon,
        title: "احراز هویت",
        desc: "کد ملی، مدارک و جریان‌های چندمرحله‌ای.",
      },
      {
        icon: SmartphoneIcon,
        title: "ورود موبایلی",
        desc: "الگوهای ورود و بازیابی رمز برای موبایل و دسکتاپ.",
      },
      {
        icon: BellIcon,
        title: "اعلان امنیتی",
        desc: "هشدار نشست و تغییر رمز با پیام‌های واضح.",
      },
    ],
  },
] as const

export function FeaturesShowcase() {
  const [tab, setTab] = React.useState("product")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <Badge className="mb-3">مجموعهٔ کامل</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            هر آنچه برای محصول فارسی لازم است
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            بین دسته‌ها جابه‌جا شوید و ببینید چطور بلوک‌ها کنار هم یک سیستم
            می‌سازند
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button>شروع کنید</Button>
          <Button variant="outline">مستندات</Button>
        </div>
      </div>

      <Tabs
        value={tab}
        onValueChange={(value) => setTab((value as string) ?? "product")}
        className="mt-10"
      >
        <TabsList className="grid w-full max-w-xs grid-cols-2">
          {TABS.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((group) => (
          <TabsContent key={group.value} value={group.value} className="mt-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-1">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border bg-card p-4"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden rounded-2xl border">
                <img
                  src="/farsiui/dashboard.png"
                  alt="پیش‌نمایش قابلیت‌ها"
                  className="aspect-16/11 w-full object-cover object-top"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
