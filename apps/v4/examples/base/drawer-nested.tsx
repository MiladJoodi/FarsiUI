"use client"

import { useIsMobile } from "@/hooks/use-mobile"
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

export function DrawerNested() {
  const isMobile = useIsMobile()

  const swipeDirection = isMobile ? "down" : "right"

  return (
    <div dir="rtl">
      <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
        <DrawerTrigger render={<Button variant="secondary" />}>
          باز کردن کشو
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>کشو</DrawerTitle>
            <DrawerDescription>
              از همین جهت، کشوی دیگری باز کنید.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
          </div>
          <DrawerFooter>
            <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
              <DrawerTrigger render={<Button variant="outline" />}>
                باز کردن کشوی تو در تو
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>کشوی تو در تو</DrawerTitle>
                  <DrawerDescription>
                    کشوی والد پشت این یکی سوار می‌ماند.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 p-4">
                  <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                </div>
                <DrawerFooter>
                  <Drawer
                    showSwipeHandle={isMobile}
                    swipeDirection={swipeDirection}
                  >
                    <DrawerTrigger render={<Button variant="outline" />}>
                      باز کردن کشوی سوم
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>کشوی سوم</DrawerTitle>
                        <DrawerDescription>
                          دو کشو پشت این یکی چیده شده‌اند.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="flex-1 p-4">
                        <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                      </div>
                      <DrawerFooter>
                        <Drawer
                          showSwipeHandle={isMobile}
                          swipeDirection={swipeDirection}
                        >
                          <DrawerTrigger render={<Button variant="outline" />}>
                            باز کردن کشوی چهارم
                          </DrawerTrigger>
                          <DrawerContent>
                            <DrawerHeader>
                              <DrawerTitle>کشوی چهارم</DrawerTitle>
                              <DrawerDescription>
                                این جلوترین کشو در پشته است.
                              </DrawerDescription>
                            </DrawerHeader>
                            <div className="flex-1 p-4">
                              <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                            </div>
                            <DrawerFooter>
                              <DrawerClose
                                render={<Button variant="outline" />}
                              >
                                بستن
                              </DrawerClose>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>
                        <DrawerClose render={<Button variant="outline" />}>
                          بستن
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                  <DrawerClose render={<Button variant="outline" />}>
                    بستن
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <DrawerClose render={<Button variant="outline" />}>بستن</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
