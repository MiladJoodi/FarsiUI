import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[360px] items-center justify-center p-6", className)}
      {...props}
    >
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">فیلترها</Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>فیلترهای پیشرفته</DrawerTitle>
            <DrawerDescription>فیلترهای پیشرفته در کشو</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-3 px-4 pb-4">
            {["موجود در انبار", "ارسال امروز", "تخفیف‌دار"].map((f) => (
              <label key={f} className="flex items-center gap-2 text-sm">
                <Checkbox />
                {f}
              </label>
            ))}
          </div>
          <DrawerFooter>
            <Button>اعمال فیلتر</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
