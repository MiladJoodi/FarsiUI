"use client"

import * as React from "react"
import {
  FileIcon,
  FolderIcon,
  MoreHorizontalIcon,
  SearchIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

type Item = {
  id: string
  kind: "folder" | "file"
  name: string
  size: string
  updated: string
}

const FOLDERS = [
  { id: "docs", label: "اسناد", count: "۲۴" },
  { id: "images", label: "تصاویر", count: "۵۸" },
  { id: "archive", label: "آرشیو", count: "۱۱" },
  { id: "shared", label: "اشتراکی", count: "۷" },
] as const

const FILES: Item[] = [
  {
    id: "1",
    kind: "folder",
    name: "Q1",
    size: "—",
    updated: "دیروز",
  },
  {
    id: "2",
    kind: "file",
    name: "proposal.pdf",
    size: "1.8 MB",
    updated: "۲ ساعت پیش",
  },
  {
    id: "3",
    kind: "file",
    name: "sheet.xlsx",
    size: "640 KB",
    updated: "۳ روز پیش",
  },
  {
    id: "4",
    kind: "file",
    name: "cover.png",
    size: "2.2 MB",
    updated: "هفتهٔ پیش",
  },
]

export function FileManagerHub() {
  const [folder, setFolder] = React.useState("docs")
  const [sort, setSort] = React.useState("date")
  const [query, setQuery] = React.useState("")
  const [selected, setSelected] = React.useState<string[]>(["2"])
  const [chips, setChips] = React.useState(["PDF", "اخیر"])

  const rows = FILES.filter((f) => {
    if (!query) return true
    return f.name.includes(query) || f.name.toLowerCase().includes(query.toLowerCase())
  })

  function toggle(id: string, on: boolean) {
    setSelected((prev) =>
      on ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            فضای ابری
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">مدیریت فایل‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            مسیر <bdi dir="ltr">/drive/{folder}</bdi> ·{" "}
            <bdi dir="ltr">{selected.length}</bdi> انتخاب‌شده
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="gap-2">
            <UploadIcon className="size-3.5" />
            بارگذاری
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
              <MoreHorizontalIcon className="size-4" />
              بیشتر
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>پوشه جدید</DropdownMenuItem>
              <DropdownMenuItem>دانلود انتخاب‌ها</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelected([])}>
                لغو انتخاب
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {chips.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Badge key={c} variant="secondary" className="gap-1 pe-1">
              {c}
              <button
                type="button"
                className="rounded-sm p-0.5 hover:bg-muted"
                onClick={() => setChips((prev) => prev.filter((x) => x !== c))}
                aria-label={`حذف ${c}`}
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[14rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">پوشه‌ها</p>
          <nav className="space-y-1">
            {FOLDERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFolder(f.id)}
                className={
                  folder === f.id
                    ? "flex w-full items-center justify-between rounded-md bg-background px-2 py-1.5 text-sm shadow-sm"
                    : "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                }
              >
                <span className="flex items-center gap-2">
                  <FolderIcon className="size-3.5 text-muted-foreground" />
                  {f.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{f.count}</bdi>
                </span>
              </button>
            ))}
          </nav>

          <Separator />

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "date")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="name">نام</SelectItem>
                <SelectItem value="date">تاریخ</SelectItem>
                <SelectItem value="size">اندازه</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full" />}
            >
              میانبر مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-40">
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort(v ?? "date")}
              >
                <DropdownMenuRadioItem value="name">نام</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date">تاریخ</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="size">اندازه</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Field>
            <FieldLabel htmlFor="fm5-email">اشتراک</FieldLabel>
            <Input
              id="fm5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>ایمیل گیرنده</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="fm5-hidden">فایل‌های مخفی</Label>
            <Switch id="fm5-hidden" />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در پوشه…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="folder">پوشه</SelectItem>
                <SelectItem value="file">فایل</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-2 border-b bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              <span className="w-4" />
              <span>نام</span>
              <span className="hidden w-20 text-end sm:block">اندازه</span>
              <span className="hidden w-24 text-end md:block">به‌روزرسانی</span>
              <span className="w-8" />
            </div>
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                موردی پیدا نشد
              </p>
            ) : (
              rows.map((item, i) => (
                <div key={item.id}>
                  {i > 0 && <Separator />}
                  <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-2 px-3 py-2.5">
                    <Checkbox
                      checked={selected.includes(item.id)}
                      onCheckedChange={(v) => toggle(item.id, Boolean(v))}
                      aria-label={`انتخاب ${item.name}`}
                    />
                    <div className="flex min-w-0 items-center gap-2">
                      {item.kind === "folder" ? (
                        <FolderIcon className="size-4 shrink-0 text-muted-foreground" />
                      ) : (
                        <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                      )}
                      <p className="truncate text-sm font-medium">
                        {item.kind === "file" ? (
                          <bdi dir="ltr">{item.name}</bdi>
                        ) : (
                          item.name
                        )}
                      </p>
                    </div>
                    <p className="hidden w-20 text-end text-xs text-muted-foreground sm:block">
                      {item.kind === "file" ? (
                        <bdi dir="ltr">{item.size}</bdi>
                      ) : (
                        item.size
                      )}
                    </p>
                    <p className="hidden w-24 text-end text-xs text-muted-foreground md:block">
                      {item.updated}
                    </p>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={<Button variant="ghost" size="icon-sm" />}
                      >
                        <MoreHorizontalIcon className="size-4" />
                        <span className="sr-only">عملیات</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent dir="rtl" lang="fa" align="start">
                        <DropdownMenuItem>باز کردن</DropdownMenuItem>
                        <DropdownMenuItem>اشتراک‌گذاری</DropdownMenuItem>
                        <DropdownMenuItem>دانلود</DropdownMenuItem>
                        <DropdownMenuItem>حذف</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
