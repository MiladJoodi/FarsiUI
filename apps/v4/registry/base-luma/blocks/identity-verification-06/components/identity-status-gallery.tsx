"use client"

import * as React from "react"
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  XCircleIcon,
} from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/base-luma/ui/alert"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"

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
    title: "درخواست شما در صف بررسی است",
    description: "معمولاً تا ۲۴ ساعت کاری نتیجه اعلام می‌شود.",
    detail:
      "مدارک شما دریافت شده و توسط تیم احراز هویت در حال بررسی است. نیازی به اقدام دیگری نیست.",
  },
  approved: {
    label: "تأیید شد",
    badge: "default",
    icon: <CheckCircle2Icon className="size-5 text-emerald-600" />,
    title: "احراز هویت با موفقیت انجام شد",
    description: "حساب شما سطح تأیید هویت کامل دارد.",
    detail:
      "از این پس می‌توانید از تمام امکانات وابسته به احراز هویت استفاده کنید.",
    action: "رفتن به داشبورد",
  },
  needs_fix: {
    label: "نیاز به اصلاح",
    badge: "outline",
    icon: <AlertCircleIcon className="size-5 text-orange-600" />,
    title: "تصویر کارت ملی ناخوانا است",
    description: "لطفاً تصویر واضح‌تری از روی کارت ملی بارگذاری کنید.",
    detail:
      "گوشه‌های کارت مشخص نیست و تاریخ تولد خوانا نیست. فایل جدید را حداکثر تا ۷۲ ساعت ارسال کنید.",
    action: "اصلاح و ارسال مجدد",
  },
  rejected: {
    label: "رد شد",
    badge: "destructive",
    icon: <XCircleIcon className="size-5 text-destructive" />,
    title: "درخواست احراز هویت رد شد",
    description: "اطلاعات واردشده با مدرک ارسالی مطابقت ندارد.",
    detail:
      "در صورت نیاز می‌توانید پس از ۲۴ ساعت درخواست جدید ثبت کنید یا با پشتیبانی تماس بگیرید.",
    action: "ثبت درخواست جدید",
  },
}

export function IdentityStatusGallery() {
  const [status, setStatus] = React.useState<StatusKey>("pending")
  const current = STATUSES[status]

  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold tracking-tight">
          وضعیت احراز هویت
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          نمونه‌های مختلف وضعیت را با تب‌ها جابه‌جا کنید
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
              <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <Card>
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

                <Alert>
                  <AlertTitle>شماره پیگیری</AlertTitle>
                  <AlertDescription className="space-y-2">
                    <p dir="ltr" className="text-sm font-medium tabular-nums">
                      IV-۱۴۰۵-۰۸۴۲۱
                    </p>
                    <p className="text-xs">
                      آخرین به‌روزرسانی: ۲ مهر ۱۴۰۵ — ۱۴:۳۰
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>

      <p className="text-center text-xs text-muted-foreground">
        وضعیت فعلی انتخاب‌شده: {current.label}
      </p>
    </div>
  )
}
