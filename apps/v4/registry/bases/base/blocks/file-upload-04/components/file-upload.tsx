"use client"

import * as React from "react"
import {
  FileIcon,
  MoreHorizontalIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Progress } from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"

type UploadItem = {
  id: string
  name: string
  size: string
  progress: number
  status: "uploading" | "done" | "error"
}

const INITIAL: UploadItem[] = [
  {
    id: "1",
    name: "invoice-1405.pdf",
    size: "1.2 MB",
    progress: 100,
    status: "done",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "420 KB",
    progress: 62,
    status: "uploading",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "3.1 MB",
    progress: 18,
    status: "error",
  },
]

export function FileUploadList() {
  const [files, setFiles] = React.useState(INITIAL)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function remove(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  function onPick(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files
    if (!picked?.length) return
    const next: UploadItem[] = Array.from(picked).map((file, i) => ({
      id: `${Date.now()}-${i}`,
      name: file.name,
      size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      progress: 0,
      status: "uploading" as const,
    }))
    setFiles((prev) => [...next, ...prev])
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">بارگذاری فایل</h2>
            <p className="text-sm text-muted-foreground">
              فهرست فایل‌ها و منوی عملیات
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="gap-2"
              onClick={() => inputRef.current?.click()}
            >
              <UploadIcon className="size-3.5" />
              افزودن
            </Button>
            <input
              ref={inputRef}
              type="file"
              multiple
              className="sr-only"
              onChange={onPick}
            />
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setFiles([])}>
                  پاک کردن همه
                </DropdownMenuItem>
                <DropdownMenuItem>توقف همه</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-b px-4 py-3">
          <Badge variant="secondary">
            <bdi dir="ltr">{files.length}</bdi> فایل
          </Badge>
          <Badge variant="outline">حداکثر <bdi dir="ltr">۲۵ MB</bdi></Badge>
        </div>

        {files.length === 0 ? (
          <p className="p-10 text-center text-sm text-muted-foreground">
            هنوز فایلی اضافه نشده
          </p>
        ) : (
          <ul>
            {files.map((file, i) => (
              <li key={file.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-4 py-3">
                  <FileIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="min-w-0 flex-1 truncate text-sm font-medium">
                        <bdi dir="ltr">{file.name}</bdi>
                      </p>
                      <Badge
                        variant={
                          file.status === "done"
                            ? "secondary"
                            : file.status === "error"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {file.status === "done"
                          ? "تمام"
                          : file.status === "error"
                            ? "خطا"
                            : "در حال بارگذاری"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{file.size}</bdi>
                    </p>
                    {file.status !== "done" ? (
                      <Progress value={file.progress} />
                    ) : null}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>باز کردن</DropdownMenuItem>
                      <DropdownMenuItem>تلاش دوباره</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => remove(file.id)}>
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => remove(file.id)}
                    aria-label="حذف"
                  >
                    <XIcon className="size-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
