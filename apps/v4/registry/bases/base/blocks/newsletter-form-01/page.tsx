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

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[520px] items-center justify-center p-6", className)}
      {...props}
    >
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>فرم عضویت در خبرنامه</CardTitle>
            <CardDescription>فرم عضویت در خبرنامه — تجربهٔ ساده و متمرکز</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="field-a">ایمیل</Label>
              <Input id="field-a" type="email" placeholder="name@example.com" dir="ltr" className="text-start" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="field-b">جزئیات</Label>
              <Input id="field-b" placeholder="اینجا بنویسید…" dir="rtl" className="text-start" />
            </div>
            <Button className="w-full">ادامه</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
