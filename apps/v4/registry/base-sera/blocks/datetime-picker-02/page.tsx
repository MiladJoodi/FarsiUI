import { cn } from "cn"

import { Button } from "@/registry/base-sera/ui/button"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-sera/ui/sheet"

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
        <SheetTrigger render={<Button />}>انتخاب تاریخ و زمان</SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md"
          dir="rtl"
          lang="fa"
        >
          <SheetHeader>
            <SheetTitle>انتخاب تاریخ و زمان</SheetTitle>
            <SheetDescription>زمان مورد نظر خود را مشخص کنید</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="datetime-date">تاریخ</Label>
              <Input
                id="datetime-date"
                type="date"
                dir="ltr"
                className="text-start"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="datetime-time">ساعت</Label>
              <Input
                id="datetime-time"
                type="time"
                dir="ltr"
                className="text-start"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>
              تأیید
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
