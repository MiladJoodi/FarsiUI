import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
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

const MESSAGES = [
  {
    name: "سارا محمدی",
    email: "sara@example.com",
    preview: "سلام، وضعیت سفارش چطوره؟",
    time: "۱۰:۲۴",
    unread: 2,
    initials: "س‌م",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "علی رضایی",
    email: "ali@example.com",
    preview: "فاکتور را فرستادم",
    time: "دیروز",
    unread: 0,
    initials: "ع‌ر",
  },
  {
    name: "مینا کریمی",
    email: "mina@example.com",
    preview: "فردا جلسه داریم؟",
    time: "دوشنبه",
    unread: 1,
    initials: "م‌ک",
  },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function MessageListUnread() {
  const totalUnread = MESSAGES.reduce((n, m) => n + m.unread, 0)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="gap-0 bg-card py-0">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 border-b py-4 text-start">
          <div>
            <CardTitle>فهرست پیام‌ها</CardTitle>
            <CardDescription className="tracking-normal">
              {totalUnread > 0
                ? `${toFa(totalUnread)} پیام خوانده‌نشده`
                : "همه خوانده شده‌اند"}
            </CardDescription>
          </div>
          <Button type="button" size="sm" variant="outline" className="shrink-0">
            همه خوانده
          </Button>
        </CardHeader>
        <CardContent className="space-y-0 p-0">
          {MESSAGES.map((m, i) => (
            <div key={m.email}>
              {i > 0 && <Separator />}
              <div
                className={
                  m.unread > 0
                    ? "flex items-center gap-3 bg-muted/40 px-6 py-3"
                    : "flex items-center gap-3 px-6 py-3"
                }
              >
                <Avatar className="size-10">
                  {"avatar" in m && m.avatar ? (
                    <AvatarImage src={m.avatar} alt={m.name} />
                  ) : null}
                  <AvatarFallback>{m.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium">{m.name}</p>
                    <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                      {m.time}
                    </span>
                  </div>
                  <p className="truncate text-xs tracking-normal text-muted-foreground">
                    <span dir="ltr" className="inline-block text-left">
                      {m.email}
                    </span>
                  </p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-sm text-muted-foreground">
                      {m.preview}
                    </p>
                    {m.unread > 0 ? (
                      <Badge
                        variant="outline"
                        className="h-5 min-w-5 border px-1.5 tracking-normal"
                      >
                        {toFa(m.unread)}
                      </Badge>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
