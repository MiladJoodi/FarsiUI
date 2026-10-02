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

export function DrawerSwipeHandle() {
  return (
    <div dir="rtl">
      <Drawer showSwipeHandle>
        <DrawerTrigger render={<Button variant="secondary" />}>
          باز کردن کشو
        </DrawerTrigger>
        <DrawerContent dir="rtl">
          <DrawerHeader>
            <DrawerTitle>کشو</DrawerTitle>
            <DrawerDescription>کشو با دستگیرهٔ کشیدن.</DrawerDescription>
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
