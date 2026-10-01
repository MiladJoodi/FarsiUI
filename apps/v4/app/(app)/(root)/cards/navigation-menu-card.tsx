"use client"

import * as React from "react"
import Link from "next/link"

import { Card, CardContent } from "@/styles/base-rhea/ui/card"
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
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="overflow-x-auto">
        <NavigationMenu dir="rtl" align="end">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>شروع کار</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-72">
                  <ListItem href="/docs" title="مقدمه">
                    کامپوننت‌های قابل‌استفادهٔ مجدد با Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="نصب">
                    نحوهٔ نصب وابستگی‌ها و ساختاربندی اپ.
                  </ListItem>
                  <ListItem href="/docs/components" title="کامپوننت‌ها">
                    فهرست کامل کامپوننت‌های رابط کاربری.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>محصول</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-64">
                  <ListItem href="#" title="ویژگی‌ها">
                    قابلیت‌های اصلی و ابزارهای طراحی.
                  </ListItem>
                  <ListItem href="#" title="قیمت‌گذاری">
                    طرح‌های اشتراک و مقایسهٔ امکانات.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/docs" />}
                className={navigationMenuTriggerStyle()}
              >
                مستندات
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </CardContent>
    </Card>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} />}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}
