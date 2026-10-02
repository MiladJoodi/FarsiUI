import { cn } from "cn"

import { Button } from "@/registry/base-vega/ui/button"
import { Checkbox } from "@/registry/base-vega/ui/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-vega/ui/drawer"
import { Label } from "@/registry/base-vega/ui/label"
import { Separator } from "@/registry/base-vega/ui/separator"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[360px] items-center justify-center bg-muted p-6 text-foreground",
        className
      )}
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
