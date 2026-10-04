import { Button } from "@/registry/bases/base/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
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

export default function SheetRtl() {
  return (
    <div dir="rtl">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>باز کردن</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>ویرایش پروفایل</SheetTitle>
            <SheetDescription>
              تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
            </SheetDescription>
          </SheetHeader>
          <FieldGroup className="px-4">
            <Field>
              <FieldLabel htmlFor="sheet-rtl-name">نام</FieldLabel>
              <Input id="sheet-rtl-name" defaultValue="علی رضایی" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-rtl-username">نام کاربری</FieldLabel>
              <Input id="sheet-rtl-username" defaultValue="alireza" />
            </Field>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">ذخیره تغییرات</Button>
            <SheetClose render={<Button variant="outline" />}>بستن</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
