import { Badge } from "@/registry/bases/base/ui/badge"

export default function BadgeVariants() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Badge>پیش‌فرض</Badge>
      <Badge variant="secondary">ثانویه</Badge>
      <Badge variant="destructive">خطرناک</Badge>
      <Badge variant="outline">حاشیه‌دار</Badge>
      <Badge variant="ghost">شفاف</Badge>
    </div>
  )
}
