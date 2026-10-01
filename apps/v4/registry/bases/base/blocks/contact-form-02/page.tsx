import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[420px] flex-col items-center justify-center gap-4 p-6", className)}
      {...props}
    >
      <p className="max-w-sm text-center text-sm text-muted-foreground">
        نسخهٔ دوم: باز شدن فرم داخل شیت از سمت راست
      </p>
      <Sheet>
        <SheetTrigger asChild>
          <Button>فرم تماس</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" dir="rtl" lang="fa">
          <SheetHeader>
            <SheetTitle>فرم تماس</SheetTitle>
            <SheetDescription>جزئیات مربوط به فرم تماس را تکمیل کنید</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="s-a">نام</Label>
              <Input id="s-a" placeholder="مثلاً سارا" dir="rtl" className="text-start" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="s-b">توضیح</Label>
              <Input id="s-b" placeholder="اختیاری" dir="rtl" className="text-start" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit" className="w-full">ثبت</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
