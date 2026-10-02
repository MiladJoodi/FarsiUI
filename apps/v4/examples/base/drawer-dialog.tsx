"use client"

import * as React from "react"
import { cn } from "cn"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-rhea/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/styles/base-rhea/ui/drawer"
import { Input } from "@/styles/base-rhea/ui/input"
import { Label } from "@/styles/base-rhea/ui/label"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <div dir="rtl">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button variant="outline" />}>
            ویرایش پروفایل
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>ویرایش پروفایل</DialogTitle>
              <DialogDescription>
                تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div dir="rtl">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger render={<Button variant="outline" />}>
          ویرایش پروفایل
        </DrawerTrigger>
        <DrawerContent dir="rtl">
          <DrawerHeader className="text-start">
            <DrawerTitle>ویرایش پروفایل</DrawerTitle>
            <DrawerDescription>
              تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className="p-4" />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">ایمیل</Label>
        <Input type="email" id="email" defaultValue="ali@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" defaultValue="@alireza" />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  )
}
