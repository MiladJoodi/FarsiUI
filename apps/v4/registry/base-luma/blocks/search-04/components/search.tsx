"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  ComponentIcon,
  FileTextIcon,
  LayoutIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Input } from "@/registry/base-luma/ui/input"
import { Kbd } from "@/registry/base-luma/ui/kbd"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"

const HITS = [
  {
    id: "1",
    title: "دکمه",
    path: "components/button",
    type: "کامپوننت",
    icon: ComponentIcon,
  },
  {
    id: "2",
    title: "فرم ورود",
    path: "blocks/login",
    type: "بلوک",
    icon: LayoutIcon,
  },
  {
    id: "3",
    title: "راهنمای راست‌چین",
    path: "docs/rtl",
    type: "مستند",
    icon: FileTextIcon,
  },
] as const

const SCOPE_ITEMS = [
  { value: "همه", label: "همه" },
  { value: "کامپوننت", label: "کامپوننت" },
  { value: "بلوک", label: "بلوک" },
  { value: "مستند", label: "مستند" },
] as const

export default function SearchCommand() {
  const [query, setQuery] = React.useState("")
  const [scope, setScope] = React.useState("همه")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const rows = HITS.filter((h) => {
    if (scope !== "همه" && h.type !== scope) return false
    if (query && !`${h.title}${h.path}`.includes(query)) return false
    return true
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="overflow-hidden bg-card">
        <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 border-b py-3 text-start">
          <div>
            <CardTitle className="text-base">جستجوی سریع</CardTitle>
            <CardDescription className="flex items-center gap-1.5">
              میانبر <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </CardDescription>
          </div>
          <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
            <PopoverTrigger
              render={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                />
              }
            >
              <MoreHorizontalIcon className="size-4" />
              عملیات
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-44 space-y-1 p-2"
            >
              <p className="px-2 py-1.5 text-sm font-medium">گزینه‌ها</p>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                پاک کردن تاریخچه
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-full justify-start"
                onClick={() => setHeaderOpen(false)}
              >
                تنظیمات جستجو
              </Button>
            </PopoverContent>
          </Popover>
        </CardHeader>
        <CardContent className="space-y-3 p-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو کامپوننت، بلوک یا مستند…"
                className="ps-9"
                dir="rtl"
                autoFocus
              />
            </div>
            <Select
              items={[...SCOPE_ITEMS]}
              value={scope}
              onValueChange={(value) => {
                if (SCOPE_ITEMS.some((item) => item.value === value)) {
                  setScope(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-32" dir="rtl">
                <SelectValue placeholder="محدوده" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {SCOPE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {rows.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                نتیجه‌ای نیست
              </p>
            ) : (
              rows.map((hit, i) => {
                const Icon = hit.icon
                return (
                  <div key={hit.id}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex size-8 items-center justify-center rounded-md border bg-muted">
                        <Icon className="size-3.5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {hit.title}
                        </p>
                        <p className="truncate text-xs tracking-normal text-muted-foreground">
                          <span dir="ltr" className="inline-block text-start">
                            {hit.path}
                          </span>
                        </p>
                      </div>
                      <Badge variant="outline" className="border">
                        {hit.type}
                      </Badge>
                      <Popover
                        open={openId === hit.id}
                        onOpenChange={(open) => setOpenId(open ? hit.id : null)}
                      >
                        <PopoverTrigger
                          render={
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="shrink-0"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          عملیات
                        </PopoverTrigger>
                        <PopoverContent
                          dir="rtl"
                          lang="fa"
                          align="start"
                          className="w-40 space-y-1 p-2"
                        >
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            <ArrowUpRightIcon className="size-4" />
                            باز کردن
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            کپی مسیر
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
