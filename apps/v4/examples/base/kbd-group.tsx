import { Kbd, KbdGroup } from "@/styles/base-nova/ui/kbd"

export default function KbdGroupExample() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        برای باز کردن پالت فرمان از{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        استفاده کنید
      </p>
    </div>
  )
}
