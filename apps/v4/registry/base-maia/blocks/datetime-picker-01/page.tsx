import { cn } from "cn"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[520px] items-center justify-center bg-muted p-6 text-foreground",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>انتخاب تاریخ و زمان</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="field-a">ایمیل</Label>
              <Input
                id="field-a"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="field-b">جزئیات</Label>
              <Input
                id="field-b"
                placeholder="اینجا بنویسید…"
                dir="rtl"
                className="text-start"
              />
            </div>
            <Button className="w-full">ادامه</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
