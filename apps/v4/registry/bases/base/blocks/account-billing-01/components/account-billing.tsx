import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

export function AccountBillingSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>صورتحساب</CardTitle>
          <CardDescription>خلاصهٔ دورهٔ جاری</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm tracking-normal">
          <div className="flex justify-between">
            <span className="text-muted-foreground">طرح</span>
            <span>حرفه‌ای ماهانه</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">دوره</span>
            <span>۱۴۰۵/۰۷</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>مبلغ قابل پرداخت</span>
            <span>۱٬۳۲۰٬۰۰۰ تومان</span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button type="button" className="w-full">
            پرداخت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
