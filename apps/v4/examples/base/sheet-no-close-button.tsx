import { Button } from "@/registry/bases/base/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"

export default function SheetNoCloseButton() {
  return (
    <div dir="rtl">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>
          باز کردن شیت
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>بدون دکمهٔ بستن</SheetTitle>
            <SheetDescription>
              این شیت دکمهٔ بستن در گوشه ندارد. برای بستن بیرون از آن کلیک کنید.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
