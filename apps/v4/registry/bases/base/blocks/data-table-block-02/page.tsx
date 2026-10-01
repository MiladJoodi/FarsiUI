import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[480px] p-6", className)}
      {...props}
    >
      <h2 className="mb-4 text-xl font-bold">جدول داده‌ها</h2>
      <div className="divide-y rounded-xl border">
        {["پیام جدید از پشتیبانی", "سفارش شما ارسال شد", "یادآوری جلسه ساعت ۱۸"].map((t, i) => (
          <div key={t} className="flex items-center gap-3 p-4">
            <Avatar>
              <AvatarFallback>{["پ", "س", "ی"][i]}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{t}</p>
              <p className="text-xs text-muted-foreground">Data Table</p>
            </div>
            <Badge variant="outline">جدید</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
