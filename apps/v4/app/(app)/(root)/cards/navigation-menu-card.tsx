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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/styles/base-rhea/ui/navigation-menu"

export function NavigationMenuCard() {
  const [profile, setProfile] = React.useState("sara")

  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <Menubar className="w-full">
          <MenubarMenu>
            <MenubarTrigger>فایل</MenubarTrigger>
            <MenubarContent dir="rtl" className="text-start">
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
                  <MenubarSubContent dir="rtl" className="text-start">
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
            <MenubarContent dir="rtl" className="text-start">
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
            <MenubarContent className="w-44 text-start" dir="rtl">
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
            <MenubarContent dir="rtl" className="text-start">
              <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                <MenubarRadioItem value="sara">سارا</MenubarRadioItem>
                <MenubarRadioItem value="reza">رضا</MenubarRadioItem>
                <MenubarRadioItem value="mina">مینا</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="overflow-x-auto">
          <NavigationMenu dir="rtl" align="start">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>شروع کار</NavigationMenuTrigger>
                <NavigationMenuContent dir="rtl" className="text-start">
                  <ul className="w-72 text-start">
                    <ListItem title="معرفی">
                      آشنایی سریع با ساختار و فلسفهٔ FarsiUI
                    </ListItem>
                    <ListItem title="نصب">
                      راه‌اندازی پروژه در چند دقیقه
                    </ListItem>
                    <ListItem title="کامپوننت‌ها">
                      دکمه‌ها، فرم‌ها و اجزای آمادهٔ RTL
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>محصول</NavigationMenuTrigger>
                <NavigationMenuContent dir="rtl" className="text-start">
                  <ul className="w-64 text-start">
                    <ListItem title="ویژگی‌ها">
                      تم، تایپوگرافی فارسی و پشتیبانی RTL
                    </ListItem>
                    <ListItem title="بلوک‌ها">
                      بخش‌های آماده برای ساخت سریع صفحه
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  مستندات
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </CardContent>
    </Card>
  )
}

function ListItem({
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  title: string
  children: React.ReactNode
}) {
  return (
    <li {...props}>
      <NavigationMenuLink className="text-start">
        <div className="flex flex-col gap-0.5 text-start text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="truncate text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}
