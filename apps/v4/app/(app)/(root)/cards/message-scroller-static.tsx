import { ArrowUpIcon } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/registry/bases/base/ui/card"

const MESSAGES = [
  {
    role: "user" as const,
    text: "امروز دارم روی صفحه اصلی کار می‌کنم، ولی هنوز چندتا چیز هست که باید درستشون کنم.",
  },
  {
    role: "assistant" as const,
    text: "این مشکل اسکرول موقع استریم است. با اسکرول خودکار، صفحه روی پیام‌های جدید می‌ماند.",
  },
  {
    role: "user" as const,
    text: "باشه، ولی وقتی کسی پیام جدید می‌فرستد هنوز دید ناگهانی است.",
  },
  {
    role: "assistant" as const,
    text: "MessageScrollerItem با لنگر نوبت این را درست می‌کند تا زمینه از دست نرود.",
  },
]

/** Static CSS chat card — same look as MessageScroller demo, no AI SDK. */
export function MessageScrollerStatic() {
  return (
    <div dir="rtl" className="relative flex flex-col gap-4" aria-hidden>
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="gap-1 border-b">
          <CardTitle>گفتگوی جدید</CardTitle>
          <p className="text-sm text-muted-foreground">
            چطور می‌توانم کمکتان کنم؟
          </p>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-hidden p-4">
          {MESSAGES.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? "ms-8 rounded-2xl bg-primary/12 px-3 py-2 text-sm text-foreground"
                  : "me-8 rounded-2xl bg-muted px-3 py-2 text-sm text-foreground"
              }
            >
              {message.text}
            </div>
          ))}
        </CardContent>
        <CardFooter className="border-t">
          <div className="flex w-full items-center gap-2">
            <div className="flex h-11 min-w-0 flex-1 items-center rounded-full border bg-background px-4 text-sm text-muted-foreground">
              پیام خود را بنویسید…
            </div>
            <span
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
              aria-hidden
            >
              <ArrowUpIcon className="size-5" strokeWidth={2.25} />
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
