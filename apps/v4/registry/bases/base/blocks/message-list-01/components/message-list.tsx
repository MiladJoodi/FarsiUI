import { Avatar, AvatarFallback } from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const MESSAGES = [
  {
    name: "سارا محمدی",
    preview: "سلام، وضعیت سفارش چطوره؟",
    time: "۱۰:۲۴",
    initials: "س‌م",
  },
  {
    name: "علی رضایی",
    preview: "فاکتور را فرستادم",
    time: "دیروز",
    initials: "ع‌ر",
  },
  {
    name: "مینا کریمی",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    initials: "م‌ک",
  },
] as const

export default function MessageListSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>فهرست پیام‌ها</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {MESSAGES.map((m, i) => (
            <div key={m.name}>
              {i > 0 && <Separator />}
              <div className="flex items-center gap-3 px-6 py-3">
                <Avatar className="size-10">
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{m.name}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      <bdi dir="ltr">{m.time}</bdi>
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
