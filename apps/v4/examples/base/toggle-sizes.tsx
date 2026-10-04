import { Toggle } from "@/styles/base-nova/ui/toggle"

export default function ToggleSizes() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="کوچک" size="sm">
        کوچک
      </Toggle>
      <Toggle variant="outline" aria-label="پیش‌فرض" size="default">
        پیش‌فرض
      </Toggle>
      <Toggle variant="outline" aria-label="بزرگ" size="lg">
        بزرگ
      </Toggle>
    </div>
  )
}
