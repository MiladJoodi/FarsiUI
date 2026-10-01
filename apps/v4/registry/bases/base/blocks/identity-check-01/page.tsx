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
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-muted text-foreground min-h-[480px] p-6", className)}
      {...props}
    >
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>بررسی هویت</CardTitle>
          <CardDescription>تنظیمات حساب با سوئیچ‌های راست‌چین</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            ["اعلان ایمیلی", true],
            ["ورود دو مرحله‌ای", false],
            ["نمایش پروفایل عمومی", true],
          ].map(([label, on]) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <Label>{label}</Label>
              <Switch defaultChecked={Boolean(on)} />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">ذخیره تغییرات</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
