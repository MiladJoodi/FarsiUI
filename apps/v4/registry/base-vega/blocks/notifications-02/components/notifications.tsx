import { BellIcon, PackageIcon, ShieldIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Separator } from "@/registry/base-vega/ui/separator"

const ITEMS = [
  {
    title: "سفارش ارسال شد",
    body: "کد پیگیری: ۱۲۳۴۵۶",
    time: "۵ دقیقه پیش",
    unread: true,
    icon: PackageIcon,
  },
  {
    title: "ورود جدید به حساب",
    body: "مرورگر کروم · تهران",
    time: "۱ ساعت پیش",
    unread: true,
    icon: ShieldIcon,
  },
  {
    title: "قابلیت جدید",
    body: "کامپوننت تقویم راست‌چین منتشر شد",
    time: "دیروز",
    unread: false,
    icon: SparklesIcon,
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function NotificationsUnread() {
  const unread = ITEMS.filter((i) => i.unread).length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 border-b py-4 text-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BellIcon className="size-5" />
              اعلان‌ها
              {unread > 0 ? (
                <Badge variant="outline" className="border tracking-normal">
                  {toFa(unread)}
                </Badge>
              ) : null}
            </CardTitle>
            <CardDescription>آخرین رویدادهای حساب شما</CardDescription>
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="shrink-0"
          >
            همه خوانده
          </Button>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title}>
                {i > 0 && <Separator />}
                <div
                  className={
                    item.unread
                      ? "flex gap-3 bg-muted/40 px-6 py-3"
                      : "flex gap-3 px-6 py-3"
                  }
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm tracking-normal text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                  {item.unread ? (
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  ) : null}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
