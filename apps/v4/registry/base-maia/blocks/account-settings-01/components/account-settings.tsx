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

export function AccountSettingsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>تنظیمات حساب</CardTitle>
          <CardDescription>
            ترجیحات پایهٔ حساب را سریع تغییر دهید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          <Row
            id="as1-email"
            title="اعلان ایمیلی"
            desc="خلاصهٔ هفتگی و پیام‌های مهم"
            defaultChecked
          />
          <Separator />
          <Row
            id="as1-2fa"
            title="ورود دو مرحله‌ای"
            desc="تأیید با کد هنگام ورود"
          />
          <Separator />
          <Row
            id="as1-public"
            title="پروفایل عمومی"
            desc="دیگران بتوانند پروفایل شما را ببینند"
            defaultChecked
          />
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">ذخیره تغییرات</Button>
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
