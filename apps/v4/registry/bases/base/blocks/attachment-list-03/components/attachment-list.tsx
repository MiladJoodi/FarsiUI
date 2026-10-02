"use client"

import { DownloadIcon, FileIcon, SearchIcon, UploadIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"

const ITEMS = [
  {
    name: "invoice-1405.pdf",
    size: "1.2 MB",
    type: "PDF",
  },
  {
    name: "brief.docx",
    size: "420 KB",
    type: "DOCX",
  },
  {
    name: "photo-cover.jpg",
    size: "3.1 MB",
    type: "JPG",
  },
  {
    name: "assets.zip",
    size: "18 MB",
    type: "ZIP",
  },
] as const

export function AttachmentListToolbar() {
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
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-32" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="image">تصویر</SelectItem>
                <SelectItem value="zip">آرشیو</SelectItem>
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
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{item.size}</bdi>
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
