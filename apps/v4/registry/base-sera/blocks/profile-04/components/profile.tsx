"use client"

import * as React from "react"
import { LinkIcon, MoreHorizontalIcon, Share2Icon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-sera/ui/popover"
import { Separator } from "@/registry/base-sera/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-sera/ui/tabs"

const ACTIVITY = [
  {
    title: "کامپوننت دکمهٔ RTL منتشر شد",
    time: "۲ ساعت پیش",
  },
  {
    title: "نظر جدید روی «فرم ورود»",
    time: "دیروز",
  },
  {
    title: "به‌روزرسانی بیوگرافی",
    time: "۳ روز پیش",
  },
  {
    title: "عضویت در تیم طراحی",
    time: "۱ هفته پیش",
  },
] as const

export default function ProfileCover() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="overflow-hidden bg-card p-0">
        <div className="relative h-36 bg-muted md:h-44">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80"
            alt="کاور پروفایل"
            className="size-full object-cover"
          />
        </div>
        <CardHeader className="relative -mt-12 space-y-4 px-6 pb-0">
          <div className="flex items-end justify-between gap-4">
            <Avatar className="size-24 border-4 border-background">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                alt="سارا محمدی"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div className="mb-1 flex gap-2">
              <Button type="button" size="sm">
                ویرایش پروفایل
              </Button>
              <Popover open={menuOpen} onOpenChange={setMenuOpen}>
                <PopoverTrigger
                  render={
                    <Button type="button" variant="outline" size="icon-sm" />
                  }
                >
                  <MoreHorizontalIcon className="size-4" />
                  <span className="sr-only">بیشتر</span>
                </PopoverTrigger>
                <PopoverContent
                  dir="rtl"
                  lang="fa"
                  align="start"
                  className="w-44 space-y-1 p-2"
                >
                  <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Share2Icon className="size-4" />
                    اشتراک‌گذاری
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start"
                    onClick={() => setMenuOpen(false)}
                  >
                    <LinkIcon className="size-4" />
                    کپی لینک
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start text-destructive hover:text-destructive"
                    onClick={() => setMenuOpen(false)}
                  >
                    مسدود کردن
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-2xl">سارا محمدی</CardTitle>
              <Badge variant="outline" className="border">
                طراح محصول
              </Badge>
            </div>
            <CardDescription className="mt-1 tracking-normal">
              <span dir="ltr" className="inline-block">
                @sara.m
              </span>{" "}
              · تهران
            </CardDescription>
            <p className="mt-3 text-sm text-muted-foreground">
              ساختن رابط‌های فارسی تمیز و دسترس‌پذیر برای تیم‌های محصول.
            </p>
          </div>
        </CardHeader>
        <CardContent className="px-6 pt-4 pb-6">
          <Tabs defaultValue="overview" dir="rtl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">نمای کلی</TabsTrigger>
              <TabsTrigger value="activity">فعالیت‌ها</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 space-y-3">
              <div className="grid grid-cols-3 gap-3 rounded-lg border p-3 text-center">
                <Stat label="پروژه" value="۲۴" />
                <Stat label="دنبال‌کننده" value="۱٬۲۸۰" />
                <Stat label="پسند" value="۳۴۲" />
              </div>
              <div className="rounded-lg border p-4 text-sm tracking-normal text-muted-foreground">
                عضو از ۱۴۰۲ · آخرین ورود امروز
              </div>
            </TabsContent>
            <TabsContent value="activity" className="mt-4">
              <ul className="space-y-0">
                {ACTIVITY.map((item, i) => (
                  <li key={item.title}>
                    {i > 0 && <Separator />}
                    <div className="flex items-start justify-between gap-3 py-3">
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="shrink-0 text-xs tracking-normal text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-lg font-semibold tracking-normal">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
