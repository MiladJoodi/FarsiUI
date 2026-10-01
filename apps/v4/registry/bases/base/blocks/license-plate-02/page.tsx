import { cn } from "cn"
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

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "bg-muted text-foreground flex min-h-[420px] flex-col items-center justify-center gap-4 p-6",
        className
      )}
      {...props}
    >
      <Sheet>
        <SheetTrigger render={<Button />}>ثبت پلاک خودرو</SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" dir="rtl" lang="fa">
          <SheetHeader>
            <SheetTitle>پلاک خودرو</SheetTitle>
            <SheetDescription>شماره پلاک خودرو را وارد کنید</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="plate-number">شماره پلاک</Label>
              <Input
                id="plate-number"
                placeholder="۱۲ ب ۳۴۵ ایران ۶۷"
                dir="rtl"
                className="text-start"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>ثبت</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
