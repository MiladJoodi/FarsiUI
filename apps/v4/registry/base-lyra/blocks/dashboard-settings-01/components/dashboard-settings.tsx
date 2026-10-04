import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Label } from "@/registry/base-lyra/ui/label"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { Switch } from "@/registry/base-lyra/ui/switch"

export default function DashboardSettingsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>تنظیمات اعلان‌ها</CardTitle>
          <CardDescription>
            مشخص کنید از چه کانال‌هایی اطلاع‌رسانی بگیرید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          <Row
            id="ds-email"
            title="ایمیل"
            desc="خلاصهٔ هفتگی و اعلان‌های مهم"
            defaultChecked
          />
          <Separator />
          <Row
            id="ds-sms"
            title="پیامک"
            desc="کد تأیید و هشدارهای امنیتی"
            defaultChecked
          />
          <Separator />
          <Row
            id="ds-push"
            title="اعلان مرورگر"
            desc="اطلاع‌رسانی آنی در دسکتاپ"
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
