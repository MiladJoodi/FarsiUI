"use client"

import * as React from "react"
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  MessageSquareIcon,
} from "lucide-react"

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
import { Separator } from "@/registry/base-luma/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"

type StatusKey = "open" | "pending" | "resolved"

const TICKETS: Record<
  StatusKey,
  {
    label: string
    badge: "secondary" | "outline" | "default"
    icon: React.ReactNode
    title: string
    detail: string
  }
> = {
  open: {
    label: "باز",
    badge: "secondary",
    icon: <ClockIcon className="size-5 text-amber-600" />,
    title: "در صف بررسی اولیه",
    detail: "تیکت شما ثبت شده و به‌زودی به کارشناس ارجاع می‌شود.",
  },
  pending: {
    label: "در انتظار شما",
    badge: "outline",
    icon: <AlertCircleIcon className="size-5 text-orange-600" />,
    title: "نیاز به اطلاعات بیشتر",
    detail: "لطفاً تصویر خطا یا لاگ مرورگر را در پاسخ تیکت ارسال کنید.",
  },
  resolved: {
    label: "حل شد",
    badge: "default",
    icon: <CheckCircle2Icon className="size-5 text-emerald-600" />,
    title: "مشکل برطرف شد",
    detail: "اگر مشکل ادامه داشت، می‌توانید تیکت را دوباره باز کنید.",
  },
}

export function SupportTicketStatus() {
  const [status, setStatus] = React.useState<StatusKey>("open")
  const current = TICKETS[status]

  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold">وضعیت تیکت پشتیبانی</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          شماره پیگیری:{" "}
          <bdi
            dir="ltr"
            className="inline-block font-medium tracking-normal [letter-spacing:0] whitespace-nowrap text-foreground"
          >
            SP-۱۴۰۴-۰۰۸۴۲
          </bdi>
        </p>
      </div>

      <Tabs
        value={status}
        onValueChange={(value) => setStatus(value as StatusKey)}
      >
        <TabsList className="grid w-full grid-cols-3">
          {(Object.keys(TICKETS) as StatusKey[]).map((key) => (
            <TabsTrigger key={key} value={key}>
              {TICKETS[key].label}
            </TabsTrigger>
          ))}
        </TabsList>
        {(Object.keys(TICKETS) as StatusKey[]).map((key) => {
          const item = TICKETS[key]
          return (
            <TabsContent key={key} value={key} className="mt-6">
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
                      <CardDescription>{item.detail}</CardDescription>
                    </div>
                    <Badge variant={item.badge}>{item.label}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Separator />
                  <div className="flex items-start gap-3 text-sm">
                    <MessageSquareIcon className="mt-0.5 size-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">آخرین پیام پشتیبانی</p>
                      <p className="mt-1 text-muted-foreground">
                        سلام؛ درخواست شما دریافت شد. نتیجه از همین مسیر اعلام
                        می‌شود.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={key === "resolved" ? "outline" : "default"}
                  >
                    {key === "resolved" ? "باز کردن مجدد" : "پاسخ به تیکت"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
