"use client"

import * as React from "react"
import {
  FileIcon,
  FolderIcon,
  MoreHorizontalIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/registry/base-luma/lib/utils"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import { Separator } from "@/registry/base-luma/ui/separator"

type Item = {
  id: string
  kind: "folder" | "file"
  name: string
  meta: string
}

const ITEMS: Item[] = [
  { id: "1", kind: "folder", name: "پروژه‌ها", meta: "۸ مورد" },
  { id: "2", kind: "folder", name: "بک‌آپ", meta: "۳ مورد" },
  { id: "3", kind: "file", name: "design.fig", meta: "۱۲ مگابایت" },
  { id: "4", kind: "file", name: "spec.pdf", meta: "۸۹۰ کیلوبایت" },
  { id: "5", kind: "file", name: "notes.md", meta: "۴ کیلوبایت" },
]

const VIEW_OPTIONS = [
  { value: "list" as const, label: "فهرست" },
  { value: "grid" as const, label: "شبکه" },
]

const SORT_OPTIONS = [
  { value: "نام", label: "نام" },
  { value: "تاریخ", label: "تاریخ" },
  { value: "اندازه", label: "اندازه" },
]

export default function FileManagerActions() {
  const [items, setItems] = React.useState(ITEMS)
  const [chips, setChips] = React.useState(["اسناد", "PDF"])
  const [sort, setSort] = React.useState("نام")
  const [view, setView] = React.useState<"list" | "grid">("list")
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
        <div className="space-y-3 border-b p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">مدیریت فایل‌ها</h2>
              <p className="text-sm text-muted-foreground">
                مسیر <bdi dir="ltr">/drive/team</bdi>
              </p>
            </div>
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
                  نمایش
                </p>
                {VIEW_OPTIONS.map((opt) => (
                  <Button
                    key={opt.value}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start",
                      view === opt.value && "bg-muted"
                    )}
                    onClick={() => {
                      setView(opt.value)
                      setHeaderOpen(false)
                    }}
                  >
                    {opt.label}
                  </Button>
                ))}
                <Separator className="my-1" />
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
              </PopoverContent>
            </Popover>
          </div>

          <div className="relative">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="جستجو…" dir="rtl" className="ps-8" />
          </div>

          {chips.length > 0 ? (
            <div className="flex flex-wrap gap-2">
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
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="rounded-lg border p-3 text-center">
                {item.kind === "folder" ? (
                  <FolderIcon className="mx-auto size-8 text-muted-foreground" />
                ) : (
                  <FileIcon className="mx-auto size-8 text-muted-foreground" />
                )}
                <p className="mt-2 truncate text-sm font-medium">
                  {item.kind === "file" ? (
                    <bdi dir="ltr">{item.name}</bdi>
                  ) : (
                    item.name
                  )}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {items.map((item, i) => (
              <li key={item.id}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-4 py-3">
                  {item.kind === "folder" ? (
                    <FolderIcon className="size-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <FileIcon className="size-4 shrink-0 text-muted-foreground" />
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
                        تغییر نام
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
