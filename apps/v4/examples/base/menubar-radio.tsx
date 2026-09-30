"use client"

import * as React from "react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/styles/base-nova/ui/menubar"

export function MenubarRadio() {
  const [user, setUser] = React.useState("benoit")
  const [theme, setTheme] = React.useState("system")

  return (
    <div dir="rtl">
      <Menubar className="w-80">
        <MenubarMenu>
          <MenubarTrigger>پروفایل‌ها</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={user} onValueChange={setUser}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>ویرایش...</MenubarItem>
            <MenubarItem inset>افزودن پروفایل...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>تم</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">روشن</MenubarRadioItem>
              <MenubarRadioItem value="dark">تیره</MenubarRadioItem>
              <MenubarRadioItem value="system">سیستم</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
