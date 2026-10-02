import { Avatar, AvatarFallback } from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"

const ITEMS = [
  {
    actor: "سارا محمدی",
    action: "کامنت گذاشت روی «داشبورد RTL»",
    email: "sara@example.com",
    time: "۵ دقیقه پیش",
    type: "نظر",
    initials: "سم",
  },
  {
    actor: "علی رضایی",
    action: "فایل طرح را بارگذاری کرد",
    email: "ali@example.com",
    time: "۴۰ دقیقه پیش",
    type: "فایل",
    initials: "عر",
  },
  {
    actor: "مینا کریمی",
    action: "وضعیت تیکت را به «حل‌شده» تغییر داد",
    email: "mina@example.com",
    time: "۲ ساعت پیش",
    type: "تیکت",
    initials: "مک",
  },
  {
    actor: "رضا نوری",
    action: "عضو جدید را دعوت کرد",
    email: "reza@example.com",
    time: "دیروز",
    type: "تیم",
    initials: "رن",
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

      <ol className="relative space-y-0 border-s border-border ps-6">
        {ITEMS.map((item) => (
          <li key={item.email + item.time} className="relative pb-8 last:pb-0">
            <span className="absolute -start-[1.9rem] top-1 flex size-8 items-center justify-center rounded-full border bg-background">
              <Avatar className="size-7">
                <AvatarFallback className="text-[10px]">
                  {item.initials}
                </AvatarFallback>
              </Avatar>
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium">{item.actor}</p>
              <Badge variant="secondary">{item.type}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.action}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <span dir="ltr" className="inline-block text-start">
                {item.email}
              </span>
              <span>{item.time}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
