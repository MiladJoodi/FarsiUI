"use client"

import * as React from "react"
import { cn } from "cn"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"

export default function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
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
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        ویرایش پروفایل
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-start">
          <DrawerTitle>ویرایش پروفایل</DrawerTitle>
          <DrawerDescription>
            تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را بزنید.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">ایمیل</Label>
        <Input
          type="email"
          id="email"
          dir="ltr"
          defaultValue="ali@example.com"
          className="text-left"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">نام کاربری</Label>
        <Input
          id="username"
          dir="ltr"
          defaultValue="@alireza"
          className="text-left"
        />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  )
}
