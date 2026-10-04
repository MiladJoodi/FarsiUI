import { Button } from "@/registry/bases/base/ui/button"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"

export default function SheetDemo() {
  return (
    <div dir="rtl">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>باز کردن</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>ویرایش پروفایل</SheetTitle>
            <SheetDescription>
              تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">نام</Label>
              <Input id="sheet-demo-name" defaultValue="علی رضایی" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">نام کاربری</Label>
              <Input
                id="sheet-demo-username"
                dir="ltr"
                defaultValue="@alireza"
                className="text-left"
              />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">ذخیره تغییرات</Button>
            <SheetClose render={<Button variant="outline" />}>بستن</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
