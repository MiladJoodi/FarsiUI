import { Avatar, AvatarFallback } from "@/registry/base-nova/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Separator } from "@/registry/base-nova/ui/separator"

const ITEMS = [
  {
    name: "پشتیبانی",
    preview: "پیام جدید از پشتیبانی",
    time: "۱۰:۲۴",
    initials: "پ‌ش",
  },
  {
    name: "فروشگاه",
    preview: "سفارش شما ارسال شد",
    time: "دیروز",
    initials: "ف‌ش",
  },
  {
    name: "تقویم",
    preview: "یادآوری جلسه ساعت ۱۸",
    time: "دوشنبه",
    initials: "ت‌ق",
  },
] as const

export default function InboxSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="border-b py-4 text-start">
          <CardTitle>صندوق پیام‌ها</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {ITEMS.map((m, i) => (
            <div key={m.name}>
              {i > 0 && <Separator />}
              <div className="flex items-center gap-3 px-6 py-3">
                <Avatar className="size-10">
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{m.name}</p>
                    <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                      {m.time}
                    </span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">
                    {m.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
