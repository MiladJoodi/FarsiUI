import { Separator } from "@/registry/bases/base/ui/separator"

export default function SeparatorMenu() {
  return (
    <div dir="rtl" className="flex items-center gap-2 text-sm md:gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium">تنظیمات</span>
        <span className="text-xs text-muted-foreground">
          مدیریت ترجیحات
        </span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">حساب</span>
        <span className="text-xs text-muted-foreground">
          پروفایل و امنیت
        </span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <span className="font-medium">راهنما</span>
        <span className="text-xs text-muted-foreground">پشتیبانی و مستندات</span>
      </div>
    </div>
  )
}
