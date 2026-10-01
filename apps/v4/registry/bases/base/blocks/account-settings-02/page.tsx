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
      <Tabs defaultValue="general" className="mx-auto max-w-xl" dir="rtl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general">عمومی</TabsTrigger>
          <TabsTrigger value="security">امنیت</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات حساب</CardTitle>
              <CardDescription>نسخهٔ دوم با تب‌ها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>حالت تاریک خودکار</Label>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4">
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              تنظیمات امنیتی حساب شما اینجاست.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
