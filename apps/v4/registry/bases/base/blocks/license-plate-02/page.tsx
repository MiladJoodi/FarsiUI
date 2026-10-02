"use client"

import { cn } from "cn"

import { PlateInput } from "@/registry/bases/base/blocks/license-plate-02/components/plate-input"
import { Button } from "@/registry/bases/base/ui/button"
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
        <SheetContent
          side="right"
          className="w-full sm:max-w-md"
          dir="rtl"
          lang="fa"
        >
          <SheetHeader>
            <SheetTitle>پلاک خودرو</SheetTitle>
            <SheetDescription>
              شماره پلاک را مانند پلاک فلزی وارد کنید
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid justify-items-center gap-2">
              <Label htmlFor="plate-sheet" className="w-full text-start">
                شماره پلاک
              </Label>
              <PlateInput id="plate-sheet" name="plate" />
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
