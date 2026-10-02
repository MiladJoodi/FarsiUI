import { cn } from "cn"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Progress } from "@/registry/base-maia/ui/progress"

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
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle>بارگذاری تصویر پروفایل</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Avatar className="size-24">
            <AvatarFallback className="text-2xl">فا</AvatarFallback>
          </Avatar>
          <Button variant="outline">انتخاب تصویر</Button>
        </CardContent>
      </Card>
    </div>
  )
}
