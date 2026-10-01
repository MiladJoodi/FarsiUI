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
        <SheetTrigger render={<Button />}>عضویت در خبرنامه</SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" dir="rtl" lang="fa">
          <SheetHeader>
            <SheetTitle>خبرنامه</SheetTitle>
            <SheetDescription>
              ایمیل خود را وارد کنید تا از تازه‌ها باخبر شوید
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <div className="grid gap-2">
              <Label htmlFor="newsletter-email">ایمیل</Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose render={<Button className="w-full" />}>عضویت</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
