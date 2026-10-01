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
      className={cn("bg-muted text-foreground flex min-h-[420px] items-center justify-center p-6", className)}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>فایل را بکشید و رها کنید یا انتخاب کنید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
            رها کردن فایل‌ها اینجا
          </div>
          <Progress value={45} />
          <Button className="w-full">بارگذاری</Button>
        </CardContent>
      </Card>
    </div>
  )
}
