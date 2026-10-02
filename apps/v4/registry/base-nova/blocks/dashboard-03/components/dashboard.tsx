"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"

const ACTIVITY = [
  {
    name: "مریم رضایی",
    action: "سفارش جدید ثبت کرد",
    time: "۵ دقیقه پیش",
    avatar: "/avatars/01.png",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    action: "گزارش هفتگی را منتشر کرد",
    time: "۱ ساعت پیش",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    name: "سارا کریمی",
    action: "تیکت پشتیبانی را بست",
    time: "۳ ساعت پیش",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
] as const

export function DashboardActivity() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "درآمد ماه", value: "۴۸۰٬۰۰۰٬۰۰۰" },
          { label: "نرخ تبدیل", value: "٪۳٫۸" },
          { label: "بازدید", value: "۲۴٬۶۰۰" },
        ].map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="tabular-nums">
                <bdi
                  dir="ltr"
                  className="inline-block tracking-normal [letter-spacing:0]"
                >
                  {item.value}
                </bdi>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">فعالیت اخیر</CardTitle>
          <CardDescription>آخرین رویدادهای تیم</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {ACTIVITY.map((item) => (
            <div
              key={item.name + item.time}
              className="flex items-center gap-3"
            >
              <Avatar>
                <AvatarImage src={item.avatar} alt={item.name} />
                <AvatarFallback>{item.fallback}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.action}</p>
              </div>
              <Badge variant="secondary" className="shrink-0 font-normal">
                {item.time}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
