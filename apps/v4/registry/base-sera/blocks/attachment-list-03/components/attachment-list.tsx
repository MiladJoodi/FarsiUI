"use client"

import * as React from "react"
import { DownloadIcon, FileIcon, SearchIcon, UploadIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "PDF", label: "PDF" },
  { value: "تصویر", label: "تصویر" },
  { value: "آرشیو", label: "آرشیو" },
] as const

const ITEMS = [
  {
    name: "invoice-1405.pdf",
    size: "۱٫۲ مگابایت",
    type: "PDF",
  },
  {
    name: "brief.docx",
    size: "۴۲۰ کیلوبایت",
    type: "DOCX",
  },
  {
    name: "photo-cover.jpg",
    size: "۳٫۱ مگابایت",
    type: "JPG",
  },
  {
    name: "assets.zip",
    size: "۱۸ مگابایت",
    type: "ZIP",
  },
] as const

export default function AttachmentListToolbar() {
  const [type, setType] = React.useState("همه")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="space-y-3 text-start">
          <div>
            <CardTitle>پیوست‌ها</CardTitle>
            <CardDescription>
              جستجو، فیلتر نوع و اطلاع‌رسانی ایمیل
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="جستجو در پیوست‌ها…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-32" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button size="sm" className="gap-2">
              <UploadIcon className="size-3.5" />
              افزودن پیوست
            </Button>
            <Button size="sm" variant="outline">
              دانلود همه
            </Button>
          </div>
          <ul className="overflow-hidden rounded-lg border">
            {ITEMS.map((item, i) => (
              <li key={item.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium">
                        <bdi dir="ltr">{item.name}</bdi>
                      </p>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {item.size}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon-sm" aria-label="دانلود">
                    <DownloadIcon className="size-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <Field>
            <FieldLabel htmlFor="al3-email">اطلاع‌رسانی به</FieldLabel>
            <Input
              id="al3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>
              وقتی پیوست جدید اضافه شد خبر بده
            </FieldDescription>
          </Field>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">ذخیره تنظیمات</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
