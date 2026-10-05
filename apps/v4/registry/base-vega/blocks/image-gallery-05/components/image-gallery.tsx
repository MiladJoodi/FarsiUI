"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon, UploadIcon, XIcon } from "lucide-react"

import { cn } from "@/registry/base-vega/lib/utils"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/base-vega/ui/dialog"
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

type ImageItem = {
  id: string
  src: string
  title: string
  file: string
  album: string
  tag: string
}

const ALBUMS = [
  { id: "همه", label: "همه", count: "۶" },
  { id: "محصولات", label: "محصولات", count: "۴" },
  { id: "سبک زندگی", label: "سبک زندگی", count: "۲" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
  { value: "اندازه", label: "اندازه" },
] as const

const TYPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "JPG", label: "JPG" },
  { value: "PNG", label: "PNG" },
] as const

const IMAGES: ImageItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    title: "هدفون بی‌سیم",
    file: "headphones.jpg",
    album: "محصولات",
    tag: "صوتی",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    title: "ساعت هوشمند",
    file: "watch.jpg",
    album: "محصولات",
    tag: "پوشیدنی",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    title: "کیف چرم",
    file: "bag.jpg",
    album: "محصولات",
    tag: "اکسسوری",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    title: "لامپ رومیزی",
    file: "lamp.jpg",
    album: "سبک زندگی",
    tag: "خانه",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    title: "عینک آفتابی",
    file: "glasses.jpg",
    album: "محصولات",
    tag: "مد",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    title: "کفش اسپرت",
    file: "shoes.jpg",
    album: "سبک زندگی",
    tag: "پوشاک",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function ImageGalleryHub() {
  const [album, setAlbum] = React.useState("همه")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("جدیدترین")
  const [type, setType] = React.useState("همه")
  const [chips, setChips] = React.useState(["محصولات"])
  const [active, setActive] = React.useState<ImageItem | null>(null)
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = IMAGES.filter((img) => {
    if (album !== "همه" && img.album !== album) return false
    if (type === "JPG" && !img.file.toLowerCase().endsWith(".jpg")) return false
    if (type === "PNG" && !img.file.toLowerCase().endsWith(".png")) return false
    if (query && !img.title.includes(query) && !img.file.includes(query))
      return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            رسانه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">گالری تصاویر</h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(rows.length)} تصویر · مسیر {album}
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
                آلبوم جدید
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
          <p className="text-sm font-medium">آلبوم‌ها</p>
          <nav className="space-y-1">
            {ALBUMS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAlbum(a.id)}
                className={
                  album === a.id
                    ? "flex w-full items-center justify-between rounded-md bg-background px-2 py-1.5 text-sm shadow-sm"
                    : "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                }
              >
                <span>{a.label}</span>
                <span className="text-xs tracking-normal text-muted-foreground">
                  {a.count}
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
            <FieldLabel htmlFor="ig5-email">اشتراک آلبوم</FieldLabel>
            <Input
              id="ig5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>ایمیل گیرنده</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="ig5-fav">فقط علاقه‌مندی‌ها</Label>
            <Switch id="ig5-fav" />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در تصاویر…"
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

          {rows.length === 0 ? (
            <p className="rounded-lg border p-10 text-center text-sm text-muted-foreground">
              تصویری در این آلبوم نیست
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {rows.map((img) => (
                <div
                  key={img.id}
                  className="overflow-hidden rounded-xl border bg-background"
                >
                  <button
                    type="button"
                    className="block w-full"
                    onClick={() => setActive(img)}
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="size-full object-cover"
                      />
                    </div>
                  </button>
                  <div className="flex items-center gap-2 p-2.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {img.title}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        <bdi dir="ltr">{img.file}</bdi>
                      </p>
                    </div>
                    <Popover
                      open={openId === img.id}
                      onOpenChange={(open) => setOpenId(open ? img.id : null)}
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
                          onClick={() => {
                            setActive(img)
                            setOpenId(null)
                          }}
                        >
                          پیش‌نمایش
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
                          جابه‌جایی آلبوم
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
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl" dir="rtl" lang="fa">
          <DialogHeader className="text-start">
            <DialogTitle>{active?.title}</DialogTitle>
            <DialogDescription>
              <bdi dir="ltr">{active?.file}</bdi>
              {active ? ` · ${active.tag}` : null}
            </DialogDescription>
          </DialogHeader>
          {active ? (
            <div className="overflow-hidden rounded-lg border bg-muted">
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[28rem] w-full object-contain"
              />
            </div>
          ) : null}
          <div className="flex gap-2">
            <Button className="flex-1">دانلود</Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setActive(null)}
            >
              بستن
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
