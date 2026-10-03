import { Avatar, AvatarFallback } from "@/registry/base-luma/ui/avatar"
import { Badge } from "@/registry/base-luma/ui/badge"

const ITEMS = [
  {
    actor: "سارا محمدی",
    action: "کامنت گذاشت روی «داشبورد RTL»",
    email: "sara@example.com",
    time: "۵ دقیقه پیش",
    type: "نظر",
    initials: "س‌م",
  },
  {
    actor: "علی رضایی",
    action: "فایل طرح را بارگذاری کرد",
    email: "ali@example.com",
    time: "۴۰ دقیقه پیش",
    type: "فایل",
    initials: "ع‌ر",
  },
  {
    actor: "مینا کریمی",
    action: "وضعیت تیکت را به «حل‌شده» تغییر داد",
    email: "mina@example.com",
    time: "۲ ساعت پیش",
    type: "تیکت",
    initials: "م‌ک",
  },
  {
    actor: "رضا نوری",
    action: "عضو جدید را دعوت کرد",
    email: "reza@example.com",
    time: "دیروز",
    type: "تیم",
    initials: "ر‌ن",
  },
] as const

export function ActivityTimeline() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">خط زمانی تیم</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5">
        <ol className="relative space-y-0 border-s border-border ps-8">
          {ITEMS.map((item) => (
            <li
              key={item.email + item.time}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute -start-4 top-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border bg-card rtl:translate-x-1/2">
                <Avatar className="size-7 shrink-0">
                  <AvatarFallback className="text-[10px]">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm leading-snug font-medium">{item.actor}</p>
                <Badge variant="outline">{item.type}</Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.action}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span dir="ltr" className="block text-start tracking-normal">
                  {item.email}
                </span>
                <span>{item.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
