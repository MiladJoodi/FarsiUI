import { cn } from "cn"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import { Input } from "@/registry/base-rhea/ui/input"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("min-h-[480px] bg-muted p-4 text-foreground", className)}
      {...props}
    >
      <Card className="mx-auto flex h-[440px] max-w-lg flex-col">
        <CardHeader className="border-b py-3">
          <CardTitle className="text-base">دیدگاه‌ها</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {[
            ["سارا", "سلام، سفارش من کی می‌رسه؟"],
            ["پشتیبانی", "سلام! تا فردا ارسال می‌شود."],
          ].map(([who, text], i) => (
            <div
              key={i}
              className={"flex gap-2 " + (i % 2 ? "flex-row-reverse" : "")}
            >
              <Avatar className="size-8">
                <AvatarFallback>{who[0]}</AvatarFallback>
              </Avatar>
              <div className="rounded-2xl bg-muted px-3 py-2 text-sm">
                {text}
              </div>
            </div>
          ))}
        </CardContent>
        <div className="flex gap-2 border-t p-3">
          <Input placeholder="پیام بنویسید…" dir="rtl" className="text-start" />
          <Button>ارسال</Button>
        </div>
      </Card>
    </div>
  )
}
