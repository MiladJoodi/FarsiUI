import { Badge } from "@/registry/bases/base/ui/badge"

export default function BadgeDemo() {
  return (
    <div dir="rtl" className="flex w-full flex-wrap justify-center gap-2">
      <Badge>نشان</Badge>
      <Badge variant="secondary">ثانویه</Badge>
      <Badge variant="destructive">خطرناک</Badge>
      <Badge variant="outline">حاشیه‌دار</Badge>
    </div>
  )
}
