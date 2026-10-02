"use client"

import * as React from "react"
import {
  FileIcon,
  FolderIcon,
  MoreHorizontalIcon,
  SearchIcon,
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
import { Input } from "@/registry/bases/base/ui/input"
import { Separator } from "@/registry/bases/base/ui/separator"

type Item = {
  id: string
  kind: "folder" | "file"
  name: string
  meta: string
}

const ITEMS: Item[] = [
  { id: "1", kind: "folder", name: "پروژه‌ها", meta: "۸ مورد" },
  { id: "2", kind: "folder", name: "بک‌آپ", meta: "۳ مورد" },
  { id: "3", kind: "file", name: "design.fig", meta: "12 MB" },
  { id: "4", kind: "file", name: "spec.pdf", meta: "890 KB" },
  { id: "5", kind: "file", name: "notes.md", meta: "4 KB" },
]

export function FileManagerActions() {
  const [items, setItems] = React.useState(ITEMS)
  const [chips, setChips] = React.useState(["اسناد", "PDF"])
  const [sort, setSort] = React.useState("name")
  const [view, setView] = React.useState<"list" | "grid">("list")

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
        <div className="space-y-3 border-b p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">مدیریت فایل‌ها</h2>
              <p className="text-sm text-muted-foreground">
                مسیر <bdi dir="ltr">/drive/team</bdi>
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>نمایش</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={view}
                  onValueChange={(v) =>
                    setView((v as "list" | "grid") ?? "list")
                  }
                >
                  <DropdownMenuRadioItem value="list">
                    فهرست
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="grid">
                    شبکه
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => setSort(v ?? "name")}
                >
                  <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="date">
                    تاریخ
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="size">
                    اندازه
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <div
                key={item.id}
                className="rounded-lg border p-3 text-center"
              >
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
                    <p className="text-xs text-muted-foreground">
                      {item.kind === "file" ? (
                        <bdi dir="ltr">{item.meta}</bdi>
                      ) : (
                        item.meta
                      )}
                    </p>
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
                      <DropdownMenuItem>تغییر نام</DropdownMenuItem>
                      <DropdownMenuItem>دانلود</DropdownMenuItem>
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
