import { Avatar, AvatarFallback } from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"

const ITEMS = [
  {
    title: "پیام جدید از پشتیبانی",
    meta: "۲ دقیقه پیش",
    initials: "پ",
  },
  {
    title: "سفارش شما ارسال شد",
    meta: "۱ ساعت پیش",
    initials: "س",
  },
  {
    title: "یادآوری جلسه ساعت ۱۸",
    meta: "امروز",
    initials: "ی",
  },
  {
    title: "پرداخت اشتراک تأیید شد",
    meta: "دیروز",
    initials: "پ",
  },
] as const

export function ActivitySimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">فعالیت‌های اخیر</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          فید ساده بدون فیلتر
        </p>
      </div>

      <div className="divide-y rounded-xl border">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-3 p-4">
            <Avatar className="size-9">
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.meta}</p>
            </div>
            <Badge variant="outline">جدید</Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
