"use client"

import * as React from "react"
import {
  DownloadIcon,
  FileIcon,
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
import { Progress } from "@/registry/bases/base/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

type Attachment = {
  id: string
  name: string
  size: string
  type: string
  status: "ready" | "uploading"
  progress?: number
  source: string
}

const SOURCES = [
  { id: "all", label: "همه", count: "۵" },
  { id: "ticket", label: "تیکت", count: "۲" },
  { id: "message", label: "پیام", count: "۲" },
  { id: "form", label: "فرم", count: "۱" },
] as const

const ITEMS: Attachment[] = [
  {
    id: "1",
    name: "invoice-1405.pdf",
    size: "1.2 MB",
    type: "PDF",
    status: "ready",
    source: "ticket",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "420 KB",
    type: "DOCX",
    status: "ready",
    source: "message",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "3.1 MB",
    type: "JPG",
    status: "uploading",
    progress: 54,
    source: "form",
  },
  {
    id: "4",
    name: "assets.zip",
    size: "18 MB",
    type: "ZIP",
    status: "ready",
    source: "ticket",
  },
  {
    id: "5",
    name: "notes.txt",
    size: "8 KB",
    type: "TXT",
    status: "ready",
    source: "message",
  },
]

export function AttachmentListHub() {
  const [source, setSource] = React.useState("all")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("newest")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["PDF"])

  const rows = ITEMS.filter((item) => {
    if (source !== "all" && item.source !== source) return false
    if (query && !item.name.toLowerCase().includes(query.toLowerCase()))
      return false
    return true
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
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            پیوست‌ها
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">پیوست‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            <bdi dir="ltr">{rows.length}</bdi> فایل ·{" "}
            <bdi dir="ltr">{selected.length}</bdi> انتخاب‌شده
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="gap-2">
            <UploadIcon className="size-3.5" />
            افزودن پیوست
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
              <MoreHorizontalIcon className="size-4" />
              بیشتر
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start">
              <DropdownMenuLabel>عملیات</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>دانلود انتخاب‌ها</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelected([])}>
                لغو انتخاب
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setChips([])}>
                پاک کردن فیلترها
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

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[13rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">منبع</p>
          <nav className="space-y-1">
            {SOURCES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSource(s.id)}
                className={
                  source === s.id
                    ? "flex w-full items-center justify-between rounded-md bg-background px-2 py-1.5 text-sm shadow-sm"
                    : "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                }
              >
                <span>{s.label}</span>
                <span className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{s.count}</bdi>
                </span>
              </button>
            ))}
          </nav>

          <Separator />

          <Field>
            <FieldLabel>مرتب‌سازی</FieldLabel>
            <Select
              value={sort}
              onValueChange={(v) => setSort((v as string) ?? "newest")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="name">نام</SelectItem>
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
            </DropdownMenuContent>
          </DropdownMenu>

          <Field>
            <FieldLabel htmlFor="al5-email">اطلاع‌رسانی</FieldLabel>
            <Input
              id="al5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>ایمیل گیرنده</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="al5-ready">فقط آماده‌ها</Label>
            <Switch id="al5-ready" defaultChecked />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در پیوست‌ها…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-32" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="image">تصویر</SelectItem>
                <SelectItem value="zip">آرشیو</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                پیوستی با این فیلتر نیست
              </p>
            ) : (
              rows.map((item, i) => (
                <div key={item.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-start gap-3 px-3 py-3">
                    <Checkbox
                      className="mt-1"
                      checked={selected.includes(item.id)}
                      onCheckedChange={(v) => toggle(item.id, Boolean(v))}
                      aria-label={`انتخاب ${item.name}`}
                    />
                    <FileIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="min-w-0 flex-1 truncate text-sm font-medium">
                          <bdi dir="ltr">{item.name}</bdi>
                        </p>
                        <Badge variant="outline">{item.type}</Badge>
                        <Badge
                          variant={
                            item.status === "ready" ? "secondary" : "outline"
                          }
                        >
                          {item.status === "ready" ? "آماده" : "در حال بارگذاری"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <bdi dir="ltr">{item.size}</bdi>
                        {" · "}
                        {
                          SOURCES.find((s) => s.id === item.source)?.label
                        }
                      </p>
                      {item.status === "uploading" && item.progress != null ? (
                        <div className="space-y-1">
                          <Progress value={item.progress} />
                          <p className="text-xs text-muted-foreground">
                            <bdi dir="ltr">{item.progress}%</bdi>
                          </p>
                        </div>
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
                        <DropdownMenuItem>کپی لینک</DropdownMenuItem>
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
