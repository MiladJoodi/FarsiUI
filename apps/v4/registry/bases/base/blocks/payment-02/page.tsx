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
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Separator } from "@/registry/bases/base/ui/separator"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[480px] p-6", className)}
      {...props}
    >
      <div className={cn("mx-auto grid max-w-4xl gap-6", undefined)}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>پرداخت</CardTitle>
              <Badge variant="secondary">Payment</Badge>
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
              محتوای نمونه برای «پرداخت». همهٔ عناصر راست‌چین هستند.
            </div>
            <Button>اقدام اصلی</Button>
          </CardContent>
        </Card>
        
      </div>
    </div>
  )
}
