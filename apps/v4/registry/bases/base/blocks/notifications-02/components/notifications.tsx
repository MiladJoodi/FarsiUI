import {
  BellIcon,
  PackageIcon,
  ShieldIcon,
  SparklesIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

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
    body: "Chrome · تهران",
    time: "۱ ساعت پیش",
    unread: true,
    icon: ShieldIcon,
  },
  {
    title: "قابلیت جدید",
    body: "کامپوننت Calendar RTL منتشر شد",
    time: "دیروز",
    unread: false,
    icon: SparklesIcon,
  },
] as const

export function NotificationsUnread() {
  const unread = ITEMS.filter((i) => i.unread).length

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BellIcon className="size-5" />
              اعلان‌ها
              {unread > 0 ? (
                <Badge variant="secondary">
                  <bdi dir="ltr">{unread}</bdi>
                </Badge>
              ) : null}
            </CardTitle>
            <CardDescription>آخرین رویدادهای حساب شما</CardDescription>
          </div>
          <Button size="sm" variant="outline">
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
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
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
