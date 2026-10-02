"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/base-maia/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-maia/ui/sheet"

const PRODUCTS = [
  {
    title: "بلاک‌ها",
    desc: "بخش‌های آمادهٔ راست‌چین برای محصول فارسی",
  },
  {
    title: "کامپوننت‌ها",
    desc: "کیت رابط کاربری با پشتیبانی RTL",
  },
  {
    title: "تم‌ها",
    desc: "ظاهرهای آماده برای شروع سریع",
  },
] as const

const LINKS = [
  { href: "#", label: "قیمت‌گذاری" },
  { href: "#", label: "مستندات" },
] as const

export function NavbarMega() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-4 md:px-6">
          <a href="#" className="shrink-0 text-sm font-bold tracking-tight">
            FarsiUI
          </a>

          <div className="ms-2 hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>محصولات</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2">
                    <ul className="grid w-[min(100vw-2rem,22rem)] gap-1">
                      {PRODUCTS.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink
                            href="#"
                            className="flex flex-col gap-0.5 rounded-md p-3 text-start hover:bg-muted"
                          >
                            <span className="text-sm font-medium">
                              {item.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.desc}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {LINKS.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      href={link.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ms-auto flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden sm:inline-flex">
              ورود
            </Button>
            <Button size="sm" className="hidden sm:inline-flex">
              شروع رایگان
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className="md:hidden"
                    aria-label="باز کردن منو"
                  />
                }
              >
                <MenuIcon className="size-4" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100%,20rem)]"
                dir="rtl"
                lang="fa"
              >
                <SheetHeader>
                  <SheetTitle>منو</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="mb-1 px-3 text-xs font-medium text-muted-foreground">
                      محصولات
                    </p>
                    {PRODUCTS.map((item) => (
                      <a
                        key={item.title}
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <div>
                    {LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button variant="outline">ورود</Button>
                    <Button>شروع رایگان</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground">
        منوی کشویی محصولات + لینک‌های ثابت
      </main>
    </div>
  )
}
