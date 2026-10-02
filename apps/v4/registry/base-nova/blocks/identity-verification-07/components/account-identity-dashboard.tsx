"use client"

import * as React from "react"
import {
  CheckIcon,
  CircleIcon,
  FileTextIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from "lucide-react"

import { cn } from "@/registry/base-nova/lib/utils"
import { Avatar, AvatarFallback } from "@/registry/base-nova/ui/avatar"
import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Separator } from "@/registry/base-nova/ui/separator"

type StepState = "done" | "current" | "todo"

const STEPS: {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  state: StepState
}[] = [
  {
    id: "profile",
    title: "اطلاعات شخصی",
    description: "نام، کد ملی و تاریخ تولد ثبت شد",
    icon: <UserIcon className="size-4" />,
    state: "done",
  },
  {
    id: "mobile",
    title: "تأیید موبایل",
    description: "شماره ۰۹۱۲۱۲۳۴۵۶۷ تأیید شد",
    icon: <PhoneIcon className="size-4" />,
    state: "done",
  },
  {
    id: "document",
    title: "بارگذاری مدرک",
    description: "تصویر کارت ملی را ارسال کنید",
    icon: <FileTextIcon className="size-4" />,
    state: "current",
  },
  {
    id: "review",
    title: "بررسی نهایی",
    description: "پس از ارسال مدرک آغاز می‌شود",
    icon: <ShieldCheckIcon className="size-4" />,
    state: "todo",
  },
]

export function AccountIdentityDashboard() {
  const [docUploaded, setDocUploaded] = React.useState(false)
  const completed =
    STEPS.filter((s) => s.state === "done").length + (docUploaded ? 1 : 0)
  const total = STEPS.length
  const percent = Math.round((completed / total) * 100)

  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-12">
              <AvatarFallback>نپ</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">نیما پناهی</CardTitle>
              <CardDescription>حساب کاربری · سطح پایه</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">
            احراز هویت ناقص
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">پیشرفت احراز هویت</p>
              <p className="text-2xl font-semibold tabular-nums">
                {String(percent).replace(
                  /\d/g,
                  (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!
                )}
                ٪
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {String(completed).replace(
                /\d/g,
                (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!
              )}{" "}
              از {String(total).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)}{" "}
              مرحله
            </p>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">مراحل باقی‌مانده</CardTitle>
            <CardDescription>
              برای فعال‌سازی کامل حساب، مراحل زیر را تکمیل کنید
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {STEPS.map((step, index) => {
              const state: StepState =
                step.id === "document" && docUploaded
                  ? "done"
                  : step.id === "review" && docUploaded
                    ? "current"
                    : step.state
              return (
                <div key={step.id}>
                  {index > 0 ? <Separator className="my-3" /> : null}
                  <div className="flex gap-3">
                    <div
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border",
                        state === "done" &&
                          "border-primary bg-primary text-primary-foreground",
                        state === "current" &&
                          "border-primary bg-primary/10 text-primary",
                        state === "todo" && "text-muted-foreground"
                      )}
                    >
                      {state === "done" ? (
                        <CheckIcon className="size-4" />
                      ) : state === "current" ? (
                        step.icon
                      ) : (
                        <CircleIcon className="size-3.5" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium">{step.title}</p>
                        {state === "done" ? (
                          <Badge variant="secondary" className="text-[10px]">
                            انجام شد
                          </Badge>
                        ) : null}
                        {state === "current" ? (
                          <Badge className="text-[10px]">اقدام بعدی</Badge>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {step.id === "document" && docUploaded
                          ? "مدرک ارسال شد و در صف بررسی است"
                          : step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">اقدام بعدی</CardTitle>
            <CardDescription>
              {docUploaded
                ? "منتظر نتیجه بررسی بمانید"
                : "بارگذاری تصویر کارت ملی"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>نور کافی و بدون انعکاس</li>
              <li>تمام گوشه‌های کارت مشخص باشد</li>
              <li>فایل JPG یا PNG تا ۵ مگابایت</li>
            </ul>
            <Button
              className="w-full"
              disabled={docUploaded}
              onClick={() => setDocUploaded(true)}
            >
              {docUploaded ? "مدرک ارسال شد" : "ادامه احراز هویت"}
            </Button>
            {docUploaded ? (
              <p className="text-center text-xs text-muted-foreground">
                نتیجه معمولاً تا ۲۴ ساعت اعلام می‌شود
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
