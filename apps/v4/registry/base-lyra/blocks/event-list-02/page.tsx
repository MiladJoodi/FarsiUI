import { cn } from "cn"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-lyra/ui/table"

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
      <h2 className="mb-4 text-xl font-bold">فهرست رویدادها</h2>
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
              <p className="text-xs text-muted-foreground">Event List</p>
            </div>
            <Badge variant="outline">جدید</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
