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
} from "@/registry/bases/base/ui/menubar"

export default function MenubarRadio() {
  const [user, setUser] = React.useState("ali")
  const [theme, setTheme] = React.useState("system")

  return (
    <div dir="rtl" lang="fa">
      <Menubar className="w-80">
        <MenubarMenu>
          <MenubarTrigger>پروفایل‌ها</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={user} onValueChange={setUser}>
              <MenubarRadioItem value="sara">سارا</MenubarRadioItem>
              <MenubarRadioItem value="ali">علی</MenubarRadioItem>
              <MenubarRadioItem value="reza">رضا</MenubarRadioItem>
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
