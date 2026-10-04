"use client"

import * as React from "react"
import {
  DownloadIcon,
  FileIcon,
  MoreHorizontalIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/registry/base-sera/lib/utils"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-sera/ui/popover"
import { Progress } from "@/registry/base-sera/ui/progress"
import { Separator } from "@/registry/base-sera/ui/separator"

type Attachment = {
  id: string
  name: string
  size: string
  type: string
  status: "ready" | "uploading" | "error"
  progress?: number
}

const INITIAL: Attachment[] = [
  {
    id: "1",
    name: "invoice-1405.pdf",
    size: "۱٫۲ مگابایت",
    type: "PDF",
    status: "ready",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "۴۲۰ کیلوبایت",
    type: "DOCX",
    status: "ready",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "۳٫۱ مگابایت",
    type: "JPG",
    status: "uploading",
    progress: 62,
  },
  {
    id: "4",
    name: "corrupt.zip",
    size: "۱۸ مگابایت",
    type: "ZIP",
    status: "error",
    progress: 18,
  },
]

const SORT_OPTIONS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function AttachmentListActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [chips, setChips] = React.useState(["PDF", "تصویر"])
  const [sort, setSort] = React.useState("جدیدترین")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  function remove(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
    setOpenId(null)
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
            <h2 className="text-lg font-semibold">پیوست‌ها</h2>
            <p className="text-sm tracking-normal text-muted-foreground">
              {toFa(items.length)} فایل · منوی عملیات RTL
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-2">
              <UploadIcon className="size-3.5" />
              افزودن
            </Button>
            <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
              <PopoverTrigger
                render={<Button type="button" variant="ghost" size="icon-sm" />}
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
                <p className="px-2 py-1.5 text-xs text-muted-foreground">
                  مرتب‌سازی
                </p>
                {SORT_OPTIONS.map((opt) => (
                  <Button
                    key={opt.value}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start",
                      sort === opt.value && "bg-muted"
                    )}
                    onClick={() => {
                      setSort(opt.value)
                      setHeaderOpen(false)
                    }}
                  >
                    {opt.label}
                  </Button>
                ))}
                <Separator className="my-1" />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setItems([])
                    setHeaderOpen(false)
                  }}
                >
                  پاک کردن همه
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {chips.length > 0 ? (
          <div className="flex flex-wrap gap-2 border-b px-4 py-3">
            {chips.map((c) => (
              <Badge key={c} variant="secondary" className="gap-1 pe-1">
                {c}
                <button
                  type="button"
                  className="rounded-sm p-0.5 hover:bg-muted"
                  onClick={() =>
                    setChips((prev) => prev.filter((x) => x !== c))
                  }
                  aria-label={`حذف ${c}`}
                >
                  <XIcon className="size-3" />
                </button>
              </Badge>
            ))}
          </div>
        ) : null}

        {items.length === 0 ? (
          <p className="p-10 text-center text-sm text-muted-foreground">
            پیوستی وجود ندارد
          </p>
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={item.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start gap-3 px-4 py-3">
                  <FileIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="min-w-0 flex-1 truncate text-sm font-medium">
                        <bdi dir="ltr">{item.name}</bdi>
                      </p>
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge
                        variant={
                          item.status === "ready"
                            ? "secondary"
                            : item.status === "error"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {item.status === "ready"
                          ? "آماده"
                          : item.status === "error"
                            ? "خطا"
                            : "در حال بارگذاری"}
                      </Badge>
                    </div>
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {item.size}
                      {item.status !== "ready" && item.progress != null
                        ? ` · ${toFa(item.progress)}٪`
                        : null}
                    </p>
                    {item.status !== "ready" && item.progress != null ? (
                      <Progress value={item.progress} />
                    ) : null}
                  </div>
                  <Button variant="ghost" size="icon-sm" aria-label="دانلود">
                    <DownloadIcon className="size-4" />
                  </Button>
                  <Popover
                    open={openId === item.id}
                    onOpenChange={(open) => setOpenId(open ? item.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button type="button" variant="ghost" size="icon-sm" />
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
                        دانلود
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
                        onClick={() => remove(item.id)}
                      >
                        حذف
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
