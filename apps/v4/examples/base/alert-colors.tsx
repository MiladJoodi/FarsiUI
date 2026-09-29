import { AlertTriangleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/styles/base-nova/ui/alert"

export default function AlertColors() {
  return (
    <Alert
      dir="rtl"
      className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50"
    >
      <AlertTriangleIcon />
      <AlertTitle>اشتراک شما ۳ روز دیگر تمام می‌شود</AlertTitle>
      <AlertDescription>
        همین حالا تمدید کنید تا وقفه‌ای در سرویس پیش نیاید، یا به پلن پولی
        ارتقا دهید.
      </AlertDescription>
    </Alert>
  )
}
