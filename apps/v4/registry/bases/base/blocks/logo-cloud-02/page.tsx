import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-muted text-foreground flex min-h-[360px] items-center justify-center p-6", className)}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>لوگوی مشتریان</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full">ادامه</Button>
        </CardContent>
      </Card>
    </div>
  )
}
