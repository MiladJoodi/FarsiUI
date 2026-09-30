import { Button } from "@/styles/base-nova/ui/button"
import { Input } from "@/styles/base-nova/ui/input"
import { Label } from "@/styles/base-nova/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/styles/base-nova/ui/sheet"

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
              <Input id="sheet-demo-username" defaultValue="@alireza" />
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
