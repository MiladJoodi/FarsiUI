"use client"

import { DownloadIcon, FileIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const ITEMS = [
  {
    name: "invoice-1405.pdf",
    size: "1.2 MB",
    type: "PDF",
    date: "دیروز",
  },
  {
    name: "brief.docx",
    size: "420 KB",
    type: "DOCX",
    date: "۳ روز پیش",
  },
  {
    name: "photo-cover.jpg",
    size: "3.1 MB",
    type: "JPG",
    date: "هفتهٔ پیش",
  },
  {
    name: "assets.zip",
    size: "18 MB",
    type: "ZIP",
    date: "امروز",
  },
] as const

export function AttachmentListCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex-row items-start justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle>پیوست‌ها</CardTitle>
            <CardDescription>
              <bdi dir="ltr">{ITEMS.length}</bdi> فایل پیوست‌شده
            </CardDescription>
          </div>
          <Badge variant="secondary">تیکت #۴۲۱</Badge>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {ITEMS.map((item, i) => (
              <li key={item.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-6 py-3">
                  <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-medium">
                        <bdi dir="ltr">{item.name}</bdi>
                      </p>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{item.size}</bdi> · {item.date}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon-sm" aria-label="دانلود">
                    <DownloadIcon className="size-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
