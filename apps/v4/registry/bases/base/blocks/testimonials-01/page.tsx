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

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[360px] items-center justify-center p-6", className)}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>نظرات کاربران</CardTitle>
          <CardDescription>نظرات کاربران — تجربهٔ ساده و متمرکز</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">ادامه</Button>
        </CardContent>
      </Card>
    </div>
  )
}
