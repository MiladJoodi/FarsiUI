"use client"

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

const SNAP_POINTS = ["31rem", 1]

export default function DrawerSnapPoints() {
  return (
    <div dir="rtl">
      <Drawer snapPoints={SNAP_POINTS} showSwipeHandle>
        <DrawerTrigger render={<Button variant="outline" />}>
          باز کردن کشوی اسنپ
        </DrawerTrigger>
        <DrawerContent dir="rtl">
          <DrawerHeader>
            <DrawerTitle>نقاط اسنپ</DrawerTitle>
            <DrawerDescription>
              کشو را بکشید تا بین نمای فشرده و تقریباً تمام‌صفحه جابه‌جا شود.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>بستن</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
