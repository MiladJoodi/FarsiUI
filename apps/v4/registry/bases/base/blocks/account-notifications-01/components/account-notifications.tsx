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

export function AccountNotificationsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>اعلان‌ها</CardTitle>
          <CardDescription>
            مشخص کنید از چه کانال‌هایی اطلاع‌رسانی بگیرید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          <Row
            id="an1-email"
            title="ایمیل"
            desc="خلاصهٔ هفتگی و پیام‌های مهم"
            defaultChecked
          />
          <Separator />
          <Row
            id="an1-sms"
            title="پیامک"
            desc="کد تأیید و هشدارهای فوری"
            defaultChecked
          />
          <Separator />
          <Row
            id="an1-push"
            title="اعلان مرورگر"
            desc="اطلاع‌رسانی آنی در دسکتاپ"
          />
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">ذخیره اعلان‌ها</Button>
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
