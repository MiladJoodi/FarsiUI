import { Button } from "@/styles/base-rhea/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/styles/base-rhea/ui/drawer"

export default function DrawerWithSides() {
  return (
    <div dir="rtl">
      <Drawer swipeDirection="left">
        <DrawerTrigger render={<Button variant="secondary" />}>
          کشو از چپ
        </DrawerTrigger>
        <DrawerContent dir="rtl">
          <DrawerHeader>
            <DrawerTitle>هدف روزانه</DrawerTitle>
            <DrawerDescription>هدف فعالیت روزانه‌تان را تنظیم کنید.</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <div className="size-full rounded-2xl bg-muted" />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>بستن</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
