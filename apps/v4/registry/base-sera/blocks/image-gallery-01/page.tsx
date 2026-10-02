import { cn } from "cn"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "min-h-[520px] space-y-6 bg-muted p-6 text-foreground md:p-10",
        className
      )}
      {...props}
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">گالری تصاویر</h2>
          <p className="text-sm text-muted-foreground">
            Image Gallery — نمونه‌های راست‌چین
          </p>
        </div>
        <Button variant="outline" size="sm">
          مشاهده همه
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, idx) => idx + 1).map((i) => (
          <Card key={i} className={undefined}>
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                مورد {i}
              </Badge>
              <CardTitle className="text-base">عنوان نمونه {i}</CardTitle>
              <CardDescription>
                توضیح کوتاه برای این کارت در چیدمان گالری تصاویر.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
