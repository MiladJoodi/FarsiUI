import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
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
      className={cn("bg-muted text-foreground flex min-h-[360px] items-center justify-center p-6", className)}
      {...props}
    >
      <Drawer>
        <DrawerTrigger asChild>
          <Button>باز کردن منوی موبایل</Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>ناوبری موبایل</DrawerTitle>
            <DrawerDescription>ناوبری تمام‌صفحه برای موبایل</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-2 px-4 pb-6 text-sm">
            {["خانه", "محصولات", "قیمت‌ها", "پشتیبانی"].map((item) => (
              <button key={item} className="rounded-lg px-3 py-2 text-start hover:bg-muted">{item}</button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
