"use client"

import { FileIcon, FolderIcon, SearchIcon } from "lucide-react"

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

const FILES = [
  { name: "contract.pdf", size: "۲٫۱ مگابایت", date: "دیروز" },
  { name: "brief.docx", size: "۳۴۰ کیلوبایت", date: "۳ روز پیش" },
  { name: "logo.svg", size: "۱۸ کیلوبایت", date: "هفتهٔ پیش" },
] as const

export function FileManagerBrowse() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="space-y-3 text-start">
          <div className="flex items-center justify-between gap-2">
            <div>
              <CardTitle>مدیریت فایل‌ها</CardTitle>
              <CardDescription>
                مسیر{" "}
                <bdi dir="ltr" className="text-foreground">
                  /uploads/docs
                </bdi>
              </CardDescription>
            </div>
            <Badge variant="secondary">اسناد</Badge>
          </div>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="جستجو در فایل‌ها…" dir="rtl" className="ps-8" />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1.5">
              <FolderIcon className="size-3.5" />
              پوشه جدید
            </Button>
            <Button size="sm">بارگذاری</Button>
          </div>
          <ul className="overflow-hidden rounded-lg border">
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
                      {file.size} · {file.date}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
