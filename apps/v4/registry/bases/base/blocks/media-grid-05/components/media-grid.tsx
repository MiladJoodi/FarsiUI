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

type MediaItem = {
  id: string
  kind: "image" | "video" | "audio" | "file"
  title: string
  file: string
  size: string
  tag: string
  src?: string
}

const TYPES = [
  { id: "all", label: "همه", count: "۶" },
  { id: "image", label: "تصویر", count: "۲" },
  { id: "video", label: "ویدیو", count: "۲" },
  { id: "audio", label: "صوت", count: "۱" },
  { id: "file", label: "سند", count: "۱" },
] as const

const ITEMS: MediaItem[] = [
  {
    id: "1",
    kind: "image",
    title: "کاور محصول",
    file: "cover.jpg",
    size: "1.2 MB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    kind: "video",
    title: "معرفی کوتاه",
    file: "intro.mp4",
    size: "18 MB",
    tag: "ویدیو",
  },
  {
    id: "3",
    kind: "audio",
    title: "پادکست ۱",
    file: "ep-01.mp3",
    size: "8.4 MB",
    tag: "صوت",
  },
  {
    id: "4",
    kind: "file",
    title: "بروشور",
    file: "brochure.pdf",
    size: "640 KB",
    tag: "سند",
  },
  {
    id: "5",
    kind: "image",
    title: "بنر فروش",
    file: "banner.png",
    size: "890 KB",
    tag: "تصویر",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    kind: "video",
    title: "دمو محصول",
    file: "demo.webm",
    size: "24 MB",
    tag: "ویدیو",
  },
]

const ICONS = {
  image: ImageIcon,
  video: FilmIcon,
  audio: MusicIcon,
  file: FileIcon,
} as const

export function MediaGridHub() {
  const [type, setType] = React.useState("all")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("newest")
  const [selected, setSelected] = React.useState<string[]>(["1"])
  const [chips, setChips] = React.useState(["اخیر"])

  const rows = ITEMS.filter((item) => {
    if (type !== "all" && item.kind !== type) return false
    if (
      query &&
      !item.title.includes(query) &&
      !item.file.toLowerCase().includes(query.toLowerCase())
    )
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
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            کتابخانه رسانه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">فهرست رسانه‌ها</h2>
          <p className="mt-2 text-muted-foreground">
            <bdi dir="ltr">{rows.length}</bdi> مورد ·{" "}
            <bdi dir="ltr">{selected.length}</bdi> انتخاب‌شده · مسیر{" "}
            <bdi dir="ltr">/media/{type}</bdi>
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
                <span className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{t.count}</bdi>
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
            <Select defaultValue="grid">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نمایش" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="grid">شبکه</SelectItem>
                <SelectItem value="list">فهرست</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {rows.length === 0 ? (
            <p className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
              رسانه‌ای با این فیلتر نیست
            </p>
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
                          onCheckedChange={(v) =>
                            toggle(item.id, Boolean(v))
                          }
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
                        <p className="truncate text-xs text-muted-foreground">
                          <bdi dir="ltr">{item.file}</bdi>
                          {" · "}
                          <bdi dir="ltr">{item.size}</bdi>
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
                          <DropdownMenuItem>دانلود</DropdownMenuItem>
                          <DropdownMenuItem>جابه‌جایی</DropdownMenuItem>
                          <DropdownMenuItem>حذف</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
