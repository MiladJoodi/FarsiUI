"use client"

import * as React from "react"
import { cn } from "cn"
import { ArrowUpIcon, MapPinIcon } from "lucide-react"

import { StatNumber } from "@/registry/base-sera/blocks/stats-01/components/stat-number"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import { Progress } from "@/registry/base-sera/ui/progress"
import { Separator } from "@/registry/base-sera/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-sera/ui/tabs"

const PERIODS = [
  {
    id: "week",
    label: "هفته",
    hero: "۱۸٬۲۳۰",
    heroLabel: "بازدید",
    delta: "+۱۸٪",
    items: [
      { label: "کاربر جدید", value: "۶۴۲" },
      { label: "نصب بلوک", value: "۹۱۸" },
      { label: "رضایت", value: "۹۷٪" },
    ],
  },
  {
    id: "month",
    label: "ماه",
    hero: "۷۴٬۱۱۰",
    heroLabel: "بازدید",
    delta: "+۱۱٪",
    items: [
      { label: "کاربر جدید", value: "۲٬۴۸۰" },
      { label: "نصب بلوک", value: "۳٬۲۸۴" },
      { label: "رضایت", value: "۹۶٪" },
    ],
  },
  {
    id: "year",
    label: "سال",
    hero: "۸۹۰ هزار",
    heroLabel: "بازدید",
    delta: "+۴۲٪",
    items: [
      { label: "کاربر جدید", value: "۲۸ هزار" },
      { label: "نصب بلوک", value: "۴۱ هزار" },
      { label: "رضایت", value: "۹۵٪" },
    ],
  },
] as const

const CITIES = [
  { name: "تهران", share: 38 },
  { name: "اصفهان", share: 16 },
  { name: "مشهد", share: 14 },
  { name: "شیراز", share: 11 },
] as const

const FA = "۰۱۲۳۴۵۶۷۸۹"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => FA[Number(d)]!)
}

function CountUp({ value }: { value: string }) {
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    setShown(false)
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [value])

  return (
    <bdi
      dir="ltr"
      className={cn(
        "inline-block tracking-normal [letter-spacing:0] whitespace-nowrap transition-all duration-500",
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      )}
    >
      {value}
    </bdi>
  )
}

export function StatsShowcase() {
  const [period, setPeriod] = React.useState("month")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-8 px-6 py-16 md:px-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge className="mb-3">داشبورد آمار</Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            نبض محصول، به وقت ایران
          </h2>
          <p className="mt-2 text-muted-foreground">
            امروز · ۲ مهر ۱۴۰۵ · به‌وقت تهران
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2 space-x-reverse">
            {["01", "02", "03"].map((id) => (
              <Avatar key={id} className="size-8 border-2 border-background">
                <AvatarImage src={`/avatars/${id}.png`} alt="" />
                <AvatarFallback>{id}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <StatNumber value="۱۲" /> نفر آنلاین
          </p>
        </div>
      </div>

      <Tabs
        value={period}
        onValueChange={(value) => setPeriod((value as string) ?? "month")}
      >
        <TabsList className="grid w-full max-w-sm grid-cols-3">
          {PERIODS.map((item) => (
            <TabsTrigger key={item.id} value={item.id}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {PERIODS.map((item) => (
          <TabsContent key={item.id} value={item.id} className="mt-6">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
                <p className="text-sm text-muted-foreground">
                  {item.heroLabel} · {item.label} جاری
                </p>
                <p className="mt-2 text-5xl font-bold md:text-6xl">
                  <CountUp value={item.hero} />
                </p>
                <p className="mt-3 inline-flex flex-wrap items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <ArrowUpIcon className="size-4" />
                  <StatNumber value={item.delta} />
                  <span className="font-normal text-muted-foreground">
                    نسبت به دورهٔ قبل
                  </span>
                </p>

                <Separator className="my-6" />

                <div className="grid gap-4 sm:grid-cols-3">
                  {item.items.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-xl font-semibold">
                        <StatNumber value={metric.value} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPinIcon className="size-4 text-muted-foreground" />
                    <p className="text-sm font-medium">بازدید بر اساس شهر</p>
                  </div>
                  <div className="space-y-4">
                    {CITIES.map((city) => (
                      <div key={city.name} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span>{city.name}</span>
                          <StatNumber
                            value={`${toFa(city.share)}٪`}
                            className="text-muted-foreground"
                          />
                        </div>
                        <Progress value={city.share} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 rounded-2xl border bg-card p-5 shadow-sm">
                  <div className="space-y-2">
                    <p className="font-medium">گزارش کامل تیم</p>
                    <p className="text-sm text-muted-foreground">
                      جزئیات قیف، شهرها و بلوک‌های پرکاربرد را ببینید
                    </p>
                  </div>
                  <Button size="sm" className="w-fit">
                    مشاهدهٔ گزارش
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
