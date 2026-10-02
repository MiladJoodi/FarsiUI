import { cn } from "cn"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-mira/ui/avatar"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-mira/ui/table"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("min-h-[480px] bg-muted p-6 text-foreground", className)}
      {...props}
    >
      <h2 className="mb-4 text-xl font-bold">صندوق پیام‌ها</h2>
      <div className="divide-y rounded-xl border">
        {[
          "پیام جدید از پشتیبانی",
          "سفارش شما ارسال شد",
          "یادآوری جلسه ساعت ۱۸",
        ].map((t, i) => (
          <div key={t} className="flex items-center gap-3 p-4">
            <Avatar>
              <AvatarFallback>{["پ", "س", "ی"][i]}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{t}</p>
              <p className="text-xs text-muted-foreground">Inbox</p>
            </div>
            <Badge variant="outline">جدید</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
