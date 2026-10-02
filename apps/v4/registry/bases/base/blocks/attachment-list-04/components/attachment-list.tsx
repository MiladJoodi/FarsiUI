"use client"

import * as React from "react"
import {
  DownloadIcon,
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Progress } from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"

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
    name: "invoice-1404.pdf",
    size: "1.2 MB",
    type: "PDF",
    status: "ready",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "420 KB",
    type: "DOCX",
    status: "ready",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "3.1 MB",
    type: "JPG",
    status: "uploading",
    progress: 62,
  },
  {
    id: "4",
    name: "corrupt.zip",
    size: "18 MB",
    type: "ZIP",
    status: "error",
    progress: 18,
  },
]

export function AttachmentListActions() {
  const [items, setItems] = React.useState(INITIAL)
  const [chips, setChips] = React.useState(["PDF", "تصویر"])
  const [sort, setSort] = React.useState("newest")

  function remove(id: string) {
    setItems((prev) => prev.filter((x) => x.id !== id))
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
            <p className="text-sm text-muted-foreground">
              <bdi dir="ltr">{items.length}</bdi> فایل · منوی عملیات RTL
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-2">
              <UploadIcon className="size-3.5" />
              افزودن
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => setSort(v ?? "newest")}
                >
                  <DropdownMenuRadioItem value="newest">
                    جدیدترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="size">
                    اندازه
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setItems([])}>
                  پاک کردن همه
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <p className="text-xs text-muted-foreground">
                      <bdi dir="ltr">{item.size}</bdi>
                    </p>
                    {item.status !== "ready" && item.progress != null ? (
                      <Progress value={item.progress} />
                    ) : null}
                  </div>
                  <Button variant="ghost" size="icon-sm" aria-label="دانلود">
                    <DownloadIcon className="size-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>باز کردن</DropdownMenuItem>
                      <DropdownMenuItem>دانلود</DropdownMenuItem>
                      <DropdownMenuItem>تلاش دوباره</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => remove(item.id)}>
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
