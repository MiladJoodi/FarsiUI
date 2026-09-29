import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/styles/base-nova/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert dir="rtl" variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>پرداخت انجام نشد</AlertTitle>
      <AlertDescription>
        تراکنش ناموفق بود. روش پرداخت را بررسی کنید و دوباره تلاش کنید.
      </AlertDescription>
    </Alert>
  )
}
