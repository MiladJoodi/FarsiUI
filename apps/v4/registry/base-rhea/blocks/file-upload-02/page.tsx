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
import { Progress } from "@/registry/base-rhea/ui/progress"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[420px] items-center justify-center bg-muted p-6 text-foreground",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>
            فایل را بکشید و رها کنید یا انتخاب کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
            رها کردن فایل‌ها اینجا
          </div>
          <Progress value={78} />
          <Button className="w-full">بارگذاری</Button>
        </CardContent>
      </Card>
    </div>
  )
}
