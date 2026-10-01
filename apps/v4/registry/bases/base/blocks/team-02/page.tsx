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

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-muted text-foreground min-h-[520px] space-y-6 p-6 md:p-10", className)}
      {...props}
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">تیم</h2>
          <p className="text-sm text-muted-foreground">Team — نمونه‌های راست‌چین</p>
        </div>
        <Button variant="outline" size="sm">مشاهده همه</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, idx) => idx + 1).map((i) => (
          <Card key={i} className={undefined}>
            <CardHeader>
              <Badge variant="outline" className="w-fit">مورد {i}</Badge>
              <CardTitle className="text-base">عنوان نمونه {i}</CardTitle>
              <CardDescription>توضیح کوتاه برای این کارت در چیدمان تیم.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size="sm" variant="secondary">جزئیات</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
