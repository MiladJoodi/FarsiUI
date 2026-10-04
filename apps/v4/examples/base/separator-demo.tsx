import { Separator } from "@/registry/bases/base/ui/separator"

export default function SeparatorDemo() {
  return (
    <div dir="rtl" className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">FarsiUI</div>
        <div className="text-muted-foreground">
          پایهٔ سیستم طراحی شما
        </div>
      </div>
      <Separator />
      <div>
        مجموعه‌ای از کامپوننت‌های زیبا که می‌توانید سفارشی‌سازی کنید، گسترش
        دهید و روی آن‌ها بسازید.
      </div>
    </div>
  )
}
