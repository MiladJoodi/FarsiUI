"use client"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Separator } from "@/registry/base-mira/ui/separator"

const NEXT_BILLING = new Date()
NEXT_BILLING.setDate(NEXT_BILLING.getDate() + 18)

function formatJalali(date: Date) {
  const weekday = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    weekday: "long",
  })
  const rest = date.toLocaleDateString("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return `${weekday}، ${rest}`
}

export default function SubscriptionStatusSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <div className="mb-2 flex flex-wrap gap-2">
            <Badge>فعال</Badge>
            <Badge variant="secondary">ماهانه</Badge>
          </div>
          <CardTitle>اشتراک فعلی</CardTitle>
          <CardDescription>طرح حرفه‌ای</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">مبلغ دوره</span>
            <span>۴۹۹٬۰۰۰ تومان</span>
          </div>
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">تمدید بعدی</span>
            <span>{formatJalali(NEXT_BILLING)}</span>
          </div>
          <Separator />
          <p className="text-muted-foreground">
            تمدید خودکار فعال است. در صورت نیاز می‌توانید طرح را تغییر دهید.
          </p>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1">مدیریت</Button>
          <Button variant="outline" className="flex-1">
            لغو
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
