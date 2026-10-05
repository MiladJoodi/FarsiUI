"use client"

import { FileIcon, FolderIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Separator } from "@/registry/base-sera/ui/separator"

const ITEMS = [
  { kind: "folder" as const, name: "اسناد", meta: "۱۲ مورد" },
  { kind: "folder" as const, name: "تصاویر", meta: "۳۴ مورد" },
  { kind: "file" as const, name: "readme.md", meta: "۱۲ کیلوبایت" },
  { kind: "file" as const, name: "invoice.pdf", meta: "۱٫۲ مگابایت" },
]

export default function FileManagerSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>مدیریت فایل‌ها</CardTitle>
          <CardDescription>فهرست ساده پوشه و فایل</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ul>
            {ITEMS.map((item, i) => (
              <li key={item.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-6 py-3">
                  {item.kind === "folder" ? (
                    <FolderIcon className="size-4 text-muted-foreground" />
                  ) : (
                    <FileIcon className="size-4 text-muted-foreground" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {item.kind === "file" ? (
                        <bdi dir="ltr">{item.name}</bdi>
                      ) : (
                        item.name
                      )}
                    </p>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {item.meta}
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
