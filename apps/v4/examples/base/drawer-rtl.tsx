"use client"

import * as React from "react"
import { toast } from "sonner"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/styles/base-rhea/ui/badge"
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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/styles/base-rhea/ui/field"
import { RadioGroup, RadioGroupItem } from "@/styles/base-rhea/ui/radio-group"

const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap-rtl",
    label: "تحویل عادی",
    description: "۲۵–۳۵ دقیقه · پیک همین الان تخصیص داده می‌شود",
    badge: "سریع‌ترین",
  },
  {
    value: "5-00",
    id: "delivery-5-00-rtl",
    label: "۱۷:۰۰ – ۱۷:۱۵",
    description: "آماده‌سازی از ۱۶:۴۵ شروع می‌شود",
  },
  {
    value: "5-30",
    id: "delivery-5-30-rtl",
    label: "۱۷:۳۰ – ۱۷:۴۵",
    description: "مناسب اگر در مسیر خانه هستید",
  },
  {
    value: "6-00",
    id: "delivery-6-00-rtl",
    label: "۱۸:۰۰ – ۱۸:۱۵",
    description: "محبوب‌ترین · تقاضای بالا",
  },
  {
    value: "6-30",
    id: "delivery-6-30-rtl",
    label: "۱۸:۳۰ – ۱۸:۴۵",
    description: "آخرین بازه قبل از بسته شدن آشپزخانه",
  },
]

export function DrawerRtl() {
  const [open, setOpen] = React.useState(false)
  const [deliveryTime, setDeliveryTime] = React.useState("asap")
  const isMobile = useIsMobile()

  function handleConfirm() {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime)

    if (!selected) {
      return
    }

    setOpen(false)
    toast("زمان تحویل تأیید شد", {
      description: selected.label,
    })
  }

  return (
    <div dir="rtl">
      <Drawer
        open={open}
        onOpenChange={setOpen}
        showSwipeHandle={isMobile}
        swipeDirection={isMobile ? "down" : "right"}
      >
        <DrawerTrigger render={<Button variant="secondary" />}>
          باز کردن کشو
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>انتخاب زمان تحویل</DrawerTitle>
            <DrawerDescription>
              سفارش را در سریع‌ترین زمان ممکن آماده می‌کنیم.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 scroll-fade overflow-y-auto p-4">
            <RadioGroup
              value={deliveryTime}
              onValueChange={setDeliveryTime}
              className="gap-2"
            >
              {deliveryTimes.map((time) => (
                <FieldLabel key={time.value} htmlFor={time.id}>
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle className="flex items-center gap-2">
                        {time.label}
                        {time.badge ? (
                          <Badge variant="secondary">{time.badge}</Badge>
                        ) : null}
                      </FieldTitle>
                      <FieldDescription>{time.description}</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value={time.value} id={time.id} />
                  </Field>
                </FieldLabel>
              ))}
            </RadioGroup>
          </div>
          <DrawerFooter>
            <Button onClick={handleConfirm} className="h-[34px]">
              تأیید زمان تحویل
            </Button>
            <DrawerClose render={<Button variant="outline" />}>
              انصراف
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
