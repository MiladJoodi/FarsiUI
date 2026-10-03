import { Avatar, AvatarFallback } from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"

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

      <div className="divide-y overflow-hidden rounded-xl border bg-card">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4">
            <Avatar className="mt-0.5 size-9 shrink-0">
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-0.5">
              <p className="text-sm leading-snug font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.meta}</p>
            </div>
            <Badge variant="outline" className="mt-0.5 shrink-0">
              جدید
            </Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
