import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"
import { Field, FieldGroup } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"
import { Label } from "@/styles/base-nova/ui/label"

export function DialogDemo() {
  return (
    <div dir="rtl">
      <Dialog>
        <form>
          <DialogTrigger render={<Button variant="outline" />}>
            باز کردن دیالوگ
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>ویرایش پروفایل</DialogTitle>
              <DialogDescription>
                تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">نام</Label>
                <Input id="name-1" name="name" defaultValue="علی رضایی" />
              </Field>
              <Field>
                <Label htmlFor="username-1">نام کاربری</Label>
                <Input
                  id="username-1"
                  name="username"
                  dir="ltr"
                  defaultValue="@alireza"
                  className="text-left"
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                انصراف
              </DialogClose>
              <Button type="submit">ذخیره تغییرات</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
