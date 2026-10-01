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
        <SheetTrigger render={<Button />}>تماس با ما</SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" dir="rtl" lang="fa">
          <SheetHeader>
            <SheetTitle>فرم تماس</SheetTitle>
            <SheetDescription>پیام خود را برای ما ارسال کنید</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">نام</Label>
              <Input
                id="contact-name"
                placeholder="مثلاً سارا"
                dir="rtl"
                className="text-start"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">ایمیل</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">پیام</Label>
              <Input
                id="contact-message"
                placeholder="پیام خود را بنویسید…"
                dir="rtl"
                className="text-start"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>ارسال</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
