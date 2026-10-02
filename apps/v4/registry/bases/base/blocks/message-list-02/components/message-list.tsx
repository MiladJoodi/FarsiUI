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

export function MessageListUnread() {
  const totalUnread = MESSAGES.reduce((n, m) => n + m.unread, 0)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 text-start">
          <div>
            <CardTitle>فهرست پیام‌ها</CardTitle>
            <CardDescription>
              {totalUnread > 0 ? (
                <>
                  <bdi dir="ltr">{totalUnread}</bdi> پیام خوانده‌نشده
                </>
              ) : (
                "همه خوانده شده‌اند"
              )}
            </CardDescription>
          </div>
          <Button size="sm" variant="outline">
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
                    <span className="shrink-0 text-xs text-muted-foreground">
                      <bdi dir="ltr">{m.time}</bdi>
                    </span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    <bdi dir="ltr">{m.email}</bdi>
                  </p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-sm text-muted-foreground">
                      {m.preview}
                    </p>
                    {m.unread > 0 ? (
                      <Badge variant="secondary" className="h-5 min-w-5 px-1.5">
                        <bdi dir="ltr">{m.unread}</bdi>
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
