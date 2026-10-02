import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Separator } from "@/registry/base-sera/ui/separator"

export function AccountBillingSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>صورتحساب</CardTitle>
          <CardDescription>خلاصهٔ دورهٔ جاری</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">طرح</span>
            <span>حرفه‌ای ماهانه</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">دوره</span>
            <span className="tabular-nums">
              <bdi dir="ltr">۱۴۰۴/۰۷</bdi>
            </span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>مبلغ قابل پرداخت</span>
            <span className="tabular-nums">
              <bdi dir="ltr">۱٬۳۲۰٬۰۰۰</bdi> تومان
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">پرداخت</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
