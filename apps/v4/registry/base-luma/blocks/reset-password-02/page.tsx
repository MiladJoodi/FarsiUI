import { cn } from "cn"

import { Button } from "@/registry/base-luma/ui/button"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-luma/ui/sheet"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[420px] flex-col items-center justify-center gap-4 bg-muted p-6 text-foreground",
        className
      )}
      {...props}
    >
      <Sheet>
        <SheetTrigger render={<Button />}>تغییر رمز عبور</SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md"
          dir="rtl"
          lang="fa"
        >
          <SheetHeader>
            <SheetTitle>تغییر رمز عبور</SheetTitle>
            <SheetDescription>رمز جدید خود را تنظیم کنید</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="reset-password">رمز عبور جدید</Label>
              <Input
                id="reset-password"
                type="password"
                placeholder="••••••••"
                dir="ltr"
                className="text-start"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reset-confirm">تکرار رمز عبور</Label>
              <Input
                id="reset-confirm"
                type="password"
                placeholder="••••••••"
                dir="ltr"
                className="text-start"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>
              ذخیره رمز جدید
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
