"use client"

import * as React from "react"
import {
  FileIcon,
  FilmIcon,
  ImageIcon,
  MoreHorizontalIcon,
  MusicIcon,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-vega/ui/select"
import { Separator } from "@/registry/base-vega/ui/separator"
import { Switch } from "@/registry/base-vega/ui/switch"

type Kind = "image" | "video" | "audio" | "file"

type MediaItem = {
  id: string
  kind: Kind
  title: string
  file: string
  size: string
  tag: string
  src?: string
}

const TYPES = [
  { id: "همه", label: "همه", kind: null as Kind | null, count: "۶" },
  { id: "تصویر", label: "تصویر", kind: "image" as Kind, count: "۲" },
  { id: "ویدیو", label: "ویدیو", kind: "video" as Kind, count: "۲" },
  { id: "صوت", label: "صوت", kind: "audio" as Kind, count: "۱" },
  { id: "سند", label: "سند", kind: "file" as Kind, count: "۱" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
] as const

const VIEW_ITEMS = [
  { value: "شبکه", label: "شبکه" },
  { value: "فهرست", label: "فهرست" },
] as const

const ITEMS: MediaItem[] = [
  {
    id: "1",
    kind: "image",
    title: "کاور محصول",
    file: "cover.jpg",
    size: "۱٫۲ مگابایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    kind: "video",
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "۱۸ مگابایت",
    tag: "ویدیو",
  },
  {
    id: "3",
    kind: "audio",
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "۸٫۴ مگابایت",
    tag: "صوت",
  },
  {
    id: "4",
    kind: "file",
    title: "بروشور",
    file: "brochure.pdf",
    size: "۶۴۰ کیلوبایت",
    tag: "سند",
  },
  {
    id: "5",
    kind: "image",
    title: "بنر فروش",
    file: "banner.png",
    size: "۸۹۰ کیلوبایت",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    kind: "video",
    title: "دمو محصول",
    file: "demo.webm",
    size: "۲۴ مگابایت",
    tag: "ویدیو",
  },
]

const ICONS = {
  image: ImageIcon,
  video: FilmIcon,
  audio: MusicIcon,
  file: FileIcon,
} as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function MediaGridHub() {
  const [type, setType] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("جدیدترین")
  const [view, setView] = React.useState("شبکه")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["اخیر"])
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const activeType = TYPES.find((t) => t.id === type)

  const rows = ITEMS.filter((item) => {
    if (activeType?.kind && item.kind !== activeType.kind) return false
    if (
      query &&
      !item.title.includes(query) &&
      !item.file.toLowerCase().includes(query.toLowerCase())
    )
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
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            کتابخانه رسانه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(rows.length)} مورد · {toFa(selected.length)} انتخاب‌شده · مسیر{" "}
            {type}
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
          <p className="text-sm font-medium">نوع رسانه</p>
          <nav className="space-y-1">
            {TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                className={
                  type === t.id
                    ? "flex w-full items-center justify-between rounded-md bg-background px-2 py-1.5 text-sm shadow-sm"
                    : "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                }
              >
                <span>{t.label}</span>
                <span className="text-xs tracking-normal text-muted-foreground">
                  {t.count}
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
            <FieldLabel htmlFor="mg5-email">اشتراک</FieldLabel>
            <Input
              id="mg5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>ایمیل گیرنده</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="mg5-star">فقط ستاره‌دار</Label>
            <Switch id="mg5-star" />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در رسانه‌ها…"
                dir="rtl"
                className="ps-8"
              />
            </div>
            <Select
              items={[...VIEW_ITEMS]}
              value={view}
              onValueChange={(value) => {
                if (VIEW_ITEMS.some((item) => item.value === value)) {
                  setView(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نمایش" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {VIEW_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {rows.length === 0 ? (
            <p className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
              رسانه‌ای با این فیلتر نیست
            </p>
          ) : view === "فهرست" ? (
            <div className="overflow-hidden rounded-lg border">
              {rows.map((item, i) => {
                const Icon = ICONS[item.kind]
                return (
                  <div key={item.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-3 py-2.5">
                      <Checkbox
                        checked={selected.includes(item.id)}
                        onCheckedChange={(v) => toggle(item.id, Boolean(v))}
                        aria-label={`انتخاب ${item.title}`}
                      />
                      <Icon className="size-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {item.title}
                        </p>
                        <p className="truncate text-xs tracking-normal text-muted-foreground">
                          <bdi dir="ltr">{item.file}</bdi>
                          {" · "}
                          {item.size}
                        </p>
                      </div>
                      <Badge variant="outline">{item.tag}</Badge>
                      <Popover
                        open={openId === item.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? item.id : null)
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
                            جابه‌جایی
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
                )
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {rows.map((item) => {
                const Icon = ICONS[item.kind]
                return (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-xl border bg-background"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      {item.src ? (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="size-full object-cover"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center">
                          <Icon className="size-8 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute start-2 top-2">
                        <Checkbox
                          checked={selected.includes(item.id)}
                          onCheckedChange={(v) => toggle(item.id, Boolean(v))}
                          aria-label={`انتخاب ${item.title}`}
                          className="border-background bg-background/80"
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        className="absolute end-2 top-2"
                      >
                        {item.tag}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 p-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {item.title}
                        </p>
                        <p className="truncate text-xs tracking-normal text-muted-foreground">
                          <bdi dir="ltr">{item.file}</bdi>
                          {" · "}
                          {item.size}
                        </p>
                      </div>
                      <Popover
                        open={openId === item.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? item.id : null)
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
                            جابه‌جایی
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
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
