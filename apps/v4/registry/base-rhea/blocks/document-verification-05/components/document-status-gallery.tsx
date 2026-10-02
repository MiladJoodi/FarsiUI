"use client"

import * as React from "react"
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  XCircleIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-rhea/ui/tabs"

type StatusKey = "pending" | "approved" | "needs_fix" | "rejected"

const STATUSES: Record<
  StatusKey,
  {
    label: string
    badge: "secondary" | "default" | "outline" | "destructive"
    icon: React.ReactNode
    title: string
    description: string
    detail: string
    action?: string
  }
> = {
  pending: {
    label: "در حال بررسی",
    badge: "secondary",
    icon: <ClockIcon className="size-5 text-amber-600" />,
    title: "مدارک در صف بررسی است",
    description: "معمولاً تا ۲۴ ساعت کاری نتیجه اعلام می‌شود.",
    detail: "کارت ملی و شناسنامه دریافت شده‌اند. نیازی به اقدام دیگری نیست.",
  },
  approved: {
    label: "تأیید شد",
    badge: "default",
    icon: <CheckCircle2Icon className="size-5 text-emerald-600" />,
    title: "مدارک تأیید شدند",
    description: "پروندهٔ شما کامل است.",
    detail:
      "از این پس می‌توانید از امکانات وابسته به تأیید مدارک استفاده کنید.",
    action: "مشاهده پرونده",
  },
  needs_fix: {
    label: "نیاز به اصلاح",
    badge: "outline",
    icon: <AlertCircleIcon className="size-5 text-orange-600" />,
    title: "تصویر شناسنامه ناخواناست",
    description: "لطفاً تصویر واضح‌تری بارگذاری کنید.",
    detail:
      "نور کافی نیست و شماره شناسنامه خوانا نیست. فایل جدید را تا ۷۲ ساعت ارسال کنید.",
    action: "بارگذاری مجدد",
  },
  rejected: {
    label: "رد شد",
    badge: "destructive",
    icon: <XCircleIcon className="size-5 text-destructive" />,
    title: "مدارک رد شد",
    description: "مدرک ارسالی با اطلاعات حساب مطابقت ندارد.",
    detail:
      "می‌توانید پس از ۲۴ ساعت مدرک جدید ارسال کنید یا با پشتیبانی تماس بگیرید.",
    action: "ارسال مدرک جدید",
  },
}

export function DocumentStatusGallery() {
  const [status, setStatus] = React.useState<StatusKey>("pending")

  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold tracking-tight">وضعیت مدارک</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          وضعیت‌های مختلف بررسی مدارک را ببینید
        </p>
      </div>

      <Tabs
        value={status}
        onValueChange={(value) => setStatus(value as StatusKey)}
        className="w-full"
      >
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
          {(Object.keys(STATUSES) as StatusKey[]).map((key) => (
            <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
              {STATUSES[key].label}
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(STATUSES) as StatusKey[]).map((key) => {
          const item = STATUSES[key]
          return (
            <TabsContent key={key} value={key} className="mt-6">
              <Card className="mx-auto max-w-xl">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <CardTitle className="text-base">
                          {item.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                    <Badge variant={item.badge}>{item.label}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    شماره پیگیری:{" "}
                    <span
                      dir="ltr"
                      className="font-medium text-foreground tabular-nums"
                    >
                      DV-۱۴۰۴-۰۹۱۲
                    </span>
                  </p>
                </CardContent>
                {item.action ? (
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={key === "rejected" ? "outline" : "default"}
                    >
                      {item.action}
                    </Button>
                  </CardFooter>
                ) : null}
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
