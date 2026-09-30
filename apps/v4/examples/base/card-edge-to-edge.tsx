import { Button } from "@/styles/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-nova/ui/card"

export function CardEdgeToEdge() {
  return (
    <Card className="mx-auto w-full max-w-sm" dir="rtl">
      <CardHeader>
        <CardTitle>شرایط استفاده</CardTitle>
        <CardDescription>
          قبل از پذیرش توافق، شرایط را مرور کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <p>
            این شرایط استفاده از فضای کاری را پوشش می‌دهد؛ از جمله دسترسی به
            اسناد مشترک، فایل‌های پروژه و ابزارهای همکاری.
          </p>
          <p>
            شما مسئول محتوایی هستید که بارگذاری می‌کنید و باید مطمئن شوید تیم
            دسترسی مناسب برای مشاهده یا ویرایش دارد.
          </p>
          <p>
            ممکن است با رشد سرویس، قابلیت‌ها یا محدودیت‌ها به‌روز شوند. اگر این
            تغییرات روی جریان کار شما اثر بگذارد، مدیران فضای کاری مطلع می‌شوند.
          </p>
          <p>
            با ادامه، می‌پذیرید اطلاعات ورود را امن نگه دارید و سیاست‌های استفادهٔ
            مجاز سازمان خود را رعایت کنید.
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">رد</Button>
        <Button>پذیرش</Button>
      </CardFooter>
    </Card>
  )
}
