import { BellIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Separator } from "@/registry/base-mira/ui/separator"

const ITEMS = [
  {
    title: "سفارش ارسال شد",
    body: "بستهٔ شما امروز تحویل پست شده است.",
    time: "۵ دقیقه پیش",
  },
  {
    title: "ورود جدید",
    body: "مرورگر کروم روی ویندوز · تهران",
    time: "۱ ساعت پیش",
  },
  {
    title: "خلاصهٔ هفتگی",
    body: "۳ به‌روزرسانی و ۲ دیدگاه جدید",
    time: "دیروز",
  },
] as const

export default function NotificationsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle className="flex items-center gap-2">
            <BellIcon className="size-5" />
            اعلان‌ها
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {ITEMS.map((item, i) => (
            <div key={item.title}>
              {i > 0 && <Separator />}
              <div className="px-6 py-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
