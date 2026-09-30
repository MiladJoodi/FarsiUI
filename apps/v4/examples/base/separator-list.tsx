import { Separator } from "@/styles/base-nova/ui/separator"

export function SeparatorList() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <dl className="flex items-center justify-between">
        <dt>آیتم ۱</dt>
        <dd className="text-muted-foreground">مقدار ۱</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>آیتم ۲</dt>
        <dd className="text-muted-foreground">مقدار ۲</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>آیتم ۳</dt>
        <dd className="text-muted-foreground">مقدار ۳</dd>
      </dl>
    </div>
  )
}
