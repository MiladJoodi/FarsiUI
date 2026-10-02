"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/styles/base-nova/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "دیالوگ هشدار",
    href: "/docs/primitives/alert-dialog",
    description:
      "دیالوگ مودالی که کاربر را با محتوای مهم قطع می‌کند و منتظر پاسخ است.",
  },
  {
    title: "کارت شناور",
    href: "/docs/primitives/hover-card",
    description:
      "برای کاربران بینا تا پیش‌نمایش محتوایی که پشت لینک است را ببینند.",
  },
  {
    title: "پیشرفت",
    href: "/docs/primitives/progress",
    description:
      "نشانگری که میزان تکمیل یک کار را نمایش می‌دهد؛ معمولاً به‌صورت نوار پیشرفت.",
  },
  {
    title: "ناحیه اسکرول",
    href: "/docs/primitives/scroll-area",
    description: "محتوا را به‌صورت بصری یا معنایی جدا می‌کند.",
  },
  {
    title: "زبانه",
    href: "/docs/primitives/tabs",
    description:
      "مجموعه‌ای از بخش‌های لایه‌ای محتوا — پنل‌های زبانه — که یکی‌یکی نمایش داده می‌شوند.",
  },
  {
    title: "راهنما",
    href: "/docs/primitives/tooltip",
    description:
      "پاپ‌آپی که هنگام فوکوس کیبورد یا هاور ماوس، اطلاعات مرتبط با عنصر را نشان می‌دهد.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <div dir="rtl" lang="fa">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>شروع کار</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/docs" title="مقدمه">
                  کامپوننت‌های قابل‌استفادهٔ مجدد ساخته‌شده با Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="نصب">
                  نحوهٔ نصب وابستگی‌ها و ساختاربندی اپ.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="تایپوگرافی">
                  استایل برای عنوان، پاراگراف، فهرست و غیره.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>کامپوننت‌ها</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>با آیکون</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px]">
                <li>
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2" />
                    }
                  >
                    <CircleAlertIcon />
                    بک‌لاگ
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2" />
                    }
                  >
                    <CircleDashedIcon />
                    انجام‌دادنی
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2" />
                    }
                  >
                    <CircleCheckIcon />
                    انجام‌شده
                  </NavigationMenuLink>
                </li>
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
    </div>
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
