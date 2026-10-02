import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Label } from "@/registry/base-maia/ui/label"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

export function SecuritySettingsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>تنظیمات امنیتی</CardTitle>
          <CardDescription>
            لایه‌های حفاظتی پایهٔ حساب را فعال کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          <Row
            id="ss1-2fa"
            title="ورود دو مرحله‌ای"
            desc="کد تأیید پس از رمز عبور"
            defaultChecked
          />
          <Separator />
          <Row
            id="ss1-alert"
            title="هشدار ورود جدید"
            desc="ایمیل هنگام ورود از دستگاه ناشناس"
            defaultChecked
          />
          <Separator />
          <Row
            id="ss1-remember"
            title="به‌خاطر سپردن دستگاه"
            desc="تا ۳۰ روز بدون ورود مجدد"
          />
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">ذخیره تنظیمات</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

function Row({
  id,
  title,
  desc,
  defaultChecked,
}: {
  id: string
  title: string
  desc: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{title}</Label>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
