"use client"

import * as React from "react"
import {
  MoreHorizontalIcon,
  SearchIcon,
  UploadIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
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

type ImageItem = {
  id: string
  src: string
  title: string
  file: string
  album: string
  tag: string
}

const ALBUMS = [
  { id: "all", label: "همه", count: "۶" },
  { id: "product", label: "محصولات", count: "۴" },
  { id: "lifestyle", label: "سبک زندگی", count: "۲" },
] as const

const IMAGES: ImageItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    title: "هدفون بی‌سیم",
    file: "headphones.jpg",
    album: "product",
    tag: "صوتی",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    title: "ساعت هوشمند",
    file: "watch.jpg",
    album: "product",
    tag: "پوشیدنی",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    title: "کیف چرم",
    file: "bag.jpg",
    album: "product",
    tag: "اکسسوری",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    title: "لامپ رومیزی",
    file: "lamp.jpg",
    album: "lifestyle",
    tag: "خانه",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    title: "عینک آفتابی",
    file: "glasses.jpg",
    album: "product",
    tag: "مد",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    title: "کفش اسپرت",
    file: "shoes.jpg",
    album: "lifestyle",
    tag: "پوشاک",
  },
]

export function ImageGalleryHub() {
  const [album, setAlbum] = React.useState("all")
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("newest")
  const [chips, setChips] = React.useState(["محصولات"])
  const [active, setActive] = React.useState<ImageItem | null>(null)

  const rows = IMAGES.filter((img) => {
    if (album !== "all" && img.album !== album) return false
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
          <p className="mt-2 text-muted-foreground">
            <bdi dir="ltr">{rows.length}</bdi> تصویر · مسیر{" "}
            <bdi dir="ltr">/gallery/{album}</bdi>
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
              <DropdownMenuItem>آلبوم جدید</DropdownMenuItem>
              <DropdownMenuItem>دانلود انتخاب‌ها</DropdownMenuItem>
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
                <span className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{a.count}</bdi>
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
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نوع" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="jpg">JPG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
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
                      <p className="truncate text-sm font-medium">{img.title}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        <bdi dir="ltr">{img.file}</bdi>
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
                        <DropdownMenuItem onClick={() => setActive(img)}>
                          پیش‌نمایش
                        </DropdownMenuItem>
                        <DropdownMenuItem>دانلود</DropdownMenuItem>
                        <DropdownMenuItem>جابه‌جایی آلبوم</DropdownMenuItem>
                        <DropdownMenuItem>حذف</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
