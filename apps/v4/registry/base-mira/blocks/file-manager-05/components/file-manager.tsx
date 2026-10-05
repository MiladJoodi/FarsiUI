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

import { cn } from "@/registry/base-mira/lib/utils"
import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import { Checkbox } from "@/registry/base-mira/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-mira/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

type Item = {
  id: string
  kind: "folder" | "file"
  name: string
  size: string
  updated: string
}

const FOLDERS = [
  { id: "اسناد", label: "اسناد", count: "۲۴" },
  { id: "تصاویر", label: "تصاویر", count: "۵۸" },
  { id: "آرشیو", label: "آرشیو", count: "۱۱" },
  { id: "اشتراکی", label: "اشتراکی", count: "۷" },
] as const

const SORT_ITEMS = [
  { value: "نام", label: "نام" },
  { value: "تاریخ", label: "تاریخ" },
  { value: "اندازه", label: "اندازه" },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "پوشه", label: "پوشه" },
  { value: "فایل", label: "فایل" },
] as const

const FILES: Item[] = [
  {
    id: "1",
    kind: "folder",
    name: "فصل اول",
    size: "—",
    updated: "دیروز",
  },
  {
    id: "2",
    kind: "file",
    name: "proposal.pdf",
    size: "۱٫۸ مگابایت",
    updated: "۲ ساعت پیش",
  },
  {
    id: "3",
    kind: "file",
    name: "sheet.xlsx",
    size: "۶۴۰ کیلوبایت",
    updated: "۳ روز پیش",
  },
  {
    id: "4",
    kind: "file",
    name: "cover.png",
    size: "۲٫۲ مگابایت",
    updated: "هفتهٔ پیش",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function FileManagerHub() {
  const [folder, setFolder] = React.useState("اسناد")
  const [sort, setSort] = React.useState("تاریخ")
  const [type, setType] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [selected, setSelected] = React.useState<string[]>(["2"])
  const [chips, setChips] = React.useState(["PDF", "اخیر"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = FILES.filter((f) => {
    if (type === "پوشه" && f.kind !== "folder") return false
    if (type === "فایل" && f.kind !== "file") return false
    if (!query) return true
    return (
      f.name.includes(query) ||
      f.name.toLowerCase().includes(query.toLowerCase())
    )
  })

  function toggle(id: string, on: boolean) {
    setSelected((prev) => (on ? [...prev, id] : prev.filter((x) => x !== id)))
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            مسیر {folder} · {toFa(selected.length)} انتخاب‌شده
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="gap-2">
            <UploadIcon className="size-3.5" />
            بارگذاری
          </Button>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={<Button type="button" variant="outline" size="sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              بیشتر
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
                onClick={() => setHeaderOpen(false)}
              >
                پوشه جدید
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                دانلود انتخاب‌ها
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => {
                  setSelected([])
                  setHeaderOpen(false)
                }}
              >
                لغو انتخاب
              </Button>
            </PopoverContent>
          </Popover>
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
                <span className="text-xs tracking-normal text-muted-foreground">
                  {f.count}
                </span>
              </button>
            ))}
          </nav>

          <Separator />

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              items={[...SORT_ITEMS]}
              value={sort}
              onValueChange={(value) => {
                if (SORT_ITEMS.some((item) => item.value === value)) {
                  setSort(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SORT_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Popover open={sortOpen} onOpenChange={setSortOpen}>
            <PopoverTrigger
              render={
                <Button type="button" variant="outline" className="w-full" />
              }
            >
              میانبر مرتب‌سازی
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-40 p-1"
            >
              {SORT_ITEMS.map((opt) => (
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
                    setSortOpen(false)
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </PopoverContent>
          </Popover>

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
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {TYPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-2 border-b bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              <span className="w-4" />
              <span>نام</span>
              <span className="hidden w-24 text-end sm:block">اندازه</span>
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
                    <p className="hidden w-24 text-end text-xs tracking-normal text-muted-foreground sm:block">
                      {item.size}
                    </p>
                    <p className="hidden w-24 text-end text-xs text-muted-foreground md:block">
                      {item.updated}
                    </p>
                    <Popover
                      open={openId === item.id}
                      onOpenChange={(open) => setOpenId(open ? item.id : null)}
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
                          اشتراک‌گذاری
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
                          حذف
                        </Button>
                      </PopoverContent>
                    </Popover>
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
