"use client"

import * as React from "react"
import { toast } from "sonner"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/styles/base-rhea/ui/badge"
import { Button } from "@/styles/base-rhea/ui/button"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-rhea/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/styles/base-rhea/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base-rhea/ui/hover-card"
import { RadioGroup, RadioGroupItem } from "@/styles/base-rhea/ui/radio-group"

const deliveryTimes = [
  {
    value: "asap",
    id: "card-delivery-asap",
    label: "تحویل عادی",
    description: "۲۵–۳۵ دقیقه",
    badge: "سریع‌ترین",
  },
  {
    value: "5-00",
    id: "card-delivery-5-00",
    label: "۱۷:۰۰ – ۱۷:۱۵",
    description: "آماده‌سازی از ۱۶:۴۵",
  },
  {
    value: "6-00",
    id: "card-delivery-6-00",
    label: "۱۸:۰۰ – ۱۸:۱۵",
    description: "محبوب‌ترین · تقاضای بالا",
  },
]

export function DropdownDrawerHover() {
  const [open, setOpen] = React.useState(false)
  const [deliveryTime, setDeliveryTime] = React.useState("asap")
  const isMobile = useIsMobile()

  function handleConfirm() {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime)
    if (!selected) return
    setOpen(false)
    toast("زمان تحویل تأیید شد", {
      description: selected.label,
    })
  }

  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-wrap items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            منوی بازشو
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="start" dir="rtl">
            <DropdownMenuGroup>
              <DropdownMenuLabel>حساب</DropdownMenuLabel>
              <DropdownMenuItem>پروفایل</DropdownMenuItem>
              <DropdownMenuItem>صورتحساب</DropdownMenuItem>
              <DropdownMenuItem>تنظیمات</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>خروج</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Drawer
          open={open}
          onOpenChange={setOpen}
          showSwipeHandle={isMobile}
          swipeDirection={isMobile ? "down" : "right"}
        >
          <DrawerTrigger render={<Button variant="secondary" />}>
            کشو
          </DrawerTrigger>
          <DrawerContent dir="rtl">
            <DrawerHeader>
              <DrawerTitle>انتخاب زمان تحویل</DrawerTitle>
              <DrawerDescription>
                سفارش را در سریع‌ترین زمان ممکن آماده می‌کنیم.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 overflow-y-auto p-4">
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
              <Button onClick={handleConfirm}>تأیید زمان تحویل</Button>
              <DrawerClose render={<Button variant="outline" />}>
                انصراف
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <HoverCard>
          <HoverCardTrigger
            delay={10}
            closeDelay={100}
            render={<Button variant="link" />}
          >
            کارت شناور
          </HoverCardTrigger>
          <HoverCardContent className="flex w-64 flex-col gap-0.5" dir="rtl">
            <div className="font-semibold">@farsiui</div>
            <div>کامپوننت‌های فارسی برای ری‌اکت و Tailwind.</div>
            <div className="mt-1 text-xs text-muted-foreground">
              عضویت از فروردین ۱۴۰۳
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  )
}
