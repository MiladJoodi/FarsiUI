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
          <h2 className="text-2xl font-bold">بنتو</h2>
          <p className="text-sm text-muted-foreground">Bento — نمونه‌های راست‌چین</p>
        </div>
        <Button variant="outline" size="sm">مشاهده همه</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 6 }, (_, idx) => idx + 1).map((i) => (
          <Card key={i} className={i === 1 ? "md:col-span-2 md:row-span-2" : undefined}>
            <CardHeader>
              <Badge variant="outline" className="w-fit">مورد {i}</Badge>
              <CardTitle className="text-base">عنوان نمونه {i}</CardTitle>
              <CardDescription>توضیح کوتاه برای این کارت در چیدمان بنتو.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
