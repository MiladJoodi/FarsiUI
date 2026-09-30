import { ChevronLeftIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-nova/ui/card"

export function CardSmall() {
  const featureName = "گزارش‌های زمان‌بندی‌شده"

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs" dir="rtl">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          خلاصهٔ هفتگی. دیگر نیازی به خروجی دستی نیست.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronLeftIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>زمان‌بندی را انتخاب کنید (روزانه یا هفتگی).</span>
          </li>
          <li className="flex gap-2">
            <ChevronLeftIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>به کانال‌ها یا اعضای مشخص ارسال کنید.</span>
          </li>
          <li className="flex gap-2">
            <ChevronLeftIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>نمودار، جدول و شاخص‌های کلیدی را بگنجانید.</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          راه‌اندازی گزارش زمان‌بندی‌شده
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          تازه‌ها را ببینید
        </Button>
      </CardFooter>
    </Card>
  )
}
