import { CheckCircle2Icon, InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"

export default function AlertDemo() {
  return (
    <div dir="rtl" className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>پرداخت موفق بود</AlertTitle>
        <AlertDescription>
          مبلغ ۲۹٬۹۹۰ تومان پردازش شد. رسید به ایمیل شما ارسال شده است.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>قابلیت جدید</AlertTitle>
        <AlertDescription>
          حالت تاریک اضافه شد. از تنظیمات حساب می‌توانید آن را فعال کنید.
        </AlertDescription>
      </Alert>
    </div>
  )
}
