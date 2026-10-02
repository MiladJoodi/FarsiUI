"use client"

import { FileIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

const ITEMS = [
  { name: "invoice-1404.pdf", size: "1.2 MB" },
  { name: "brief.docx", size: "420 KB" },
  { name: "photo-cover.jpg", size: "3.1 MB" },
] as const

export function AttachmentListSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>پیوست‌ها</CardTitle>
          <CardDescription>فهرست ساده فایل‌های پیوست</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {ITEMS.map((item, i) => (
              <li key={item.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-6 py-3">
                  <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      <bdi dir="ltr">{item.name}</bdi>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{item.size}</bdi>
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
