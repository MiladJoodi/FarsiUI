import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/styles/base-nova/ui/alert"
import { Button } from "@/styles/base-nova/ui/button"

export default function AlertActionExample() {
  return (
    <Alert className="max-w-md" dir="rtl">
      <AlertTitle>حالت تاریک اضافه شد</AlertTitle>
      <AlertDescription>
        از تنظیمات پروفایل می‌توانید آن را روشن کنید.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          فعال‌سازی
        </Button>
      </AlertAction>
    </Alert>
  )
}
