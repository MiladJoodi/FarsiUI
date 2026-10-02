import { cn } from "cn"

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
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import { Separator } from "@/registry/base-mira/ui/separator"

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
      <div className={cn("mx-auto grid max-w-4xl gap-6", undefined)}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>مرتب‌سازی و فیلتر</CardTitle>
              <Badge variant="secondary">Sort & Filter</Badge>
            </div>
            <CardDescription>
              بلوک راست‌چین با UX تک‌ستونه فشرده
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>عنوان</Label>
              <Input defaultValue="نمونه فارسی" />
            </div>
            <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
              محتوای نمونه برای «مرتب‌سازی و فیلتر». همهٔ عناصر راست‌چین هستند.
            </div>
            <Button>اقدام اصلی</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
