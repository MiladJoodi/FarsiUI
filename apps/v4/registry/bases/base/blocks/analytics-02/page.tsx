import { cn } from "cn"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-muted text-foreground min-h-[420px] p-6", className)}
      {...props}
    >
      <h2 className="mb-4 text-xl font-bold">تحلیل‌ها</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["کاربران فعال", "۱۲٬۴۸۰"],
          ["درآمد ماه", "۸۴۰ میلیون"],
          ["نرخ تبدیل", "۴٫۲٪"],
          ["رضایت", "۹۶٪"],
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader className="pb-2">
              <CardDescription>{label}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{value}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              به‌روز‌رسانی لحظه‌ای
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
