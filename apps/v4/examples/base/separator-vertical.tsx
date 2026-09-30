import { Separator } from "@/styles/base-nova/ui/separator"

export function SeparatorVertical() {
  return (
    <div dir="rtl" className="flex h-5 items-center gap-4 text-sm">
      <div>بلاگ</div>
      <Separator orientation="vertical" />
      <div>مستندات</div>
      <Separator orientation="vertical" />
      <div>سورس</div>
    </div>
  )
}
