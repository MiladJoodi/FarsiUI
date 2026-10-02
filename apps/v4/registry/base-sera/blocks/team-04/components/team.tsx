"use client"

import * as React from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"

const MEMBERS = [
  {
    name: "مریم رضایی",
    role: "مدیر محصول",
    dept: "محصول",
    avatar: "/avatars/01.png",
    fallback: "مر",
    bio: "اولویت‌بندی و نقشهٔ راه فارسی.",
  },
  {
    name: "علی محمدی",
    role: "مهندس فرانت‌اند",
    dept: "مهندسی",
    avatar: "/avatars/02.png",
    fallback: "عم",
    bio: "کامپوننت و تم RTL.",
  },
  {
    name: "سارا کریمی",
    role: "طراح محصول",
    dept: "طراحی",
    avatar: "/avatars/03.png",
    fallback: "سک",
    bio: "سیستم طراحی و تایپ فارسی.",
  },
  {
    name: "نیما پورحسین",
    role: "مهندس بک‌اند",
    dept: "مهندسی",
    avatar: "/avatars/04.png",
    fallback: "نپ",
    bio: "رجیستری و تحویل بلاک.",
  },
  {
    name: "هستی احمدی",
    role: "مدیر فنی",
    dept: "مهندسی",
    avatar: "/avatars/05.png",
    fallback: "ها",
    bio: "معماری و کیفیت کد.",
  },
  {
    name: "رضا کاظمی",
    role: "رشد محصول",
    dept: "رشد",
    avatar: "/avatars/06.png",
    fallback: "رک",
    bio: "بازخورد تیم‌های محصول.",
  },
  {
    name: "آزاده نوری",
    role: "مدیر طراحی",
    dept: "طراحی",
    avatar: "/avatars/07.png",
    fallback: "آن",
    bio: "تجربهٔ بصری برند.",
  },
  {
    name: "کاوه شریفی",
    role: "پشتیبانی",
    dept: "پشتیبانی",
    avatar: "/avatars/08.png",
    fallback: "کش",
    bio: "همراهی مشتریان فارسی.",
  },
] as const

const DEPTS = ["همه", "محصول", "مهندسی", "طراحی", "رشد", "پشتیبانی"] as const

export function TeamFilter() {
  const [dept, setDept] = React.useState("همه")

  const filtered =
    dept === "همه" ? MEMBERS : MEMBERS.filter((member) => member.dept === dept)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">فهرست تیم</h2>
          <p className="mt-2 text-muted-foreground">
            بر اساس واحد سازمانی فیلتر کنید
          </p>
        </div>
        <Select
          value={dept}
          onValueChange={(value) => setDept((value as string) ?? "همه")}
        >
          <SelectTrigger className="w-full sm:w-44" dir="rtl">
            <SelectValue placeholder="واحد" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {DEPTS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          عضوی در این واحد پیدا نشد.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((member) => (
            <Card key={member.name}>
              <CardHeader className="items-center gap-3 text-center">
                <Avatar className="size-16">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
                <Badge variant="outline">{member.dept}</Badge>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <Button variant="outline" size="sm" className="w-full">
                  پروفایل
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
