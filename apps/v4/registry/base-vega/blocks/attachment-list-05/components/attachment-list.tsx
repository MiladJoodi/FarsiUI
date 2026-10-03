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

import { cn } from "@/registry/base-vega/lib/utils"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import { Checkbox } from "@/registry/base-vega/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"
import { Label } from "@/registry/base-vega/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-vega/ui/popover"
import { Progress } from "@/registry/base-vega/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"
import { Switch } from "@/registry/base-vega/ui/switch"

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
  { id: "همه", label: "همه", count: "۵" },
  { id: "تیکت", label: "تیکت", count: "۲" },
  { id: "پیام", label: "پیام", count: "۲" },
  { id: "فرم", label: "فرم", count: "۱" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "PDF", label: "PDF" },
  { value: "تصویر", label: "تصویر" },
  { value: "آرشیو", label: "آرشیو" },
] as const

const ITEMS: Attachment[] = [
  {
    id: "1",
    name: "invoice-1405.pdf",
    size: "۱٫۲ مگابایت",
    type: "PDF",
    status: "ready",
    source: "تیکت",
  },
  {
    id: "2",
    name: "brief.docx",
    size: "۴۲۰ کیلوبایت",
    type: "DOCX",
    status: "ready",
    source: "پیام",
  },
  {
    id: "3",
    name: "photo-cover.jpg",
    size: "۳٫۱ مگابایت",
    type: "JPG",
    status: "uploading",
    progress: 54,
    source: "فرم",
  },
  {
    id: "4",
    name: "assets.zip",
    size: "۱۸ مگابایت",
    type: "ZIP",
    status: "ready",
    source: "تیکت",
  },
  {
    id: "5",
    name: "notes.txt",
    size: "۸ کیلوبایت",
    type: "TXT",
    status: "ready",
    source: "پیام",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function AttachmentListHub() {
  const [source, setSource] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("جدیدترین")
  const [type, setType] = React.useState("همه")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["PDF"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = ITEMS.filter((item) => {
    if (source !== "همه" && item.source !== source) return false
    if (type === "PDF" && item.type !== "PDF") return false
    if (type === "تصویر" && !["JPG", "PNG", "JPEG"].includes(item.type))
      return false
    if (type === "آرشیو" && item.type !== "ZIP") return false
    if (query && !item.name.toLowerCase().includes(query.toLowerCase()))
      return false
    return true
  })

  function toggle(id: string, on: boolean) {
    setSelected((prev) => (on ? [...prev, id] : prev.filter((x) => x !== id)))
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
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(rows.length)} فایل · {toFa(selected.length)} انتخاب‌شده
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="gap-2">
            <UploadIcon className="size-3.5" />
            افزودن پیوست
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
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => {
                  setChips([])
                  setHeaderOpen(false)
                }}
              >
                پاک کردن فیلترها
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
                <span className="text-xs tracking-normal text-muted-foreground">
                  {s.count}
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
            <Select
              items={[...TYPE_ITEMS]}
              value={type}
              onValueChange={(value) => {
                if (TYPE_ITEMS.some((item) => item.value === value)) {
                  setType(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-32" dir="rtl">
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
                          {item.status === "ready"
                            ? "آماده"
                            : "در حال بارگذاری"}
                        </Badge>
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {item.size}
                        {" · "}
                        {item.source}
                      </p>
                      {item.status === "uploading" && item.progress != null ? (
                        <div className="space-y-1">
                          <Progress value={item.progress} />
                          <p className="text-xs tracking-normal text-muted-foreground">
                            {toFa(item.progress)}٪
                          </p>
                        </div>
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
                        className="w-36 p-1"
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
                          کپی لینک
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
