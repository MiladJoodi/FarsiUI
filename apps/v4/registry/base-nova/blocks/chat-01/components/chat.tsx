import { Avatar, AvatarFallback } from "@/registry/base-nova/ui/avatar"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Input } from "@/registry/base-nova/ui/input"

const MESSAGES = [
  { who: "سارا", text: "سلام، سفارش من کی می‌رسه؟", me: false },
  { who: "پشتیبانی", text: "سلام! تا فردا ارسال می‌شود.", me: true },
  { who: "سارا", text: "مرسی، عالی شد.", me: false },
] as const

export function ChatSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="flex h-[440px] flex-col overflow-hidden">
        <CardHeader className="border-b py-3">
          <CardTitle className="text-base">گفتگو</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={m.me ? "flex flex-row-reverse gap-2" : "flex gap-2"}
            >
              <Avatar className="size-8">
                <AvatarFallback>{m.who[0]}</AvatarFallback>
              </Avatar>
              <div
                className={
                  m.me
                    ? "rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "rounded-2xl bg-muted px-3 py-2 text-sm"
                }
              >
                {m.text}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="gap-2 border-t p-3">
          <Input placeholder="پیام بنویسید…" dir="rtl" className="flex-1" />
          <Button type="button">ارسال</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
