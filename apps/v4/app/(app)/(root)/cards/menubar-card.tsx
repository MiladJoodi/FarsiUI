"use client"

import * as React from "react"

import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/styles/base-rhea/ui/menubar"

export function MenubarCard() {
  const [profile, setProfile] = React.useState("sara")

  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <Menubar className="w-full">
          <MenubarMenu>
            <MenubarTrigger>فایل</MenubarTrigger>
            <MenubarContent dir="rtl">
              <MenubarGroup>
                <MenubarItem>
                  زبانهٔ جدید <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  پنجرهٔ جدید <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>اشتراک‌گذاری</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>لینک ایمیل</MenubarItem>
                    <MenubarItem>پیام‌ها</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem>
                  چاپ... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>ویرایش</MenubarTrigger>
            <MenubarContent dir="rtl">
              <MenubarGroup>
                <MenubarItem>
                  واگرد <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  ازنو <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem>برش</MenubarItem>
                <MenubarItem>کپی</MenubarItem>
                <MenubarItem>جای‌گذاری</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>نمایش</MenubarTrigger>
            <MenubarContent className="w-44" dir="rtl">
              <MenubarGroup>
                <MenubarCheckboxItem>نوار نشانک‌ها</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>آدرس کامل</MenubarCheckboxItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem inset>تمام‌صفحه</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>پروفایل</MenubarTrigger>
            <MenubarContent dir="rtl">
              <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                <MenubarRadioItem value="sara">سارا</MenubarRadioItem>
                <MenubarRadioItem value="reza">رضا</MenubarRadioItem>
                <MenubarRadioItem value="mina">مینا</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </CardContent>
    </Card>
  )
}
