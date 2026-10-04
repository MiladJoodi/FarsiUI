"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"

const CATEGORY_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "صوتی", label: "صوتی" },
  { value: "خانه", label: "خانه" },
  { value: "مد", label: "مد" },
] as const

const SORT_ITEMS = [
  { value: "جدیدترین", label: "جدیدترین" },
  { value: "نام", label: "نام" },
] as const

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    title: "هدفون بی‌سیم",
    tag: "صوتی",
    file: "headphones.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    title: "ساعت هوشمند",
    tag: "پوشیدنی",
    file: "watch.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    title: "کیف چرم",
    tag: "اکسسوری",
    file: "bag.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    title: "لامپ رومیزی",
    tag: "خانه",
    file: "lamp.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    title: "عینک آفتابی",
    tag: "مد",
    file: "glasses.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    title: "کفش اسپرت",
    tag: "پوشاک",
    file: "shoes.jpg",
  },
] as const

export default function ImageGalleryFilter() {
  const [category, setCategory] = React.useState("همه")
  const [sort, setSort] = React.useState("جدیدترین")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">گالری تصاویر</h2>
        <p className="mt-2 text-muted-foreground">
          فیلتر دسته و اشتراک با ایمیل LTR
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="جستجو در گالری…" dir="rtl" className="ps-8" />
        </div>
        <Select
          items={[...CATEGORY_ITEMS]}
          value={category}
          onValueChange={(value) => {
            if (CATEGORY_ITEMS.some((item) => item.value === value)) {
              setCategory(value as string)
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
            <SelectValue placeholder="دسته" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            {CATEGORY_ITEMS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          items={[...SORT_ITEMS]}
          value={sort}
          onValueChange={(value) => {
            if (SORT_ITEMS.some((item) => item.value === value)) {
              setSort(value as string)
            }
          }}
        >
          <SelectTrigger className="w-full sm:w-40" dir="rtl">
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
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((img) => (
          <article key={img.src} className="overflow-hidden rounded-xl border bg-card">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={img.src}
                alt={img.title}
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-1 p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium">{img.title}</p>
                <Badge variant="outline">{img.tag}</Badge>
              </div>
              <p className="truncate text-xs text-muted-foreground">
                <bdi dir="ltr">{img.file}</bdi>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-end">
        <Field className="flex-1">
          <FieldLabel htmlFor="ig3-email">اشتراک گالری</FieldLabel>
          <Input
            id="ig3-email"
            type="email"
            placeholder="name@example.com"
            dir="ltr"
            className="text-start"
          />
          <FieldDescription>لینک به این ایمیل ارسال می‌شود</FieldDescription>
        </Field>
        <Button className="sm:mb-5">ارسال لینک</Button>
      </div>
    </section>
  )
}
