"use client"

import * as React from "react"
import { FileIcon, FolderIcon, SearchIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

const FOLDERS = ["اسناد", "تصاویر", "آرشیو"] as const

const SORT_ITEMS = [
  { value: "نام", label: "نام" },
  { value: "تاریخ", label: "تاریخ" },
  { value: "اندازه", label: "اندازه" },
] as const

const FILES = [
  { name: "report-q1.pdf", size: "۴٫۲ مگابایت" },
  { name: "notes.txt", size: "۸ کیلوبایت" },
  { name: "budget.xlsx", size: "۵۱۲ کیلوبایت" },
] as const

export function FileManagerPanel() {
  const [sort, setSort] = React.useState("نام")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>مدیریت فایل‌ها</CardTitle>
          <CardDescription>مرتب‌سازی RTL و اشتراک با ایمیل LTR</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="جستجو…" dir="rtl" className="ps-8" />
            </div>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-40" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SORT_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border md:grid md:grid-cols-[10rem_1fr]">
            <aside className="space-y-1 border-b bg-muted/30 p-2 md:border-b-0 md:border-l">
              {FOLDERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm hover:bg-muted"
                >
                  <FolderIcon className="size-3.5 text-muted-foreground" />
                  {f}
                </button>
              ))}
            </aside>
            <ul>
              {FILES.map((file, i) => (
                <li key={file.name}>
                  {i > 0 && <Separator />}
                  <div className="flex items-center gap-3 px-3 py-2.5">
                    <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        <bdi dir="ltr">{file.name}</bdi>
                      </p>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {file.size}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Field>
            <FieldLabel htmlFor="fm3-email">اشتراک با ایمیل</FieldLabel>
            <Input
              id="fm3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="fm3-hidden">نمایش فایل‌های مخفی</Label>
            <Switch id="fm3-hidden" />
          </div>

          <Button className="w-full">اعمال</Button>
        </CardContent>
      </Card>
    </section>
  )
}
