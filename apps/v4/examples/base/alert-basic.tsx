import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"

export default function AlertBasic() {
  return (
    <Alert dir="rtl" className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>حساب با موفقیت به‌روزرسانی شد</AlertTitle>
      <AlertDescription>
        اطلاعات پروفایل ذخیره شد و بلافاصله در برنامه اعمال می‌شود.
      </AlertDescription>
    </Alert>
  )
}
