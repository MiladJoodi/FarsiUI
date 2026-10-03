import { Avatar, AvatarFallback } from "@/registry/base-vega/ui/avatar"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Input } from "@/registry/base-vega/ui/input"

const REPLIES = [
  { who: "سارا", text: "سلام، سفارش من کی می‌رسه؟", me: false },
  { who: "پشتیبانی", text: "سلام! تا فردا ارسال می‌شود.", me: true },
] as const

export function ConversationSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[440px] flex-col gap-0 overflow-hidden bg-card py-0">
        <CardHeader className="border-b py-3">
          <CardTitle className="text-base">مکالمه · پیگیری سفارش</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {REPLIES.map((r, i) => (
            <div
              key={i}
              className={r.me ? "flex flex-row-reverse gap-2" : "flex gap-2"}
            >
              <Avatar className="size-8">
                <AvatarFallback>{r.who[0]}</AvatarFallback>
              </Avatar>
              <div
                className={
                  r.me
                    ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "rounded-2xl bg-muted px-3 py-2 text-sm"
                }
              >
                {r.text}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex items-center gap-3 border-t px-4 py-3">
          <Input placeholder="پاسخ بنویسید…" dir="rtl" className="flex-1" />
          <Button type="button" className="shrink-0">
            ارسال
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
