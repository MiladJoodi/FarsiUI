"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-rhea/ui/dropdown-menu"
import { Input } from "@/registry/base-rhea/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"

const MEMBERS = [
  {
    name: "مریم رضایی",
    role: "مدیر محصول",
    dept: "محصول",
    location: "تهران",
    avatar: "/avatars/01.png",
    fallback: "مر",
  },
  {
    name: "علی محمدی",
    role: "مهندس فرانت‌اند",
    dept: "مهندسی",
    location: "اصفهان",
    avatar: "/avatars/02.png",
    fallback: "عم",
  },
  {
    name: "سارا کریمی",
    role: "طراح محصول",
    dept: "طراحی",
    location: "تهران",
    avatar: "/avatars/03.png",
    fallback: "سک",
  },
  {
    name: "نیما پورحسین",
    role: "مهندس بک‌اند",
    dept: "مهندسی",
    location: "شیراز",
    avatar: "/avatars/04.png",
    fallback: "نپ",
  },
  {
    name: "هستی احمدی",
    role: "مدیر فنی",
    dept: "مهندسی",
    location: "تهران",
    avatar: "/avatars/05.png",
    fallback: "ها",
  },
  {
    name: "رضا کاظمی",
    role: "رشد محصول",
    dept: "رشد",
    location: "مشهد",
    avatar: "/avatars/06.png",
    fallback: "رک",
  },
  {
    name: "آزاده نوری",
    role: "مدیر طراحی",
    dept: "طراحی",
    location: "تهران",
    avatar: "/avatars/07.png",
    fallback: "آن",
  },
  {
    name: "کاوه شریفی",
    role: "پشتیبانی مشتری",
    dept: "پشتیبانی",
    location: "تبریز",
    avatar: "/avatars/08.png",
    fallback: "کش",
  },
] as const

const DEPTS = ["همه", "محصول", "مهندسی", "طراحی", "رشد", "پشتیبانی"] as const

const SORT_ITEMS = [
  { value: "name", label: "نام" },
  { value: "role", label: "نقش" },
  { value: "dept", label: "واحد" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

export function TeamDirectory() {
  const [query, setQuery] = React.useState("")
  const [dept, setDept] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("name")

  const filtered = React.useMemo(() => {
    let list = MEMBERS.filter((member) => {
      const matchDept = dept === "همه" || member.dept === dept
      const matchQuery =
        !query ||
        member.name.includes(query) ||
        member.role.includes(query) ||
        member.location.includes(query) ||
        member.dept.includes(query)
      return matchDept && matchQuery
    })
    list = [...list].sort((a, b) => a[sort].localeCompare(b[sort], "fa"))
    return list
  }, [query, dept, sort])

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-8 space-y-4">
          <div>
            <Badge variant="secondary" className="mb-3">
              فهرست کارکنان
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">تیم ما</h2>
            <p className="mt-2 text-muted-foreground">
              جستجو، فیلتر واحد و مرتب‌سازی
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو نام، نقش یا شهر…"
                className="ps-9"
                dir="rtl"
              />
            </div>
            <Select
              items={DEPTS.map((item) => ({ value: item, label: item }))}
              value={dept}
              onValueChange={(value) => {
                if (typeof value === "string") setDept(value)
              }}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
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
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" className="w-full sm:w-auto" />
                }
              >
                مرتب‌سازی
              </DropdownMenuTrigger>
              <DropdownMenuContent
                dir="rtl"
                lang="fa"
                align="end"
                className="w-40"
              >
                <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => {
                    if (
                      value === "name" ||
                      value === "role" ||
                      value === "dept"
                    ) {
                      setSort(value)
                    }
                  }}
                >
                  {SORT_ITEMS.map((item) => (
                    <DropdownMenuRadioItem key={item.value} value={item.value}>
                      {item.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
            عضوی با این فیلتر پیدا نشد. عبارت دیگری را امتحان کنید.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {filtered.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm"
              >
                <Avatar className="size-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{member.name}</p>
                    <Badge variant="outline" className="font-normal">
                      {member.dept}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.role} · {member.location}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  جزئیات
                </Button>
              </div>
            ))}
          </div>
        )}

        <Separator className="my-10" />

        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <CardTitle className="text-lg">
              می‌خواهید به تیم بپیوندید؟
            </CardTitle>
            <CardDescription>
              ایمیل بگذارید؛ فرصت‌های باز را برایتان می‌فرستیم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="text"
                placeholder="نام و نام خانوادگی"
                dir="rtl"
                className="sm:flex-1"
              />
              <Input
                type="email"
                required
                placeholder="ایمیل"
                dir="ltr"
                className="text-start sm:flex-1"
              />
              <Button type="submit" className="sm:shrink-0">
                ارسال رزومه
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
