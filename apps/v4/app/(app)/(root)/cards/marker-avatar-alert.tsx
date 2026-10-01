import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/styles/base-rhea/ui/alert"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-rhea/ui/avatar"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"

export function MarkerAvatarAlert() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Marker role="status">
            <MarkerContent className="shimmer">در حال فکر کردن...</MarkerContent>
          </Marker>
          <Marker variant="separator" role="status">
            <MarkerContent className="shimmer">
              در حال خواندن ۴ فایل
            </MarkerContent>
          </Marker>
        </div>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>ش‌ک</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">شادن</div>
            <div className="text-muted-foreground">آنلاین</div>
          </div>
        </div>
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>حساب با موفقیت به‌روزرسانی شد</AlertTitle>
          <AlertDescription>
            اطلاعات پروفایل ذخیره شد و بلافاصله در برنامه اعمال می‌شود.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
