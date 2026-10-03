"use client"

import { ClockIcon, SearchIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Input } from "@/registry/base-lyra/ui/input"
import { Separator } from "@/registry/base-lyra/ui/separator"

const RECENT = ["کامپوننت دکمه", "فرم ورود", "جدول داده", "تقویم شمسی"] as const

const SUGGESTIONS = [
  { label: "داشبورد", tag: "صفحه" },
  { label: "تنظیمات حساب", tag: "حساب" },
  { label: "name@example.com", tag: "ایمیل", ltr: true },
] as const

export function SearchSuggestions() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>جستجو</CardTitle>
          <CardDescription>پیشنهادها و جستجوهای اخیر</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="جستجو در فارسی‌یوآی…"
              className="ps-9 pe-9"
              dir="rtl"
              defaultValue=""
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute end-1.5 top-1/2 -translate-y-1/2"
            >
              <XIcon className="size-3.5" />
              <span className="sr-only">پاک کردن</span>
            </Button>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              اخیر
            </p>
            <ul className="space-y-1">
              {RECENT.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-start text-sm hover:bg-muted"
                  >
                    <ClockIcon className="size-3.5 text-muted-foreground" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              پیشنهاد
            </p>
            <ul className="space-y-1">
              {SUGGESTIONS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-start text-sm hover:bg-muted"
                  >
                    <span className="flex items-center gap-2">
                      <SearchIcon className="size-3.5 text-muted-foreground" />
                      {"ltr" in item && item.ltr ? (
                        <span dir="ltr" className="inline-block text-start">
                          {item.label}
                        </span>
                      ) : (
                        item.label
                      )}
                    </span>
                    <Badge variant="outline" className="border">
                      {item.tag}
                    </Badge>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
