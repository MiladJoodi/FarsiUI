"use client"

import { cn } from "cn"

import { NationalIdInput } from "@/registry/bases/base/blocks/national-id-02/components/national-id-input"
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
        <SheetTrigger render={<Button />}>ورود کد ملی</SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md"
          dir="rtl"
          lang="fa"
        >
          <SheetHeader>
            <SheetTitle>کد ملی</SheetTitle>
            <SheetDescription>
              کد ملی ۱۰ رقمی خود را وارد کنید
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="national-id-sheet">کد ملی</Label>
              <NationalIdInput id="national-id-sheet" name="nationalId" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>ادامه</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
