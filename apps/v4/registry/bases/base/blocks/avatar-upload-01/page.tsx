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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Progress } from "@/registry/bases/base/ui/progress"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[420px] items-center justify-center p-6", className)}
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
