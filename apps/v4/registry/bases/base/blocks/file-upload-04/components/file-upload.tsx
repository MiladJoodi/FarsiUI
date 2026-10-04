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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
    size: "۱٫۲ مگابایت",
    progress: 100,
    status: "done",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "۴۲۰ کیلوبایت",
    progress: 62,
    status: "uploading",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "۳٫۱ مگابایت",
    progress: 18,
    status: "error",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) {
    const mb = bytes / (1024 * 1024)
    return `${mb.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} مگابایت`
  }
  const kb = Math.max(1, Math.round(bytes / 1024))
  return `${toFa(kb)} کیلوبایت`
}

export default function FileUploadList() {
  const [files, setFiles] = React.useState(INITIAL)
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function remove(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id))
    setOpenId(null)
  }

  function onPick(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files
    if (!picked?.length) return
    const next: UploadItem[] = Array.from(picked).map((file, i) => ({
      id: `${Date.now()}-${i}`,
      name: file.name,
      size: formatSize(file.size),
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
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={
                  <Button type="button" variant="ghost" size="icon-sm" />
                }
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                lang="fa"
                align="start"
                className="w-44 p-1"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setFiles([])
                    setHeaderOpen(false)
                  }}
                >
                  پاک کردن همه
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setHeaderOpen(false)}
                >
                  توقف همه
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-b px-4 py-3">
          <Badge variant="secondary" className="tracking-normal">
            {toFa(files.length)} فایل
          </Badge>
          <Badge variant="outline">حداکثر ۲۵ مگابایت</Badge>
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
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {file.size}
                      {file.status !== "done" ? (
                        <> · {toFa(file.progress)}٪</>
                      ) : null}
                    </p>
                    {file.status !== "done" ? (
                      <Progress value={file.progress} />
                    ) : null}
                  </div>
                  <Popover
                    open={openId === file.id}
                    onOpenChange={(open) =>
                      setOpenId(open ? file.id : null)
                    }
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="start"
                      className="w-40 p-1"
                    >
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        باز کردن
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        تلاش دوباره
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => remove(file.id)}
                      >
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
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
